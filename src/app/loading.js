import styles from "@/app/styles/common.module.css";
function LoadingPage()
{
  return(
    <>
      <section className={styles.loading_section}>
          <div className={styles.loading}></div>
      </section>
    </>
  )
}
export default LoadingPage;