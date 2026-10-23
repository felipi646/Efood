import styled from "styled-components";

export const FundoModal = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.8);
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  gap: 21px;
  width: 1024px;
  height: 344px;
  padding: 28px;
  box-sizing: border-box;
  background: #e66767;

  @media (max-width: 700px) {
    flex-direction: column;
    max-height: 90vh;
    overflow-y: auto;
  }
`;

export const ImagemModal = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  flex-shrink: 0;
`;

export const ConteudoModal = styled.div`
  flex: 1;
  min-width: 0;
  color: #fff;
`;

export const TituloModal = styled.h2`
  margin: 0 0 16px;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
`;

export const DescricaoModal = styled.p`
  margin: 0 0 20px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`;

export const PorcaoModal = styled.p`
  margin: 0 0 16px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  line-height: 19px;
`;

export const BotaoModal = styled.button`
  min-height: 24px;
  padding: 4px 8px;
  border: none;
  background: #ffebd9;
  color: #e66767;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

export const FecharModal = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
`;

export const ImagemFechar = styled.img`
  display: block;
  width: 16px;
  height: 16px;
`;
