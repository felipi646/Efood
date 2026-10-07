import { Card, Imagem, Titulo, Descricao, Botao } from "./styles";

interface MenuItemProps {
  imagem: string;
  titulo: string;
  descricao: string;
}

const MenuItem = ({ imagem, titulo, descricao }: MenuItemProps) => {
  return (
    <Card>
      <Imagem src={imagem} alt={titulo} />
      <Titulo>{titulo}</Titulo>
      <Descricao>{descricao}</Descricao>
      <Botao>Adicionar ao carrinho</Botao>
    </Card>
  );
};

export default MenuItem;
