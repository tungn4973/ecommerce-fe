const apiURL = process.env.REACT_APP_API_URL;

export const getAllCategory = async () => {
  try {
    if (!apiURL) return { Categories: [] };
    const res = await fetch(`${apiURL}/categories`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.warn("getAllCategory fetch failed:", error);
    return { Categories: [] };
  }
};

export default { getAllCategory };
