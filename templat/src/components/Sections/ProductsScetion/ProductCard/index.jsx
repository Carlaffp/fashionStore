import styles from "./styles.module.css";

export const ProductCard = ({product})=>{
   return(
    <li className={styles.card}>
              <img src={product.img} alt={`imagem de ${product.name}`} />
              <p className="paragraph">{product.name}</p>
              <p className="price">R$ {product.price}</p>
            </li>
        
   )
}