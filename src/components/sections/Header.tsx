'use client'
import Link from "next/link";
import styles from "../../assets/header.module.css"
import Sidebar from "../ui/Sidebar";
import { useCart } from "@/context/CartContext";


const Header = () => {
    const { cart } = useCart()
    return (
        <section>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.logo}>
                        <Link href="/">
                            <img src="/logo.png" alt="Logo_image" />
                        </Link>
                    </div>
                    <div className={styles.headermenu}>
                        <div className="call">
                            <img src="/dial_icon.png" alt="phone call icon" aria-hidden="true" />
                        </div>
                        <Sidebar />
                    </div>
                    <div className={styles.desktop_menu}>
                        <nav>
                            <ul className={styles.nav_menu}>
                                <li><a href="/product"> Bicycles</a></li>
                                <li>Used bicycles</li>
                                <li>Parts & accessories</li>
                                <li>Service</li>
                                <li><a href="/pages/contact">Contact</a> </li>
                            </ul>
                            <div className={styles.menu_icon}>
                                <Link href="/cart">
                                    <div className={styles.count}><p>{cart[0]?.quantity |0}</p></div>
                                    <img src="/shopping_cart.png" />
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;