import whyDidYouRender from '@welldone-software/why-did-you-render';
import type {WhyDidYouRenderOptions} from '@welldone-software/why-did-you-render';
import React from 'react';

const defaultOptions: Omit<WhyDidYouRenderOptions, 'include' | 'exclude' | 'notifier'> & {
  include?: string[];
  exclude?: string[];
  trackUseSelector?: boolean;
} = {
  trackAllPureComponents: true,
};

export const onClientEntry = (_: undefined, pluginOptions = defaultOptions): void => {
  if (process.env.NODE_ENV !== 'production') {
    let extraHooks: [unknown, string][] = [];
    let include: RegExp[] = [];
    let exclude: RegExp[] = [];

    if (pluginOptions.include) {
      try {
        include = pluginOptions.include.map(include => new RegExp(include));
      } catch (error) {
        console.error(error);
        console.error(
          `Unable to construct a RegExp instance from ${JSON.stringify(pluginOptions.include)}`,
          pluginOptions.include,
        );
      }
    }

    if (pluginOptions.exclude) {
      try {
        exclude = pluginOptions.exclude.map(exclude => new RegExp(exclude));
      } catch (error) {
        console.error(error);
        console.error(
          `Unable to construct a RegExp instance from ${JSON.stringify(pluginOptions.exclude)}`,
          pluginOptions.exclude,
        );
      }
    }

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

    console.log({...pluginOptions, trackExtraHooks: extraHooks});

    whyDidYouRender(React, {...pluginOptions, trackExtraHooks: extraHooks, include, exclude});
  }
};
