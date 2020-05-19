/* Copyright 2005-present Instant Domain Search, Inc. */

exports.onCreateWebpackConfig = ({getConfig, stage}) => {
  const config = getConfig();
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    };
  }
};

function fixExtensionPath(path) {
  return path.replace(/^\/domain\/extensions\/(\w+)\/$/, '/domain/extensions/.$1/');
}

const pathWordsToTranslate = ['articlesUrl'];

function translatePath(path, lang) {
  const strings = require(`./src/locales/${lang}`);
  for (const word of pathWordsToTranslate) {
    const translation = strings[word];
    if (!translation) continue;
    const original = require(`./src/locales/en`)[word];
    path = path.replace(new RegExp(`/${original}/`, 'gi'), `/${translation}/`);
  }
  return path;
}

exports.onCreatePage = ({page, actions: {createPage, deletePage}}) => {
  // Insert . in /domain/extensions/.[com/net/org/...]
  const newPage = Object.assign({}, page, {path: fixExtensionPath(page.path)});
  if (newPage.path !== page.path) {
    deletePage(page);
    createPage(newPage);
  }

  // Rewrite /page.es to /es/page and add lang context
  const match = /^(.*?)(?:\/index)?\.([a-z]{2})\/$/.exec(page.path);
  if (match) {
    const [, path, lang] = match;
    deletePage(page);
    createPage({...page, path: translatePath(`/${lang}${path}/`, lang), context: {...page.context, lang}});
  } else {
    deletePage(page);
    createPage({...page, context: {...page.context, lang: 'en'}});
  }
};

// Rewrite /articles/title.es to /es/articulos/title and add lang field
exports.onCreateNode = ({node, actions: {createNodeField}}) => {
  if (node.frontmatter) {
    const match = /^(.*?)\.([a-z]{2})$/.exec(node.node.name);
    if (match) {
      const [, name, lang] = match;
      createNodeField({node, name: 'lang', value: lang});
      createNodeField({node, name: 'path', value: translatePath(`/${lang}/articles/${name}/`, lang)});
    } else {
      createNodeField({node, name: 'lang', value: 'en'});
      createNodeField({node, name: 'path', value: `/articles/${node.node.name}/`});
    }
  }
};
