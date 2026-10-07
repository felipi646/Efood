import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 162px;
  background-color: #ffebd9;
  position: relative;
`;

export const HeaderContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Restaurantes = styled.span`
  position: absolute;
  top: 59px;
  left: 171px;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #e66767;
`;

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;

export const CartButton = styled.span`
  position: absolute;
  top: 59px;
  left: 1150px;
  width: 256px;
  height: 21px;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #e66767;
  text-aling: right;
`;
