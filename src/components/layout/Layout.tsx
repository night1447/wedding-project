import {FC, PropsWithChildren} from 'react';
import {IMeta} from "@/seo/meta.interface";
import {Meta} from "@/seo/Meta";
import {Header} from "@/components/layout/Header/Header";
import {Main} from "@/components/layout/Main/Main";

const Layout: FC<PropsWithChildren<IMeta>> = ({description, title, children}) => {
    return (
        <Meta title={title} description={description}>
            <Header/>
            <Main>
                {children}
            </Main>
        </Meta>
    );
};
export default Layout;