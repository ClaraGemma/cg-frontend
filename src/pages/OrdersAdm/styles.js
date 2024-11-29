import styled from "styled-components";

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const OrderItem = styled.div`
  padding: 25px;
  max-width: 900px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  margin: 20px auto;

  .item-top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-family: "Livvic", sans-serif;
      font-size: 18px;
      font-weight: 500;
      color: #222;
      display: flex;
      align-items: center;
    }

    .right-info {
      display: flex;
      gap: 20px;

      p {
        font-family: "Poppins", sans-serif;
        color: #666;
        margin: 0;
      }

      .status {
        padding: 3px 7px;
        margin-right: 15px;
        border-radius: 5px;
        background-color: #ff7c11;
        color: #fff;
        transition: color 0.5s;

        &:hover {
          background-color: #f66f00;
          border-radius: 6px;
        }
      }
    }
  }

  .total {
    font-family: "Poppins", sans-serif;
    margin-top: 10px;
    text-align: right;
    font-weight: bold;
    color: #222;
    display: flex;
    justify-content: space-between;
  }
`;

export const TitlePanel = styled.h1`
  font-family: "Livvic", sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin-bottom: 2em;
`;

export const StatusDropdown = styled.select`
  padding: 5px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease-in-out;

  &::placeholder {
    color: #888;
  }

  &:focus {
    border-color: #f66f00;
  }
`;
