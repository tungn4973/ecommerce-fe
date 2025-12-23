const apiURL = process.env.REACT_APP_API_URL;

export const getAllProduct = async () => {
  try {
    if (!apiURL) return { Products: [] };
    const res = await fetch(`${apiURL}/products`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.warn("getAllProduct fetch failed:", error);
    return { Products: [] };
  }
};

export const productByPrice = async (price) => {
  try {
    if (!apiURL) return { Products: [] };
    const res = await fetch(`${apiURL}/products?maxPrice=${price}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.warn("productByPrice fetch failed:", error);
    return { Products: [] };
  }
};

export const productByCategory = async (catId) => {
  try {
    if (!apiURL) return { Products: [] };
    const res = await fetch(`${apiURL}/products/category/${catId}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.warn("productByCategory fetch failed:", error);
    return { Products: [] };
  }
};

export default { getAllProduct, productByPrice, productByCategory };
