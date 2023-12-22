

const Benefit = () => {
    return (
        <div className='max-w-7xl mx-auto py-5'>
            <h2 className='text-center text-2xl font-bold'>We Provide</h2>
            <p className='text-center'>Who are benefited from us</p>
            <div className='grid grid-cols-1 my-3 gap-3 px-2 md:grid-cols-2'>
                {/*  */}
                <div data-aos="fade-up" className='p-3 bg-slate-300 rounded-md'>
                    <h3 className='text-lg capitalize font-bold'>developers</h3>
                    <p>
                        Technovision website empowers developers with valuable insights, tech trends, and resources. Stay updated on cutting-edge technologies, enhance skills, and foster innovation for professional growth and success.</p>
                </div>
                <div data-aos="fade-up" className='p-3 bg-slate-300 rounded-md'>
                    <h3 className='text-lg capitalize font-bold'>corporate professionals</h3>
                    <p>
                        TechnoVision website empowers corporate professionals with cutting-edge insights, fostering innovation and strategic decision-making. Stay ahead in the dynamic business landscape with our tailored technology perspectives and thought leadership.</p>
                </div>
                <div data-aos="fade-up" className='p-3 bg-slate-300 rounded-md'>
                    <h3 className='text-lg capitalize font-bold'>bankers</h3>
                    <p>

                        Bankers benefit from the Technovision website by accessing cutting-edge financial technology solutions, staying updated on industry trends, and fostering collaboration for innovation, ultimately enhancing efficiency and delivering superior financial services.</p>
                </div>
                <div data-aos="fade-up" className='p-3 bg-slate-300 rounded-md'>
                    <h3 className='text-lg capitalize font-bold'>Students</h3>
                    <p>
                        Students benefit from the TechnoVision website by gaining access to cutting-edge technology insights, fostering innovation, and staying informed on industry trends, enhancing their skills and preparing for future challenges in the tech landscape.</p>
                </div>
            </div>
        </div>
    )
}

export default Benefit