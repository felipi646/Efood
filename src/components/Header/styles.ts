import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 162px;
  background-color: #ffebd9;
`;

export const HeaderContent = styled.div`
  width: calc(100% - 48px);
  max-width: 1024px;
  height: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
`;

export const Restaurantes = styled.span`
  justify-self: start;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #e66767;
`;

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  object-fit: contain;
  cursor: pointer;
`;

export const CartButton = styled.span`
  justify-self: end;
  white-space: nowrap;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #e66767;
  text-align: right;
`;
