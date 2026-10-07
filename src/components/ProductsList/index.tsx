import prato from "../../assets/prato.png";
import prato2 from "../../assets/prato2.png";
import Product from "../Product";
import { Lista, Container } from "./styles";

const ProductsList = () => {
  return (
    <Container>
      <Lista>
        <Product
          imagem={prato2}
          titulo="Hioki Suchi"
          nota={4.9}
          descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          categoria="Japonesa"
          destaque
        />
        <Product
          imagem={prato}
          titulo="La Dolce Vita Trattoria"
          nota={4.6}
          categoria="Italiana"
          descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        />
        <Product
          imagem={prato}
          titulo="La Dolce Vita Trattoria"
          nota={4.6}
          categoria="Italiana"
          descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        />
        <Product
          imagem={prato}
          titulo="La Dolce Vita Trattoria"
          nota={4.6}
          categoria="Italiana"
          descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        />
        <Product
          imagem={prato}
          titulo="La Dolce Vita Trattoria"
          nota={4.6}
          categoria="Italiana"
          descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        />
        <Product
          imagem={prato}
          titulo="La Dolce Vita Trattoria"
          nota={4.6}
          categoria="Italiana"
          descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        />
      </Lista>
    </Container>
  );
};

export default ProductsList;
