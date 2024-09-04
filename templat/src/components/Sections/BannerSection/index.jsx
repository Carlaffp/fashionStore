import BannerImg from "../../../assets/banner.png"
import styles from "./styles.module.css"

export const BannerSection = () =>{
  return(
    <section className={styles.container}>
        <img src={BannerImg} alt="imagem estilo" />
        <div className={styles.containerInfo}>
        <h1 className="title1"> KENZIE FASHION STORE</h1>
        <button className="btn">CONFIRA AS OFERTAS</button>
        </div>
      </section>

  )
}