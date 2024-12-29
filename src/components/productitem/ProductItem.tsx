function ProductItem(){
    return (
        <div className="border-4">
            <h1>Product title</h1>
            <img className="rounded-t" src="https://m.media-amazon.com/images/I/618pgJjYR3L.__AC_SX300_SY300_QL70_ML2_.jpg"/>
            <div className="flex justify-between">
            <h3>name</h3>
            <h3>5$</h3>
            </div>
            <div className="p-4">
                <p className="line-clamp-2">
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
                Commodi voluptatem numquam dignissimos
                dolorem expedita minima facilis 
                autem laboriosam doloribus maiores
                suscipit, tempora recusandae nam,
                quis dolores enim deserunt aliquid totam.
                </p>
            </div>
        </div>
    )
}

export default ProductItem