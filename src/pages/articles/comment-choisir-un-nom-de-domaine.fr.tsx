/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

import Article from '../../components/Article';

export const frontmatter = {
  title: 'Maître de votre nom de domaine',
  headline: 'Maître de votre nom de domaine',
  description:
    "Conseils pour choisir un nom de domaine pour votre nouveau site web: Apprendre à choisir un nom d'un domaine, le nom d'un site web, et choisissez votre extension de domaine",
  date: '2008-11-18',
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
      Si vous ne l'avez pas déjà fait, il est temps de trouver votre place en ligne ! Et l'une des toutes premières
      choses que vous devez faire est de créer votre adresse électronique — le nom de votre domaine. Lorsque vous créez
      un site internet, il doit être votre vitrine, votre représentation, votre service clientèle, votre tableau
      d'informations et bien plus encore. Vous devez gérer votre site comme vous le feriez pour une entreprise, et donc,
      l'ancienne règle s'applique toujours : "les trois choses les plus importantes lorsque l'on ouvre un commerce sont
      le lieu, le lieu et le lieu".
    </p>

    <p>
      Donc, comment choisir un nom de domaine ? Il n'y a pas de méthode infaillible, mais nous avons compilé dans une
      liste les choses auxquelles vous devez penser :
    </p>

    <h3>Noms de domaines et noms commerciaux</h3>

    <p>
      Bien que votre site ou votre commerce et votre nom de domaine ne doivent pas obligatoirement être similaires,
      s'assurer toutefois qu'ils le sont est un bon début. Réfléchissez à la façon dont nous parlons des sites, comme
      par exemple. Maintenant pensez à quel point il peut être difficile de trouver ces sites si leurs noms de domaine
      ne ressemblaient pas à leur nom commercial, comme nous avons pu le trouver sur
      "the-most-successful-search-engine-ever.info."
    </p>

    <h3>Longueur</h3>

    <p>
      Le nom de votre domaine ne doit être ni trop court ni trop long. Il est facile de comprendre pourquoi vous ne
      voulez pas que le nom de votre domaine soit trop long — non seulement les mots dans les noms de domaines trop
      longs deviennent difficiles à lire, mais on peut également oublier facilement les noms de domaines. Cela peut
      sembler étrange, mais les noms courts peuvent parfois être tout aussi mauvais — surtout si vous utilisez un long
      acronyme qui ressemble à un ensemble de lettres rassemblées au hasard.
    </p>

    <table>
      <tbody>
        <tr>
          <td>Trop long</td>
          <td>www.howtochoosethebestdomainforyourwebsite.com</td>
        </tr>
        <tr>
          <td>Trop court</td>
          <td>www.htcadn.com</td>
        </tr>
        <tr>
          <td>Parfait</td>
          <td>www.chooseadomain.com</td>
        </tr>
      </tbody>
    </table>

    <h3>Spécificité</h3>

    <p>
      Si l'internaute lambda voulait acheter une chemise et voulait trouver des infos en ligne, il/elle commencerait
      probablement par un moteur de recherche, comme par exemple google.com, et inscrirait le nom d'un magasin, ou d'un
      genre de magasin, et d'un endroit, comme "magasin de vêtements San Francisco". Il /elle ne chercherait pas
      seulement des "chemises" parce qu'il/elle sait que les résultats ne correspondront pas à ce qu'il/elle cherche.
      Lorsque vous créez un nom de domaine, réfléchissez à ce que vos clients pourraient inscrire dans les moteurs de
      recherche. Si votre nom de domaine est composé de mots que les gens inscrivent dans leurs moteurs de recherche, ou
      de mots clés, vous êtes plus susceptible d'apparaître en tête des résultats de recherche et donc d'avoir des
      clients.
    </p>

    <table>
      <tbody>
        <tr>
          <td>Trop précis</td>
          <td>www.ChooseYourNewDomainName.com</td>
        </tr>
        <tr>
          <td>Trop général</td>
          <td>www.naming.com</td>
        </tr>
        <tr>
          <td>Parfait</td>
          <td>www.chooseadomain.com</td>
        </tr>
      </tbody>
    </table>

    <h3>Extensions</h3>

    <p>
      Ignorer le www, chaque nom de domaine comporte deux parties — le texte avant le'point', qui est la partie
      principale du nom de domaine, et l'extension qui se trouve après. L'extension que vous choisissez peut marcher à
      la fois pour et contre vous. Par exemple, imaginez que vous avez choisi le nom de votre site mais que vous
      découvrez que le nom du domaine n'est pas disponible ; vous pourriez enregistrer à la place le nom du domaine.
      Cela vous permet de garder le nom original, ce qui est bien, mais vous risquez que les internautes inscrivent le
      suffixe le plus courant lorsqu'ils recherchent votre site. Cela peut être un problème si le nom appartient à l'un
      de vos concurrents. Envisagez toutes les possibilités lorsque vous choisissez vos extensions, et assurez-vous de
      bien mentionner le nom entier du domaine lorsque vous en parlez — surtout si vous n'êtes pas .com.
    </p>

    <table>
      <thead>
        <tr>
          <th>Extension</th>
          <th>Qui s'en sert</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>.com</td>
          <td>Principalement les entreprises commerciales, mais tout le monde peut les utiliser</td>
        </tr>
        <tr>
          <td>.org</td>
          <td>Les organisations à but non lucratif</td>
        </tr>
        <tr>
          <td>.net</td>
          <td>A l'origine, destinée aux prestataires de services Internet</td>
        </tr>
        <tr>
          <td>.info</td>
          <td>Sites d'informations</td>
        </tr>
        <tr>
          <td>.mobi</td>
          <td>
            Sites destinés à être consultés sur des appareils portables, tels que les téléphones portables ou les
            Blackberry
          </td>
        </tr>
      </tbody>
    </table>

    <p>
      Une fois que vous avez trouvé un nom de domaine, la prochaine étape est de vous assurer qu'il n'est pas déjà
      enregistré, vous devez donc le chercher. S'il est disponible, cliquez simplement sur leur lien qui vous conduira
      sur un site d'hébergement et d'enregistrement de nom de domaine et vous aurez votre propre domaine en quelques
      minutes !
    </p>
  </Article>
);
