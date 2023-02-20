import React, { useEffect, useState } from "react";

const Image = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/allPosts");
      const jsonData = await response.json();

      if (response.ok) {
        setData(jsonData);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div>
        {data &&
          data.map((item) => (
            <div key={item._id}>
              <h2>{item.name}</h2>
              <img src={item.img} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Image;
