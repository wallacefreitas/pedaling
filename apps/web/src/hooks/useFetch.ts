import { useEffect, useState } from "react";

interface IOptionsData {
  method: "GET" | "POST" | "PUT" | "DELETE";
  body: object;
  isFetch: boolean;
}

export const useFetch = (url: string, options: IOptionsData) => {
  const [response, setResponse] = useState({} as any);
  const { body, method, isFetch } = options

  useEffect(() => {
    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body),
    })
    .then(response => response.json())
    .then(data => setResponse(data))
  }, [isFetch])

  return response
}