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
import { addImportantToStyles } from '../../utilities';
var Button = function (_a) {
    var _b;
    var children = _a.children, _c = _a.styles, styles = _c === void 0 ? {} : _c, disabled = _a.disabled;
    //@ts-ignore
    var themeStyles = (_b = theme.button) !== null && _b !== void 0 ? _b : {};
    var allStyles = __assign(__assign(__assign({}, baseStyles._base), themeStyles), styles);
    //@ts-ignore
    var disabledStyles = __assign(__assign(__assign({}, baseStyles.disabled), (themeStyles.disabled || {})), (styles.disabled || {}));
    var Component = styled.button({
        '&:disabled': addImportantToStyles(disabledStyles),
    });
    return (_jsx(Component, __assign({ style: allStyles, disabled: disabled }, { children: children })));
};
export default Button;
