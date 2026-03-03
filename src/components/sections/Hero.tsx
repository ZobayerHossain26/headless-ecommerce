import styles from "../../assets/Hero.module.css"
import LeftArrowIcon from "../ui/icons/LeftArrowIcon"
import SearchIcon from "../ui/icons/SearchIcon"
import UserIcon from "../ui/icons/UserIcon"
const Hero = () => {
    return (
        <section className={styles.hero_section}>
            <div className={styles.blur}>
                <div className={styles.hero_image}>
                    <img src="/Hero_image_desktop.png" />
                </div>
            </div>
            <div className={styles.content_wrapper}>
                <div className="container">
                    <div className={styles.content_box}>
                        <div className={styles.title}>
                            <h1>
                                We Love <br />
                                <span>Cycling</span>
                            </h1>
                        </div>
                        <div className={styles.description}>
                            <p>
                                Ultimate cycling pleasure through optimal service, quality, and craftsmanship.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className={styles.content_box_bottom}>
                        <div className={styles.icons}>
                            <UserIcon className={styles.icon} />
                            <p>
                                Schedule a consultation
                            </p>
                        </div>
                        <form className={styles.search} role="search">
                            <SearchIcon />
                            <input placeholder="What are you looking for?" type="text" name="search" aria-label="search" />
                            <button type="submit">
                                 <span>SEARCH</span>
                                <LeftArrowIcon />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className={styles.below_color}>
            </div>
        </section>
    )
}

export default Hero