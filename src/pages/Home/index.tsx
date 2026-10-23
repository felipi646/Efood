import Banner from "../../components/Banner";
import ProductsList from "../../components/ProductsList";
import { HomeContainer } from "./styles";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";

interface Restaurante {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);

  useEffect(() => {
    fetch("https://api-ebac.vercel.app/api/efood/restaurantes")
      .then((resposta) => resposta.json())
      .then((dados: Restaurante[]) => setRestaurantes(dados))
      .catch((erro) => console.error("Erro ao carregar restaurantes:", erro));
  }, []);

  return (
    <HomeContainer>
      <Banner />
      <ProductsList restaurantes={restaurantes} />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
