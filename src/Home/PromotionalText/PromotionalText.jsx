import promotionalSectionImage from '../../assets/featured1.jpeg'

const PromotionalText = () => {
    return (
        <div className="mb-5">
            <div className="hero h-[600px]" style={{backgroundImage: 'url(https://i.ibb.co/F3xH1TC/advertise.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-start text-neutral-content">
                    <div className='flex gap-10 mx-auto'>
                        <div>
                            <img className='h-[400px] w-[400px]' src={promotionalSectionImage} alt="" />
                        </div>
                        <div className="mt-12">
                            <h1 className='text-2xl mb-5'>Adventure Travel</h1>
                            <h1 className=" text-5xl font-bold mb-5">Embrace the Thrill of <br />
                                the Unknown</h1>
                            <p className="mb-2 text-xl">Are you tired of the typical tourist destinations and looking to step out of <br />
your comfort zone? Adventure travel may be the perfect solution for you! <br />
Here are four reasons why you should book an adventure travel experience :</p>
                            <button className="btn bg-[#1BBC9B] mt-5">All Services</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromotionalText;