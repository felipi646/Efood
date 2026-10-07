import Banner from "../../components/Banner";
import ProductsList from "../../components/ProductsList";
import { HomeContainer } from "./styles";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <HomeContainer>
      <Banner />
      <ProductsList />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
