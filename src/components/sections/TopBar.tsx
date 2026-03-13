import styles from '../../assets/topbar.module.css'
const TopBar = () => {
    return (
        <section className={styles.topbar}>
            <div className="container">
                <div className={styles.topbar_wrapper}>
                    <div className={styles.topbar_left}>
                        <div className={styles.topbar_left_item}>
                            <div className={styles.ellipse}>
                                <img src="/Ellipse.svg" alt='' aria-hidden="true"/>
                            </div>
                            <p className={styles.content}>Open today until 5:30 PM</p>
                        </div>
                        <div className={styles.topbar_review}>
                            <div className={styles.rating} aria-label='5 out of 5 stars'>
                            {Array.from({length:5}).map((_,index)=>(
                                      <img key={index} src="/Star.svg" width={16} height={16} alt="" aria-hidden="true"/>
                            ))}
                            </div>
                            <p className={styles.content}>Read our reviews</p>
                        </div>
                    </div>
                    <div className={styles.topbar_right}>
                        <ul className={styles.topbar_right_item}>
                            <li className={styles.content}><a href='/pages/about'>About</a></li>
                            <li className={styles.content}><a href='/pages/blogs'>Blogs and News</a></li>
                            <li className={styles.content}><a href='/pages/about'>Vacancies</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopBar