/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

import Controller from '../components/Controller';
import DomainResults from '../components/DomainResults';
import Page from '../components/Page';
import TwoColumnLayout from '../components/TwoColumnLayout';
import * as routes from '../routes';

export default (props: PageProps) => (
  <Page {...props} title="域名微件" description="你可以在你的网站上或你的苹果电脑仪表板上安装的域名微件。">
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <TwoColumnLayout>
        <>
          <h1>域名微件</h1>
          <p>
            通过复制以下代码并粘贴它在你的网页的HTML中，你可以在你的网站上的任何位置安装这个免费的336x280分辨率立即域名搜索微件：
          </p>
          <pre>
            <code>{`<iframe
  style="width: 336px; height: 280px; overflow: hidden;"
  frameborder="0"
  scrolling="no"
  src="https://instantdomainsearch.com/widget/liquid/">
  <a href="https://instantdomainsearch.com/">立即域名搜索</a>
</iframe>`}</code>
          </pre>
        </>
        <></>
      </TwoColumnLayout>
    </Controller>
  </Page>
);
