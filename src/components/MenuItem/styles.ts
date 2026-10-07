import styled from "styled-components";

export const Card = styled.article`
  width: 320px;
  height: 338px;
  padding: 8px;
  box-sizing: border-box;
  background-color: #e66767;
`;

export const Imagem = styled.img`
  width: 304px;
  height: 167px;
  display: block;
  object-fit: cover;
`;

export const Titulo = styled.h3`
  margin: 8px 0 8px;

  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 900;
  line-height: 100%;
  color: #ffebd9;
`;

export const Descricao = styled.p`
  margin: 0 0 8px;
  width: 304px;
  height: 88px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #ffebd9;
`;

export const Botao = styled.button`
  width: 304px;
  height: 24px;
  border: none;
  background-color: #ffebd9;
  color: #e66767;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;
