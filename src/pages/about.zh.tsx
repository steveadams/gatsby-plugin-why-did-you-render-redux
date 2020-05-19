/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

import Controller from '../components/Controller';
import DomainResults from '../components/DomainResults';
import Page from '../components/Page';
import TwoColumnLayout from '../components/TwoColumnLayout';
import beauImage from '../images/beau.jpg';
import * as routes from '../routes';

export default (props: PageProps) => (
  <Page {...props} title="关于立即域名搜索" description="即时域搜索简史。">
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <TwoColumnLayout>
        <>
          <h1>关于立即域名搜索</h1>
          <p>
            在加入 Y Combinator 在哈佛大学的首次创业学院后，我于 2005
            年建立了立即域名搜索。演讲那天过后，我渴望创业。我有一些想法，却为 WHOIS
            查询的缓慢速度以及找寻一个好域名的困难程度而感到沮丧。
          </p>
          <p>
            原来，VeriSign 每晚都会在一个巨大的区域文件里发布
            <a href="http://www.verisigninc.com/en_US/channel-resources/domain-registry-products/zone-file-information/index.xhtml">
              一份域名表
            </a>
            。一旦我将区域访问协议传真回
            VeriSign，他们就会向我提供该区域文件的访问权。我有一个设有脚本的专用服务器，可以用 MySQL 将数百万的 .com
            域名编入索引。
          </p>
          <p>
            我惊讶于首个版本的速度便如此之快。一旦让 JavaScript、PHP 和 MySQL
            平稳运行，我立刻在创业学院维基网站上发布了本网站的首个版本。不久之后，我收到一封来自保罗·格雷厄姆的电子邮件，他邀请我将其应用到
            Y Combinator。迈克尔·阿灵顿注意到了本网站，并于 2005 年 11 月将其公布到 TechCrunch。
          </p>
          <p>
            我在 2006 年收到来自 Y Combinator 的资金并且创建了一款名叫 Snipshot 的在线图片编辑器。我在 2009 年加入
            Facebook 任工程师，在高强度地工作四年后，于 2013 年离职负责其他项目。
          </p>
        </>
        <>
          <p>立即域名搜索是在2005年创建于博·哈茨霍恩(Beau Hartshorne)。</p>
          <p>
            <img src={beauImage} width="216" height="299" alt="Beau Hartshorne" />
          </p>

          <h4 style={{marginBottom: 0}}>Contact</h4>
          <ul>
            <li>
              <a href="https://www.facebook.com/beau">facebook.com/beau</a>
            </li>
            <li>
              <a href="https://www.twitter.com/hartshorne">@hartshorne</a>
            </li>
            <li>
              <a href="https://hartshorne.ca/">https://hartshorne.ca</a>
            </li>
            <li>
              <a href="mailto:beau@hartshorne.ca">beau@hartshorne.ca</a>
            </li>
            <li>+1 778 949-5055</li>
          </ul>

          <h4 style={{marginBottom: 0}}>Instant Domain Search, Inc.</h4>
          <p style={{lineHeight: '1.5em'}}>
            10796 Madrona Drive
            <br />
            North Saanich, BC &nbsp; V8L 5M7
            <br />
            Canada
          </p>
        </>
      </TwoColumnLayout>
    </Controller>
  </Page>
);
