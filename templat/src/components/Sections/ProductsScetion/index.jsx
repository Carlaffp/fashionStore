import ProductImg1 from "../../../assets/product1.png"
import ProductImg2 from "../../../assets/product2.png"
import ProductImg3 from "../../../assets/product3.png"
import ProductImg4 from "../../../assets/product4.png"

import { ProductCard } from "./ProductCard"

import styles from "./styles.module.css"

export const ProductsSection = ()=>{
  const Products = [
    {
      img: ProductImg1,
      name: "Blazer Branco elegante",
      price:"490,00"
      },
    {
      img: ProductImg2,
      name: "Sapatos Amarelos",
      price:"490,00"
       },
    {
      img: ProductImg3,
      name: "Blazer Laranja",
      price:"320,00"
      },
    {
      img: ProductImg4,
      name: "Calça Preta",
      price:"140,00"
      }
  ]
  return(
    <section className={styles.container}>
    <h2 className="title2">PRODUTOS EM DESTAQUE</h2>
    <ul className={styles.productsList}>
      {Products.map(product=>{
        return(
          <ProductCard product={product}/>
        )
        })}
    </ul>
  </section>
  
  )
}