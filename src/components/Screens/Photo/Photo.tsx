import {WrapperSection} from "@/components/WrapperSection/WrapperSection";
import styles from './photo.module.scss'
import localFont from "next/font/local";
import {BARCODE} from "@/constants/general";

const font = localFont({src: './corinthia.woff2'});

export const Photo = () => {
    return (
        <WrapperSection sectionClass={styles.section} wrapperClass={styles.wrapper}>
            <h2>Фотографии</h2>
            <p className={styles.description}>Выкладывайте свои фотографии под нашим хэштегом</p>
            <div className={`${styles.barcode} ${font.className}`}>{BARCODE}</div>
        </WrapperSection>
    );
};