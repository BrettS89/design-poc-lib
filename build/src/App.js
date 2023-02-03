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
import './App.css';
import Input from './components/input';
function App() {
    return (_jsx("div", __assign({ className: "App" }, { children: _jsx(Input, { placeholder: 'Enter your name' }) })));
}
;
export default App;
