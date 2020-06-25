/* Copyright 2005-present Instant Domain Search, Inc. */

import {Link} from 'gatsby';
import {css} from 'linaria';
import * as React from 'react';

import {event} from '../analytics';
import * as colors from '../colors';
import Alternates from '../components/Alternates';
import Column from '../components/Column';
import Controller from '../components/Controller';
import DomainResults from '../components/DomainResults';
import IconGroup from '../components/IconGroup';
import Page from '../components/Page';
import SmallIconGroup from '../components/SmallIconGroup';
import WideLayout from '../components/WideLayout';
import * as font from '../font';
import * as routes from '../routes';

export default (props: PageProps) => (
  <Page
    {...props}
    description="Busque nombres de dominio al instante mientras escribe. Busque en tiempo real extensiones como .com y otras. También aparecen inmediatamente sugerencias y nombres a la venta."
    title="Dominios | Búsqueda de Dominios Instantáneo">
    <Alternates />
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <WideLayout>
        <IconGroup
          className={css`
            & > p {
              font-size: ${font.s}px;
            }
          `}
          headerTag="h1"
          icon="Search"
          title="Búsqueda de nombre de dominio - verifique la disponibilidad de dominio">
          Los resultados de la búsqueda de nombre de dominio aparecen a medida que escribe. Podemos hacer búsquedas de
          dominio muy rápidamente, y usualmente mostramos los resultados de la búsqueda de dominio en menos de 100
          milisegundos. Generamos nombres de dominios y verificamos extensiones de dominios instantáneamente. Estamos
          usando técnicas de inteligencia artificial para encontrar dominios en venta que puede comprar hoy y dominios
          expirados para pedidos pendientes. ¡Sólo empiece a escribir!
        </IconGroup>

        <Column>
          <IconGroup
            eventInfo="domain_extensions_h3"
            href="/domain/extensions/"
            icon="Extensions"
            title="Extensiones de dominio">
            Busque más de cien nuevas extensiones como .club, .online y otras. También buscamos dominios con código de
            países (ccTLDs) como .com.au, .co.uk, .de y .br. La página de{' '}
            <Link onClick={() => event('internal', 'click', 'domain_extensions_p-small')} to="/domain/extensions/">
              extensión de nombre de dominio
            </Link>{' '}
            muestra la disponibilidad del dominio TLD en un cuadro para facilitar la búsqueda de varios resultados a la
            vez.
          </IconGroup>
        </Column>

        <Column>
          <IconGroup
            eventInfo="domain_generator_h3"
            href="/domain/generator/"
            icon="DomainNameGenerator"
            title="Generador de nombre de dominio">
            Nuestro{' '}
            <Link onClick={() => event('internal', 'click', 'domain_generator_p')} to="/domain/generator/">
              generador de dominio
            </Link>{' '}
            añade miles de comienzos y terminaciones populares a su búsqueda de nombres de dominio para encontrar .coms
            disponibles.
          </IconGroup>
        </Column>

        <Column>
          <IconGroup eventInfo="domain_sale_h3" href="/domain/sale/" icon="Sale" title="Dominios para la venta">
            Busque millones de nombres de dominios para la venta. Trabajamos con grandes firmas del mercado, como
            AfterNic, GoDaddy y Sedo. Las búsquedas impulsadas por inteligencia artificial le ayudan a hallar nombres
            magníficos relacionados con el nombre de su dominio.{' '}
          </IconGroup>
        </Column>

        <Column>
          <IconGroup
            eventInfo="domain_expired_h3"
            href="/domain/expired/"
            icon="Availability"
            title="Nombres de dominios expirados">
            Buscar nombres de dominio que están a punto de expirar. Algunos registradores le permiten comprar el nombre
            de dominio de inmediato, a veces los nombres van a una subasta, y otros ordenan el nombre por usted.
          </IconGroup>
        </Column>

        <Column>
          <IconGroup icon="Coupon" title="Registro de nombre de dominio .com">
            Aplicamos automáticamente un descuento cuando registra su primer nombre .com en GoDaddy. Aceptamos Visa,
            MasterCard, <span className="smallCaps">AMEX</span> y PayPal.
          </IconGroup>
        </Column>

        <Column>
          <IconGroup icon="Lock" title="Privado y seguro">
            Todo el tráfico al sitio está encriptado. Los resultados de búsqueda de dominio no se registran. Presione
            Regresar para registrar su nombre de dominio. Utilizamos Google Analytics, que usa cookies, para ver cómo
            usted utiliza este sitio web a lo largo del tiempo.
          </IconGroup>
        </Column>
      </WideLayout>

      <WideLayout>
        <Column>
          <IconGroup headerTag="h2" icon="Availability" title="Disponibilidad del nombre de dominio">
            La búsqueda instantánea de dominio verifica la disponibilidad del dominio haciendo una consulta{' '}
            <span className="smallCaps"> DNS </span> para obtener resultados de búsqueda lo más rápido posible. Las
            búsquedas <span className="smallCaps">WHOIS</span> son mucho más lentas que las consultas{' '}
            <span className="smallCaps">DNS</span>, pero proveen más información sobre el nombre registrado.
          </IconGroup>
        </Column>

        <Column>
          <SmallIconGroup icon={{name: 'DomainUnavailable', background: colors.red}}>
            Los resultados en <strong className="red">Rojo</strong> significan que el nombre fue tomado. Efectúe una
            búsqueda <span className="smallCaps">WHOIS</span> para ver cuándo se expira el registro actual.
          </SmallIconGroup>
          <SmallIconGroup icon={{name: 'DomainAvailable', background: colors.green}}>
            ¡Los resultados en <strong className="green">Verde</strong> indican que el nombre del dominio está
            disponible!
          </SmallIconGroup>
          <SmallIconGroup icon={{name: 'DomainForSale', background: colors.blue}}>
            Los resultados en <strong className="blue">Azul</strong> muestran los nombres de dominios en venta.
            Cómprelos de uno de nuestros socios de subasta.
          </SmallIconGroup>
        </Column>
      </WideLayout>
    </Controller>
  </Page>
);
