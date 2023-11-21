import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { SingleBlogCard } from "../comp";

const BlogContainer = () => {
  const [song, setSong] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "songs"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setSong(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
    // eslint-disable-next-line
  }, []);
  const handleSearch = (e) => {};
  return (
    <BlogContainerWrapper>
      <div className="head">
        <h1>All Post</h1>
        <input
          type="text"
          placeholder="Search here and hit enter..."
          onSubmit={handleSearch}
        />
      </div>
      <SingleBlogCard song={song} />
    </BlogContainerWrapper>
  );
};

const BlogContainerWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: var(--mainBgVariant);
  padding: 80px 3rem;

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--mainBg);
    border-radius: 10px;
    box-shadow: 0 10px 40px var(--shadowBg);
    padding: 8px;
    h1 {
      padding: 10px;
      color: var(--btnBg);
      font-size: 1.7rem;
    }
    input {
      width: 30%;
      padding: 13px 20px;
      font-size: 16px;
      box-shadow: 0 10px 40px var(--shadowBg);
      border-radius: 0.2rem;
      color: var(--overBg);
      outline: 2px solid var(--heroBg1);
    }
  }
`;
export default BlogContainer;
