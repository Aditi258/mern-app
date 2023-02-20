import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/allUsers");
      const jsonData = await response.json();

      if (response.ok) {
        setData(jsonData);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div>{data && data.map((item) => <p key={item._id}>{item.name}</p>)}</div>
    </>
  );
};

export default Gallery;
