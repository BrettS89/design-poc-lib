export const addImportantToStyles = (styles: Record<string, string>) => {
  return Object.entries(styles).reduce((acc, [k, v]) => {
    let val = typeof v === 'string' ? v : `${v}px`;

    acc[k] = `${val}!important`;
    return acc;
  }, {});
};
