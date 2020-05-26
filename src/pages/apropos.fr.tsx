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
    description="Une brève histoire de la Recherche instantanée de noms de domaine."
    title="À propos de la Recherche instantanée de noms de domaine">
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <TwoColumnLayout>
        <>
          <h1>À propos de la Recherche instantanée de noms de domaine</h1>
          <p>
            J'ai créé la Recherche instantanée de domaine en 2005 après avoir suivi la Startup School de Y Combinator à
            Harvard. À la fin de la journée de conférences, il me tardait de lancer une startup. J'avais quelques idées,
            mais j'étais frustré par la lenteur des demandes WHOIS – et la difficulté de trouver un bon nom.
          </p>
          <p>
            Il s'avère que VeriSign publie{' '}
            <a href="http://www.verisigninc.com/en_US/channel-resources/domain-registry-products/zone-file-information/index.xhtml">
              une liste de noms de domaines
            </a>{' '}
            dans un fichier de zone géant tous les soirs. Lorsque j'ai renvoyé l'accord d'accès de zone par fax à
            VeriSign, j'ai eu accès au fichier de zone. J'ai reçu un serveur dédié, j'ai bidouillé un petit script, et
            j'étais capable d'indexer les millions et millions de noms de domaine .com avec MySQL.
          </p>
          <p>
            J'étais surpris par la vitesse impressionnante de ne serait-ce que le première version. Une fois JavaScript,
            PHP, et MySQL installés, j'ai posté une première version du site sur le wiki de la Startup School. Peu
            après, j'ai reçu un e-mail de Paul Graham m'invitant à postuler chez Y Combinator. Michael Arrington avait
            remarqué le site et l'a publié sur TechCrunch en novembre 2005.
          </p>
          <p>
            J'ai reçu un financement de Y Combinator en 2006 et ai créé un éditeur d'images en ligne, Snipshot. J'ai
            rejoint Facebook comme ingénieur en 2009, e, après quatre années intenses, je suis parti en 2013 pour
            travailler sur d'autres projets.
          </p>
        </>
        <>
          <p>Recherche Instantanée de Noms de Domaine a été créé en 2005 par Beau Hartshorne.</p>

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
