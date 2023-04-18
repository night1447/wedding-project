import styles from './first-screen.module.scss'
import Image from "next/image";
import {motion} from "framer-motion";
import localFont from 'next/font/local';
import {Timer} from "@/components/Timer/Timer";

const font = localFont({src: './corinthia.woff2'});
export const FirstScreen = () => {
    return (
        <section className={`${styles['first-screen']} section`} id={'main'}>
            <div className={styles.wrapper}>
                <motion.h1
                    initial={{x: 0, y: 300, opacity: 0}}
                    animate={{x: 0, y: 0, opacity: 1}}
                    transition={{type: "spring", stiffness: 15}}
                    className={`${styles.title} ${font.className}`}>Александр & Анастасия
                </motion.h1>
                <motion.div
                    initial={{x: '-50%', y: '50%', opacity: 0}}
                    animate={{x: '-50%', y: '-50%', opacity: 1}}
                    transition={{type: "spring", stiffness: 15}}
                    className={styles.imageWrapper}>
                    <Image className={styles.image} alt={'задний фон'} src={'/assets/bg-first.png'} fill/>
                </motion.div>
            </div>
            <div className={styles.timer}>
                <Timer/>
            </div>
            <Image src={'/assets/leaves-1.png'} alt={'цветочки'} fill className={styles.decoration}/>
        </section>
    );
};
