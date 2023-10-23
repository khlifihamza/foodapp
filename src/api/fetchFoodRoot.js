export default async function fetchFood(query) {
  const res = await fetch(
    `${import.meta.env.VITE_URL}?query=${query}&apiKey=${
      import.meta.env.VITE_APIKEY
    }`
  );
  const data = await res.json();
  return JSON.stringify(data);
}
