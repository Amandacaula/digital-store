import {useParams} from "react-router-dom";
import Layout from "../Layout/Layout";
function ProductView() {
    const {id} = useParams();

    return (

        <Layout>
            <h1>Produto {id}</h1>
            
        </Layout>

    );
}

export default ProductView;