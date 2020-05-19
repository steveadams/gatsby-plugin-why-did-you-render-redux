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
      <Question>Como funciona a Pesquisa de Domínio Instantânea?</Question>
      <Answer>
        <p>
          Todas as noites descarregamos listas enormes de nomes registados da VeriSign e outros provedores gTLD. Quase
          todos os nomes de domínio em utilização encontram-se incluídos nestas listas, chamadas arquivos de zona. Nós
          indexamos os arquivos de zona e hospedamos os índices em centrais de dados à volta do mundo.
        </p>

        <p>
          Quando visita pela primeira vez o nosso sítio web, determinamos qual dos nossos servidores se encontra mais
          próximo de si e criamos uma ligação segura do seu navegador ao nosso servidor. Enquanto digita, pesquisamos no
          nosso índice a correspondência exata e tentamos ainda apresentar sugestões úteis cuja compra possa
          interessar-lhe.
        </p>

        <p>
          O sítio web encontra-se hospedado nos <a href="https://cloud.google.com/">Google Cloud Platform</a>.
        </p>
      </Answer>
      <Question>
        O nome que encontrei apresenta-se como disponível no vosso sítio web, mas na verdade não está. Porquê?
      </Question>
      <Answer>
        <p>
          De vez em quando, iremos listar nomes como estando disponíveis, quando na realidade já foram tomados. Isso
          pode acontecer quando:
        </p>

        <ul>
          <li>A propriedade do nome está a ser disputada.</li>
          <li>Está prestes a expirar.</li>
          <li>Está no “Período de Redenção”, i.e., expirou recentemente.</li>
          <li>O nome não tem servidores de nomes.</li>
        </ul>

        <p>
          Por outro lado, nunca devemos informar que um nome se encontra tomado quando o mesmo está realmente
          disponível. Nós apresentamos os nomes como tomados apenas quando se encontram em boa posição e tenham
          servidores de nomes associados.
        </p>
      </Answer>
      <Question>Como é que a Pesquisa de Domínio Instantânea Ganha Dinheiro?</Question>
      <Answer>
        <p>
          Nós ganhamos dinheiro quando compra nomes de domínio através de um registador de domínios ao qual chega
          através da nossa ligação. Estas taxas de referência são aquilo que mantém o sítio web em funcionamento.
        </p>
      </Answer>
      <Question>Como escolher um bom nome de domínio?</Question>
      <Answer>
        <p>
          Leia o nosso artigo{' '}
          <Link to="/articles/choosing-a-domain-name/">Mestre do Seu Domínio: Escolher um Nome de Domínio</Link>.
        </p>
      </Answer>
      <Question>Alguém roubou um domínio que encontrei no vosso sítio web. Como posso resolver isto?</Question>
      <Answer>
        <p>
          Trata-se, provavelmente, de uma coincidência. Milhões de domínios são registados e expiram todos os dias. Por
          favor, anote a data e hora da sua pesquisa. Em seguida, compare-a com a data e hora de facto em que o domínio
          foi registado. Preocupamo-nos com a sua{' '}
          <a href="#qual--a-vossa-poltica-de-privacidade-relativamente-aos-resultados-da-minha-pesquisa">privacidade</a>
          .
        </p>

        <p>
          Pode obter a data a partir do registo WHOIS do domínio. Este registo irá mostrar-lhe também qual foi o
          Registador de Domínios da ICANN usado para registar o nome. Para descobrir a hora exata em que o domínio foi
          registado, encontre as informações de contacto do registador de domínios e telefone-lhe ou envie-lhe um email.
          Lembre-se de lhes perguntar qual é o fuso horário da hora de registo que lhe deram.
        </p>

        <p>
          Se a hora do registo for muito próxima a seguir ao momento em que pesquisou o nome de domínio, envie-nos um
          email para <a href="mailto:help@instantdomainsearch.com">help@instantdomainsearch.com</a> com o nome do
          domínio e a hora em que o pesquisou no nosso sítio web. Levamos muito a sério estes problemas.
        </p>
      </Answer>
      <Question>Qual é a vossa política de privacidade relativamente aos resultados da minha pesquisa?</Question>
      <Answer>
        <p>
          É do nosso interesse mantermos os resultados da pesquisa privados. Nós ganhamos dinheiro quando alguém compra
          um nome que encontrou no nosso sítio web através de um dos nossos fornecedores listados. Não estamos no
          negócio de revenda de domínios. É por isso que seguimos as seguintes regras:
        </p>

        <ul>
          <li>
            As suas pesquisas não são partilhadas ou distribuídas, nunca. Não contactamos qualquer terceiro para
            verificar a disponibilidade do domínio.
          </li>
          <li>O nosso serviço não realiza consultas WHOIS sobre os nomes que pesquisa.</li>
        </ul>

        <p>
          Tentamos selecionar os melhores fornecedores da indústria, mas não podemos responsabilizar-nos pelo uso ou uso
          indevido das suas pesquisas de domínio a partir do momento em que clicar sobre a ligação deles no nosso sítio
          web.
        </p>

        <p>
          A Pesquisa de Domínio Instantânea encripta agora todas as suas pesquisas, por defeito, com HTTPS, a fim de
          impedir que outras pessoas na sua rede consultem as mesmas.
        </p>
      </Answer>
      <Question>O que é que as outras pessoas dizem sobre a Pesquisa de Domínio Instantânea?</Question>
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
    title="Perguntas Frequentes"
    description="Perguntas frequentes e informações de privacidade referentes ao Pesquisa de Domínio Instantânea.">
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <TwoColumnLayout>
        <>
          <h1>Perguntas Frequentes</h1>
          <FAQ />
        </>
        <>
          <h4>Índice de Perguntas Frequentes</h4>
          <ul className="index">
            <FAQ toc />
          </ul>
        </>
      </TwoColumnLayout>
    </Controller>
  </Page>
);
