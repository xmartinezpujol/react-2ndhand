export const buildFullPath = (path) => {
  return `${Cypress.config('baseUrl')}${path}`
};

export const productList = () => `list/`;
export const productDetail = (productId = '') => `list/${productId}`;
