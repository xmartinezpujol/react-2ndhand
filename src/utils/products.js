export const getProductById = (products, pathId) => (products.filter(product => product.id === pathId))[0];

