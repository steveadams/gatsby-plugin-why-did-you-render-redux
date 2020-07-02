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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onClientEntry = void 0;
var why_did_you_render_1 = __importDefault(require("@welldone-software/why-did-you-render"));
var react_1 = __importDefault(require("react"));
var defaultOptions = {
    trackAllPureComponents: true,
};
exports.onClientEntry = function (_, pluginOptions) {
    if (pluginOptions === void 0) { pluginOptions = defaultOptions; }
    if (process.env.NODE_ENV !== 'production') {
        var extraHooks = [];
        var include = [];
        var exclude = [];
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
                extraHooks = __spreadArrays((pluginOptions.trackExtraHooks || []), [
                    [require('react-redux/lib'), 'useSelector'],
                ]);
            }
        }
        catch (error) {
            console.error(error);
            console.error("Couldn't load react-redux/lib; have you installed it in your project?");
        }
        console.log(__assign(__assign({}, pluginOptions), { trackExtraHooks: extraHooks }));
        why_did_you_render_1.default(react_1.default, __assign(__assign({}, pluginOptions), { trackExtraHooks: extraHooks, include: include, exclude: exclude }));
    }
};
//# sourceMappingURL=gatsby-browser.js.map