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
    title="Noms de domaine | Recherche instantanée de noms de domaine"
    description="Trouvez des noms de domaine instantanément pendant que vous tapez. Recherchez les .com et autres extensions en temps réel. Des suggestions et les noms à vendre apparaissent aussi immédiatement.">
    <Alternates />
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <TwoColumnLayout>
        <>
          <h1>Voir les résultats de votre recherche de noms de domaine pendant la saisie</h1>

          <p>
            <strong>Il vous suffit de commencer à taper !</strong> Si le nom de domaine que vous recherchez est déjà
            pris, vous pouvez cliquer sur WHOIS pour découvrir sous quel nom il est enregistré ou sur l'URL pour visiter
            le site web.
          </p>

          <p>
            Nous appliquons une réduction de <strong>4.99 $ pour les noms de domaine en .com</strong> lorsque vous
            faites votre achat sur GoDaddy. Cette offre est valable pour un seul achat d'un nom de domaine en .com, et
            n'inclut pas les frais ICANN s'élevant à 0,18 $ par an pour chaque nom de domaine. Il s'agit d'une offre
            intéressante !
          </p>

          <p style={{fontSize: '1.1em'}}>
            <strong>Vous aimez ce site !</strong> Faites-le savoir sur{' '}
            <a onClick={() => event('outbound', 'click', 'twitter')} href="https://twitter.com/instantdomain">
              Twitter
            </a>{' '}
            et{' '}
            <a
              onClick={() => event('outbound', 'click', 'facebook')}
              href="https://www.facebook.com/InstantDomainSearch">
              Facebook
            </a>
            &nbsp;!
          </p>

          <p>
            Toutes les recherches de noms de domaine se font sous cryptage https, et les recherches sont ensuite
            effacées de nos serveurs. Vos résultats de recherche ne sont pas enregistrés. En appuyant sur Entrer ou
            Retour, vous serez redirigé automatiquement vers GoDaddy ou le site que vous avez choisi pour acheter votre
            nom de domaine. Bonne chance !
          </p>
        </>
        <>
          <h4>Articles à la une</h4>
          <Articles data={data} />

          <h4>Assistance Punycode</h4>
          <p>
            Vous pouvez rechercher des noms de domaine en Unicode comme <a href="#search=域名搜索">域名搜索.com</a> ou{' '}
            <a href="#search=sí">sí.com</a>. Nous convertissons alors vos recherches en{' '}
            <a href="https://fr.wikipedia.org/wiki/Punycode">Punycode</a>.
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
