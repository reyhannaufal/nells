import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Seo from '../../components/Seo';

export default function healthzone_1() {
    return (
        <main>
            <Seo title='Nells | Blog Post' />
            <Header />
            <section className='max-w-sm pt-10 mx-auto xl:px-0 px-7 lg:max-w-5xl'>
                <h1 className='text-2xl font-semibold lg:text-3xl'>
                    Cara Mendeteksi Dini Penyakit Alzhimer
                </h1>
                <div className='flex space-x-5 font-secondary'>
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
                    src='/png/healthzone-1.png'
                    className='w-full mt-5 rounded-3xl h-'
                />
                <div className='px-4 mt-10 text-base font-normal lg:px-0 space-y-7 font-secondary'>
                    <p className='first-letter:font-semibold first-letter:text-xl'>
                        Penyakit Alzheimer adalah penyakit degeneratif otak dan
                        penyebab paling umum dari demensia. Hal ini ditandai
                        dengan penurunan memori, bahasa, pemecahan masalah dan
                        keterampilan kognitif lainnya yang mempengaruhi
                        kemampuan seseorang untuk melakukan kegiatan
                        sehari-hari. Penurunan ini terjadi karena sel-sel saraf
                        (neuron) di bagian otak yang terlibat dalam fungsi
                        kognitif telah rusak dan tidak lagi berfungsi normal.
                    </p>
                    <p>
                        Salah satu titik kritis pada penanganan Alzheimer adalah
                        saat mendeteksi gejala yang muncul. Adapun beberapa
                        kerusakan otak yang terjadi dapat bersifat permanen
                        maupun dapat dikembalikan, dan deteksi dini dapat
                        menjadi salah satu faktor penentu gangguan mana yang
                        dimiliki seseorang. Penanganan dini dapat mengembalikan
                        beberapa fungsi kognitifnya atau setidaknya memperlambat
                        jalannya progres gangguan. Oleh karena itu penting untuk
                        mengenali gejala awal Alzheimer. Deteksi awal penyakit
                        Alzheimer dapat dilakukan dengan melihat beberapa gejala
                        berikut ini:
                        <ul className='mt-2 ml-8 list-decimal'>
                            <li>Lupa kejadian sehari-hari</li>
                            <li>Menurunnya kemampuan menyelesaikan masalah</li>
                            <li>Disorientasi waktu dan tempat</li>
                            <li>Perubahan perilaku</li>
                            <li>Kesulitan dalam mengucapkan sesuatu</li>
                        </ul>
                    </p>

                    <p>
                        Selain melihat gejala-gejala di atas deteksi awal
                        Alzheimer dapat dilakukan melalui wawancara dan beberapa
                        pemeriksaan. Pemeriksaan yang dilakukan adalah untuk
                        menilai kemampuan mengingat, perubahan sikap, derajat
                        gangguan ingatan yang terjadi, hingga penyebab dari
                        keluhan. Pemeriksaan yang sampai saat ini sudah terbukti
                        akurat hingga 84 persen adalah menggunakan MRI (Magnetic
                        Resonance Imaging).
                    </p>
                </div>
            </section>
            <div className='flex lg:max-w-5xl lg:mx-auto flex-col lg:flex-row lg:justify-between bg-[#F5F5F5] px-5 py-6 mt-8  lg:rounded-3xl mb-20'>
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
            </div>
            <Footer />
        </main>
    );
}
