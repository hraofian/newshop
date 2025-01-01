import Button from "../../../components/button/Button";
import CartItem from "../../../components/cartItem/CartItem";
import Container from "../../../components/container/Container";

function Cart() {
  return (
    <Container>
      <div className="">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="m-2 bg-slate-200 rounded ">
        <p>Total: 2500 $</p>
        <p>Disscount: 2500 $</p>
        <p>Final: 2500 $</p>
      </div>
      <Button className="m-2" variant="success">
        Submit
      </Button>
    </Container>
  );
}

export default Cart;

// video 9 16min
