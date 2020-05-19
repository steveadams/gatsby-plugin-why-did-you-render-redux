/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

import Controller from '../components/Controller';
import DomainResults from '../components/DomainResults';
import Page from '../components/Page';
import TwoColumnLayout from '../components/TwoColumnLayout';
import beauImage from '../images/beau.jpg';
import * as routes from '../routes';

export default (props: PageProps) => (
  <Page
    {...props}
    title="Sobre a Procura de Domínio Instantâneo"
    description="Uma breve história do Instant Search Domain.">
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <TwoColumnLayout>
        <>
          <h1>Sobre a Procura de Domínio Instantâneo</h1>
          <p>
            Eu criei a Procura por Domínio Instantâneo em 2005, depois de estar presente na Inauguração da Escola
            Startup em Harvard. Depois do dia das palestras, eu estava desejoso para lançar um Startup. Tinha algumas
            ideias, mas estava frustrado com o quão lentas as Perguntas WHOIS são- e o quão difícil é encontrar um bom
            nome.
          </p>
          <p>
            Acontece que a VeriSign publica{' '}
            <a href="http://www.verisigninc.com/en_US/channel-resources/domain-registry-products/zone-file-information/index.xhtml">
              uma lista de nomes dominantes
            </a>{' '}
            numa enorme zona de ficheiros todas as noites. Assim que enviei por faz a zona de concordância de volta para
            a Verisign, eles providenciaram-me o acesso à zona de arquivo. Tornei-me num servidor dedicado, criei um
            guião. e fui capaz de indexar os milhões e milhões de nomes dominantes .com com MySQL.
          </p>
          <p>
            Fiquei surpreendido com o quão rápida foi a primeira versão. Assim que consegui que o JavaScricpt, o PHP e o
            MySQL funcionassem perfeitamente, postei uma primeira versão do site para a wiki da Escola Startup. Poco
            tempo depois, recebi um email enviado pelo Paul Graham a convidar-me para me candidatar ao Y Combinator.
            Michael Arrington reparou no site e publicou-o no TechCrunch em Novembro de 2005.
          </p>
          <p>
            Recebi fundos provenientes do Y Combinator em 2006 e criei um editor de imagem online, Snipshot. Aderi ao
            Facebook como um engenheiro em 2009 e, depois de 4 anos intensos, saí em 2013 para trabalhar noutros
            projetos.
          </p>
        </>
        <>
          <p>A Pesquisa de Domínio Instantânea foi formada em 2005 por Beau Hartshorne.</p>

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
