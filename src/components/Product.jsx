import { useParams } from "react-router-dom"

export default function Product() {
  const { id } = useParams()
  return (
    <div className="Product">
        <h1>Product {id}</h1>
        <a href="/">Home</a>
    </div>
  )
}