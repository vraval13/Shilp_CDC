import styles from "@/app/styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import TypedMessage from "./TypedMsg";
function Header() {
  return (
    <>
      <header className={styles.main_header} style={{ borderBottom:"3px solid blue",borderRadius:'15px'}}>
        <div className={styles.navbar_brand}>
          <Link href={'/'}>
            <Image src={'/logo1.png'} alt={'Our Logo'} width={165} height={110} style={{
              marginLeft: '-40px',
            }} />
          </Link>
        </div>
        <TypedMessage/>
        <Nav />
      </header>
    </>
  )
}
export default Header;