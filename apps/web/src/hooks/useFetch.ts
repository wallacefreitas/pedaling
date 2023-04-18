import { useEffect, useState } from "react";

export default function useFetch(url: string) {
  const [data, setData] = useState({});

  useEffect(() => {
    const data = {
      username: "admin",
      password: "admin",
    }

    const token = fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => setData(data) )

  }, [url])

  return [data, setData]
}