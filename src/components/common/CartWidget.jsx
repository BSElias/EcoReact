
import { useContext } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { CartContext } from "../../context/CartContext";


const CartWidget = () => {

  const { getTotalItems } = useContext(CartContext);

  let total = getTotalItems()

  return (
    <div className="cartwidget">
      <span>{total}</span>
      <HiOutlineShoppingCart />
    </div>
  );
};

export default CartWidget;

