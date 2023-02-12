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
import { jsx as _jsx } from "react/jsx-runtime";
import styled from '@emotion/styled';
import _ from 'lodash';
import defaultStyles from './styles';
import { useStyles } from '../../Provider';
import { addImportantToStyles } from '../../utilities';
var Input = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var type = _a.type, placeholder = _a.placeholder, _j = _a.styles, styles = _j === void 0 ? {} : _j, error = _a.error;
    var component = useStyles('input');
    var themeStyles = (_b = component === null || component === void 0 ? void 0 : component.styles) !== null && _b !== void 0 ? _b : {};
    var baseStyles = __assign(__assign(__assign({}, _.omitBy((_c = defaultStyles.base) !== null && _c !== void 0 ? _c : {}, _.isNil)), _.omitBy((_d = themeStyles.base) !== null && _d !== void 0 ? _d : {}, _.isNil)), _.omitBy((_e = styles.base) !== null && _e !== void 0 ? _e : {}, _.isNil));
    var errorStyles = __assign(__assign(__assign(__assign({}, _.omitBy(baseStyles, _.isNil)), _.omitBy((_f = defaultStyles.error) !== null && _f !== void 0 ? _f : {}, _.isNil)), _.omitBy((_g = themeStyles.error) !== null && _g !== void 0 ? _g : {}, _.isNil)), _.omitBy((_h = styles.error) !== null && _h !== void 0 ? _h : {}, _.isNil));
    var Component = styled.input({
        '&::placeholder': addImportantToStyles(baseStyles.placeholder),
        '&:focus-within': addImportantToStyles(baseStyles.focus),
    });
    var ErrorComponent = styled.input({
        '&::placeholder': addImportantToStyles(errorStyles.placeholder),
        '&:focus-within': addImportantToStyles(errorStyles.focus),
    });
    if (error) {
        return (_jsx(ErrorComponent, { style: errorStyles, placeholder: placeholder, type: type }));
    }
    return (_jsx(Component, { style: baseStyles, placeholder: placeholder, type: type }));
};
export default Input;
