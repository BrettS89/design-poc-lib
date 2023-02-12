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
import { addImportantToStyles } from '../../utilities';
import { useStyles } from '../../Provider';
var Button = function (_a) {
    var _b, _c, _d, _e, _f;
    var children = _a.children, _g = _a.styles, styles = _g === void 0 ? {} : _g, disabled = _a.disabled, _h = _a.variant, variant = _h === void 0 ? 'base' : _h;
    var component = useStyles('button');
    var themeStyles = (_b = component === null || component === void 0 ? void 0 : component.styles) !== null && _b !== void 0 ? _b : {};
    var variantDefaultStyles = (_c = defaultStyles[variant]) !== null && _c !== void 0 ? _c : defaultStyles.base;
    var variantThemeStyles = (_d = themeStyles[variant]) !== null && _d !== void 0 ? _d : {};
    var variantPropsStyles = (_e = styles[variant]) !== null && _e !== void 0 ? _e : {};
    var allStyles = __assign(__assign(__assign({}, _.omitBy(variantDefaultStyles, _.isNil)), _.omitBy(variantThemeStyles, _.isNil)), _.omitBy(variantPropsStyles, _.isNil));
    var disabledStyles = (_f = allStyles.disabled) !== null && _f !== void 0 ? _f : {};
    var Component = styled.button({
        '&:disabled': addImportantToStyles(disabledStyles),
    });
    return (_jsx(Component, __assign({ style: allStyles, disabled: disabled }, { children: children })));
};
export default Button;
