import styles from "./styles.module.css"

export const NewsletterSection = ()=>{
  return(
    <section className={styles.container}>
        <form className="form">
          <h2 className="title2">INSCREVA-SE NA NEWSLETTER</h2>
          <input type="email" placeholder="EMAIL" />
          <button className="btn">CADASTRE-SE</button>
        </form>
      </section>
  )
}