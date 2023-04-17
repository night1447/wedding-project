import {WrapperSection} from "@/components/WrapperSection/WrapperSection";
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";
import React from "react";
import styles from './map.module.scss'

export const MapScreen = () => {
    return (
        <WrapperSection wrapperClass={styles.wrapper} sectionClass={styles.section} id={'map'}>
            <YMaps>
                <Map className={styles.map}
                     options={{

                         copyrightLogoVisible: false,
                         copyrightProvidersVisible: false,
                         copyrightUaVisible: false,
                     }}
                     defaultState={{center: [53.891667, 25.302254], zoom: 13}}>
                    <Placemark geometry={[53.891365, 25.306244]} options={{
                        preset: 'islands#circleDotIcon',
                        iconColor: `#597765`
                    }}
                               properties={{
                                   iconCaption: 'ресторан "Ваши Гули"'
                               }}/>
                </Map>
            </YMaps>
        </WrapperSection>
    );
};