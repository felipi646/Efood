import logo from "../../assets/logo.png";
import { BannerContainer, Logo, Titulo } from "./styles";

const Banner = () => {
  return (
    <BannerContainer>
      <Logo src={logo} alt="eFood" />

      <Titulo>
        Viva experiências gastronômicas
        <br />
        no conforto da sua casa
      </Titulo>
    </BannerContainer>
  );
};

export default Banner;
