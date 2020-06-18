/* Copyright 2005-present Instant Domain Search, Inc. */

import {graphql, Link} from 'gatsby';
import {css, cx} from 'linaria';
import * as React from 'react';

interface Article {
  fields: {path: string};
  frontmatter: {headline: string};
}

export interface ArticlesData {
  data: {allJavascriptFrontmatter: {nodes: Article[]}};
}

function Articles({
  data: {
    allJavascriptFrontmatter: {nodes: articles},
  },
  space = false,
}: ArticlesData & {space?: boolean}) {
  return (
    <ul>
      {articles.map(({fields: {path}, frontmatter: {headline}}) => (
        <li
          className={cx(
            space &&
              css`
                margin-top: 0.5em;
                margin-bottom: 0.5em;
              `,
          )}
          key={path}>
          <Link to={path}>{headline}</Link>
        </li>
      ))}
    </ul>
  );
}

export const articlesFragment = graphql`
  fragment ArticlesFragment on Query {
    allJavascriptFrontmatter(filter: {fields: {lang: {eq: $lang}}}, sort: {fields: [frontmatter___date], order: DESC}) {
      nodes {
        fields {
          path
        }
        frontmatter {
          headline
          date
        }
      }
    }
  }
`;

export default React.memo(Articles);
