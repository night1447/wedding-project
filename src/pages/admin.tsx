import styles from "../styles/home.module.scss"
import {Meta} from "@/seo/Meta";
import {FC, FormEvent, useState} from "react";
import {Label} from "@/components/UI/Label/Label";
import {Button} from "@/components/UI/Button/Button";
import {Subscriber} from "@prisma/client";
import {Subscribers} from "@/components/Subscribers/Subscribers";



const Admin: FC = () => {

    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');
    const [auth, setAuth] = useState(false);
    const submitAdminHandler = (e: FormEvent) => {
        e.preventDefault();
        if (login === 'admin' && password === 'admin') {
            setAuth(true);
        }
    };

    return (
        <Meta title={'Админка'}>
            <div className={`${styles.main} ${styles.main_direction}`}>
                {auth ?
                    <Subscribers/> :
                    <form className={styles.form} onSubmit={submitAdminHandler}>
                        <Label id={'login'} text={''} className={styles.label}>
                            <input type="text" placeholder={'Login'} id={'login'} className={styles.input}
                                   value={login}
                                   required
                                   onChange={(e) => setLogin(e.target.value)}/>
                        </Label>
                        <Label id={'password'} text={''} className={styles.label}>
                            <input type="password" placeholder={'Password'}
                                   required
                                   id={'password'} className={styles.input} value={password}
                                   onChange={(e) => setPassword(e.target.value)}/>
                        </Label>
                        <Button type={'submit'}> Войти</Button>
                    </form>
                }
            </div>
        </Meta>
    )
};
export default Admin;