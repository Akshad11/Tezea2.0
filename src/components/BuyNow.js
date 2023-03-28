import { useState } from "react";
import styled from "styled-components";
//import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { useCartContext } from "../context/cart_context";
//import Placeorder from "../PlaceOrder";
//import { usePlaceOrderContext } from "../context/place_order_context";


const BuyNow = ({ product }) => {
  const { buyNow } = useCartContext();

  const { id, stock } = product;

  //const [color, setColor] = useState(colors[0]);
  const [amount] = useState(1);

  if(stock===0) {
    alert("Out of Stock");
  }


  return (
    <Wrapper>


    <NavLink to="/singleorder" onClick={()=> buyNow(id, amount, product)}>
        <Button className="btn" id="buy-btn">Buy Now</Button>
      </NavLink>

    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
  
  #buy-btn {
    color: #fff;
    background-color: #40611A;
  }
`;
export default BuyNow;
