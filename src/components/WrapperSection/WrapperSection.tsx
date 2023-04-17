import {CSSProperties, FC, PropsWithChildren, useRef} from "react";
import {motion, useInView} from "framer-motion";
import {Container} from "@/components/UI/Container/Container";

type WrapperSectionProps = {
    sectionClass?: string,
    wrapperClass?: string,
    id?: string,
    style?: CSSProperties
};
export const WrapperSection: FC<PropsWithChildren<WrapperSectionProps>> = ({
                                                                               wrapperClass,
                                                                               sectionClass,
                                                                               style,
                                                                               children,
                                                                               id
                                                                           }) => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    return (
        <section className={`${sectionClass || ''} section`} ref={ref} style={style} id={id || ''}>
            <Container>
                <motion.div
                    initial={{x: 0, opacity: 0}}
                    animate={{x: 0, opacity: isInView ? 1 : 0}}
                    transition={{type: "spring", stiffness: 15}}
                    className={`${wrapperClass || ''}`}>
                    {children}
                </motion.div>
            </Container>
        </section>
    );
};