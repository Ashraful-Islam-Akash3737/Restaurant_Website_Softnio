import BannerImg from '../../../src/assets/hero-image/hero-image.jpeg'
import img1 from '../../../src/assets/banner-image/banner-images.jpeg'

const Home = () => {
    return (
        <div className='max-w-7xl '>

            {/* banner section*/}
            <section className="hero  bg-[red]  mx-auto py-5 md:py-14  rounded-none">


                <div className="hero-content flex-col md:relative  py-auto px-7 md:flex-row ">
                    <div className="  w-full flex flex-col-reverse md:flex-row justify-end gap-7">
                        <div className="md:block hidden w-6/12"></div>
                        <img className='w-full md:w-6/12' src={BannerImg} />
                        <div className=''>
                            <div className="md:absolute top-[10%] left-[0%] py-auto md:px-7 w-full  py-auto text-white font-[bebas]">
                                <h1 className="text-5xl py-2 md:bg-gradient-to-r from-[#BD1F17a0] to-[#BD1F17a7]  w-full md:w-10/12 md:text-6xl lg:text-[100px]  font-normal mb-2">Taste the authentic Saudi cuisine</h1>
                                <p className="text-[20px] w-full md:w-5/12 md:text-2xl mb-4">Among the best Saudi chefs in the world, serving you something beyond flavor.</p>
                                <a className="btn font-[roboto] font-bold text-[16px] text-black rounded-none bg-[#FEBF00] border-none ">EXPLORE MORE</a>
                            </div>
                        </div>

                    </div>


                </div>

            </section>



            {/* new section */}

            <section className="hero  mx-auto py-5 md:py-14  rounded-none">


                <div className="hero-content flex flex-col-reverse justify-end gap-8  py-auto px-7 md:flex-row ">
                    <div className=" md:w-6/12 w-full ">
                        <img className='w-full ' src={img1} />


                    </div>
                    <div className=" md:w-6/12 py-auto md:px-7 w-full  py-auto text-black font-[bebas]">
                        <h1 className="text-5xl py-2  w-full md:text-6xl lg:text-[60px]  font-bold mb-2">Exceptional culinary experience and delicious food</h1>
                        <p className="text-[16px] font-normal w-full mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                        <a className="btn font-[roboto] font-bold text-[16px] text-black rounded-none bg-[#FEBF00] border-none ">ABOUT MORE</a>
                    </div>

                </div>

            </section>
        </div>
    );
};

export default Home;