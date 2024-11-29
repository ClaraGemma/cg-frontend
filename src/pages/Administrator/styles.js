import styled from "styled-components";

export const DashboardContainer = styled.div`
  padding: 30px;
  background-color: #f4f4f9;
  font-family: "Roboto", sans-serif;
`;

export const DashboardStats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 30px;
`;

export const StatCard = styled.div`
  background-color: #ffffff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  h3 {
    margin-bottom: 12px;
    color: #333;
    font-size: 1.2em;
  }

  p {
    font-size: 2.5em;
    font-weight: bold;
    color: #f66f00;
  }
`;

export const Description = styled.p`
  margin-top: 15px;
  font-size: 1.1em;
  color: #555;
  text-align: center;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
`;
