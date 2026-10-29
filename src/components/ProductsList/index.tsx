import Product from "../Product";
import { Lista, Container } from "./styles";

interface Restaurante {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
}

interface ProductsListProps {
  restaurantes: Restaurante[];
}

const ProductsList = ({ restaurantes }: ProductsListProps) => {
  return (
    <Container>
      <Lista>
        {restaurantes.map((restaurante) => (
          <Product
            key={restaurante.id}
            id={restaurante.id}
            imagem={restaurante.capa}
            titulo={restaurante.titulo}
            nota={restaurante.avaliacao}
            descricao={restaurante.descricao}
            categoria={restaurante.tipo}
            destaque={restaurante.destacado}
          />
        ))}
      </Lista>
    </Container>
  );
};

export default ProductsList;
