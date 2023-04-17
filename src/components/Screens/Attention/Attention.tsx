import {WrapperSection} from "@/components/WrapperSection/WrapperSection";
import styles from './attention.module.scss'

export const Attention = () => {
    return (
        <WrapperSection sectionClass={styles.attention} id={"attention"}>
            <h2>Пожелания</h2>
            <p className={styles.paragraph}>
                Мы не хотим утруждать вас выбором подарка, поэтому будем рады вашему вкладу в бюджет нашей молодой
                семьи.
            </p>
            <p className={styles.paragraph}>
                Пожалуйста, <b>не дарите нам цветы</b>, так как мы не успеем насладиться их красотой. Вместо этого мы будем
                рады бутылочке вашего <u>любимого</u> алкоголя, которую вы можете украсить пожеланиями.
            </p>
        </WrapperSection>
    );
};