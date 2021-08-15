import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Seo(props) {
    const router = useRouter();
    const meta = {
        title: 'Nells | Embrace your Beauty by Caring for your Body',
        description:
            'Deodoran merupakan produk perawatan yang sering diandalkan untuk mengatasi masalah bau badan dan keringat berlebih. Namun, deodoran yang banyak beredar di pasaran mengandung zat kimia berupa Aluminium Chlorohydrate (ACH) yang berfungsi untuk mengendalikan keringat dengan cara menutup pori-pori. Hal ini berpotensi memberikan dampak buruk bagi kesehatan berupa penyakit kanker payudara dan alzheimer karena termasuk golongan aluminium yang tinggi kadar toksiknya.',
        image: 'https://nells.vercel.com/png/colored-logo.png',
        type: 'website',
        robots: 'follow, index',
        ...props,
    };

    return (
        <Head lang='id'>
            <title>{meta.title}</title>

            <meta name='robots' content={meta.robots} />
            <meta content={meta.description} name='description' />
            <meta
                property='og:url'
                content={`https://nells.vercel.com/${router.asPath}`}
            />
            <link
                rel='canonical'
                href={`https://nells.vercel.com/${router.asPath}`}
            />
            {/* Open Graph */}
            <meta property='og:type' content={meta.type} />
            <meta property='og:site_name' content='Nells' />
            <meta property='og:description' content={meta.description} />
            <meta property='og:title' content={meta.title} />
            <meta name='image' property='og:image' content={meta.image} />
            {/* Twitter */}
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:site' content='@nellsofficial.id' />
            <meta name='twitter:title' content={meta.title} />
            <meta name='twitter:description' content={meta.description} />
            <meta name='twitter:image' content={meta.image} />
            {meta.date && (
                <>
                    <meta
                        property='article:published_time'
                        content={meta.date}
                    />
                    <meta
                        name='publish_date'
                        property='og:publish_date'
                        content={meta.date}
                    />
                    <meta
                        name='author'
                        property='article:author'
                        content='Reyhan Naufal'
                    />
                </>
            )}
            <link
                rel='canonical'
                href={`https://nellsofficial.com//${router.asPath}`}
            />
            <link rel='icon' href='/favicon.png' />
            <link rel='preconnect' href='https://fonts.googleapis.com' />
            <link
                rel='preconnect'
                href='https://fonts.gstatic.com'
                crossorigin
            />
            <link
                rel='preload'
                href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
                rel='stylesheet'
            />
            <link
                rel='preload'
                href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap'
                rel='stylesheet'
            />
        </Head>
    );
}
