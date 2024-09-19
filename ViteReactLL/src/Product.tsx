

type Product ={
    termeknev: string,
    ar: number,
}
const Product = () => {
  return (
    <div>
   <h2>{staticProduct.termeknev}</h2>
   <h2>{staticProduct.ar}</h2>
    </div>
 
  )
}

const staticProduct:Product = {
    termeknev: "Termék",
    ar: 100,
}
export default Product