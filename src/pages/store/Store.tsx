import { Link } from "react-router-dom"
import Container from "../../components/container/Container"
import ProductItem from "../../components/productitem/ProductItem"

function Store(){
    return (
        <Container>
            <h1>newset product</h1>

        <div className="grid grid-cols-4">
                <Link to={`/product/${1}`}>
                <ProductItem/>
                </Link>

                <Link to={`/product/${2}`}>
                <ProductItem/>
                </Link>

                <Link to={`/product/${3}`}>
                <ProductItem/>
                </Link>

                <Link to={`/product/${4}`}>
                <ProductItem/>
                </Link>

                <Link to={`/product/${5}`}>
                <ProductItem/>
                </Link>
            

    
        </div>
        </Container>

    )
}

export default Store