/* Copyright 2005-present Instant Domain Search, Inc. */

import {Link} from 'gatsby';
import * as React from 'react';

import Article from '../../components/Article';

export const frontmatter = {
  title: 'Resumen de alojamiento de dominios',
  headline: 'Resumen de alojamiento de dominios',
  description:
    'Consejos para elegir un servicio de alojamiento de dominios: saber cuáles son los servicios de alojamiento de dominios diferentes páginas que ofrecen y lo que es posible que desee buscar',
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
      Su sitio web está de camino, ya ha decidido lo que desea publicar,{' '}
      <Link to="/es/articulos/como-escojer-un-dominio/">ha elegido un nombre de dominio</Link> y bien... ahora, ¿qué?
    </p>

    <p>
      Hay dos cuestiones que quedan por hacer antes de que pueda empezar a colocar el sitio web en Internet. En primer
      lugar, debe registrar el nombre del dominio, lo que significa que será el único que tenga derecho a utilizarlo. En
      segundo lugar, necesita elegir un <strong>proveedor de alojamiento de dominios</strong>, lo que significa colocar
      el sitio web en Internet. Afortunadamente, para que la vida sea un poco más fácil, las empresas de alojamiento de
      dominios también ofrecen servicios de registro de dominios. Lo que le queda por hacer es decidirse por una de las
      numerosas empresas.
    </p>

    <p>
      Puesto que el alojamiento de dominios es una parte tan importante en el nacimiento del sitio, debería{' '}
      <strong>asegurarse de que elige una empresa en la que pueda confiar</strong> y que se ajuste a sus necesidades. Si
      usted es una persona independiente que desea iniciar un blog o un sitio de promoción, o bien una pequeña o mediana
      empresa, debería tomarse un tiempo para ver quién ofrece los servicios que necesita. Le mostramos una serie de
      cuestiones que debería tener en cuenta en un servicio de alojamiento de dominios al crear un sitio web por primera
      vez:
    </p>

    <h3>Asistencia técnica</h3>

    <p>
      Siempre hay una posibilidad de que algo vaya mal, y siempre es agradable tener a alguien que nos escuche. Algunas
      empresas de alojamiento de dominios ofrecen asistencia técnica en línea o por teléfono por una tarifa o de forma
      gratuita.
    </p>

    <h3>Exemples de sites Web</h3>

    <p>
      Si no sabe cómo programar un sitio web, o bien si no desea iniciar su sitio desde cero, muchas empresas de
      alojamiento de dominios le facilitarán plantillas que puede usar para construir su sitio. Otras incluso le
      ofrecerán software que le permitirá personalizar su página web fácilmente, sin complicaciones de programación, o
      bien le ofrecerán un servicio de diseño profesional de sitios web a cambio de una tarifa determinada.
    </p>

    <h3>Otras plantillas de software para blogs, fotografías, etc.</h3>

    <p>
      Su página web puede ser... ¡todo aquello que desee! Muchas empresas de alojamiento de dominio pueden ofrecerle un
      software especial que le ayudará a publicar algunos de los tipos más habituales de sitios web, como blogs,
      alojamiento de imágenes y uso compartido, almacenamientos en línea y mucho más.
    </p>

    <h3>Direcciones de correo electrónico</h3>

    <p>
      Su página web puede ser... ¡todo aquello que desee! Muchas empresas de alojamiento de dominio pueden ofrecerle un
      software especial que le ayudará a publicar algunos de los tipos más habituales de sitios web, como blogs,
      alojamiento de imágenes y uso compartido, almacenamientos en línea y mucho más.
    </p>

    <p>
      Los sitios más grandes que ofrezcan registro de nombres de dominios y alojamiento de dominios son probablemente
      GoDaddy, 1&amp;1, Register.com, y Network Solutions. Puede hacer clic en sus enlaces y comprobar sus servicios.
      Escriba para ello el dominio que desea registrar en el campo de búsqueda de{' '}
      <Link to="/es/">Búsqueda de Dominio Instantánea</Link> y haga clic en el sitio que desea bajo la extensión que
      desea, siempre que esté disponible.
    </p>
  </Article>
);
