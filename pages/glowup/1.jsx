import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Seo from '../../components/Seo';

export default function Test() {
    return (
        <main>
            <Seo title='Nells | Blog Post' />
            <Header />
            <section className='max-w-sm pt-10 mx-auto xl:px-0 px-7 lg:max-w-5xl'>
                <h1 className='text-2xl font-semibold lg:text-3xl'>
                    Anjuran Puasa di Bulan Ramadhan
                </h1>
                <div className='flex space-x-5 font-secondary'>
                    <div className='flex space-x-1 '>
                        <img src='/svg/profile-primary.svg' />
                        <p className='text-gray-500 mt-0.5'>Lala</p>
                    </div>
                    <div className='flex w-full space-x-1'>
                        <img
                            className='self-center w-5'
                            src='/svg/calendar-primary.svg'
                        />
                        <p className='text-gray-500 mt-0.5'>October 11, 2020</p>
                    </div>
                </div>
                <img src='/png/cover-blog.png' className='mt-5' />
                <div className='mt-10 text-base font-normal space-y-7 font-secondary'>
                    <p>
                        Alhamdulillah segala puji bagi Allah subhanahu wa ta’ala
                        yang telah mencurahkan rahmatnya dengan sebegitu
                        banyaknya sehingga tidak akan pernah kita mampu
                        mensyukuri semua nikmat-Nya. Sholawat serta salam selalu
                        tercurah kepada Rasulullah sholallahu ’alayhi wa sallam
                        yang telah membimbing kita dalam agama yang mulia ini
                        hingga tidaklah tersisa lagi kerancuan dan kebimbangan
                        dan menjadi jelaslah mana jalan yang semestinya kita
                        tempuh.
                    </p>
                    <p>
                        Dari Nafi’: Abdullah bin ‘Umar radhiyallahu anhuma
                        memberitahukan kepadaku bahwa dahulu orang-orang pada
                        jahiliyah berpuasa pada hari ‘asyura. Saat itu puasa
                        pada bulan Ramadhan belum disyariatkan, Rasulullah dan
                        kaum muslimin juga berpuasa pada hari ‘asyura. Maka
                        ketika syariat tentang wajibnya puasa pada bulan
                        Ramadhan turun, Rasulullah mengatakan,” Sesungguhnya
                        hari ‘asyura adalah harinya Allah, maka siapa yang ingin
                        berpuasa silahkan ia berpuasa dan siapa yang tidak ingin
                        berpuasa silahkan tidak berpuasa.(HR. Muslim 1162)
                    </p>
                    <p>
                        Rasulullah berpuasa pada hari ‘asyura dan memerintahkan
                        kaum muslimin untuk berpuasa. Kemudian ada yang
                        mengatakan kepada beliau,”Wahai Rasulullah, hari ‘asyura
                        adalah hari yang dimuliakan oleh orang-orang yahudi dan
                        nashrani”. Maka Rasulullah berkata,”Kalau begitu tahun
                        depan, insyaallah, kita akan berpuasa juga pada tanggal
                        9 Muharram”. (HR. Muslim 1134)
                    </p>
                    <p>
                        Dari sini dapat kita lihat bahwasanya Rasulullah
                        shalallahu ‘alayhi was sallam ingin melaksanakan puasa 9
                        Muharram. Hanya saja takdir Allah mendahuluinya sehingga
                        beliau belum sempat melaksanakan puasa tersebut.
                        Sehingga yang lebih utama adalah
                        menggabungkan/melaksanakan kedua puasa tersebut yaitu
                        puasa pada tanggal 9 dan 10 Muharram. Namun, tidaklah
                        mengapa jika hanya berpuasa pada tanggal 10 Muharram
                        saja.
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
