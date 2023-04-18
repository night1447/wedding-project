import Image from "next/image";

export const Loading = () => {
    return (
        <Image alt={'Загрузка'} src={'/loading.gif'} width={360} height={360}/>
    );
};