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
Object.defineProperty(exports, "__esModule", { value: true });
exports.onCreateWebpackConfig = void 0;
var onCreateWebpackConfig = function (_a) {
    var getConfig = _a.getConfig, stage = _a.stage;
    var config = getConfig();
    if (!stage.startsWith('develop')) {
        return;
    }
    var alias = {
        'react-redux': process.env.NODE_ENV === 'development' ? 'react-redux/lib' : 'react-redux',
    };
    if (config.resolve && config.resolve.alias) {
        config.resolve.alias = __assign(__assign({}, config.resolve.alias), alias);
    }
    else {
        config.resolve.alias = alias;
    }
};
exports.onCreateWebpackConfig = onCreateWebpackConfig;
//# sourceMappingURL=gatsby-node.js.map