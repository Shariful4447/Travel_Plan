
import bannerImage1 from '../../assets/paralox-image.jpeg'
import bannerImage2 from '../../assets/paralox-image1.jpeg'
import searchicon from '../../assets/Icons/search.png'
import searchText from '../../assets/Icons/searchIconmain.png'
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200" style={{backgroundImage: 'url(https://i.ibb.co/DzvZDy5/home-bg.png)'}}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="flex gap-5">
                        <img src={bannerImage1} className="h-[600px] w-[300px] rounded-full shadow-2xl" />
                        <img src={bannerImage2} className="h-[600px] w-[300px] rounded-full shadow-2xl my-16" />
                    </div>    
                    <div>
                        <h1 className="text-7xl font-bold">Adventure &</h1>
                        <p className="py-6 text-7xl font-bold">Experience The Travel !</p>
                        <div className='flex gap-10 justify-center p-5 border rounded bg-white'>
                            <div className='flex gap-2'>
                                
                                <div>
                                    <img className='h-10' src={searchText} alt="" />
                                </div>
                                <div>
                                    <p>Search </p>
                                    <input type="text" placeholder="Search here" className='border rounded-xl'/>
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <div>
                                    <img className='h-10' src={searchicon} alt="" />
                                </div>
                                <div>
                                    <p>Destinations</p>
                                    <p>All Destinations</p>
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-success">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;