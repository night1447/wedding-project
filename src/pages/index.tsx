import Layout from "@/components/layout/Layout";
import {Button} from "@/components/UI/Button/Button";
import styles from "../styles/home.module.scss"
import Link from "next/link";

export default function HomePage() {
    return <Layout title={'Страница шаблон'}>
        <div className={styles.main}>
            <Link href={'/admin'}>
                <Button type={'button'}>
                    Перейти в админку
                </Button>
            </Link>
        </div>
    </Layout>
}
