import { getAuth } from "firebase/auth";

const domain = "http://localhost:3001";

export const fetcher = async (url, method = "GET", body) => {
  const token = await getAuth()?.currentUser?.getIdToken();
  // stringify body
  const bodyOption = { body: body ? JSON.stringify(body) : undefined };
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  const res = await fetch(domain + url, {
    method,
    ...headers,
    ...(body ? bodyOption : {}),
  });

  const data = res.json();
  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};
