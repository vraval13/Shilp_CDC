import heroStyles from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import Link from "next/link";
import Image from "next/image";
import { Roboto, Mulish } from "next/font/google";
const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})
function HeroSection({ descr }) {
  return (
    <>
      <main className={heroStyles.main_section} style={{borderTop:"3px solid blue"}}>
        <div className={styles.container}>
          <div className={styles.grid_two_section}>
            <div className={heroStyles.hero_content}>
              <h1>SR. PULMONOLOGIST , SLEEP DISORDERS & CRITICAL CARE SPECIALIST</h1>
              <br />
              <br />
              <h2>Welcome to <br /> <h3 style={{ color: "darkblue" }}>SHILP </h3><h3 style={{ color: "darkgreen" }}>CHEST DISEASE CENTER</h3>
              </h2>
              <Link href={'/services'}>
                <button className={roboto.className}>
                  Explore Services
                </button>
              </Link>
              {/* <Link href={'/about'}>
                <button className={roboto.className}>
                  About
                </button>
              </Link> */}
              
            </div>
            <div className={heroStyles.hero_image}>
              <Image src={'/dr1.png'} alt="pic" width={500} height={500} style={{
                height: '450px',
                width: '450px',
                borderRadius: '20px'
              }} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
export default HeroSection;