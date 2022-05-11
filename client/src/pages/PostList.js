import React from "react";
import styled from "styled-components";
import PostListComponent from "../components/PostListComponent";

const Container = styled.section`
  margin-top: -30px;
  /* width: 1292px; */
`;

const PostList = () => {
  return (
    <Container>
      <PostListComponent />
    </Container>
  );
};

export default PostList;
