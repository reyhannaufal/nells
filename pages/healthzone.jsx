import Head from 'next/head';
import Link from 'next/link';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Seo from '../components/Seo';

export default function healthzone() {
    return (
        <div>
            <Seo title='Nells | Healthzone' />
            <Header />
            <header>
                <div className='px-2 py-16 space-y-3 font-normal text-center lg:px-0 font-primary'>
                    <h1 className='text-4xl'>Health Zone</h1>
                    <p className='text-sm text-gray-500 md:text-base font-secondary'>
                        Yuk, edukasi diri kita mengenai penyakit{' '}
                        <span className='font-bold text-green-700'>
                            Alzheimer
                        </span>
                    </p>
                    <p className='text-sm text-gray-500 md:text-base font-secondary'>
                        dan
                        <span className='font-bold text-green-700'>
                            {' '}
                            Kanker Payudara
                        </span>
                        !
                    </p>
                </div>
            </header>
            <section className='max-w-sm mx-auto space-y-5 pb-28 lg:max-w-4xl'>
                <Link href='/healthzone/cara-mendeteksi-dini-penyakit-alzheimer'>
                    <a className=''>
                        <div className='flex flex-col px-5 py-5 hover:text-gray-600 lg:px-0 lg:space-x-10 lg:flex-row'>
                            <img
                                src='/png/healthzone-1.png'
                                className='w-1/3 h-full border rounded-3xl'
                            />
                            <aside className='space-y-2'>
                                <h3 className='mt-3 text-xl font-semibold lg:mt-0 lg:text-3xl'>
                                    Cara Mendeteksi Dini Penyakit Alzhimer
                                </h3>
                                <div className='flex space-x-5 font-secondary'>
                                    <div className='flex space-x-1 '>
                                        <img src='/svg/photo-blog.svg' />
                                        <p className='text-gray-500 mt-0.5'>
                                            Regita
                                        </p>
                                    </div>
                                    <div className='flex w-full space-x-1'>
                                        <img
                                            className='self-center w-5'
                                            src='/svg/calender-blog.svg'
                                        />
                                        <p className='text-gray-500 mt-0.5'>
                                            August 8, 2021
                                        </p>
                                    </div>
                                </div>
                                <p className='text-gray-500 font-secondary'>
                                    Penyakit Alzheimer adalah penyakit
                                    degeneratif otak dan penyebab paling umum
                                    dari demensi Hal ini ditandai dengan
                                    penurunan memori, bahasa, pemecahan masalah
                                    dan keterampilan kognitif lainnya yang...
                                </p>
                            </aside>
                        </div>
                    </a>
                </Link>
                <hr className='border-2 rounded-lg' />
            </section>
            <Footer />
        </div>
    );
}
