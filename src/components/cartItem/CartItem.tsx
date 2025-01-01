import Button from "../button/Button";

function CartItem() {
  return (
    <div className="flex p-2">
      <img
        className="rounded-t w-24"
        src="https://m.media-amazon.com/images/I/618pgJjYR3L.__AC_SX300_SY300_QL70_ML2_.jpg"
      />
      <div className="m-2">
        <h1>Title: Sumsong s24</h1>
        <h1 className="mb-4">Price: 800 $</h1>
        
        <div className="flex">
          <Button variant="primary">-</Button>
          <span className="mx-2">{1}</span>
          <Button variant="Warning">+</Button>
          <Button className="mx-3" variant="danger">Remove</Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
