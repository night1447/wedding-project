import React, {FC, PropsWithChildren, useEffect, useState} from "react";
import {createPortal} from "react-dom";

interface PortalProps {
    id: string,
}

export const Portal: FC<PropsWithChildren<PortalProps>> = ({id, children}) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        return () => setMounted(false)
    }, [])
    return mounted ?
        createPortal(children, document.getElementById(`${id}`) || new HTMLElement()) :
        null;
};