import Header from "./header";
import Footer from "./footer";
import Head from "next/head"

export default function Layout(props) {

    return (
        <>
            <Head>
                <meta name="description" content="Ualá es una App que te Brinda una Tarjeta Prepaga Mastercard Internacional." />
            </Head>
            <Header/>
            { props.children }
            <Footer/>
        </>
    )

}