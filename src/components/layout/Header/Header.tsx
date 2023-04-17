import {FC, useRef} from "react";
import styles from './header.module.scss'
import {Navigation} from "@/components/Navigation/Navigation";
import {motion, useCycle} from "framer-motion";
import {useDimensions} from "@/hooks/useDimensions";
import {MenuToggle} from "@/components/layout/Header/MenuToggle";

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};
const navAnimation = {
    open: {
        y: "0",
        transition: {
            type: "spring",
            stiffness: 100,
            restDelta: 2
        }
    },
    closed: {
        y: "-100%",
        transition: {
            type: "spring",
            stiffness: 90,
            damping: 40
        }
    }
}
export const Header: FC = () => {
    const [isOpen, setIsOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const {height} = useDimensions(containerRef);

    return (
        <header className={styles.header}>
            <MenuToggle className={isOpen ? styles.button_active : ''} toggle={() => setIsOpen()}/>
            <motion.nav
                initial={{y: "-100%"}}
                animate={isOpen ? navAnimation.open : navAnimation.closed}
                custom={height}
                className={styles.nav}
                ref={containerRef}
            >
                <Navigation isOpen={isOpen} onClick={() => setIsOpen()}/>
            </motion.nav>
            <motion.div className={`${styles.background}`} variants={sidebar}
                        animate={isOpen ? 'open' : 'closed'}/>
        </header>
    );
};