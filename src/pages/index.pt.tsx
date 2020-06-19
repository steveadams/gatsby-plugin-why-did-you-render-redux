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
    description="Trouvez des noms de domaine instantanément pendant que vous tapez. Recherchez les .com et autres extensions en temps réel. Des suggestions et les noms à vendre apparaissent aussi immédiatement."
    title="Noms de domaine | Recherche instantanée de noms de domaine">
    <Alternates />
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <TwoColumnLayout>
        <>
          <h1>Ver Resultados da Pesquisa de Nome de Domínio à Medida Que Digita</h1>

          <p>
            <strong>Comece a digitar!</strong> Se o nome de domínio que procura estiver ocupado, pode clicar QUEMÉ para
            descobrir quem o registou ou o URL para visitar o website.
          </p>

          <p>
            Nós aplicamos um cupão <strong>por nomes de domínio .com</strong> quando efetua uma compra no GoDaddy. A
            oferta é válida para apenas uma compra .com, e não inclui a taxa ICANN de $0,18 por nome de domínio por ano.
            É um grande negócio!
          </p>

          <p style={{fontSize: '1.1em'}}>
            <strong>Adora o site?</strong> Espalhe a palavra no{' '}
            <a href="https://twitter.com/instantdomain" onClick={() => event('outbound', 'click', 'twitter')}>
              Twitter
            </a>{' '}
            e no{' '}
            <a
              href="https://www.facebook.com/InstantDomainSearch"
              onClick={() => event('outbound', 'click', 'facebook')}>
              Facebook
            </a>
            !
          </p>

          <p>
            Todas as pesquisas de domínio são encriptadas por https, e as pesquisas não saem do nosso servidor. Carregar
            no Enter ou Return irá levá-lo diretamente para o GoDaddy ou o registo onde escolheu comprar o seu nome de
            domínio. Boa sorte!
          </p>
        </>
        <>
          <h4>Artigos em Destaque</h4>
          <Articles data={data} />

          <h4>Suporte Punycode</h4>

          <p>
            Pode encontrar domínios Unicode tais como <a href="#search=域名搜索">域名搜索.com</a> ou{' '}
            <a href="#search=sí">sí.com</a>. Nós fazemos isto convertendo as suas pesquisas para{' '}
            <a href="https://pt.wikipedia.org/wiki/Punycode">Punycode</a>.
          </p>
        </>
      </TwoColumnLayout>
    </Controller>
  </Page>
);

/* eslint-disable */
export const query = graphql`
  query($lang: String = "pt") {
    ...ArticlesFragment
  }
`;
/* eslint-enable */
