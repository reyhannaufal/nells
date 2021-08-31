import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Seo from '../../components/Seo';

export default function healthzone_2() {
   return (
      <main>
         <Seo title='Nells | Blog Post' />
         <Header />
         <section className='max-w-sm pt-10 pb-20 mx-auto xl:px-0 px-7 lg:max-w-5xl'>
            <h1 className='text-2xl font-semibold lg:text-3xl'>
               Mengenal Gejala Kanker Payudara
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
               src='/png/healthzone-2.png'
               width='1000'
               height='400'
               className='mt-5 rounded-3xl h-[160px] w-[320px] lg:w-[1000px] lg:h-[400px] object-cover'
            />
            <div className='px-4 mt-10 text-base font-normal lg:px-0 space-y-7 font-secondary'>
               <p className='first-letter:font-semibold first-letter:text-xl'>
                  Kanker payudara adalah tumor ganas yang menyerang jaringan
                  payudara. Jaringan tersebut terdiri dari kelenjar susu
                  (kelenjar pembuat air susu), saluran kelenjar (saluran air
                  susu), dan jaringan penunjang payudara. Kanker payudara tidak
                  menyerang kulit payudara yang berfungsi sebagai pembungkus.
                  Kanker payudara menyebabkan sel dan jaringan payudara berubah
                  bentuk menjadi abnormal dan bertambah banyak secara tidak
                  terkendali.
               </p>
               <p>
                  Kanker payudara merupakan penyakit yang paling ditakuti oleh
                  kaum wanita. Meskipun demikian, berdasarkan penemuan terakhir,
                  kaum pria pun bisa terkena kanker payudara. Dari hasil
                  penelitian para ahli menunjukkan bahwa satu dari delapan
                  wanita terkena kanker payudara. Di Indonesia, kanker payudara
                  merupakan kanker kedua paling banyak diderita kaum wanita
                  setelah kamker mulut/ leher rahim. Kanker payudara umumnya
                  menyerang wanita yang telah berumur lebih dari 40 tahun. Namun
                  demikian, wanita muda pun bisa terserang kanker ini.
               </p>
               <p>
                  Selama ini yang terjadi pada penderita adalah baru diketahui
                  bahwa dirinya terserang kanker payuara setelah timbul rasa
                  nyeri atau sakit pada payudara atau setelah benjolan tumbuh
                  semakin membesar pada jaringan payudaanya. Penderita yang
                  mengalami kondisi seperti itu sebenarnya sudah terserang
                  kanker payudara stadium lanjut. Keterlambatan tersebut tentu
                  akan mempersulit penyembuhan. Padahal, akan lebih mudah
                  penyembuhan jika serangan kanker payudara dapat diketahui
                  secara dini.
               </p>
               <p>
                  Penderita yang terkena kanker payudara stadium awal atau dini
                  tidak merasakan adanya nyeri atau sakit pada payudaranya.
                  Namun demikian, jika payudara diraba, ada benjolan yang tumbuh
                  di dalamnya. Besar-kecilnya benjolan yang tumbuh tersebut
                  sangat bervariasi, tergantung seberapa cepat penderita bisa
                  mendeteksinya. Setelah melewati stadium dini atau memasuki
                  stadium lanjut, gejala serangan kanker payudara semakin banyak
                  seperti berikut ini:
                  <ul className='mt-2 ml-8 list-decimal'>
                     <li>Timbul rasa sakit atau nyeri pada payudara</li>
                     <li>Semakin lama benjolan yang tumbuh semakin membesar</li>
                     <li>
                        Payudara mengalami perubahan bentuk dan ukuran karena
                        mulai timbul pembengkakan
                     </li>
                     <li>
                        Mulai timbul luka pada payudara dan puting susu seperti
                        koreng eksim
                     </li>
                     <li>Kulit payudara menjadi berkerut mirip kulit jeruk</li>
                     <li>
                        Terkadang keluar cairan atau darah berwarna merah
                        kehitam-hitaman dari puting susu
                     </li>
                  </ul>
               </p>

               <p>
                  Upaya pencegahan risiko kanker payudara dapat dicegah mulai
                  dari menggunakan deodoran yang bebas dari kandungan Aluminium
                  dan Paraben. Salah satunya adalah NELL’S Citronella Deodorant,
                  yang kaya akan kandungan sitronelal dan geraniol yang mampu
                  berfungsi sebagai antioksidan, anti inflamasi serta menghambat
                  aktivitas bakteri gram positif pada ketiak untuk mensubstitusi
                  penggunaan Aluminium Chlorohydrate pada deodoran.
               </p>
               <p>
                  Sc: Mardiana Lina. 2007. Kanker pada Wanita. Niaga Swadaya,
                  Jakarta Pusat.
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
