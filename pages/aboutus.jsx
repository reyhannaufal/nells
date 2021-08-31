import Image from 'next/image';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Seo from '../components/Seo';

export default function aboutus() {
    return (
        <main>
            <Seo title='Nells | About Us' />
            <Header />
            <Image
                width={1440}
                height={509}
                loading='lazy'
                src='/png/cover-about.png'
                placeholder='blur'
                blurDataURL='/png/cover-about.png'
                alt='about-us banner'
                layout='responsive'
                className='mt-10'
            />
            <section className='relative px-5 mx-auto xl:px-0 lg:max-w-6xl xl:max-w-6xl'>
                <div className='absolute bottom-5 md:bottom-14'>
                    <h1 className='text-3xl font-normal text-white md:text-5xl '>
                        About Us
                    </h1>
                </div>
            </section>
            <section className='px-6 py-16 md:px-10 xl:px-0 lg:py-20'>
                <div className='max-w-6xl mx-auto space-y-8 font-secondary'>
                    <div>
                        <h2 className='pb-3 text-2xl font-bold'>
                            Our History and Background
                        </h2>
                        <p>
                            Deodoran merupakan produk perawatan yang sering
                            diandalkan untuk mengatasi masalah bau badan dan
                            keringat berlebih. Namun, deodoran yang banyak
                            beredar di pasaran mengandung zat kimia berupa
                            Aluminium Chlorohydrate (ACH) yang berfungsi untuk
                            mengendalikan keringat dengan cara menutup
                            pori-pori. Hal ini berpotensi memberikan dampak
                            buruk bagi kesehatan berupa penyakit kanker payudara
                            dan alzheimer karena termasuk golongan aluminium
                            yang tinggi kadar toksiknya.
                        </p>
                        <p className='mt-4'>
                            Sebagai alternatif produk dengan bahan aktif utama
                            yang lebih aman, kami menciptakan produk deodoran
                            berbentuk krim berbahan dasar serai wangi dengan
                            merek NELL’S yang bebas dari penggunaan aluminium
                            dan pengawet paraben. Inovasi deodoran NELL’S
                            diciptakan pada tahun 2019 saat berlangsung
                            kompetisi kepenulisan dalam bidang karya ilmiah bagi
                            Mahasiswa Baru Fakultas Teknologi Pertanian,
                            Universitas Brawijaya. Serai wangi sebagai bahan
                            baku utama deodoran ini, dipercaya memiliki
                            kandungan sitronelal dan geraniol sebagai antikanker
                            dan antiinflamasi, serta kandungan flavonoid sebagai
                            antibakteri yang mampu menghambat pertumbuhan dan
                            membunuh bakteri penyebab bau badan seperti
                            <i> Staphylococcus epidermidis</i>. Oleh karena itu,
                            kami harap produk NELL’S dapat menjadi pilihan utama
                            konsumen dalam menggunakan deodoran.
                        </p>
                    </div>
                    <div>
                        <h2 className='pb-3 text-2xl font-bold'>Our Vision</h2>
                        <p>
                            Menjadikan produk NELL’S terpercaya sebagai produk
                            yang aman dan terhindar dari bahan berbahaya serta
                            mendorong <i>customers</i> untuk tampil percaya diri
                            dan peduli dengan kesehatan tubuh.
                        </p>
                    </div>
                    <div>
                        <h2 className='pb-3 text-2xl font-bold'>Mission</h2>
                        <p>
                            Membuat sarana edukasi melalui website sebagai
                            bentuk kepedulian kami dengan <i>customers</i> yang
                            berisi mengenai pencegahan penyakit kanker payudara
                            dan Alzheimer serta perawatan kulit ketiak.
                            Mendukung gerakan “Embrace your Beauty by Caring for
                            your Body” yang bertujuan untuk mendorong{' '}
                            <i>customers</i> agar meningkatkan kepercayaan diri
                            dengan merawat tubuh.
                        </p>
                    </div>
                </div>
            </section>
            <section className='px-5 py-20 bg-pinkish md:px-0'>
                <div className='max-w-sm mx-auto xl:max-w-6xl'>
                    <div className='flex flex-col mt-5 xl:flex-row xl:space-x-36'>
                        <div className='rounded-xl w-[320px] h-[320]px mx-auto lg:h-auto lg:w-auto'>
                            <Image
                                height='320px'
                                width='320px'
                                loading='lazy'
                                src='/png/contact-us.png'
                            />
                        </div>
                        <div>
                            <h3 className='mt-8 text-xl font-normal text-center xl:text-left lg:mt-5 lg:text-3xl'>
                                Want to contact us?
                            </h3>
                            <p className='mt-5 font-light text-center text-gray-500 xl:text-left font-secondary'>
                                Mari ikut berkontribusi dalam pencegahan risiko
                                kanker payudara dan alzheimer. Informasi
                                selengkapnya dapat menghubungi kontak dibawah
                                ini.
                            </p>
                            <div className='flex justify-center xl:justify-start'>
                                <a
                                    href='https://wa.me/send/?phone=6281808010831'
                                    rel='nofollow noopener noreferrer'
                                    target='_blank'
                                    className='inline-flex mt-10 items-center w-[405px]  py-3  text-md font-medium bg-spurple border border-transparent rounded-2xl shadow-sm text-white justify-center hover:bg-spurplehover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
