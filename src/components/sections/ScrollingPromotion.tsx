"use client";
import { useEffect, useRef } from "react";
import styles from "../../assets/scroll.module.css"

const ScrollingPromotion = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const frameRef = useRef<number | null>(null)
    useEffect(() => {
        if (!scrollRef.current) return;
        let SCROLL = scrollRef.current;
        let position = 0;
        let speed =1.5;
        const children = Array.from(SCROLL.children);
        children.forEach((child) => {
            SCROLL.appendChild(child.cloneNode(true));
        });
        function ScrollAnimation() {
            position -= speed;
            if (Math.abs(position) >= SCROLL.scrollWidth /2) {
                console.log(position)
                position = 0;
            }
            SCROLL.style.transform = `translateX(${position}px)`;
            frameRef.current = requestAnimationFrame(ScrollAnimation);
        }
        frameRef.current = requestAnimationFrame(ScrollAnimation);

        return () => {
            if (frameRef.current !== null) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, []);
    return (
        <section>
            <div className={styles.wrapper}>
                <div className={styles.scroll} ref={scrollRef}>
                    <img src="./promo_1.png" alt="" />
                    <img src="./promo_2.png" alt="" />
                    <img src="./promo_3.png" alt="" />
                    <img src="./promo_4.png" alt="" />
                    <img src="./promo_5.png" alt="" />
                    <img src="./promo_6.png" alt="" />
                </div>
            </div>
        </section>
    )
}
export default ScrollingPromotion;