import {FC} from "react";
import styles from '../users.module.scss'
import {User} from "@/models/models";

type UsersItemProps = {
    user: User,
    isActive: boolean,
    onRemove: (user: string) => void,
    onAdd: (user: User) => void
};
export const UsersItem: FC<UsersItemProps> = ({user, isActive, onAdd, onRemove}) => {
    return (
        <li className={`${styles.item} ${!isActive ? styles.disabled : ''}`}>
            {user.name}
            <button type={'button'} className={`${styles.button} ${isActive ? '' : styles.button_disabled}`}
                    onClick={() => {
                        isActive ? onRemove(user.id) : onAdd(user)
                    }
                    }>
                <span className={'sr-only'}>
                    Убрать из активных пользователя
                </span>
            </button>
        </li>
    );
};