import {FC} from 'react';
import {WrapperSection} from "../../WrapperSection/WrapperSection";
import styles from './contacts.module.scss'
import organizatorImage from '@/../public/assets/organizator.jpg'
import Image from "next/image";
import {motion} from "framer-motion";

const icon = {
    animate: {
        opacity: [0, 1, 0],
        pathLength: [0, 1, 0],
    },
};
const animateTransition = {
    duration: 5,
    ease: "easeInOut",
    repeat: Infinity,
};

export const Contacts: FC = () => {
    return (
        <WrapperSection sectionClass={styles.contacts} wrapperClass={styles.contactsWrapper} id={'contacts'}>
            <div className={styles.inner}>
                <div className={styles.imageWrapper}>
                    <Image src={organizatorImage} alt={'фотография организатора'} className={styles.image}/>
                    <a href={'https://instagram.com/marina_timofeeva_wedding?igshid=YmMyMTA2M2Y='}
                       target={'_blank'} className={styles.socLink}>
                        <motion.svg className={styles.svg} viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                            <motion.path
                                variants={icon}
                                animate="animate"
                                transition={animateTransition}
                                d="M12 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3H12Z"
                                stroke="#272727" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <motion.path
                                variants={icon}
                                animate="animate"
                                transition={animateTransition}
                                d="M12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8Z"
                                stroke="#272727" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <motion.path
                                variants={icon}
                                animate="animate"
                                transition={animateTransition}
                                d="M17 8.5C17.8284 8.5 18.5 7.82843 18.5 7C18.5 6.17157 17.8284 5.5 17 5.5C16.1716 5.5 15.5 6.17157 15.5 7C15.5 7.82843 16.1716 8.5 17 8.5Z"
                                fill="#272727"/>
                        </motion.svg>

                    </a>
                </div>
                <div className={styles.shell}>
                    <p className={styles.description}>
                        По возникшим вопросам, а также для координации в день нашей свадьбы можете обращаться к нашему
                        замечательному организатору <b>Марине</b>
                    </p>
                </div>
            </div>
            <a href="tel:+375295569210" className={styles.tel}>+375 (29) 556 9210</a>

        </WrapperSection>
    );
};