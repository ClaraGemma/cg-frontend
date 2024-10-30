import { useEffect, useState } from "react";
import api from "../../services/api";
import {
  Container,
  Header,
  TrashDateBox,
  StyledFaTrash,
  Description,
  Image,
} from "./styles.js";

function PostItem() {
  const [posts, setPosts] = useState([]);
  const [userRole, setUserRole] = useState(""); // Estado para armazenar o papel do usuário

  async function getPosts() {
    const postsFromApi = await api.get("/posts");
    setPosts(postsFromApi.data);
  }

  async function deletePosts(id) {
    await api.delete(`/posts/${id}`);
    getPosts();
  }

  // Função para obter o papel do usuário
  const fetchUserRole = () => {
    const token = localStorage.getItem("token");
    if (token) {
      // Exemplo de como decodificar um token para obter o papel do usuário
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUserRole(payload.role); // Supondo que o papel esteja no payload
    }
  };

  useEffect(() => {
    getPosts();
    fetchUserRole(); // Chama a função para obter o papel do usuário
  }, []);

  return (
    <>
      {posts.map((post) => (
        <Container key={post.id}>
          <Header>
            <h1>{post.title}</h1>
            <TrashDateBox>
              {/* Renderiza o botão de exclusão apenas se o papel do usuário for admin */}
              {userRole === "admin" && (
                <StyledFaTrash onClick={() => deletePosts(post.id)} />
              )}
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
