/* Copyright 2005-present Instant Domain Search, Inc. */

import {graphql} from 'gatsby';
import * as React from 'react';

import {event} from '../analytics';
import Alternates from '../components/Alternates';
import Articles, {ArticlesData} from '../components/Articles';
import Controller from '../components/Controller';
import DomainResults from '../components/DomainResults';
import Page from '../components/Page';
import TwoColumnLayout from '../components/TwoColumnLayout';
import * as routes from '../routes';

export default ({data, ...props}: PageProps & ArticlesData) => (
  <Page
    {...props}
    description="当你输入时，可立即地找到域名。实时搜索.com和其它扩展。出售的建议和名字也会立即显示。"
    title="域名搜索 | 立即域名搜索和建议">
    <Alternates />
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <TwoColumnLayout>
        <>
          <h1>当你输入时，你可看到域名搜索结果</h1>

          <p>
            <strong>只需开始输入!</strong>
            如果有人已经拥有了你在找的域名，你可以点击是谁（WHOIS）以找出谁注册了它或使用URL访问那个网站。
          </p>

          <p>
            当你在GoDaddy购买时，我们对<strong>.com的域名</strong>应用一个
            优惠券。该提供只对一个.com购买有效，并且不包含每年每域名的 $0.18分配机构（ICANN）费 。那是个很棒的购买！
          </p>

          <p style={{fontSize: '1.1em'}}>
            <strong>喜欢这个网站？</strong>在
            <a href="https://twitter.com/instantdomain" onClick={() => event('outbound', 'click', 'twitter')}>
              Twitter
            </a>
            和
            <a
              href="https://www.facebook.com/InstantDomainSearch"
              onClick={() => event('outbound', 'click', 'facebook')}>
              Facebook
            </a>
            上告诉其他人!
          </p>

          <p>
            所有域名搜索是通过安全超文本传输协议（https)
            加密，而且搜索不会离开我们的服务器。我们不记录你的搜索结果。按下进入或返回将直接带你到你已选择的GoDaddy或登记员，在那里你可以购买你的域名。祝你好运！
          </p>
        </>
        <>
          <h4>专题文章</h4>
          <Articles data={data} />

          <h4>Punycode支持</h4>
          <p>
            你可以找到Unicode编码域名比如<a href="#search=域名搜索">域名搜索.com</a>或<a href="#search=sí">sí.com</a>
            。我们通过转换你的搜索到<a href="https://en.wikipedia.org/wiki/Punycode">Punycode</a>码以实现它。
          </p>
        </>
      </TwoColumnLayout>
    </Controller>
  </Page>
);

/* eslint-disable */
export const query = graphql`
  query($lang: String = "fr") {
    ...ArticlesFragment
  }
`;
/* eslint-enable */
