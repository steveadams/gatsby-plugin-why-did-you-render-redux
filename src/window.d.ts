declare const pageTldTags: 'popular' | undefined;

interface Window {
  // analytics
  gaData: {
    [property: string]: {
      experiments: {[id: string]: '1' | '0'};
    };
  };
  init: () => void | undefined;

  // react
  __REDUX_DEVTOOLS_EXTENSION__: () => any;
}
