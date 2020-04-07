import unfetch from "isomorphic-unfetch";
import withRetry from "@zeit/fetch-retry";

type Fetcher = (input: RequestInfo, init?: RequestInit) => Promise<Response>;

export const fetch: Fetcher = withRetry(unfetch);

let token = ``;

const getToken = async (petfinderKey: string, petfinderSecret: string) => {
  const response = await fetch(`https://api.petfinder.com/v2/oauth2/token`, {
    body: `grant_type=client_credentials&client_id=${petfinderKey}&client_secret=${petfinderSecret}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
  });
  const data = await response.json();
  return data.access_token;
};

export const fetcher = async <T extends {}>(
  input: RequestInfo,
  init?: RequestInit
): Promise<T> => {
  const opts = {
    ...init,
    headers: {
      ...(init || {}).headers,
      authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(input, opts);
  if (response.status === 401) {
    token = await getToken(
      process.env.PETFINDER_KEY as string,
      process.env.PETFINDER_SECRET as string
    );
    return fetcher(input, opts);
  } else {
    return response.json();
  }
};
