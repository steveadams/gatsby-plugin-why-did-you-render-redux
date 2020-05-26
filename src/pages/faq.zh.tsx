/* Copyright 2005-present Instant Domain Search, Inc. */

import {Link} from 'gatsby';
import * as React from 'react';

import Controller from '../components/Controller';
import DomainResults from '../components/DomainResults';
import Page from '../components/Page';
import TwoColumnLayout from '../components/TwoColumnLayout';
import * as routes from '../routes';

const context = React.createContext(false);

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^\w]+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

function Question({children}: {children: string}) {
  const toc = React.useContext(context);
  return toc ? (
    <li>
      <a href={`#${slugify(children)}`}>{children}</a>
    </li>
  ) : (
    <h3 id={slugify(children)}>{children}</h3>
  );
}

function Answer({children}: {children: JSX.Element | JSX.Element[]}) {
  const toc = React.useContext(context);
  if (toc) return null;
  return children as JSX.Element;
}

function FAQ({toc = false}: {toc?: boolean}) {
  return (
    <context.Provider value={toc}>
      <Question>立即域名搜索怎样运作？</Question>
      <Answer>
        <p>
          每一晚我们从VeriSign和其他通用顶级域名供应商那下载庞大列表的已注册域名。几乎所有在使用中的域名是包含在这些列表内，称为区域文件。我们索引区域文件，并在全球的数据中心内保管索引。
        </p>

        <p>
          当你首次访问我们的网站，我们会确定我们的哪些服务器最接近你，并且从你的浏览器到我们的服务器配置一个安全的链接。当你输入时，我们搜索我们的索引以获得准确的匹配，并且也提供你可能也有兴趣购买的有用建议。
        </p>

        <p>
          这个网站是托管在<a href="https://cloud.google.com/">Google Cloud Platform</a>上。
        </p>
      </Answer>
      <Question>我找的名字在你们的网站上显示为可以用，但它实际上不是。为什么？</Question>
      <Answer>
        <p>
          有时当域名已经被拿掉了，我们将列域名为可用。这个可以发生当： * 名字的所有权是有争议的。 * 它将要到期。 *
          它是在“赎回期”也就是，它最近到期了。 * 该域名没有域名服务器。
        </p>

        <p>
          换句话说，当一个域名事实上是可用的时，我们绝不应该报告域名为已拿掉的。只有当它们是在良好的状态并有相关的域名服务器，我们才显示名字为已拿掉的。
        </p>
      </Answer>
      <Question>立即域名搜索是怎样赢利？</Question>
      <Answer>
        <p>当你通过我们链接的注册员之一购买域名时，我们就能赢利。这些介绍费会维持该网站的运作。</p>
      </Answer>
      <Question>你怎样选项一个好域名？</Question>
      <Answer>
        <p>
          阅读我们文章<Link to="/articles/choosing-a-domain-name/">掌控你的域名：选择一个域名</Link>。
        </p>
      </Answer>
      <Question>某人窃取了我在你们网站上找到的一个域名。我可以怎样解决这个问题？</Question>
      <Answer>
        <p>
          这可能是个巧合，每一天有无数的域名注册和过期。请记录你的搜索日期和时间。然后将它与那个域名注册的真实日期和时间进行对比。我们重视你的
          <a href="#section-5">隐私</a>。
        </p>

        <p>
          你可以通过是谁(WHOIS)记录得到域名的日期。该记录也将为你显示哪个ICANN注册员注册了这个域名。对于找出域名注册的确切时间，找到注册员的联系信息，并给他们拨打电话或电邮他们。记得询问他们给你注册的时间的时区。
        </p>

        <p>
          如果注册时间与你搜索那个域名的时间接近，请电邮我们在
          <a href="mailto:help@instantdomainsearch.com">help@instantdomainsearch.com</a>
          附带域名和你在我们网站上搜索它的时间。我们非常重视这些问题。
        </p>
      </Answer>
      <Question>有关于我的搜索结果，你们的隐私政策是什么？</Question>
      <Answer>
        <p>
          我们对保密你的搜索结果很重视。当某人通过一个我们列入的提供商在我们的网站上找到一个域名并购买时，我们就盈利了。我们没有域名转售业务。那是为什么我遵守以下的规则：
        </p>

        <ul>
          <li>绝不会分享或散布你的搜索。我们不联系任何第三方来核实域名是否可用。</li>
          <li>我们的服务不对你搜索的域名执行WHOIS的请求。</li>
        </ul>

        <p>
          我们努力选择产业中最好的供应商，但一旦你从我们的网站点击他们的链接，我们不能负责他们使用或误用你的域名搜索。
        </p>

        <p>立即域名搜索现在通过默认使用HTTPS加密你的所有搜索以防止其他人在你的网络上查看你的搜索。</p>
      </Answer>
      <Question>其他人是怎样评论立即域名搜索？</Question>
      <Answer>
        <p>
          <a href="https://adage.com/article/the-media-guy/media-guy-s-pop-pick-instant-domain-search/114445/">
            Advertising Age
          </a>
          : “一个很棒，实时的品牌名创建平台。”
        </p>
      </Answer>
    </context.Provider>
  );
}

export default (props: PageProps) => (
  <Page {...props} description="有关立即域名搜索的常见问题和隐私信息。" title="常见问题">
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <TwoColumnLayout>
        <>
          <h1>常见问题</h1>
          <FAQ />
        </>
        <>
          <h4>常见问题索引</h4>
          <ul className="index">
            <FAQ toc />
          </ul>
        </>
      </TwoColumnLayout>
    </Controller>
  </Page>
);
