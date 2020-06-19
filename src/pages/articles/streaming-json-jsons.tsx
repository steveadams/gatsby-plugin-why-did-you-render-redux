/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

import Article from '../../components/Article';
import Highlighter from '../../components/Highlighter';

export const frontmatter = {
  title: 'JSON Streaming: JSONS',
  headline: 'Use streaming JSON to speed up your website',
  description: 'Streaming JSON speeds up dynamic content, especially for mobile users',
  date: '2017-02-16',
  authors: [{name: 'Beau Hartshorne', link: 'mailto:hartshorne@gmail.com'}],
};

export default (props: PageProps) => (
  <Article {...props} frontmatter={frontmatter}>
    <p>
      <a href="https://en.wikipedia.org/wiki/JSON_Streaming">JSON streaming</a>—or JSONS—is a simple technique we use to
      decrease search latency for users, particularly anyone on a slow connection. You’ll see the most improvement for
      mobile users on HTTPS connections. You don’t need complicated JSON parsers. Just send line-delimited JSON. The
      Twitter <a href="https://dev.twitter.com/streaming/overview/processing">streaming API</a> has worked like this for
      years.
    </p>

    <p>
      Our social username checker offers a simple example of how this works. (Click on the ··· button to see these
      results.) We check to see if your search is available on Facebook, Twitter, and Pinterest by doing an HTTP HEAD
      request for the name at each site. The results come in random order, and we want to show them as fast as possible.
      We could work around this by sending three HTTPS requests, but that means three TCP connections, three SSL
      handshakes, and so on. We avoid this—and probably recycle an existing HTTPS connection—if we send just one
      request:
    </p>

    <Highlighter code="https://instantdomainsearch.com/services/vanity/apple?hash=866016287" language="bash" />

    <p>
      The streaming response is analogous to—and relies on—HTTP{' '}
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding">
        chunked transfer encoding.
      </a>{' '}
      The best way to see how this works is to trace the connection with curl:
    </p>

    <Highlighter
      code={`
curl --trace - "https://instantdomainsearch.com/services/vanity/apple?hash=866016287"
…
<= Recv data, 45 bytes (0x2d)
0000: 32 37 0d 0a 7b 22 54 79 70 65 22 3a 22 54 77 69 27..{"Type":"Twi
0010: 74 74 65 72 22 2c 22 49 73 52 65 67 69 73 74 65 tter","IsRegiste
0020: 72 65 64 22 3a 74 72 75 65 7d 0a 0d 0a          red":true}...
{"Type":"Twitter","IsRegistered":true}
<= Recv data, 46 bytes (0x2e)
0000: 32 38 0d 0a 7b 22 54 79 70 65 22 3a 22 46 61 63 28..{"Type":"Fac
0010: 65 62 6f 6f 6b 22 2c 22 49 73 52 65 67 69 73 74 ebook","IsRegist
0020: 65 72 65 64 22 3a 74 72 75 65 7d 0a 0d 0a       ered":true}...
{"Type":"Facebook","IsRegistered":true}
<= Recv data, 52 bytes (0x34)
0000: 32 39 0d 0a 7b 22 54 79 70 65 22 3a 22 50 69 6e 29..{"Type":"Pin
0010: 74 65 72 65 73 74 22 2c 22 49 73 52 65 67 69 73 terest","IsRegis
0020: 74 65 72 65 64 22 3a 74 72 75 65 7d 0a 0d 0a 30 tered":true}...0
0030: 0d 0a 0d 0a                                     ....
{"Type":"Pinterest","IsRegistered":true}
== Info: Curl_http_done: called premature == 0
== Info: Connection #0 to host instantdomainsearch.com left intact
`}
      language="bash"
    />

    <p>
      You may encounter nerd dogma that each endpoint should return one and only one object. Or that pretty-printed JSON
      may contain newlines, and what you really need is a streaming parser. Ignore them. Parsing responses is as simple
      as splitting on newline. The <a href="https://github.com/eBay/jsonpipe">jsonpipe</a> library is a good starting
      point for your client code.
    </p>

    <p>
      A great way to see what this means for a mobile user is to use{' '}
      <a href="http://useyourloaf.com/blog/remote-packet-capture-for-ios-devices/">rvictl on a Mac</a> to observe how a
      real cell radio on a real cell network actually talks to your server. One HTTPS connection on my 2-bar Verizon 3G
      connection looks like this—the first column is time in seconds:
    </p>

    <Highlighter
      code={`0.000000  DNS  69  Standard query 0x5622 A instantdomainsearch.com
2.573090  DNS  85  Standard query response 0x5622 A instantdomainsearch.com A 130.211.25.142
`}
      language="bash"
    />

    <p>
      Wait, the DNS query took 2.5 seconds to resolve? Wow. Maybe the 3G modem was in{' '}
      <a href="https://www.stevesouders.com/blog/2011/09/21/making-a-mobile-connection/">sleep mode.</a> We can finally
      establish the TCP connection:
    </p>

    <Highlighter
      code={`2.573822  TCP  64  57709 → 443 [SYN] Seq=0 Win=65535 Len=0 MSS=1388 WS=64 TSval=727045548 TSecr=0 SACK_PERM=1
2.574404  TCP  60  443 → 57709 [SYN, ACK] Seq=0 Ack=1 Win=42540 Len=0 MSS=1430 SACK_PERM=1 TSval=2852312183 TSecr=727045548 WS=128
`}
      language="bash"
    />

    <p>And begin the SSL/TLS dance:</p>

    <Highlighter
      code={`2.575790  TLSv1.2  285  Client Hello
3.582868  TLSv1.2  1428  [TCP Fast Retransmission] Server Hello
3.585061  TLSv1.2  127  Client Key Exchange
3.585771  TLSv1.2  58  Change Cipher Spec
3.586415  TLSv1.2  97  Encrypted Handshake Message
3.587729  TLSv1.2  103  Change Cipher Spec, Hello Request, Hello Request
`}
      language="bash"
    />

    <p>Hello! From here, 3.5 seconds later, we’re finally sending/receiving encrypted application data.</p>

    <p>
      Each keystroke on Instant Domain Search queries several data structures to get availability results, marketplace
      results, suggestions, and so on. We noticed huge performance gains for users once we stopped trying to establish
      so many HTTPS connections on each keystroke and instead streamed the results back on one connection per query. You
      can see how that translates into far fewer packets jamming the user’s network connection. For the record, we did
      try using a web socket but found that per-query HTTPS connections were the most reliable way to deliver fast
      results to our users.
    </p>
  </Article>
);
