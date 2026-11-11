import { useState } from "react";
import { Card, Imagem, Titulo, Descricao, Botao } from "./styles";

import ModalProduto from "../Modal";

interface MenuItemProps {
  id: number;
  restauranteId: number;
  imagem: string;
  titulo: string;
  descricao: string;
  descricaoModal: string;
  porcao: string;
  preco: number;
}

const MenuItem = ({
  id,
  restauranteId,
  imagem,
  titulo,
  descricao,
  descricaoModal,
  porcao,
  preco,
}: MenuItemProps) => {
  const [modalAberta, setModalAberta] = useState(false);

  return (
    <>
      <Card>
        <Imagem src={imagem} alt={titulo} />
        <Titulo>{titulo}</Titulo>
        <Descricao>{descricao}</Descricao>
        <Botao onClick={() => setModalAberta(true)}>Mais detalhes</Botao>
      </Card>
      {modalAberta && (
        <ModalProduto
          id={id}
          restauranteId={restauranteId}
          imagem={imagem}
          titulo={titulo}
          descricao={descricaoModal}
          porcao={porcao}
          preco={preco}
          aoFechar={() => setModalAberta(false)}
        />
      )}
    </>
  );
};

export default MenuItem;
