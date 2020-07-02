export const onCreateWebpackConfig = ({getConfig, stage}: OnCreateWebpackConfig): void => {
  const config = getConfig();

  if (!stage.startsWith('develop')) {
    return;
  }

  const alias = {
    'react-redux': process.env.NODE_ENV === 'development' ? 'react-redux/lib' : 'react-redux',
  };

  if (config.resolve && config.resolve.alias) {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...alias,
    };
  } else {
    config.resolve.alias = alias;
  }
};
