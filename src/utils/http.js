const API = "https://api.musement.com/api/v3/activities.json";

export const GET = async () => {
  const res = await fetch(API);
  const data = await res.json();
  return data;
};
