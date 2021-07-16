export default function Product() {
    return (
        <div className='bg-pinkish'>
            <section className='flex flex-col max-w-md px-8 py-20 mx-auto lg:px-0'>
                <h2 className='block mx-auto text-4xl'>Buy Our Product</h2>
                <div className='flex flex-col mt-10 overflow-hidden shadow-lg rounded-3xl'>
                    <div className='flex-shrink-0'>
                        <img
                            className='object-cover w-full h-full'
                            src='/png/product-foto.png'
                            alt='product-foto'
                        />
                    </div>
                    <div className='flex flex-col justify-between flex-1 p-6 bg-white'>
                        <div className='flex-1'>
                            <a href='#' className='block mt-2'>
                                <p className='text-xl font-semibold text-gray-900'>
                                    NELL'S Citronella Deodorant
                                </p>
                                <p className='mt-3 text-base text-gray-500'>
                                    Kamu tahu gak sih, tubuh yang sehat dan
                                    punya imun yang kuat lebih sulit ...
                                </p>
                            </a>
                        </div>
                        <button
                            type='button'
                            className='inline-flex items-center w-[150px] px-9 py-2 mt-5 text-sm font-medium text-white border border-transparent rounded-full shadow-sm md:px-9 bg-spurple hover:bg-spurplehover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-spurplehover'
                        >
                            Read More
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}