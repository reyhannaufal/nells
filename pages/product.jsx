import Slider from 'react-slick';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import Header from '../components/Header';
import Footer from '../components/Footer';
import TestimoniProd from '../components/TestimoniProd';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function product() {
    const settings = {
        customPaging: function (i) {
            return (
                <div className='grid grid-col-4'>
                    <a className=''>
                        <img src={`/png/product-foto.png`} className='' />
                    </a>
                </div>
            );
        },
        dots: true,
        dotsClass: 'slick-dots slick-thumb',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: (
            <button className='top-0 my-2 w-9'>
                <MdKeyboardArrowLeft className='text-4xl text-black' />
            </button>
        ),
        nextArrow: (
            <button className='top-0 w-9 h-9'>
                <MdKeyboardArrowRight className='text-4xl text-black' />
            </button>
        ),
    };
    return (
        <main className='overflow-hidden'>
            <Header />
            <section className='mx-auto max-w-7xl'>
                <div className='flex flex-col mx-auto lg:flex-row'>
                    <div className='max-w-xs py-20 mx-auto lg:ml-20 lg:mr-24'>
                        <Slider {...settings} className='' arrows={false}>
                            <div>
                                <img src='/png/product-foto.png' />
                            </div>
                            <div>
                                <img src='/png/product-foto.png' />
                            </div>
                            <div>
                                <img src='/png/product-foto.png' />
                            </div>
                            <div>
                                <img src='/png/product-foto.png' />
                            </div>
                        </Slider>
                    </div>
                    <aside className='lg:w-[50%] px-5 lg:pt-20 '>
                        <h1 className='text-2xl font-semibold lg:text-3xl font-primary'>
                            NELL'S Citronella Deodorant
                        </h1>
                        <div className='flex mt-1 space-x-3 font-secondary'>
                            <img src='/svg/stars.svg' />
                            <p>(0 reviews)</p>
                        </div>
                        <h3 className='mt-5 text-lg font-normal font-secondary'>
                            Beli produk kami lewat:
                        </h3>
                        <div className='py-2 space-y-1'>
                            <div className='flex space-x-3'>
                                <input
                                    type='radio'
                                    id='Shopee'
                                    value='Shopee'
                                />
                                <label htmlFor='Shopee'>Shopee</label>
                            </div>
                            <div className='flex space-x-3'>
                                <input
                                    type='radio'
                                    id='Tokopedia'
                                    value='Tokopedia'
                                />
                                <label htmlFor='Tokopedia'>Tokopedia</label>
                            </div>
                            <div className='flex space-x-3'>
                                <input
                                    type='radio'
                                    id='Lazada'
                                    value='Lazada'
                                />
                                <label htmlFor='Lazada'>Lazada</label>
                            </div>
                        </div>
                        <button
                            type='button'
                            className='inline-flex items-center w-full lg:w-[150px] px-[136px] py-3 lg:py-2 mt-5 text-sm font-medium text-white border border-transparent rounded-full shadow-sm md:px-7 bg-spurple hover:bg-spurplehover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-spurplehover'
                        >
                            Beli Sekarang
                        </button>
                    </aside>
                </div>
            </section>
            <hr className='md:max-w-6xl max-w-sm mx-auto mt-10 lg:mt-2 border-[1.5px] rounded-lg' />
            <section className='max-w-sm py-10 mx-auto lg:max-w-6xl'>
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
