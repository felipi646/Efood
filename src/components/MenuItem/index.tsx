import { useState } from "react";
import { Card, Imagem, Titulo, Descricao, Botao } from "./styles";

import ModalProduto from "../Modal";

interface MenuItemProps {
  imagem: string;
  titulo: string;
  descricao: string;
  descricaoModal: string;
  porcao: string;
  preco: number;
}

const MenuItem = ({
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
        <Botao onClick={() => setModalAberta(true)}>
          Adicionar ao carrinho
        </Botao>
      </Card>
      {modalAberta && (
        <ModalProduto
          imagem={imagem}
          titulo={titulo}
          descricao={descricaoModal}
          porcao={porcao}
          preco={preco.toFixed(2).replace(".", ",")}
          aoFechar={() => setModalAberta(false)}
        />
      )}
    </>
  );
};

export default MenuItem;
