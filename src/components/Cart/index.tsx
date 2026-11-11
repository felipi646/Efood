import {
  Overlay,
  CartContainer,
  Sidebar,
  CartItem,
  CartList,
  NomePrato,
  ImagemPrato,
  PrecoPrato,
  Total,
  BotaoCompra,
} from "./styles";

import lixo from "../../assets/lixo.png";

import { Lixo } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import type { RootReducer } from "../../store";
import { close, remove } from "../../store/reducers/cart";

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return acumulador + valorAtual.preco!;
    }, 0);
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <CartContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <CartList>
          {items.map((item) => (
            <CartItem key={item.id}>
              <ImagemPrato src={item.foto} alt="Nome do prato" />
              <NomePrato>{item.nome}</NomePrato>
              <Lixo
                src={lixo}
                alt="Remover produto"
                onClick={() => removeItem(item.id)}
              />
              <PrecoPrato>
                R$ {item.preco.toFixed(2).replace(".", ",")}
              </PrecoPrato>
            </CartItem>
          ))}
        </CartList>
        <Total>
          <span>Valor total</span>
          <span>R$ {getTotalPrice().toFixed(2).replace(".", ",")}</span>
        </Total>
        <BotaoCompra>Continuar com a entrega</BotaoCompra>
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;
