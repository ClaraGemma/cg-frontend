import { useEffect, useState } from "react";
import {
  Container,
  Header,
  TrashDateBox,
  StyledFaTrash,
  Description,
  Image,
} from "./styles.js";
import api from "../../services/api";

function PostItem() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const postsFromApi = await api.get("/posts");
    setPosts(postsFromApi.data);
  }

  async function deletePosts(id) {
    await api.delete(`/posts/${id}`);
    getPosts();
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <Container key={post.id}>
          <Header>
            <h1>{post.title}</h1>
            <TrashDateBox>
              <StyledFaTrash onClick={() => deletePosts(post.id)} />
              <span>{new Date(post.date_time).toLocaleString()}</span>
            </TrashDateBox>
          </Header>
          <Description>
            <p>{post.desc}</p>
          </Description>
          {post.image_url && (
            <Image
              src={`http://localhost:3000${post.image_url}`}
              alt={post.title}
            />
          )}
        </Container>
      ))}
    </>
  );
}

export default PostItem;
