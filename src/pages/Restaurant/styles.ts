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
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const Categoria = styled.span`
  position: absolute;
  top: 24px;
  left: max(calc((100% - 1024px) / 2), 16px);
  z-index: 2;

  font-family: "Roboto", sans-serif;
  font-size: 32px;
  font-weight: 100;
  line-height: 100%;
  color: #fff;
`;

export const Nome = styled.h1`
  position: absolute;
  left: max(calc((100% - 1024px) / 2), 16px);
  bottom: 35px;
  z-index: 2;

  margin: 0;
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #fff;
`;

export const Cardapio = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 320px);
  justify-content: center;
  gap: 32px;
  padding: 56px 0;
  box-sizing: border-box;

  @media (max-width: 1055px) {
    width: calc(100% - 32px);
    height: auto;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: auto;
    gap: 24px;
  }

  @media (max-width: 700px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;
