import styled from "styled-components";

export const Container = styled.main`
  width: 1120px;
  max-width: calc(100% - 80px);

  margin: 56px auto;
`;

export const Titulo = styled.h2`
  margin-bottom: 24px;

  color: #e66767;

  font-size: 24px;
  font-weight: 900;
`;

export const Lista = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 60px 40px;
`;
