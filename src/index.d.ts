type WebpackConfig = {
  resolve: {[key: unknown]: unknown} & {
    alias: Record<string, string>;
  };
};

type OnCreateWebpackConfig = {
  getConfig: () => WebpackConfig;
  stage: string;
};
