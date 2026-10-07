import styled from "styled-components";

export const BannerContainer = styled.header`
  width: 100%;
  height: 384px;

  background-color: #ffebd9;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  overflow: hidden;
`;

export const Logo = styled.img`
  width: 125px;
  height: 57px;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Titulo = styled.h1`
  height: 84px;
  margin-top: 260px;

  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-style: normal;
  font-size: 36px;
  line-height: 100%;
  letter-spacing: 0;

  text-align: center;

  color: #e66767;
`;
