import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function glowup() {
    return (
        <div>
            <Head>
                <title>Nells | Glow Up!</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
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
            <section className='max-w-sm pb-5 mx-auto space-y-5 lg:max-w-4xl'>
                <div className='flex flex-col px-5 lg:px-0 lg:space-x-10 lg:flex-row'>
                    <img
                        src='/png/main-photo.png'
                        className='rounded-3xl h-[235px]'
                    />
                    <aside className='space-y-2'>
                        <h3 className='mt-3 text-xl font-semibold lg:mt-0 lg:text-3xl'>
                            Anjuran Puasa di Bulan Muharram
                        </h3>
                        <div className='flex space-x-5 font-secondary'>
                            <div className='flex space-x-1'>
                                <img src='/svg/photo-blog.svg' />
                                <p className='text-gray-500'>Lala</p>
                            </div>
                            <div className='flex space-x-1'>
                                <img src='/svg/calender-blog.svg' />
                                <p className='text-gray-500'>
                                    October 11, 2020
                                </p>
                            </div>
                        </div>
                        <p className='text-gray-500 font-secondary'>
                            Alhamdulillah segala puji bagi Allah subhanahu wa
                            ta’ala yang telah mencurahkan rahmatnya dengan
                            sebegitu banyaknya sehingga tidak akan pernah kita
                            mampu mensyukuri semua nikmat-Nya. Sholawat serta
                            salam selalu tercurah kpd Rasulullah sholallahu
                            ’alayhi wa sallam ...
                        </p>
                    </aside>
                </div>
                <hr className='border-2 rounded-lg' />
                <div className='flex flex-col px-5 lg:px-0 lg:space-x-10 lg:flex-row'>
                    <img
                        src='/png/main-photo.png'
                        className='rounded-3xl h-[235px]'
                    />
                    <aside className='space-y-2'>
                        <h3 className='mt-3 text-xl font-semibold lg:mt-0 lg:text-3xl'>
                            Anjuran Puasa di Bulan Muharram
                        </h3>
                        <div className='flex space-x-5 font-secondary'>
                            <div className='flex space-x-1'>
                                <img src='/svg/photo-blog.svg' />
                                <p className='text-gray-500'>Lala</p>
                            </div>
                            <div className='flex space-x-1'>
                                <img src='/svg/calender-blog.svg' />
                                <p className='text-gray-500'>
                                    October 11, 2020
                                </p>
                            </div>
                        </div>
                        <p className='text-gray-500 font-secondary'>
                            Alhamdulillah segala puji bagi Allah subhanahu wa
                            ta’ala yang telah mencurahkan rahmatnya dengan
                            sebegitu banyaknya sehingga tidak akan pernah kita
                            mampu mensyukuri semua nikmat-Nya. Sholawat serta
                            salam selalu tercurah kpd Rasulullah sholallahu
                            ’alayhi wa sallam ...
                        </p>
                    </aside>
                </div>
            </section>
            <Footer />
        </div>
    );
}
