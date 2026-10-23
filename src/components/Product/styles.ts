import styled from "styled-components";

export const Card = styled.article`
  width: 472px;
  height: 395px;
  border: 1px solid #e66767;
  background-color: #fff;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;

  display: flex;
  flex-direction: column;
`;

export const Imagem = styled.img`
  width: 472px;
  height: 217px;
  display: block;
  object-fit: cover;
`;

export const Categoria = styled.span`
  padding: 5px 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  white-space: nowrap;

  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;

  background-color: #e66767;
  color: #ffebd9;
`;

export const Conteudo = styled.div`
  padding: 8px;
`;

export const Titulo = styled.h3`
  margin: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0;
  color: #e66767;
`;

export const Nota = styled.span`
  width: 55px;
  height: 21px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0;
  color: #e66767;
`;

export const Descricao = styled.p`
  margin: 8px 0 18px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0;
  color: #e66767;
`;

export const Botao = styled.button`
  padding: 5px 8px;

  border: none;
  background-color: #e66767;
  color: #ffebd9;

  font-size: 14px;
  font-weight: bold;

  cursor: pointer;
`;

export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Categorias = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;

  display: flex;
  gap: 8px;
  height: 26px;
`;
