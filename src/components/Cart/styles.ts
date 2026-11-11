import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`;

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 2;

  &.is-open {
    display: flex;
  }
`;

export const Sidebar = styled.aside`
  background-color: #e66767;
  z-index: 2;
  width: 360px;
  min-height: 1624px;
  box-sizing: border-box;
  padding: 32px 8px 0 8px;
  position: relative;
`;

export const CartItem = styled.div`
  width: 344px;
  height: 100px;
  background-color: #ffebd9;
  box-sizing: border-box;
  position: relative;
`;

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Lixo = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 76px;
  right: 8px;
  cursor: pointer;
`;

export const NomePrato = styled.h3`
  width: 108px;
  height: 71px;
  position: absolute;
  top: 8px;
  left: 96px;
  margin: 0;

  font-family: Roboto, sans-serif;
  font-weight: 900;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0;
  text-align: left;
  color: #e66767;
`;

export const ImagemPrato = styled.img`
  width: 80px;
  height: 80px;
  position: absolute;
  left: 8px;
  bottom: 12px;
  object-fit: cover;
`;

export const PrecoPrato = styled.p`
  width: 67px;
  height: 22px;
  position: absolute;
  top: 60px;
  left: 96px;
  margin: 0;

  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #e66767;
`;

export const Total = styled.p`
  width: 344px;
  height: 16px;
  margin: 40px 8px 8px 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffebd9;

  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
`;

export const BotaoCompra = styled.button`
  width: 344px;
  height: 24px;
  display: block;
  margin: 16px auto 8px;
  box-sizing: border-box;
  cursor: pointer;
  color: #e66767;
  background-color: #ffebd9;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
`;
