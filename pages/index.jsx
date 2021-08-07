import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Certificate from '../components/Certificate';
import FeaturedPost from '../components/FeaturedPost';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Product from '../components/Product';
import Seo from '../components/Seo';
import Testimonials from '../components/Tesimonials';

export default function Home() {
    return (
        <div>
            <Seo title='Nells | Home' />
            <Header />
            <MainContent />
            <FeaturedPost />
            <Product />
            {/* Why our product section */}
            <section className='py-16 md:py-24 px-7 font-primary md:px-0'>
                <h2 className='text-4xl font-medium text-center '>
                    Why Our Product?
                </h2>
                <div className='max-w-sm mx-auto mt-10 lg:mt-16 lg:max-w-4xl xl:max-w-6xl'>
                    {/* Box start here */}
                    <div className='flex flex-col mt-5 lg:flex-row lg:space-x-36'>
                        <div className='rounded-xl w-[180px] h-[180px] mx-auto lg:h-auto lg:w-auto'>
                            <Image
                                height='320px'
                                loading='lazy'
                                width='320px'
                                alt='Product Foto'
                                src='/png/product-1.png'
                            />
                        </div>
                        <div>
                            <h3 className='mt-8 text-xl font-semibold text-center font-primary lg:text-left lg:mt-16 lg:text-3xl'>
                                Menggunakan Ekstrak Serai Wangi
                            </h3>
                            <p className='mt-5 font-light text-center text-gray-500 lg:text-left font-secondary'>
                                Ekstrak Serai Wangi, mencegah bau badan,
                                mencegah kanker, memiliki efek relaksasi, dan
                                mampu mencerahkan kulit ketiak.
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col mt-10 lg:flex-row-reverse '>
                        <div className='rounded-xl xl:mr-10 w-[180px] h-[180px] mx-auto xl:h-[250px] xl:w-[250px]'>
                            <Image
                                height='320px'
                                width='320px'
                                loading='lazy'
                                alt='Product Foto'
                                src='/png/product-2.png'
                            />
                        </div>
                        <div>
                            <h3 className='mt-8 text-xl font-semibold text-center font-primary lg:text-left lg:mt-16 lg:text-3xl '>
                                Mengandung Virgin Coconut Oil (VCO)
                            </h3>
                            <p className='max-w-2xl mt-5 font-light text-center text-gray-500 lg:text-left font-secondary'>
                                Virgin Coconut Oil (VCO), mengandung vitamin E
                                yang mampu mencerahkan dan menjaga kelembutan
                                kulit ketiak secara optimal.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col mt-10 lg:flex-row lg:space-x-36'>
                        <div className='rounded-xl w-[180px] h-[180px] mx-auto lg:h-auto lg:w-auto'>
                            <Image
                                height='320px'
                                width='320px'
                                loading='lazy'
                                alt='Product Foto'
                                src='/png/product-3.png'
                            />
                        </div>
                        <div>
                            <h3 className='mt-8 text-xl font-semibold text-center font-primary lg:text-left lg:mt-16 lg:text-3xl'>
                                Melindungi kulit sebagai antibakteri
                            </h3>
                            <p className='mt-5 font-light text-center text-gray-500 lg:text-left font-secondary'>
                                Kandungan Geraniol dan Citronellal dari serai
                                wangi, melindungi kulit sebagai antibakteri dan
                                virus sehingga ketiak wangi dan sehat.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Certificate />

            <Testimonials />

            {/* Contact our reseller section */}
            <section className='px-5 py-20 bg-pinkish md:px-0'>
                <div className='max-w-sm mx-auto lg:max-w-4xl xl:max-w-6xl'>
                    <div className='flex flex-col mt-5 lg:flex-row lg:space-x-36'>
                        <div className='rounded-xl w-[320px] h-[320]px mx-auto lg:h-auto lg:w-auto'>
                            <Image
                                height='320px'
                                width='320px'
                                loading='lazy'
                                alt='Reseller Foto'
                                src='/png/reseller.png'
                            />
                        </div>
                        <div>
                            <h3 className='mt-8 text-xl font-normal text-center lg:text-left lg:mt-8 lg:text-3xl'>
                                Be a Reseller
                            </h3>
                            <p className='mt-5 font-light text-center text-gray-500 lg:text-left font-secondary'>
                                Mari ikut berkontribusi dalam pencegahan risiko
                                kanker payudara dan alzheimer. Informasi
                                selengkapnya dapat menghubungi kontak dibawah
                                ini.
                            </p>
                            <div className='flex justify-center lg:justify-start'>
                                <a
                                    href='https://wa.me/send/?phone=62895363417951'
                                    rel='nofollow noopener noreferrer'
                                    target='_blank'
                                    className='inline-flex mt-10 items-center w-[321px] px-[115px] py-3  text-md font-medium bg-spurple border border-transparent rounded-2xl shadow-sm text-white md:px-[115px] hover:bg-spurplehover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <style global jsx>
                {`
                    .slick-next::before {
                        content: ' ';
                    }

                    .slick-prev::before {
                        content: ' ';
                    }
                `}
            </style>
        </div>
    );
}
