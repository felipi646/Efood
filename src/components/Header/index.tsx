import { useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  CartButton,
  Restaurantes,
} from "./styles";

import logo from "../../assets/logo.png";

import { open } from "../../store/reducers/cart";
import { useDispatch, useSelector } from "react-redux";
import type { RootReducer } from "../../store";

const Header = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);
  const navigate = useNavigate();

  const openCart = () => {
    dispatch(open());
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Restaurantes>Restaurantes</Restaurantes>
        <Logo src={logo} alt="eFood" onClick={() => navigate("/")} />
        <CartButton onClick={openCart}>
          {items.length} produto(s) no carrinho
        </CartButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
