import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Seo from '../components/Seo';

export default function glowup() {
    return (
        <div>
            <Seo title='Nells | Glowup!' />
            <Header />
            <header>
                <div className='px-5 py-16 space-y-3 font-normal text-center lg:px-0 font-primary'>
                    <h1 className='text-4xl'>Glow Up!</h1>
                    <p className='text-sm text-gray-500 font-secondary md:text-base'>
                        Punya pertanyaan seputar perawatan ketiak?
                    </p>
                    <p className='text-sm text-gray-500 font-secondary md:text-base'>
                        Kami siap membantu!
                    </p>
                </div>
            </header>
            <section className='max-w-sm mx-auto space-y-5 pb-28 lg:max-w-4xl'>
                <Link href='/glowup/cara-tepat-mencukur-bulu-ketiak-yang-aman'>
                    <a className=''>
                        <div className='flex flex-col px-5 hover:text-gray-600 lg:px-0 lg:space-x-10 lg:flex-row'>
                            <img
                                src='/png/glowup-1.png'
                                className='w-1/3 h-full rounded-3xl'
                            />
                            <aside className='space-y-2'>
                                <h3 className='mt-3 text-xl font-semibold lg:mt-0 lg:text-3xl'>
                                    Cara Tepat Mencukur Bulu Ketiak yang Aman
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
                                    Mencukur dengan pisau tumpul dan tidak
                                    menggunakan dapat menyebabkan rambut ketiak
                                    tumbuh ke dalam iritasi, kulit ketiak
                                    terluka, bahkan iritasi kulit dan membuat
                                    ketiak menghitam...
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
