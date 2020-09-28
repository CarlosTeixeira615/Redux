import React from "react";
import { useSelector } from "react-redux";
import { IState } from "../Store";
import { IcartItem } from "../Store/modules/cart/types";
// import { Container } from './styles';

const Cart: React.FC = () => {
  const cart = useSelector<IState, IcartItem[]>((state) => state.cart.items);

  return (
    <table>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>

      <tbody>
        {cart.map((item) => (
          <tr key={item.product.id}>
            <td>{item.product.title}</td>
            <td>{item.product.price}</td>
            <td>{item.quantity}</td>
            <td>{(item.product.price * item.quantity).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Cart;
