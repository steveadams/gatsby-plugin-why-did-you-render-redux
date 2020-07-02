import whyDidYouRender from '@welldone-software/why-did-you-render';
import type {WhyDidYouRenderOptions} from '@welldone-software/why-did-you-render';
import React from 'react';

// Only primitive values can be interpeted properly from JSON.
// TODO: Build `new RegExp` instances from include/exclude strings.
const defaultOptions: WhyDidYouRenderOptions & {
  trackUseSelector?: boolean;
} = {
  trackAllPureComponents: true,
};

export const onClientEntry = (_: undefined, pluginOptions = defaultOptions): void => {
  if (process.env.NODE_ENV !== 'production') {
    let extraHooks: [unknown, string][] = [];

    try {
      if (pluginOptions.trackUseSelector) {
        extraHooks = [
          ...(pluginOptions.trackExtraHooks || []),
          [require('react-redux/lib'), 'useSelector'],
        ];
      }
    } catch (error) {
      console.error(error);
      console.error("Couldn't load react-redux/lib; have you installed it in your project?");
    }

    whyDidYouRender(React, {...pluginOptions, trackExtraHooks: extraHooks});
  }
};
