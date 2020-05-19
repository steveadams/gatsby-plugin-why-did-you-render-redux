/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

import Article from '../../components/Article';

export const frontmatter = {
  title: 'Dueño de su propio dominio',
  headline: 'Dueño de su propio dominio',
  description:
    'Consejos para elegir un nombre de dominio para su nuevo sitio web: aprenda a elegir un nombre de un dominio, el nombre de un sitio web, y una extensión de dominio.',
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
      Si aún no lo ha hecho, ya es hora de que encuentre su sitio en Internet. Una de las primeras acciones que deberá
      llevar a cabo es establecer la dirección electrónica (su nombre de dominio). Cuando haga un sitio web, debe actuar
      como su escaparate, su personal de ventas, su personal de asistencia al cliente, su tablón de anuncios y mucho
      más. Debe tratar el sitio web como lo haría con cualquier negocio, de manera que se sigue aplicando la antigua
      regla: "los tres aspectos más importantes al abrir un nuevo negocio son la ubicación, la ubicación y la
      ubicación".
    </p>

    <p>
      ¿Cómo se elige un nombre de dominio? No hay un método infalible, pero hemos recopilado aquí una lista de algunos
      aspectos en los que debería pensar:
    </p>

    <h3>Nombres de dominios frente a nombres comerciales</h3>

    <p>
      Aunque el nombre del dominio, de la empresa y del sitio web no tiene por qué ser el mismo, asegurarse de que sean
      iguales suele ser una buena estrategia. Piense en cómo los sitios web se incorporan a nuestro lenguaje, como.
      Piense ahora en lo difícil que podría ser encontrar estos sitios si los nombres de sus dominios no tuvieran nada
      que ver con el nombre de su empresa, por ejemplo si se encontrara en "the-most-successful-searchengine-ever.info."
    </p>

    <h3>Longitud</h3>

    <p>
      El nombre de su dominio no debe ser demasiado corto ni demasiado largo. Es fácil de ver por qué no debería desear
      que el nombre del dominio fuera demasiado largo: no sólo las palabras de nombres de dominios largos son difíciles
      de leer, sino que los nombres de dominios, por otro lado, también se olvidan fácilmente. Puede parecer extraño,
      pero los nombres abreviados pueden ser, en ocasiones, igual de equivocados, especialmente si utiliza un acrónimo
      largo que parezca un conjunto aleatorio de letras.
    </p>

    <table>
      <tbody>
        <tr>
          <td>Demasiado largo</td>
          <td>www.howtochoosethebestdomainforyourwebsite.com</td>
        </tr>
        <tr>
          <td>Demasiado corto</td>
          <td>www.htcadn.com</td>
        </tr>
        <tr>
          <td>Correcto</td>
          <td>www.chooseadomain.com</td>
        </tr>
      </tbody>
    </table>

    <h3>Especificidad</h3>

    <p>
      Si un navegante habitual de Internet buscaba comprar una camisa y deseaba encontrar información en línea,
      probablemente empezaría por un motor de búsqueda, como google.com, y escribiría el nombre de una tienda, o bien un
      tipo de tienda, además de una ubicación, como "tienda de ropa San Francisco". Probablemente no buscaría sólo
      "camisas", porque sabe que el resultado no sería lo que está buscando. Cuando cree el nombre del dominio, piense
      en lo que los clientes pueden escribir en los motores de búsqueda. Si el nombre del dominio se compone de palabras
      que los usuarios escriben en sus motores de búsqueda, o bien de palabras clave, es mucho más probable que aparezca
      en la parte superior de la lista de resultados de la búsqueda, y es más probable que consiga clientes.
    </p>

    <table>
      <tbody>
        <tr>
          <td>Demasiado específico</td>
          <td>www.ChooseYourNewDomainName.com</td>
        </tr>
        <tr>
          <td>Demasiado general</td>
          <td>www.naming.com</td>
        </tr>
        <tr>
          <td>Correcto</td>
          <td>www.chooseadomain.com</td>
        </tr>
      </tbody>
    </table>

    <h3>Extensiones</h3>

    <p>
      Si pasa por alto las letras www., cada nombre de dominio tiene dos partes: el texto antes del 'punto', que es la
      parte principal del nombre del dominio, y la extensión que le sigue. La extensión que elija puede trabajar a su
      favor y en su contra. Por ejemplo, imagine que ha elegido como el nombre del sitio web, pero descubre que el
      nombre de dominio no está disponible. Podría registrar el nombre de dominio en su lugar. De esta forma, se
      mantiene el nombre original, lo cual es bueno, pero también se arriesga a que las personas que buscan escriban el
      sufijo más común cuando intentan encontrar el sitio web. Esto puede ser un problema si el nombre pertenece a uno
      de sus competidores. Tenga en cuenta todas sus opciones cuando elija la extensión, y asegúrese de que especifica
      el nombre completo del dominio cuando hable sobre él, especialmente si no es .com.
    </p>

    <table>
      <thead>
        <tr>
          <th>Extensión</th>
          <th>Quién la utiliza</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>.com</td>
          <td>Principalmente empresas comerciales, pero está abierta a todos</td>
        </tr>
        <tr>
          <td>.org</td>
          <td>Organizaciones no comerciales</td>
        </tr>
        <tr>
          <td>.net</td>
          <td>Originalmente, para proveedores de servicios de Internet</td>
        </tr>
        <tr>
          <td>.info</td>
          <td>Sitios informativos</td>
        </tr>
        <tr>
          <td>.mobi</td>
          <td>Sitios web pensados para visualizarse en dispositivos móviles, como teléfonos móviles o Blackberry</td>
        </tr>
      </tbody>
    </table>

    <p>
      Cuando haya encontrado un nombre de dominio, el paso siguiente es buscarlo en Búsqueda de Dominio Instantánea para
      asegurarse de que no esté ya registrado. Si está disponible, siga el vínculo a un sitio de registro de nombres de
      dominios y alojamiento y tendrá su propio dominio en minutos.
    </p>
  </Article>
);
