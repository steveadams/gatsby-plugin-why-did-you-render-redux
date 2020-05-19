/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';
import {Helmet} from 'react-helmet';

const languages = ['en', 'es', 'fr', 'pt', 'ru', 'zh'];

function Alternates() {
  return (
    <Helmet>
      {/* hints to help google index multiple languages: https://support.google.com/webmasters/answer/189077?hl=en */}
      <link rel="alternate" hrefLang="x-default" href="https://instantdomainsearch.com/" />
      {languages.map(lang => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={`https://instantdomainsearch.com/` + (lang === 'en' ? '' : `${lang}/`)}
        />
      ))}
    </Helmet>
  );
}

export default React.memo(Alternates);
