import Header from "../../components/Header";
import {
  RestaurantContainer,
  Capa,
  Categoria,
  Nome,
  Imagem,
  Sobreposicao,
  Cardapio,
} from "./styles";
import prato from "../../assets/prato.png";
import pizza from "../../assets/pizza.png";
import MenuItem from "../../components/MenuItem";
import Footer from "../../components/Footer";

const Restaurant = () => {
  return (
    <RestaurantContainer>
      <Header />

      <Capa>
        <Imagem src={prato} alt="La Dolce Vita Trattoria" />
        <Sobreposicao />
        <Categoria>Italiana</Categoria>
        <Nome>La Dolce Vita Trattoria</Nome>
      </Capa>
      <Cardapio>
        <MenuItem
          imagem={pizza}
          titulo="Pizzar Marguerita"
          descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        />
        <MenuItem
          imagem={pizza}
          titulo="Pizzar Marguerita"
          descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        />
        <MenuItem
          imagem={pizza}
          titulo="Pizzar Marguerita"
          descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        />
        <MenuItem
          imagem={pizza}
          titulo="Pizzar Marguerita"
          descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        />
        <MenuItem
          imagem={pizza}
          titulo="Pizzar Marguerita"
          descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        />
        <MenuItem
          imagem={pizza}
          titulo="Pizzar Marguerita"
          descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        />
      </Cardapio>
      <Footer />
    </RestaurantContainer>
  );
};

export default Restaurant;
