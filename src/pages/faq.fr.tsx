/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

import Controller from '../components/Controller';
import DomainResults from '../components/DomainResults';
import Page from '../components/Page';
import TwoColumnLayout from '../components/TwoColumnLayout';
import * as routes from '../routes';
import {Link} from 'gatsby';

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
      <Question>Comment fonctionne Recherche Instantanée de Noms de Domaine ?</Question>
      <Answer>
        <p>
          Nous téléchargeons de gigantesques listes de noms enregistrés provenant de VeriSign et d’autres fournisseurs
          de gTLD (domaine de premier niveau) toutes les nuits. Presque tous les noms de domaine qui sont en cours
          d’utilisation sont inclus dans ces listes, appelés fichiers de zone. Nous indexons ces fichiers de zone, et
          hébergeons les index dans des centres de données répartis à travers le monde. Lorsque vous visitez notre site
          web pour la première fois, nous déterminons lequel de nos serveurs est le plus proche de vous, et mettons en
          place un lien sécurisé entre votre navigateur et notre serveur.
        </p>

        <p>
          Lorsque vous tapez, nous recherchons dans notre index la correspondance exacte, et essayons aussi de vous
          présenter des suggestions utiles que vous pourriez être intéressé d’acquérir.
        </p>

        <p>
          Le site est hébergé sur <a href="https://cloud.google.com/">Google Cloud Platform</a>.
        </p>
      </Answer>
      <Question>
        Le nom que j’ai trouvé est affiché comme disponible sur votre site, mais en réalité il ne l’est pas. Pourquoi ?
      </Question>
      <Answer>
        <p>
          Il peut arriver que nous indiquions des noms comme disponibles alors qu’ils ont déjà été pris. Cela peut se
          produire quand :
        </p>

        <ul>
          <li>La propriété du nom est contestée.</li>
          <li>Il est sur le point d’expirer.</li>
          <li>Il est en « période de rachat », c’est-à-dire qu’il vient d’expirer.</li>
          <li>Le nom n’a pas de serveurs de noms.</li>
        </ul>

        <p>
          Par contre, en principe, nous ne signalons jamais un nom comme pris alors qu’il est en réalité disponible.
          Nous affichons les noms comme pris aux seules conditions qu’ils soient en règle et possèdent des serveurs de
          noms qui leur sont associés.
        </p>
      </Answer>
      <Question>Comment Recherche Instantanée de Noms de Domaine fait-il de l’argent ?</Question>
      <Answer>
        <p>
          Nous faisons de l’argent lorsque vous achetez des noms de domaine en passant par l’un des bureaux
          d’enregistrement que nous offrons en lien. Ces commissions permettent au site de rester en activité.
        </p>
      </Answer>
      <Question>Comment choisir un bon nom de domaine ?</Question>
      <Answer>
        <p>
          Lisez notre article{' '}
          <Link to="/articles/choosing-a-domain-name/">Maître de votre domaine : Choisir un nom de domaine</Link>.
        </p>
      </Answer>
      <Question>
        Quelqu’un a volé un domaine que j’ai trouvé sur votre site. Comment puis-je résoudre ce problème ?
      </Question>
      <Answer>
        <p>
          C’est probablement une coïncidence. Des millions de domaines sont enregistrés et expirent tous les jours.
          Commencez par noter la date et l’heure de votre recherche. Puis comparez-la à la date et l’heure réelle à
          laquelle le domaine a été enregistré. Nous nous soucions de votre vie{' '}
          <a href="#quelle-est-votre-politique-de-confidentialit-concernant-mes-rsultats-de-recherche-">privée</a>.
        </p>

        <p>
          Vous pouvez obtenir la date de l’enregistrement WHOIS pour le domaine. Cet enregistrement vous indiquera
          également quel registrar ICANN a été utilisé pour enregistrer le nom. Pour connaître l’heure exacte à laquelle
          un domaine a été enregistré, trouvez les coordonnées du registrar, et contactez-le par téléphone ou par
          courriel. N’oubliez pas de leur demander le fuseau horaire correspondant à l’heure d’enregistrement qu’ils
          vous donnent.
        </p>

        <p>
          Si l’heure de l’enregistrement suit de près l’heure à laquelle vous avez cherché le nom de domaine, veuillez
          nous écrire à <a href="mailto:help@instantdomainsearch.com">help@instantdomainsearch.com</a> en précisant le
          nom de domaine et l’heure de votre recherche sur notre site. Nous prenons ces problèmes très au sérieux.
        </p>
      </Answer>
      <Question>Quelle est votre politique de confidentialité concernant mes résultats de recherche ?</Question>
      <Answer>
        <p>
          Il est dans notre intérêt de garder les résultats de recherche privés. Nous faisons de l’argent lorsqu’une
          personne achète un nom de domaine trouvé sur notre site grâce à l’un de nos fournisseurs en lien. Nous ne
          sommes pas dans la revente de noms de domaine. C’est pourquoi nous respectons les règles suivantes :
        </p>

        <ul>
          <li>
            Vos recherches ne sont pas partagées ou redistribuées, jamais. Nous ne contactons aucun tiers pour vérifier
            la disponibilité d’un domaine.
          </li>
          <li>Notre service ne préforme pas les requêtes WHOIS sur les noms que vous recherchez.</li>
        </ul>

        <p>
          Nous essayons de sélectionner les meilleurs fournisseurs de l’industrie, mais nous ne pouvons être tenus
          responsables de l’utilisation ou d’un mauvais usage qu’ils feraient de vos recherches de domaine, une fois que
          vous cliquez sur leur lien à partir de notre site.
        </p>

        <p>
          Par défaut, Recherche Instantanée de Noms de Domaine crypte maintenant toutes vos recherches avec le protocole
          HTTPS pour empêcher d’autres personnes de votre réseau de pouvoir lire vos recherches.
        </p>
      </Answer>
      <Question>Que pensent les autres de Recherche Instantanée de Noms de Domaine ?</Question>
      <Answer>
        <p>
          <a href="https://adage.com/article/the-media-guy/media-guy-s-pop-pick-instant-domain-search/114445/">
            Advertising Age
          </a>{' '}
          : « Une plateforme astucieuse en en temps réel pour réfléchir au nom d’une marque. »
        </p>
      </Answer>
    </context.Provider>
  );
}

export default (props: PageProps) => (
  <Page
    {...props}
    title="Foire aux questions"
    description="Foire aux questions et politique de confidentialité de Recherche Instantanée de Noms de Domaine">
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <TwoColumnLayout>
        <>
          <h1>Foire aux questions</h1>
          <FAQ />
        </>
        <>
          <h4>Index de la FAQ</h4>
          <ul className="index">
            <FAQ toc />
          </ul>
        </>
      </TwoColumnLayout>
    </Controller>
  </Page>
);
