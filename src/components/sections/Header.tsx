import styles from "../../assets/header.module.css"
import Sidebar from "../ui/Sidebar";


const Header = () => {
 
    return (
        <section>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.logo}>
                        <img src="/logo.png" alt="Logo_image" />
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
                                <li>Bicycles</li>
                                <li>Used bicycles</li>
                                <li>Parts & accessories</li>
                                <li>Service</li>
                                <li>Contact</li>
                            </ul>
                            <div className={styles.menu_icon}>
                                <img src="/shopping_cart.png" />
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;