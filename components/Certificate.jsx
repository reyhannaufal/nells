export default function Certificate() {
   return (
      <section className='px-5 py-20 bg-pinkish md:px-0'>
         <div className='max-w-sm mx-auto lg:mt-16 lg:max-w-4xl xl:max-w-5xl'>
            <div className='flex flex-col-reverse mt-5 lg:flex-row lg:space-x-36'>
               <div>
                  <h3 className='mt-8 text-xl font-normal text-center lg:text-left lg:mt-16 lg:text-3xl'>
                     Certificate
                  </h3>
                  <p className='mt-5 font-light text-center text-gray-600 lg:text-left font-secondary'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Risus cras ut pellentesque nisi phasellus leo non lorem
                     magna. Et maecenas bibendum consectetur pretium id feugiat
                     donec at ...
                  </p>
                  <div className='flex justify-center lg:justify-start'>
                     <button
                        type='button'
                        className='inline-flex mt-10 items-center w-[321px] px-[115px] py-3  text-md font-medium bg-spurple border border-transparent rounded-2xl shadow-sm text-white md:px-[115px] hover:bg-spurplehover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                     >
                        Open PDF
                     </button>
                  </div>
               </div>
               <iframe
                  title='Nells Certificate'
                  className='w-[321px] h-[455px] mx-auto'
                  // src='https://drive.google.com/file/d/1hAgKzGj64TeVQNfxUY7-X2eRa7wNtxAb/preview'
               />
            </div>
         </div>
      </section>
   );
}
