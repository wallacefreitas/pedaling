import { useCallback } from "react";

interface OptionsProps {
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: object;
  token?: string;
}

export const useFetch = (url: string, options: OptionsProps) => {
  const { body, method, token } = options
  const executeUseFetchCallback = async () => {
    return await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...(token ? { "Authorization": `Bearer ${token}` } : {})
      },
      body: body ? JSON.stringify(body) : null,
    })
    .then(response => response.json())
    .then(data => data)
  }

  return useCallback(async () => {
    return await executeUseFetchCallback()
  }, [])
}