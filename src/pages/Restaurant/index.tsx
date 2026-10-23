import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  RestaurantContainer,
  Capa,
  Categoria,
  Nome,
  Imagem,
  Sobreposicao,
  Cardapio,
} from "./styles";
import MenuItem from "../../components/MenuItem";
import Footer from "../../components/Footer";

interface Produto {
  id: number;
  nome: string;
  foto: string;
  descricao: string;
  preco: number;
  porcao: string;
}

interface Restaurante {
  id: number;
  titulo: string;
  tipo: string;
  capa: string;
  cardapio: Produto[];
}

const Restaurant = () => {
  const { id } = useParams();

  const [restaurante, setRestaurante] = useState<Restaurante | null>(null);

  useEffect(() => {
    fetch("https://api-ebac.vercel.app/api/efood/restaurantes")
      .then((resposta) => resposta.json())
      .then((dados: Restaurante[]) => {
        const encontrado = dados.find((item) => item.id === Number(id));

        setRestaurante(encontrado ?? null);
      })
      .catch((erro) => console.error("Erro ao carregar restaurante:", erro));
  }, [id]);
  if (!restaurante) {
    return <p>Carregando restaurante...</p>;
  }

  return (
    <RestaurantContainer>
      <Header />

      <Capa>
        <Imagem src={restaurante.capa} alt={restaurante.titulo} />
        <Sobreposicao />
        <Categoria>{restaurante.tipo}</Categoria>
        <Nome>{restaurante.titulo}</Nome>
      </Capa>
      <Cardapio>
        {restaurante.cardapio.map((produto) => (
          <MenuItem
            key={produto.id}
            imagem={produto.foto}
            titulo={produto.nome}
            descricao={produto.descricao}
            descricaoModal={produto.descricao}
            porcao={produto.porcao}
            preco={produto.preco}
          />
        ))}
      </Cardapio>
      <Footer />
    </RestaurantContainer>
  );
};

export default Restaurant;
