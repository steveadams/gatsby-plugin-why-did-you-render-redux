import type { WhyDidYouRenderOptions } from '@welldone-software/why-did-you-render';
export declare const onClientEntry: (_: undefined, pluginOptions?: Omit<WhyDidYouRenderOptions, "include" | "exclude" | "notifier"> & {
    include?: string[] | undefined;
    exclude?: string[] | undefined;
    trackUseSelector?: boolean | undefined;
}) => void;
//# sourceMappingURL=gatsby-browser.d.ts.map