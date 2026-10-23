import styled from "styled-components";

export const Card = styled.div`
  width: 320px;
  height: 338px;
  padding: 8px;
  box-sizing: border-box;
  background-color: #e66767;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
`;

export const Imagem = styled.img`
  width: 304px;
  height: 167px;
  display: block;
  object-fit: cover;
`;

export const Titulo = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 900;
  line-height: 19px;
  color: #ffebd9;
`;

export const Descricao = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #ffebd9;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`;

export const Botao = styled.button`
  width: 100%;
  min-height: 24px;
  border: none;
  padding: 0;
  margin-top: auto;
  background-color: #ffebd9;
  color: #e66767;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  flex-shrink: 0;
`;
