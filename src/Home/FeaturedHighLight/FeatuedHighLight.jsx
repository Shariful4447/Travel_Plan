
import valley from '../../assets/Icons/valley.gif'
import location from '../../assets/Icons/location.gif'
import mountain from '../../assets/Icons/mountain.gif'
const FeatuedHighLight = () => {
    return (
       <div className='pl-14 pr-14'>
         <div className="flex gap-5 justify-center mb-5">
                    <div className="hero border-2 rounded-xl" style={{backgroundImage: 'url(https://i.ibb.co/hYM9S6m/featured-Section2.jpg)'}}>
                        <div className="hero-overlay bg-opacity-20"></div>
                        <div className="hero-content text-neutral-content">
                            <div className="w-[400px] flex gap-5">
                                <img className='h-24' src={mountain} alt="" />
                            <h1 className="mb-5 text-4xl font-bold">Mountain Trekking</h1>
                            
                            
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="hero border-2 rounded-xl" style={{backgroundImage: 'url(https://i.ibb.co/z49SqNC/featured-Section1.png)'}}>
                            <div className="hero-overlay bg-opacity-20"></div>
                            <div className="hero-content text-neutral-content">
                                <div className="w-[450px] h-32  flex gap-5">
                                <img className='h-24' src={valley} alt="" />
                                <h1 className="mb-5 mt-10 text-4xl text-center font-bold">City Walks Tour</h1>
                                
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="hero border-2 rounded-xl" style={{backgroundImage: 'url(https://i.ibb.co/PzDGFC2/featured-Section3.jpg)'}}>
                            <div className="hero-overlay bg-opacity-20"></div>
                            <div className="hero-content text-neutral-content">
                                <div className="w-[450px] h-32 flex gap-5">
                                <img className='h-24' src={location} alt="" />
                                <h1 className="mb-5 mt-10 text-4xl text-center font-bold">Sky View </h1>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
       </div>
                

            
               

    );
};

export default FeatuedHighLight;