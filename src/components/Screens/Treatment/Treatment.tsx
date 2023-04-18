import styles from './treatment.module.scss'
import Image from "next/image";
import {motion} from "framer-motion";
import {WrapperSection} from "@/components/WrapperSection/WrapperSection";
import {FC} from "react";
import {Users} from "@/models/models";
import {DATE} from "@/constants/general";
import {Title} from "@/components/UI/Title/Title";

interface TreatmentProps {
    people: Users
}

const getStringNames = (people: Users) => {
    if (people.people?.length > 2) {
        return people.people.filter(item => JSON.parse(item.isParent)).map(item => item.name).join(' и ');
    } else {
        return people.people?.map(item => item.name).join(' и ');
    }
}

const getStringTitle = (people: Users) => people.people?.length >= 2 ? "Дорогие" : people.people?.at(0)?.sex === "M" ? "Дорогой" : "Дорогая";

export const Treatment: FC<TreatmentProps> = ({people}) => {
    return (
        <WrapperSection wrapperClass={styles.wrapper} sectionClass={styles.treatment} id={'treatment'}>
            <motion.div
                initial={{x: 0, y: 250, opacity: 0}}
                animate={{x: 0, y: 0, opacity: 1}}
                transition={{type: "spring", stiffness: 15}}
                className={styles.imageWrapper}
            >
                <Image src={'/assets/photo.jpg'} alt={'фотка молодоженов'} className={styles.image} fill/>
            </motion.div>
            <Title className={styles.title}>{getStringTitle(people)} {getStringNames(people)}!</Title>
            <p className={styles.description}>
                <b>{DATE}</b> может пройти как обычный день и не запомнится Вам ничем особенным…
            </p>
            <p className={styles.description}>
                А может стать одним из самых приятных дней не только для нас, но и для Вас!
            </p>
            <p className={styles.description}>
                {!people.isFamily ?
                    `Очень ждем Вас на нашей СВАДЬБЕ и не представляем этого праздника без Вас, самых близких нам людей❤️` :
                    `Очень ждем вашу семью на нашей СВАДЬБЕ и не представляем этого праздника без Вас, самых близких нам
                людей❤️`
                }
            </p>
        </WrapperSection>
    );
};