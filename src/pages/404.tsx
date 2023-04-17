import {Error} from "@/components/Error/Error";
import {Meta} from "@/seo/Meta";


const ErrorPage = () => {
    return (
        <Meta title={"Ошибка"}>
            <Error/>
        </Meta>
    );
};
export default ErrorPage;