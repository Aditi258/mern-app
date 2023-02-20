import React, { useState } from "react";
//import { NavLink } from "react-router-dom";
import FileBase64 from "react-file-base64";

const PostImage = () => {
  const [post, setPost] = useState({
    name: "",
    detail: "",
    img: "",
  });

  const PostData = async (e) => {
    e.preventDefault();
    const { name, detail, img } = post;
    const res = await fetch("/uploadphoto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        detail,
        img,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Post Successful");
      console.log("Post Successful");
      //history.pushState("")
    }
  };

  return (
    <>
      <form method="POST" className="register-form" id="register-form">
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="off"
          value={post.name}
          onChange={(e) => setPost({ ...post, name: e.target.value })}
          placeholder="Post Name"
        />
        <input
          type="text"
          name="detail"
          id="detail"
          autoComplete="off"
          value={post.detail}
          onChange={(e) => setPost({ ...post, detail: e.target.value })}
          placeholder="Description"
        />
        <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }) => setPost({ ...post, img: base64 })}
        />
        <input
          type="submit"
          name="signup"
          id="signup"
          value="Submit"
          onClick={PostData}
        />
      </form>
    </>
  );
};

export default PostImage;
