import { useState } from 'react';
import Image from 'next/image';

import Header from '../components/Header';
import Footer from '../components/Footer';
import TestimoniProd from '../components/TestimoniProd';
import ProductSlider from '../components/ProductSlider';
import Seo from '../components/Seo';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';

const productLink = {
    tokopedia:
        'https://www.tokopedia.com/nellsofficial/nell-s-citronella-deodorant?utm_source=Android&utm_source=Android&utm_medium=Share&utm_medium=Share&utm_campaign=Product%20Share&utm_campaign=Product%20Share&_branch_match_id=899849089264484839',
    shopee: 'https://shopee.co.id/product/465231396/7992336768?smtt=0.110584458-1630321594.9',
};

export default function product() {
    const [loading, setLoading] = useState(false);

    const [link, setLink] = useState(productLink.shopee);

    return (
        <main className='overflow-hidden'>
            <Header />
            <Seo title='Nells | Product' />
            <section className='mx-auto max-w-7xl'>
                <div className='flex flex-col mx-auto lg:flex-row'>
                    <div
                        className={`max-w-xs py-20 mx-auto lg:ml-20  ${
                            loading ? 'lg:mr-36' : 'lg:mr-0'
                        }`}
                    >
                        {loading ? (
                            <div className='pt-20 lg:ml-28'></div>
                        ) : (
                            <ProductSlider />
                        )}
                    </div>
                    <aside className='lg:w-[50%] px-5 lg:pt-20 max-w-sm lg:max-w-none mx-auto lg:mx-24'>
                        <h1 className='text-2xl font-semibold lg:text-3xl font-primary'>
                            NELL'S Citronella Deodorant
                        </h1>
                        <div className='flex mt-1 space-x-3 font-secondary'>
                            <Image
                                height={24}
                                width={136}
                                src='/svg/stars.svg'
                                alt='stars'
                            />
                            <Link href='https://shopee.co.id/buyer/465250973/rating'>
                                <a className='hover:text-gray-600 hover:underline'>
                                    (8 reviews)
                                </a>
                            </Link>
                        </div>
                        <h3 className='mt-5 text-lg font-normal font-secondary'>
                            Beli produk kami lewat:
                        </h3>
                        <div
                            className='flex flex-col py-2 space-y-1'
                            onChange={(e) => setLink(e.target.value)}
                        >
                            <div className='space-x-2 text-base font-secondary'>
                                <input
                                    checked={link === productLink.shopee}
                                    type='radio'
                                    value={productLink.shopee}
                                    name='bukalapak'
                                    className='text-spurple'
                                />
                                <label>Shopee</label>
                            </div>
                            <div className='space-x-2 text-base font-secondary'>
                                <input
                                    checked={link === productLink.tokopedia}
                                    type='radio'
                                    value={productLink.tokopedia}
                                    name='tokopedia'
                                    className='text-spurple '
                                />
                                <label>Tokopedia</label>
                            </div>
                        </div>
                        <button
                            type='button'
                            className='inline-flex items-center w-full lg:w-[150px] px-[120px] py-3 lg:py-2 mt-5 text-sm font-medium text-white border border-transparent rounded-full shadow-sm lg:px-7 bg-spurple hover:bg-spurplehover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-spurplehover'
                        >
                            <a href={link} target='_blank'>
                                Beli Sekarang
                            </a>
                        </button>
                    </aside>
                </div>
            </section>
            <hr className='max-w-sm mx-auto mt-10 border-2 rounded-lg lg:max-w-4xl xl:max-w-6xl lg:mt-7' />
            <section className='max-w-sm px-5 py-10 mx-auto lg:max-w-4xl xl:max-w-6xl'>
                <h3 className='text-xl font-semibold font-secondary'>
                    Deskripsi Produk
                </h3>

                <p className='mt-2 text-base font-normal font-secondary'>
                    NELL’S Citronella Deodorant merupakan deodoran alami
                    berbahan dasar serai wangi yang dikemas dalam <i>tube</i>{' '}
                    berukuran 50ml. Tersedia dalam bentuk krim yang mudah
                    menyerap serta lebih mudah diratakan dibandingkan jenis
                    deodoran lainnya. Komposisinya bebas dari Aluminium
                    Chlorohydrate (ACH) dan paraben yang aman untuk digunakan
                    setiap hari. NELL’S berbahan utama serai wangi, dan
                    dilengkapi bahan pelengkap seperti,{' '}
                    <i>glyceril stearate </i>, gliserin, asam stearat,{' '}
                    <i>stearyl alcohol </i>, VCO, NaHCO
                    <sub>3</sub> , asam sitrat, <i>arrowroot </i> dan
                    <i> phenoxyethanol </i> yang dapat menutrisi kulit ketiak
                    serta mempercepat penyembuhan luka iritasi akibat pencukuran
                    rambut ketiak.
                </p>
                <p className='text-base font-bold mt-7 font-secondary'>
                    Mengapa menggunakan serai wangi?
                </p>
                <p className='mt-2 text-base font-normal font-secondary'>
                    Serai wangi mengandung sitronelal dan geraniol yang
                    berfungsi sebagai antiseptik dan antimikroba alami. Selain
                    itu, kedua kandungan tersebut juga dapat menghambat proses
                    terjadinya penuaan dini yang disebabkan oleh radikal bebas
                    serta dapat berperan sebagai antikanker sehingga cocok untuk
                    menggantikan peran Aluminium Chlorohydrate (ACH) dan paraben
                    produk deodoran.
                </p>
                <p className='text-base font-bold mt-7 font-secondary'>
                    Kenapa kita harus beralih ke NELL’S Citronella Deodorant?
                </p>
                <p className='mt-2 text-base font-normal font-secondary'>
                    Karena NELL’S Citronella Deodorant memiliki berbagai
                    kelebihan yang jarang kamu temui dalam deodoran lain. Apa
                    aja sih?
                    <ul className='mt-2 ml-8 list-disc'>
                        <li>Beraroma wangi yang berasal dari serai wangi.</li>
                        <li>
                            Berbentuk krim yang mudah diaplikasikan dan cepat
                            menyerap.
                        </li>
                        <li>
                            Mengandung antibakteri, bekerja dengan menyerap
                            keringat serta tidak menodai baju.
                        </li>
                        <li>
                            Mampu mencerahkan dan melembutkan kulit ketiak,
                            serta mampu mengatasi inflamasi akibat luka mencukur
                            atau mencabut bulu ketiak.
                        </li>
                        <li>
                            Komposisi yang aman, tidak mengandung bahan
                            berbahaya.
                        </li>
                        <li>
                            Kemasan yang unik dan{' '}
                            <span className='italic'>travel friendly</span>.
                        </li>
                    </ul>
                </p>
                <br />
                <p>
                    Mulai sekarang, tak perlu khawatir dalam menggunakan
                    deodoran setiap hari karena NELL’S hadir sebagai
                    <strong> #YourDailyTrust</strong> yang mampu mengatasi bau
                    badan sekaligus menutrisi ketiak dengan bahan bahan alami.
                </p>
                <p className='mt-2 italic font-bold'>
                    Embrace your beauty by caring for your body!
                </p>
            </section>
            {/* <TestimoniProd /> */}
            <Footer />
            <style global jsx>
                {`
                    .slick-dots {
                        width: 95%;
                        bottom: -67px;
                    }

                    .slick-dots li {
                        position: relative;
                        display: inline-block;
                        width: 60px;
                        margin: 2px 8px;
                        padding: 0;
                        cursor: pointer;
                    }
                `}
            </style>
        </main>
    );
}
