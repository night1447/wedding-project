import React, {FC} from 'react';
import {UsersItem} from "@/components/UsersList/UsersItem/UsersItem";
import styles from './users.module.scss'
import {User} from "@/models/models";

type UsersProps = {
    users: User[],
    activeList: User[],
    setActiveList: React.Dispatch<React.SetStateAction<User[]>>,
};
export const UsersList: FC<UsersProps> = ({users, setActiveList, activeList}) => {

    const removeActiveHandler = (id: string) => {
        setActiveList(prevState => prevState.filter(item => item.id !== id));
    };
    const addItemHandler = (user: User) => {
        setActiveList(prevState => [...prevState, user])
    }
    return (
        <ul className={styles.list}>
            {users.map(item => <UsersItem key={item.id}
                                          user={item}
                                          onAdd={addItemHandler}
                                          onRemove={removeActiveHandler}
                                          isActive={activeList.includes(item)}/>)}
        </ul>
    );
};