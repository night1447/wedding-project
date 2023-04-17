import * as React from "react";
import {FC, PropsWithChildren} from "react";
import {IMeta} from "@/seo/meta.interface";
import Head from "next/head";
import {TITLE_SITE} from "@/constants/general";

const getTitle = (title: string) => title ? title : TITLE_SITE;
export const Meta: FC<PropsWithChildren<IMeta>> = ({title, description, children}) => {
    return (
        <>
            <Head>
                <title>
                    {getTitle(title)}
                </title>
                {description ? <>
                    <meta name={'description'} content={description}/>
                    <meta name={'og:title'} content={getTitle(title)}/>
                    <meta name={'og:description'} content={description}/>
                </> : <meta name={'robots'} content={'noindex, nofollow'}/>}
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            </Head>
            {children}
        </>
    );
};