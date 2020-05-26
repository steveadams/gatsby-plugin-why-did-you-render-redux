/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';
import {Helmet} from 'react-helmet';

const languages = ['en', 'es', 'fr', 'pt', 'ru', 'zh'];

function Alternates() {
  return (
    <Helmet>
      {/* hints to help google index multiple languages: https://support.google.com/webmasters/answer/189077?hl=en */}
      <link href="https://instantdomainsearch.com/" hrefLang="x-default" rel="alternate" />
      {languages.map(lang => (
        <link
          href={`https://instantdomainsearch.com/` + (lang === 'en' ? '' : `${lang}/`)}
          hrefLang={lang}
          key={lang}
          rel="alternate"
        />
      ))}
    </Helmet>
  );
}

export default React.memo(Alternates);
