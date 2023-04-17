import * as React from "react";
import {FC} from "react";
import {motion} from "framer-motion";
import styles from './navigation.module.scss'
import Link from "next/link";


interface NavigationItemProps {
    title: string,
    path: string,
    onClick: () => void,
}

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: {stiffness: 1000, velocity: -100}
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: {stiffness: 1000}
        }
    }
};
export const NavigationItem: FC<NavigationItemProps> = ({title, path, onClick}) => {
    const scrollHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const elem = document.getElementById(path.replace('#', ''));
        elem?.scrollIntoView({
            behavior: 'smooth'
        })
        onClick();
    };
    return (
        <motion.li
            transition={{y: {stiffness: 1000, velocity: -100}}}
            whileHover={{scale: 1.1}}
            variants={variants}
            className={styles.item}
            whileTap={{scale: 0.95}}
        >
            <Link href={path} onClick={scrollHandler}>{title}</Link>
        </motion.li>
    );
};