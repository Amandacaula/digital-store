import {Link} from "react-router-dom";
import Layout from "../Layout/Layout";
import "./MessagePage.css";

//Usadas para páginas em construção ou paginas nas encontradas.

function MessagePage({title, text}) {
    return (
        <Layout>
            <div className="container message-page">
                <h1>{title}</h1>
                <p>{text}</p>
                <Link to="/" className="button">Voltar para Home</Link>
            </div>
        </Layout>
    );
}

export default MessagePage;