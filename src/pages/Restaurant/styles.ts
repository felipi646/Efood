import styled from "styled-components";

export const RestaurantContainer = styled.main`
  min-height: 100vh;
  width: 100%;
`;

export const Capa = styled.section`
  height: 310px;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const Imagem = styled.img`
  width: 100%;
  height: 310px;
  display: block;
  object-fit: cover;
  object-position: center;
`;

export const Sobreposicao = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 310px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const Categoria = styled.span`
  position: absolute;
  top: 24px;
  left: 10.5%;
  z-index: 2;

  font-family: "Roboto", sans-serif;
  font-size: 32px;
  font-weight: 100;
  font-style: normal;
  line-height: 100%;
  letter-spacing: 0;
  color: #fff;
`;

export const Nome = styled.h1`
  position: absolute;
  left: 10.5%;
  bottom: 35px;
  z-index: 2;

  margin: 0;

  font-family: "Roboto", sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #fff;
`;

export const Cardapio = styled.div`
  width: 1024px;
  margin: 40px auto 140px;
  display: grid;
  grid-template-columns: repeat(3, 320px);
  gap: 24px 32px;
`;
