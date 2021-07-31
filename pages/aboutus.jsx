import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Seo from '../components/Seo';

export default function aboutus() {
    return (
        <main>
            <Seo title='Nels | About Us' />
            <Header />
            <section className='relative'>
                <img
                    src='/png/about-us-banner.png'
                    alt='about-us banner'
                    className='h-64 md:h-auto'
                />
                <div className='absolute bottom-14 xl:left-36 left-5 md:left-10'>
                    <h1 className='text-3xl font-normal text-white md:text-5xl '>
                        About Us
                    </h1>
                </div>
            </section>
            <section className='px-6 py-16 md:px-10 xl:px-0 lg:py-20'>
                <div className='max-w-6xl mx-auto space-y-8 font-secondary'>
                    <div>
                        <h2 className='pb-3 text-2xl font-bold'>History</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Lectus bibendum fermentum at sapien, convallis
                            potenti urna. Velit feugiat malesuada semper nulla
                            iaculis nisl quisque ut. Sapien mauris netus
                            placerat pulvinar at. Arcu eu vivamus mauris pretium
                            ultrices neque, pretium lectus. Tellus velit, vel
                            morbi enim sit massa interdum id massa. Porta at a
                            egestas vitae.
                        </p>
                    </div>
                    <div>
                        <h2 className='pb-3 text-2xl font-bold'>Judul 1</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Lectus bibendum fermentum at sapien, convallis
                            potenti urna. Velit feugiat malesuada semper nulla
                            iaculis nisl quisque ut. Sapien mauris netus
                            placerat pulvinar at. Arcu eu vivamus mauris pretium
                            ultrices neque, pretium lectus. Tellus velit, vel
                            morbi enim sit massa interdum id massa. Porta at a
                            egestas vitae.
                        </p>
                    </div>
                    <div>
                        <h2 className='pb-3 text-2xl font-bold'>Judul 2</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Lectus bibendum fermentum at sapien, convallis
                            potenti urna. Velit feugiat malesuada semper nulla
                            iaculis nisl quisque ut. Sapien mauris netus
                            placerat pulvinar at. Arcu eu vivamus mauris pretium
                            ultrices neque, pretium lectus. Tellus velit, vel
                            morbi enim sit massa interdum id massa. Porta at a
                            egestas vitae.
                        </p>
                    </div>
                </div>
            </section>
            <section className='px-5 py-20 bg-pinkish md:px-0'>
                <div className='max-w-sm mx-auto lg:mt-16 lg:max-w-5xl'>
                    <div className='flex flex-col mt-5 lg:flex-row lg:space-x-36'>
                        <Image
                            height='320px'
                            width='320px'
                            loading='lazy'
                            alt='Reseller Foto'
                            src='/png/contact-us.png'
                            className='rounded-xl w-[180px] h-[180]px mx-auto lg:h-auto lg:w-auto'
                        />
                        <div>
                            <h3 className='mt-8 text-xl font-normal text-center lg:text-left lg:mt-5 lg:text-3xl'>
                                Want to contact us?
                            </h3>
                            <p className='mt-5 font-light text-center text-gray-500 lg:text-left font-secondary'>
                                Mari ikut berkontribusi dalam pencegahan risiko
                                kanker payudara dan alzheimer. Informasi
                                selengkapnya dapat menghubungi kontak dibawah
                                ini.
                            </p>
                            <div className='flex justify-center lg:justify-start'>
                                <button
                                    type='button'
                                    className='inline-flex mt-10 items-center w-[321px] px-[115px] py-3  text-md font-medium bg-spurple border border-transparent rounded-2xl shadow-sm text-white md:px-[115px] hover:bg-spurplehover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                                >
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
