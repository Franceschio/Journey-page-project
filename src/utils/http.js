// const API = "https://api.musement.com/api/v3/activities.json";
const API = "https://fakestoreapi.com/products/";

export const GET = async (ENDPOINT) => {
  const res = await fetch(API + ENDPOINT);
  const data = await res.json();
  return data;
};
