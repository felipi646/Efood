import { useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  CartButton,
  Restaurantes,
} from "./styles";

import logo from "../../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <HeaderContent>
        <Restaurantes>Restaurantes</Restaurantes>
        <Logo src={logo} alt="eFood" onClick={() => navigate("/")} />
        <CartButton>0 produto(s) no carrinho</CartButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
