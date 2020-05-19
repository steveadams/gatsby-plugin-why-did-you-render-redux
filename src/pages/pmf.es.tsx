/* Copyright 2005-present Instant Domain Search, Inc. */

import {Link} from 'gatsby';
import * as React from 'react';

import Controller from '../components/Controller';
import DomainResults from '../components/DomainResults';
import Page from '../components/Page';
import TwoColumnLayout from '../components/TwoColumnLayout';
import * as routes from '../routes';

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
      <Question>¿Cómo funciona Búsqueda de Dominio Instantánea?</Question>
      <Answer>
        <p>
          Descargamos enormes listas de nombres registrados desde VeriSign y otros proveedores de gTLD cada noche. Casi
          todos los nombres de dominio que están en uso están incluidos en estas listas, llamadas archivos de zona.
          Indexamos los archivos de zona y alojamos los índices en centros de datos de todo el mundo.
        </p>

        <p>
          La primera vez que visita nuestro sitio web, determinamos cuál de nuestros servidores está más cerca de usted
          y establecemos un vínculo seguro desde su navegador hasta nuestro servidor. A medida que escribe, buscamos en
          nuestro índice coincidencias exactas y también tratamos de plantear útiles sugerencias que podría estar
          también interesado en comprar.
        </p>

        <p>
          El sitio está alojado en <a href="https://cloud.google.com/">Google Cloud Platform</a>.
        </p>
      </Answer>
      <Question>
        El nombre que he encontrado aparece aquí como disponible, pero en realidad no lo está. ¿Por qué?
      </Question>
      <Answer>
        <p>
          De vez en cuando catalogamos nombres como disponibles cuando ya han sido utilizados. Esto puede ocurrir
          cuando:
        </p>

        <ul>
          <li>La propiedad del nombre está en disputa.</li>
          <li>Está a punto de expirar.</li>
          <li>Se encuentra en “periodo de redención”, es decir, acaba de expirar.</li>
          <li>El nombre no tiene servidores de nombres.</li>
        </ul>

        <p>
          Por otra parte, nunca debemos declarar un nombre como “no disponible” cuando en verdad está disponible. Solo
          mostramos nombres como "no disponibles" cuando están en buen estado y tienen servidores de nombres asociados a
          ellos.
        </p>
      </Answer>
      <Question>¿Cómo gana dinero Búsqueda de Dominio Instantánea?</Question>
      <Answer>
        <p>
          Ganamos dinero cuando usted compra nombres de dominio a través de uno de los registradores a los que
          vinculamos. Estas tasas de remisión son las que mantienen el sitio en funcionamiento.
        </p>
      </Answer>
      <Question>¿Cómo elegir un buen nombre de dominio?</Question>
      <Answer>
        <p>
          Lea nuestro artículo{' '}
          <Link to="/articles/choosing-a-domain-name/">Dueño de su Dominio: Eligiendo un Nombre de Dominio</Link>.
        </p>
      </Answer>
      <Question>Alguien ha robado un dominio que he encontrado en su sitio. ¿Cómo puedo solucionar esto?</Question>
      <Answer>
        <p>
          Esto probablemente sea una coincidencia. Cada día caducan y se registran millones de dominios. Por favor, tome
          nota de la fecha y hora de su búsqueda. Después, compárelas con la fecha y hora reales en las que el dominio
          fue registrado. Nos importa su <a href="#privacy">privacidad</a>.
        </p>

        <p>
          Puede obtener la fecha mediante el registro de WHOIS del dominio. Este registro también le mostrará qué
          registrador de la ICANN se empleó para registrar el nombre. Para saber la hora exacta en la que se registró el
          dominio, encuentre la información de contacto del registrador y llámelo o mándele un correo electrónico.
          Recuerde preguntarles la zona horaria de la hora de registro que le proporcionan.
        </p>

        <p>
          Si la hora de registro se ciñe estrechamente a la hora en la que usted buscó el nombre de dominio, por favor
          envíenos un email a <a href="mailto:help@instantdomainsearch.com">help@instantdomainsearch.com</a> con el
          nombre del dominio y la hora en la que lo hubo buscado en nuestro sitio. Nos tomamos muy en serio estos
          problemas.
        </p>
      </Answer>
      <Question>¿Cuál es la política de privacidad con respecto a los resultados de mi búsqueda?</Question>
      <Answer>
        <p>
          Nos interesa mantener sus resultados de búsqueda en privado. Ganamos dinero cuando alguien compra un nombre
          que ha encontrado en nuestro sitio a través de uno de los proveedores que mostramos. No pertenecemos al
          negocio de reventa de dominios. Es por eso que nos atenemos a las siguientes reglas:
        </p>

        <ul>
          <li>
            Sus búsquedas nunca se comparten o distribuyen. No contactamos con terceros para verificar la disponibilidad
            de los dominios.
          </li>
          <li>Nuestro servicio no realiza consultas de WHOIS sobre los nombres que busca.</li>
        </ul>

        <p>
          Tratamos de seleccionar los mejores proveedores del sector, pero no podemos hacernos responsables del uso o
          mal uso que hagan de sus búsquedas de dominios una vez que haga clic en su enlace desde nuestro sitio.
        </p>

        <p>
          Ahora Búsqueda de Dominio Instantánea cifra todas sus búsquedas por defecto con HTTPS para evitar que otras
          personas de su red puedan interceptarlas.
        </p>
      </Answer>
      <Question>¿Qué es lo que opinan otras personas sobre Búsqueda de Dominio Instantánea?</Question>
      <Answer>
        <p>
          <a href="https://adage.com/article/the-media-guy/media-guy-s-pop-pick-instant-domain-search/114445/">
            Advertising Age
          </a>
          : “A nifty, real-time platform for brand-name brainstorming.”
        </p>
      </Answer>
    </context.Provider>
  );
}

export default (props: PageProps) => (
  <Page
    {...props}
    title="Preguntas más frecuentes"
    description="Preguntas frecuentes e información sobre privacidad acerca de Búsqueda de Dominio Instantánea.">
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <TwoColumnLayout>
        <>
          <h1>Índice de Preguntas Frecuentes</h1>
          <FAQ />
        </>
        <>
          <h4>FAQ Index</h4>
          <ul className="index">
            <FAQ toc />
          </ul>
        </>
      </TwoColumnLayout>
    </Controller>
  </Page>
);
