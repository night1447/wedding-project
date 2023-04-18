import {WrapperSection} from "@/components/WrapperSection/WrapperSection";
import styles from './photo.module.scss'
import localFont from "next/font/local";
import {BARCODE} from "@/constants/general";
import {Title} from "@/components/UI/Title/Title";

const font = localFont({src: './corinthia.woff2'});

const Photo = () => {
    return (
        <WrapperSection sectionClass={styles.section} wrapperClass={styles.wrapper}>
            <Title>Фотографии</Title>
            <p className={styles.description}>Выкладывайте свои фотографии под нашим хэштегом</p>
            <div className={`${styles.barcode} ${font.className}`}>{BARCODE}</div>
        </WrapperSection>
    );
};

export default Photo;
