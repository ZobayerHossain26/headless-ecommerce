'use client'
import styles from "../../assets/sidebar.module.css"
import { useState } from "react"
import Facebook from "./icons/Facebook"
import InstagramIcon from "./icons/InstagramIcon"

const Sidebar = () => {

    const [toggleBar, setToggleBar] = useState(false)
    return (
        <div className={styles.sidebar}>
            <div onClick={() => setToggleBar(prev => !prev)}>
                <img src="/hamburger.png" alt="" aria-hidden="true" />
            </div>
            <div className={`${styles.sidebar_menu} ${toggleBar ? styles.open : ""}`}>
                <nav>
                    <ul className={styles.sidebar_nav_menu}>
                        <li>Bicycles</li>
                        <li>Used bicycles</li>
                        <li>Parts & accessories</li>
                        <li>About Us</li>
                        <li>Blogs and News</li>
                        <li>Jobs</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <div className={styles.social_icon}>

                    <div className={styles.icon}>
                        <Facebook className={styles.svg} />
                    </div>
                    <div className={styles.icon}>
                        <InstagramIcon className={styles.svg} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar