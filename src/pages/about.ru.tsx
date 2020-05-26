/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

import Controller from '../components/Controller';
import DomainResults from '../components/DomainResults';
import Page from '../components/Page';
import TwoColumnLayout from '../components/TwoColumnLayout';
import beauImage from '../images/beau.jpg';
import * as routes from '../routes';

export default (props: PageProps) => (
  <Page {...props} description="Краткая история Instant Domain Search." title="О мгновенном поиске доменов">
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <TwoColumnLayout>
        <>
          <h1>О мгновенном поиске доменов</h1>
          <p>
            Я создал Мгновенный Поиск Доменов в 2005 году, после того, как начал проходить обучение в недавно открытом
            гарвардском Институте по созданию стартап-компаний от фирмы Y Combinator. Сразу же после первого учебного
            дня я принял решение создать свой стартап. У меня было несколько идей, однако меня сильно расстраивала
            медленная обработка запросов по протоколу WHOIS, а также тот факт, что хорошее доменное имя найти было не
            так просто.
          </p>

          <p>
            Оказалось, что VeriSign каждый вечер публикует{' '}
            <a href="http://www.verisigninc.com/en_US/channel-resources/domain-registry-products/zone-file-information/index.xhtml">
              список доменных
            </a>{' '}
            имен в огромном зональном файле. После того, как я отправил по факсу соглашение о доступе к зональным данным
            в VeriSign, мне разрешили доступ к зональному файлу. Я арендовал выделенный сервер, набросал скрипт и смог
            проиндексировать миллионы доменных имен в зоне .com c помощью MySQL.
          </p>

          <p>
            Я был удивлен, насколько быстро работала первая версия моей программы. После того, как я настроил
            JavaScript, PHP и MySQL, я разместил первую версию моего сайта в вики Института по созданию
            стартап-компаний. Вскоре после этого я получил сообщение электронной почты от Пола Грэхема, который
            предложил мне подать заявление о приеме на работу в Y Combinator. Майкл Эррингтон заметил мой сайт и
            опубликовал о нем статью на сайте TechCrunch в ноябре 2005 г.
          </p>

          <p>
            В 2006 г. я получил финансирование от Y Combinator и создал онлайн-редактор изображений — Snipshot. В 2009
            г. я устроился на работу в Facebook на должность инженера, по прошествии четырех лет интенсивного
            сотрудничества я покинул эту компанию и начал работать над другими проектами.
          </p>
        </>
        <>
          <p>Сайт Мгновенный Поиск Домена был создан в 2005 Бо Хартшорном (Beau Hartshorne).</p>

          <p>
            <img alt="Beau Hartshorne" height="299" src={beauImage} width="216" />
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
