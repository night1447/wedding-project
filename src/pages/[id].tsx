import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import Layout from "@/components/layout/Layout";
import {Users} from "@/models/models";
import axios from "axios";
import {ParsedUrlQuery} from "querystring";
import {FirstScreen} from "@/components/Screens/First-screen/FirstScreen";
import {Treatment} from "@/components/Screens/Treatment/Treatment";
import {Organization} from "@/components/Screens/Organization/Organization";
import {TimeTable} from "@/components/Screens/TimeTable/TimeTable";
import {Questions} from "@/components/Screens/Questions/Questions";
import {Attention} from "@/components/Screens/Attention/Attention";
import {Photo} from "@/components/Screens/Photo/Photo";
import {Contacts} from "@/components/Screens/Contacts/Contacts";
import {MapScreen} from "@/components/Screens/Map/Map";

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const response = await axios.get(process.env.BASE_URL + '/getIds');
        const data: string[] = await response.data;
        const paths: { params: { id: string } }[] = data.map(item => ({params: {id: item}}))
        return {
            paths: paths,
            fallback: false,
        };
    } catch (e) {
        console.log(e);
        return {
            paths: [],
            fallback: false,
        }
    }
}
export const getStaticProps: GetStaticProps = async (context) => {
    try {
        const {id} = context.params as ParsedUrlQuery;
        const response = await axios.get(process.env.BASE_URL + `/getUsersById/?id=${id}`);
        const data = await response.data;
        return {
            props: {
                data: data
            }
        }
    } catch (e) {
        return {
            notFound: true,
        }
    }
}

interface StaticProps {
    data: Users,
}

const DefaultPage: NextPage<StaticProps> = ({data}) => {
    return (
        <Layout title={'Главная'}>
            <FirstScreen/>
            <Treatment people={data || []}/>
            <Organization/>
            <TimeTable/>
            <Questions people={data || []}/>
            <Attention/>
            <Photo/>
            <Contacts/>
            <MapScreen/>
        </Layout>
    );
};
export default DefaultPage;