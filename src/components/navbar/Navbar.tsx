import { Link } from "react-router-dom"
import Container from "../container/Container"

function NavBar(){
    return (
        <div className="h-4 border-b shadow flex items-center">
            <Container>
                <div className="flex justify-between ">

            <ul className="flex">
                <li className="ml-4"><Link to={"/"}>Home</Link></li>
                <li className="ml-4"><Link to={"/store"}>Store</Link></li>
                </ul>
                <div>
                    Basket
                </div>
                </div>
            </Container>
              
        </div>
    )
}

export default NavBar

// min 6 