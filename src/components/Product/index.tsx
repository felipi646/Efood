import { useNavigate } from "react-router-dom";

import {
  Card,
  Imagem,
  Categorias,
  Categoria,
  Conteudo,
  Titulo,
  Nota,
  Descricao,
  Botao,
  Cabecalho,
} from "./styles";

interface ProductProps {
  id: number;
  imagem: string;
  titulo: string;
  nota: number;
  descricao: string;
  categoria: string;
  destaque?: boolean;
}

const Product = ({
  id,
  imagem,
  titulo,
  nota,
  descricao,
  categoria,
  destaque,
}: ProductProps) => {
  const navigate = useNavigate();
  const getDescricao = (descricao: string) => {
    if (descricao.length > 272) {
      return descricao.slice(0, 250) + "...";
    }
    return descricao;
  };

  return (
    <Card>
      <Imagem src={imagem} alt={titulo} />
      <Categorias>
        {destaque && <Categoria>Destaque da semana</Categoria>}
        <Categoria>{categoria}</Categoria>
      </Categorias>

      <Conteudo>
        <Cabecalho>
          <Titulo>{titulo}</Titulo>
          <Nota>{nota}⭐</Nota>
        </Cabecalho>

        <Descricao>{getDescricao(descricao)}</Descricao>

        <Botao onClick={() => navigate(`/restaurante/${id}`)}>Saiba mais</Botao>
      </Conteudo>
    </Card>
  );
};

export default Product;
