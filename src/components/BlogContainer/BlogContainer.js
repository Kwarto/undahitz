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
  return (
    <BlogContainerWrapper>
      <SingleBlogCard song={song} />
    </BlogContainerWrapper>
  );
};

const BlogContainerWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: var(--mainBgVariant);
  padding: 80px 3rem;
`;
export default BlogContainer;
