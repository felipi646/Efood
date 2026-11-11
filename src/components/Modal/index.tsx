import {
  FundoModal,
  ModalContainer,
  ImagemModal,
  ConteudoModal,
  TituloModal,
  DescricaoModal,
  PorcaoModal,
  BotaoModal,
  FecharModal,
  ImagemFechar,
} from "./styles";

import fechar from "../../assets/fechar.png";
import { useDispatch } from "react-redux";
import { add, open } from "../../store/reducers/cart";

interface ModalProps {
  id: number;
  restauranteId: number;
  imagem: string;
  titulo: string;
  descricao: string;
  porcao: string;
  preco: number;
  aoFechar: () => void;
}

const ModalProduto = ({
  id,
  restauranteId,
  imagem,
  titulo,
  descricao,
  porcao,
  preco,
  aoFechar,
}: ModalProps) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      add({
        id: id,
        restauranteId: restauranteId,
        nome: titulo,
        foto: imagem,
        descricao: descricao,
        preco: preco,
        porcao: porcao,
      }),
    );
    aoFechar();
    dispatch(open());
  };

  return (
    <FundoModal onClick={aoFechar}>
      <ModalContainer onClick={(evento) => evento.stopPropagation()}>
        <FecharModal onClick={aoFechar} aria-label="Fechar modal">
          <ImagemFechar src={fechar} alt="" />
        </FecharModal>

        <ImagemModal src={imagem} alt={titulo} />

        <ConteudoModal>
          <TituloModal>{titulo}</TituloModal>
          <DescricaoModal>{descricao}</DescricaoModal>
          <PorcaoModal>{porcao}</PorcaoModal>
          <BotaoModal onClick={addToCart}>
            Adicionar ao carrinho - R$ {preco.toFixed(2).replace(".", ",")}
          </BotaoModal>
        </ConteudoModal>
      </ModalContainer>
    </FundoModal>
  );
};

export default ModalProduto;
