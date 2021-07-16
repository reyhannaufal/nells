import Footer from '../components/Footer';
import Header from '../components/Header';

export default function healthzone() {
    return (
        <div>
            <Header />
            <header>
                <div className='py-16 space-y-3 font-normal text-center font-primary'>
                    <h1 className='text-4xl'>Health Zone</h1>
                    <p className='text-gray-500 font-secondary'>
                        Yuk, edukasi diri kita mengenai penyakit{' '}
                        <span className='font-bold text-green-700'>
                            Alzheimer
                        </span>
                    </p>
                    <p className='text-gray-500 font-secondary'>
                        dan
                        <span className='font-bold text-green-700'>
                            {' '}
                            Kanker Payudara
                        </span>
                        !
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
