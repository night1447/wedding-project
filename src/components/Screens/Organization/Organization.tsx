import React, {FC} from "react";
import {WrapperSection} from "@/components/WrapperSection/WrapperSection";
import styles from './organization.module.scss'
import {ADDRESS, DATE, PLACE} from "@/constants/general";
import {Button} from "@/components/UI/Button/Button";
import leafImage from "@/../public/assets/Leaf-4.png"
import leafLeftImage from "@/../public/assets/Leaf-1.png"
import Image from "next/image";
import {Title} from "@/components/UI/Title/Title";

export const Organization: FC = () => {
    const navigateMapHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const elem = document.getElementById('map');
        elem?.scrollIntoView({
            behavior: 'smooth'
        })
    };

    return (
        <WrapperSection sectionClass={styles.organization}
                        wrapperClass={styles.organizationWrapper}
                        id={'organization'}>
            <Title className={styles.title}>Место и Время</Title>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <h3 className={styles.subtitle}>
                        Место
                    </h3>
                    <h4 className={`${styles.value} ${styles.value_tt}`}>
                        {PLACE}
                    </h4>
                    <p className={styles.address}> {ADDRESS}</p>
                    <Image src={leafImage} alt={'leaves'} width={150} height={150}
                           className={`${styles.leaf} ${styles.leaf_right}`}/>
                    <Image src={leafLeftImage} alt={'leaves'} width={100} height={100}
                           className={`${styles.leaf} ${styles.leaf_left}`}/>

                    <Button type={'button'} onClick={navigateMapHandler}>Открыть карту</Button>
                </li>
                <li className={styles.item}>
                    <h3 className={styles.subtitle}>
                        Время
                    </h3>
                    <h4 className={`${styles.value} `}>
                        {DATE}
                    </h4>
                    <Image src={leafImage} alt={'leaves'} width={150} height={150}
                           className={`${styles.leaf} ${styles.leaf_right}`}/>
                    <Image src={leafLeftImage} alt={'leaves'} width={100} height={100}
                           className={`${styles.leaf} ${styles.leaf_left}`}/>
                </li>

            </ul>
        </WrapperSection>
    );
};