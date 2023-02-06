export var addImportantToStyles = function (styles) {
    return Object.entries(styles).reduce(function (acc, _a) {
        var k = _a[0], v = _a[1];
        var val = typeof v === 'string' ? v : "".concat(v, "px");
        acc[k] = "".concat(val, "!important");
        return acc;
    }, {});
};
