import { useState } from 'react';
import Image from 'next/image';

import Header from '../components/Header';
import Footer from '../components/Footer';
import TestimoniProd from '../components/TestimoniProd';
import ProductSlider from '../components/ProductSlider';
import Seo from '../components/Seo';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function product() {
    const [loading, setLoading] = useState(false);

    const [link, setLink] = useState('https://www.bukalapak.com/');

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
                            <p>(0 reviews)</p>
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
                                    checked={
                                        link === 'https://www.bukalapak.com/'
                                    }
                                    type='radio'
                                    value='https://www.bukalapak.com/'
                                    name='bukalapak'
                                    className='text-spurple'
                                />
                                <label>Bukalapak</label>
                            </div>
                            <div className='space-x-2 text-base font-secondary'>
                                <input
                                    checked={
                                        link === 'https://www.tokopedia.com/'
                                    }
                                    type='radio'
                                    value='https://www.tokopedia.com/'
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lectus bibendum fermentum at sapien, convallis potenti urna.
                    Velit feugiat malesuada semper nulla iaculis nisl quisque
                    ut. Sapien mauris netus placerat pulvinar at. Arcu eu
                    vivamus mauris pretium ultrices neque, pretium lectus.
                    Tellus velit, vel morbi enim sit massa interdum id massa.
                    Porta at a egestas vitae.{' '}
                </p>

                <p className='mt-2 text-base font-normal font-secondary'>
                    Enim, tincidunt fringilla congue morbi erat viverra neque.
                    Lacus, vivamus rutrum sagittis diam. Arcu et, eget volutpat
                    molestie mi dui. Porttitor adipiscing aliquet eu nullam.
                    Integer dignissim consequat sapien sed sit ipsum, purus ac
                    quis. Tempor feugiat viverra iaculis nullam dolor. Est
                    varius ultrices ut sed viverra adipiscing felis. Vel magna
                    quis cursus pharetra erat eget malesuada ut. Rhoncus
                    condimentum eu lobortis cursus ullamcorper non varius libero
                    tellus. Eu accumsan dictum amet, integer convallis volutpat
                    magna et sit. Egestas dui purus sit ipsum.
                </p>
            </section>
            <TestimoniProd />
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
