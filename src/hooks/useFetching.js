import { useState } from "react";

export const useFetching = () => {
  const [loading, setLoading] = useState(true);

  const request = async (url, method = "GET", body = null, headers = { "Content-Type": "application/json" }) => {
    try {
      const response = await fetch(url, { method, body, headers });

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const data = await response.json();

      return data;
    } catch (e) {
      throw e;
    } finally {
      setLoading(false);
    }
  };

  return { request, loading, setLoading };
};
