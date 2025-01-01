import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";

function Product() {
  const params = useParams();
  return (
    <div>
      <Container>
        <h1>ID = {params.id}</h1>
        <div className=" shadow mt-4 h-96 grid grid-cols-12 bg-yellow-200">
          <div className="col-span-5 m-5 bg-red-400">
            <img
              className="rounded "
              src="https://m.media-amazon.com/images/I/618pgJjYR3L.__AC_SX300_SY300_QL70_ML2_.jpg"
            />
            <div className="m-4">
              <Button style={{ padding: "6px 12px" }} variant="Warning">
                Add to cart
              </Button>
              <Button variant="danger">Add to cart</Button>
              <Button variant="primary">Add to cart</Button>
              <Button variant="success">Add to cart</Button>
            </div>
          </div>

          <div className="col-span-7 m-1  bg-slate-400">
            <h1>Title: Galaxy</h1>
            <p>Price: 25$</p>
            <p>
              Description: Meet the Galaxy S23 and S23+ phone with Galaxy AI.
              Share the epic with crisp Nightography on the selfie camera,
              powerful processor and a display that.
            </p>
          </div>
        </div>

        <div></div>
      </Container>
    </div>
  );
}
export default Product;

// video8 finish
