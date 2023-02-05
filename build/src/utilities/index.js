export var addImportantToStyles = function (styles) {
    return Object.entries(styles).reduce(function (acc, _a) {
        var k = _a[0], v = _a[1];
        acc[k] = "".concat(v, "!important");
        return acc;
    }, {});
};
