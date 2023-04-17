// @flow
import * as React from 'react';
import Layout from "@/components/layout/Layout";

type Props = {};
const AboutPage = (props: Props) => {
    return (
        <Layout title={'about'}>
            <div>
                <h2>about</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem, culpa cupiditate earum hic itaque
                    molestiae odio quae! At atque commodi id libero nemo odit omnis qui tempore ullam unde.</p>
            </div>
        </Layout>
    );
};
export default AboutPage;