import Head from 'next/head';
import FeaturedPost from '../components/FeaturedPost';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Product from '../components/Product';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Nells | Homepage</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
            <MainContent />
            <FeaturedPost />
            <Product />
            <Footer />
        </div>
    );
}
