import { useParams } from "react-router-dom"
import Container from "../../components/container/Container"

function Product(){
    const params = useParams()
    return (
            <div>
              <Container>

                <div className="h-96 shadow mt-4">

                <div className="bg-red-400">
                    <img src="https://m.media-amazon.com/images/I/618pgJjYR3L.__AC_SX300_SY300_QL70_ML2_.jpg"/>
                </div>

                </div>
                <div className="bg-orange-500">

                </div>
                </Container>




            </div>

    )
}
export default Product