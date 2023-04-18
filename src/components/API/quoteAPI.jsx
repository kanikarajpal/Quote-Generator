export const quoteAPI = async (endpoint) => {
  const options = {
    method: "GET",
  };

  const link = `https://api.quotable.io/${endpoint}`;

  const raw = await fetch(link, options);
  const data = await raw.json();

  return { data, isLoading: !data };
};
