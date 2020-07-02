import whyDidYouRender from '@welldone-software/why-did-you-render';
import type {WhyDidYouRenderOptions} from '@welldone-software/why-did-you-render';
import React from 'react';

// Only primitive values can be interpeted properly from JSON.
// TODO: Build `new RegExp` instances from include/exclude strings.
const defaultOptions: Omit<WhyDidYouRenderOptions, 'include' | 'exclude' | 'notifier'> = {
  trackAllPureComponents: true,
};

export const onClientEntry = (_: undefined, pluginOptions = defaultOptions): void => {
  console.log('onClientEntry why did you render?', {pluginOptions});

  if (process.env.NODE_ENV !== 'production') {
    let extraHooks: [unknown, string][] = [];

    try {
      if (Object.prototype.hasOwnProperty.call(pluginOptions, 'trackUseSelector')) {
        extraHooks = [
          ...(pluginOptions.trackExtraHooks || []),
          [require('react-redux/lib'), 'useSelector'],
        ];
      }
    } catch (error) {
      console.error(error);
      console.warn("Couldn't load react-redux/lib; have you installed it in your project?");
    }

    whyDidYouRender(React, {...pluginOptions, trackExtraHooks: extraHooks});
  }
};
