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
    description="Una breve historia de Dominio de búsqueda instantánea."
    title="Acerca de Búsqueda de dominio instantánea">
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <TwoColumnLayout>
        <>
          <h1>Acerca de Búsqueda de dominio instantánea</h1>
          <p>
            Creé Búsqueda de dominio instantánea en 2005 después de asistir a la Escuela de iniciación de Y Combinator
            en Harvard. Después de la jornada de conferencias, estaba impaciente por poner en marcha una nueva empresa.
            Tenía algunas ideas, pero me sentía frustrado con lo lentas que son las búsquedas WHOIS y lo difícil que es
            encontrar un buen nombre.
          </p>
          <p>
            Resulta que VeriSign publica{' '}
            <a href="http://www.verisigninc.com/en_US/channel-resources/domain-registry-products/zone-file-information/index.xhtml">
              una lista de los nombres de dominio
            </a>{' '}
            en un archivo de zona gigantesco todas las noches. Una vez que envié por fax el acuerdo de acceso de zona a
            VeriSign, me dieron acceso al archivo de zona. Obtuve un servidor dedicado, creé un script, y fui capaz de
            indexar los millones y millones de nombres de dominios .com con MySQL.
          </p>
          <p>
            Me sorprendió lo rápido que era incluso la primera versión. Una vez tenía JavaScript, PHP y MySQL
            funcionando sin problemas, publiqué una primera versión de la página en la wiki Startup School. Poco
            después, recibí un correo electrónico de Paul Graham invitándome a enviar una solicitud a Y Combinator.
            Michael Arrington descubrió la página y la publicó en TechCrunch en noviembre del 2005.
          </p>
          <p>
            Recibí financiación de Y Combinator en 2006 y creé un editor de imágenes en línea, Snipshot. Me uní a
            Facebook como ingeniero en 2009 y, después de cuatro intensos años, lo dejé en 2013 para trabajar en otros
            proyectos.
          </p>
        </>
        <>
          <p>Búsqueda de Dominio Instantánea fue creado en 2005 por Beau Hartshorne.</p>

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
