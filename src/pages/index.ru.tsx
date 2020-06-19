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
    description="Поиск доменных имен прямо в процессе набора названия. Ищите по доменам .com и другим доменам верхнего уровня в реальном времени. Также сразу же показываются похожие домены и домены на продажу."
    title="Доменные имена | Мгновенный поиск и предложения доменов">
    <Alternates />
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <TwoColumnLayout>
        <>
          <h1>Результаты поиска доменного имени отображаются уже при его вводе</h1>

          <p>
            <strong>Просто начните вводить имя!</strong> Если доменное имя, которое вы ищете, уже занято, вы можете
            нажать WHOIS, чтобы узнать, кто его зарегистрировал, или получить ссылку на этот веб-сайт.
          </p>

          <p>
            Мы применяем купон <strong>для доменных имен .com</strong>, которые вы покупаете в GoDaddy. Это предложение
            действительно только для одной покупки .com, и не включает в себя плату ICANN в размере 0,18$ за доменное
            имя в год. Это отличное предложение!
          </p>

          <p style={{fontSize: '1.1em'}}>
            <strong>Нравится этот сайт?</strong> Расскажите о нем в{' '}
            <a href="https://twitter.com/instantdomain" onClick={() => event('outbound', 'click', 'twitter')}>
              Twitter
            </a>{' '}
            и на{' '}
            <a
              href="https://www.facebook.com/InstantDomainSearch"
              onClick={() => event('outbound', 'click', 'facebook')}>
              Facebook
            </a>
            !
          </p>

          <p>
            Все поиски доменов зашифрованы по https, и при поиске вы не покидаете наши серверы. Результаты вашего поиска
            не записываются. Нажатие кнопки "Войти" или "Назад" перенесет вас непосредственно на GoDaddy или сайт
            регистратора, которого вы выбрали для покупки вашего доменного имени. Удачи вам!
          </p>
        </>
        <>
          <h4>Актуальные статьи</h4>
          <Articles data={data} />

          <h4>Поддержка Punycode</h4>

          <p>
            Вы можете найти Unicode-домены, такие как <a href="#search=域名搜索">域名搜索.com</a> или{' '}
            <a href="#search=sí">sí.com</a>. Мы делаем это, конвертируя ваш поиск в{' '}
            <a href="https://ru.wikipedia.org/wiki/Punycode">Punycode</a>.
          </p>
        </>
      </TwoColumnLayout>
    </Controller>
  </Page>
);

/* eslint-disable */
export const query = graphql`
  query($lang: String = "ru") {
    ...ArticlesFragment
  }
`;
/* eslint-enable */
