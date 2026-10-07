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
  imagem: string;
  titulo: string;
  nota: number;
  descricao: string;
  categoria: string;
  destaque?: boolean;
}

const Product = ({
  imagem,
  titulo,
  nota,
  descricao,
  categoria,
  destaque,
}: ProductProps) => {
  const navigate = useNavigate();

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

        <Descricao>{descricao}</Descricao>

        <Botao onClick={() => navigate("/restaurante/1")}>Saiba mais</Botao>
      </Conteudo>
    </Card>
  );
};

export default Product;
