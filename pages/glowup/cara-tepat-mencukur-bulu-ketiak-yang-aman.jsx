import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Seo from '../../components/Seo';

export default function glowup_1() {
    return (
        <main>
            <Seo title='Nells | Blog Post' />
            <Header />
            <section className='max-w-sm pt-10 pb-20 mx-auto xl:px-0 px-7 lg:max-w-5xl'>
                <h1 className='text-2xl font-semibold lg:text-3xl'>
                    Cara Tepat Mencukur Bulu Ketiak yang Aman
                </h1>
                <div className='flex space-x-10 font-secondary'>
                    <div className='flex space-x-1 '>
                        <img src='/svg/profile-primary.svg' />
                        <p className='text-gray-500 mt-0.5'>Regita</p>
                    </div>
                    <div className='flex w-full space-x-1'>
                        <img
                            className='self-center w-5'
                            src='/svg/calendar-primary.svg'
                        />
                        <p className='text-gray-500 mt-0.5'>August 8, 2021</p>
                    </div>
                </div>
                <img
                    src='/png/glowup-1.png'
                    width='1000'
                    height='400'
                    className='mt-5 rounded-3xl h-[160px] w-[320px] lg:w-[1000px] lg:h-[400px] object-cover'
                />
                <div className='mt-10 text-base font-normal space-y-7 font-secondary'>
                    <p className='first-letter:font-semibold first-letter:text-xl'>
                        Mencukur dengan pisau tumpul dan tidak menggunakan dapat
                        menyebabkan rambut ketiak tumbuh ke dalam iritasi, kulit
                        ketiak terluka, bahkan iritasi kulit dan membuat ketiak
                        menghitam. Maka dari itu ada beberapa hal yang perlu
                        diperhatikan dalam mencukur ketiak agar terhindar dari
                        permasalahan tersebut. Berikut cara tepat mencukur bulu
                        ketiak:
                        <ul className='mt-2 ml-8 list-decimal'>
                            <li>
                                Sebelum nencukur bulu ketiak gunakan krim/ gel
                                cukur dan pastikan kondisi kulit ketiak lembab
                                dan bersih.
                            </li>
                            <li>
                                Gunakan pisau cukur yang tajam dan berkualitas
                                baik.{' '}
                            </li>
                            <li>
                                Cukur dari arah tumbuh rambut, lalu cukur
                                kembali dari arah yang berlawanan.
                            </li>
                            <li>Setelah mencukur alat harus dibersihkan.</li>
                        </ul>
                    </p>
                    <p>
                        Kulit ketiak yang habis dicukur akan semakin kering
                        sehingga lebih rentan terhadap iritasi. Karena itu,
                        jangan lupa untuk menggunakan deodoran NELL’S. NELL’S
                        memiliki kandungan VCO yang dapat melembabkan kulit
                        ketiak dan terdapat senyawa geraniol sebagai
                        anttinflamasi untuk merawat kulit ketiak setelah
                        pencukuran. Selain itu NELL’S bebas (tidak mengandung)
                        dari aluminium yang dapat menyebabkan iritasi dan
                        menghitamkan kulit ketiak.
                    </p>
                </div>
            </section>
            {/* <div className='flex lg:max-w-5xl lg:mx-auto flex-col lg:flex-row lg:justify-between bg-[#F5F5F5] px-5 py-6 mt-8  lg:rounded-3xl mb-20'>
                <div className='max-w-sm mx-auto'>
                    <p className='max-w-sm'>
                        Minal ‘Aidin Wal Faizin, Mohon Maaf Lahir dan Batin Saat
                        Idul Fitri, Apakah Benar Tidak Boleh Diucapkan?
                    </p>
                    <button
                        type='button'
                        className='inline-flex mt-10 items-center w-full lg:w-[321px] px-[130px] py-3  text-md font-medium text-spurple border border-gray-400 border-transparent rounded-2xl shadow-sm  md:px-[108px] hover:bg-gray-200  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                    >
                        Previous Post
                    </button>
                </div>
                <div className='max-w-sm pb-10 mx-auto mt-10 lg:pb-0 lg:mt-0'>
                    <p className='max-w-sm'>
                        Minal ‘Aidin Wal Faizin, Mohon Maaf Lahir dan Batin Saat
                        Idul Fitri, Apakah Benar Tidak Boleh Diucapkan?
                    </p>
                    <button
                        type='button'
                        className='inline-flex mt-10 items-center w-full lg:w-[321px] px-[140px] py-3  text-md font-medium bg-spurple border border-transparent rounded-2xl shadow-sm text-white md:px-[120px] hover:bg-spurplehover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                    >
                        Next Post
                    </button>
                </div>
            </div> */}
            <Footer />
        </main>
    );
}
