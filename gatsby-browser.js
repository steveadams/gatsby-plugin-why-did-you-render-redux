"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onClientEntry = void 0;
var react_1 = __importDefault(require("react"));
var defaultOptions = {
    trackAllPureComponents: true,
};
var onClientEntry = function (_, pluginOptions) {
    if (pluginOptions === void 0) { pluginOptions = defaultOptions; }
    if (process.env.NODE_ENV !== 'production') {
        var extraHooks = [];
        var include = [];
        var exclude = [];
        var whyDidYouRender = require('why-did-you-render');
        if (pluginOptions.include) {
            try {
                include = pluginOptions.include.map(function (include) { return new RegExp(include); });
            }
            catch (error) {
                console.error(error);
                console.error("Unable to construct a RegExp instance from " + JSON.stringify(pluginOptions.include), pluginOptions.include);
            }
        }
        if (pluginOptions.exclude) {
            try {
                exclude = pluginOptions.exclude.map(function (exclude) { return new RegExp(exclude); });
            }
            catch (error) {
                console.error(error);
                console.error("Unable to construct a RegExp instance from " + JSON.stringify(pluginOptions.exclude), pluginOptions.exclude);
            }
        }
        try {
            if (pluginOptions.trackUseSelector) {
                extraHooks = __spreadArray(__spreadArray([], (pluginOptions.trackExtraHooks || []), true), [
                    [require('react-redux/lib'), 'useSelector'],
                ], false);
            }
        }
        catch (error) {
            console.error(error);
            console.error("Couldn't load react-redux/lib; have you installed it in your project?");
        }
        whyDidYouRender(react_1.default, __assign(__assign({}, pluginOptions), { trackExtraHooks: extraHooks, include: include, exclude: exclude }));
    }
};
exports.onClientEntry = onClientEntry;
//# sourceMappingURL=gatsby-browser.js.map