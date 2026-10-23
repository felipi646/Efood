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

interface ModalProps {
  imagem: string;
  titulo: string;
  descricao: string;
  porcao: string;
  preco: string;
  aoFechar: () => void;
}

const ModalProduto = ({
  imagem,
  titulo,
  descricao,
  porcao,
  preco,
  aoFechar,
}: ModalProps) => (
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
        <BotaoModal onClick={aoFechar}>
          Adicionar ao carrinho - R$ {preco}
        </BotaoModal>
      </ConteudoModal>
    </ModalContainer>
  </FundoModal>
);

export default ModalProduto;
