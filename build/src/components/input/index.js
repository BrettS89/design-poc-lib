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
import baseStyles from './styles';
import theme from '../../styles/theme';
var Input = function (_a) {
    var _b;
    var type = _a.type, placeholder = _a.placeholder, _c = _a.styles, styles = _c === void 0 ? {} : _c, error = _a.error;
    //@ts-ignore
    var themeStyles = (_b = theme.input) !== null && _b !== void 0 ? _b : {};
    var allStyles = __assign(__assign(__assign({}, baseStyles._base), themeStyles), styles);
    var errorStyles = __assign(__assign(__assign(__assign({}, allStyles), baseStyles.error), (themeStyles.error || {})), (styles.error || {}));
    var Component = styled.input({
        '&::placeholder': allStyles.placeholder,
        '&:focus-within': allStyles.focus,
    });
    var ErrorComponent = styled.input({
        '&::placeholder': errorStyles.placeholder,
        '&:focus-within': errorStyles.focus,
    });
    if (error) {
        return (_jsx(ErrorComponent, { style: errorStyles, placeholder: placeholder, type: type }));
    }
    return (_jsx(Component, { style: allStyles, placeholder: placeholder, type: type }));
};
export default Input;
