import logo from "../../assets/logo.png";
import { FooterContainer, Logo, RedesSociais, Texto } from "./styles.ts";
import redesSociais from "../../assets/redes-sociais.png";

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={logo} alt="Efood" />
      <RedesSociais src={redesSociais} alt="Redes sociais" />
      <Texto>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Texto>
    </FooterContainer>
  );
};

export default Footer;
