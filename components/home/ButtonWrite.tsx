import Link from "next/link";
import styles from "styles/Home.module.scss";

export default function ButtonWrite(){
    return(
        <div className={styles.write_btn}>
          <Link href={'/write'}>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="48px" height="48px"><path d="M32,10c12.15,0,22,9.85,22,22s-9.85,22-22,22s-22-9.85-22-22S19.85,10,32,10z M40,34c1.104,0,2-0.895,2-2	c0-1.105-0.896-2-2-2c-0.248,0-2.913,0-6,0c0-3.087,0-5.752,0-6c0-1.104-0.895-2-2-2c-1.104,0-2,0.896-2,2c0,0.248,0,2.913,0,6	c-3.087,0-5.752,0-6,0c-1.104,0-2,0.895-2,2c0,1.105,0.896,2,2,2c0.248,0,2.913,0,6,0c0,3.087,0,5.752,0,6c0,1.104,0.896,2,2,2	c1.105,0,2-0.896,2-2c0-0.248,0-2.913,0-6C37.087,34,39.752,34,40,34z"/></svg>
          </Link>
        </div>
    )
}