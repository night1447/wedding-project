// @flow
import * as React from 'react';
import {FC, PropsWithChildren} from 'react';

type TitleProps = {
    className?: string,
};
export const Title: FC<PropsWithChildren<TitleProps>> = ({className, children}) => {
    return (
        <h2 className={className || ''}>
            {children}
        </h2>
    );
};