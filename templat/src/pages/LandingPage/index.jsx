
import { BannerSection } from "../../components/Sections/BannerSection"
import { ProductsSection } from "../../components/Sections/ProductsScetion"
import { NewsletterSection } from "../../components/Sections/NewsletterSection"

import { DefaultTemplate } from "../../components/DefaultTemplate"

export const LandingPage = ()=>{
  return(
    <>
    <DefaultTemplate>
      <BannerSection/>
      <ProductsSection/>
      <NewsletterSection/>
    </DefaultTemplate>
    
   </>
  )
}