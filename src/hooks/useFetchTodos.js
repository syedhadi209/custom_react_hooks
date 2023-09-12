import { useEffect, useState } from "react";

const useFetchTodos = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);
  console.log(data);
  return { data };
};

export default useFetchTodos;
