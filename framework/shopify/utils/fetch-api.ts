type FetchParams = {
  query: string;
};

const fetchApi = async ({ query }: FetchParams) => {
  const url = "http://localhost:4000/graphql";

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });

  const { data, errors } = await res.json();

  if (errors) {
    // ?? -> if 'errors[0].message' is null or undefined, return 'errors.message'
    // || is checking if left hand expression is null, undefined, "", 0, false
    throw new Error(errors[0].message ?? errors.message);
  }
  return { data };
};

export default fetchApi;
