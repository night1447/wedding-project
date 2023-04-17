export type User = {
    id: string,
    name: string,
    surname: string,
    usersId: string | null,
    sex: string,
    isParent: string
}
export type Users = {
    id: string,
    isFamily: boolean,
    people: User[],
}

export type Subscriber = {
    id: string,
    name: string
    alcohol: string
    arrivement: string
}
