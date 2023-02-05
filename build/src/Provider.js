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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx } from "react/jsx-runtime";
import React, { useContext } from 'react';
import axios from 'axios';
var DesignSystemContext = React.createContext({ styles: [], status: { isLoading: false, isError: false, error: null } });
var DesignSystemUpdateContext = React.createContext((function () { return []; }));
export var useDesignSystem = function (designSystemId) {
    var fn = useContext(DesignSystemUpdateContext);
    var ctx = useContext(DesignSystemContext);
    React.useEffect(function () {
        fn(designSystemId);
    }, []);
    return ctx.status;
};
export var useStyles = function (componentName) {
    var styles = useContext(DesignSystemContext).styles;
    var component = styles.find(function (el) { return el.componentName === componentName; }) || {};
    return component;
};
export var DesignSystemProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState([]), styles = _b[0], setStyles = _b[1];
    var _c = React.useState({ isLoading: false, isError: false, error: null }), status = _c[0], setStatus = _c[1];
    var setDesignSystem = function (designSystemId) { return __awaiter(void 0, void 0, void 0, function () {
        var designSystem, data, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    setStatus(__assign(__assign({}, status), { isLoading: true }));
                    return [4 /*yield*/, axios.get("http://localhost:3030/design/system/".concat(designSystemId))];
                case 1:
                    designSystem = _a.sent();
                    return [4 /*yield*/, axios.get("http://localhost:3030/design/styles?designSystemId=".concat(designSystem._id))];
                case 2:
                    data = (_a.sent()).data;
                    setStyles(data.data);
                    setStatus(__assign(__assign({}, status), { isLoading: false }));
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    setStatus(__assign(__assign({}, status), { isLoading: false, isError: true, error: e_1.message }));
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (_jsx(DesignSystemContext.Provider, __assign({ value: { styles: styles, status: status } }, { children: _jsx(DesignSystemUpdateContext.Provider, __assign({ value: setDesignSystem }, { children: children })) })));
};
