export const addImportantToStyles = (styles: Record<string, string>) => {
  return Object.entries(styles).reduce((acc, [k, v]) => {
    acc[k] = `${v}!important`;
    return acc;
  }, {});
};
