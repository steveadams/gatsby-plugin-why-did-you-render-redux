/* Copyright 2005-present Instant Domain Search, Inc. */

import {Link} from 'gatsby';
import * as React from 'react';

import Article from '../../components/Article';

export const frontmatter = {
  title: "L'hébergement de domaines en un coup d'oeil",
  headline: "L'hébergement de domaines en un coup d'oeil",
  description:
    'Conseils pour choisir un nom de domaine Hébergeur: Apprenez ce que les services des domaines différents hébergement de sites web proposent et ce que vous voudrez peut-être à rechercher',
  date: '2008-06-02',
  authors: [
    {name: 'Beau Hartshorne', link: 'mailto:hartshorne@gmail.com'},
    {
      name: 'Mike Dascal',
      link: 'http://www.mykcreative.com/',
    },
  ],
};

export default (props: PageProps) => (
  <Article {...props} frontmatter={frontmatter}>
    <p>
      Alors, votre site web est presque prêt — vous avez décidé de ce que vous vouliez publier,{' '}
      <Link to="/fr/articles/comment-choisir-un-nom-de-domaine/">Vous avez choisi un nom de domaine</Link>, et
      maintenant... eh bien... maintenant quoi ?
    </p>

    <p>
      Vous avez encore deux choses à faire avant de mettre votre site sur Internet. Tout d'abord, vous devez enregistrer
      le nom de votre domaine, ce qui signifie que vous serez le/la seul(e) à avoir le droit de l'utiliser. Ensuite,
      vous devez choisir un hébergeur de domaine, ce qui signifie mettre votre site web sur Internet. Heureusement, pour
      vous faciliter un peu la vie, les hébergeurs de domaines proposent également des services d'enregistrement de
      domaines. Tout ce qu'il vous reste à faire est de choisir l'une de ces nombreuses compagnies.
    </p>

    <p>
      Comme l'hébergement de domaine est un élément important dans la création de votre site, vous devez être sûr(e) de
      choisir une compagnie sur laquelle vous pouvez compter et qui correspond à vos besoins. Que vous soyez un
      particulier voulant démarrer un blog ou un site portefeuille, ou encore une petite ou moyenne entreprise, vous
      devez comparer pour voir qui vous offre les services dont vous avez besoin. Voici certaines choses que vous
      pourriez chercher chez un hébergeur de domaines, surtout lorsque vous créez votre site pour la première fois :
    </p>

    <h3>Assistance technique</h3>

    <p>
      Vous courez toujours le risque que quelque chose aille mal et c'est toujours agréable d'avoir quelqu'un vers qui
      se tourner. Certains hébergeurs de domaines vous proposeront une assistance technique soit en ligne soit par
      téléphone gratuite ou non.
    </p>

    <h3>Exemples de sites Web</h3>

    <p>
      Si vous ne savez pas comment programmer un site, ou si vous ne voulez pas le démarrer à partir de rien, beaucoup
      d'hébergeurs de domaines vous montreront des exemples que vous pourrez utiliser pour construire votre site.
      D'autres vous donneront même un logiciel qui vous permettra de concevoir facilement une page web personnalisée
      sans le problème de la programmation, ou ils vous proposeront également les services d'un créateur de sites
      professionnel, moyennant finances.
    </p>

    <h3>Autres exemples de logiciels — blogs, photos, etc.</h3>

    <p>
      Votre page web peut être... eh bien tout ce que vous voulez ! Beaucoup d'hébergeurs de domaines peuvent vous
      proposer un logiciel spécial qui vous aidera à publier certains des sites web les plus courants, comme les blogs,
      l'hébergement d'images et leur partage, les magasins en ligne et bien plus encore.
    </p>

    <h3>Adresses électroniques</h3>

    <p>
      Un <Link to="/articles/choosing-a-domain-name/">nom de domaine</Link>, c'est bien plus qu'une adresse de site web
      — il vous donne également droit à des adresses électroniques. Si vous enregistrez un nom de domaine, comme par
      exemple mondomaine.com, vous avez droit à toutes les adresses mail qui se terminent avec le nom de votre domaine,
      comme par exemple monemail@mondomaine.com. Si vous voulez vous servir de ces adresses électroniques, assurez-vous
      que votre hébergeur vous facilite cette tâche.
    </p>

    <p>
      Les plus grands sites qui proposent l'enregistrement de noms de domaines et l'hébergement de domaines sont
      probablement GoDaddy, 1&amp;1, Register.com et NetworkSolutions. Vous pouvez les consulter et vérifier leurs
      services en écrivant dans le champ de recherche de la{' '}
      <Link to="/fr/">Recherche Instantanée de Noms de Domaine</Link> le nom du domaine que vous voulez enregistrer et
      en cliquant sur le site que vous voulez sous l'extension que vous désirez — du moment que c'est disponible !
    </p>
  </Article>
);
