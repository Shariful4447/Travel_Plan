
import trip1 from '../../assets/package-cart3.jpeg'
import trip2 from '../../assets/package-cart2.jpeg'
import trip3 from '../../assets/package-cart1.jpeg'
import clock from '../../assets/Icons/clock.png'
import map from '../../assets/Icons/map.png'
import contact from '../../assets/Icons/email.png'
import locationicon from '../../assets/Icons/navigation.png'
const Trip = () => {
    return (
        <div className="mb-5 grid grid-cols-3 gap-5 place-items-center pl-12 pr-12">
            <div className="card [500px] bg-base-100 shadow-xl">
                <figure><img src={trip3} alt="Shoes" /></figure>
                <div className='flex justify-evenly m-5 border rounded bg-slate-200 p-2'>
                    <div className='flex gap-2'>
                        <img src={clock} alt="" />
                        <p>1 Week</p>
                    </div>
                    <div className='flex gap-2'>
                        <img src={map} alt="" />
                        <img src={contact} alt="" />
                    </div>

                </div>
                <div className="card-body">
                
                    <h2 className="card-title text-2xl">Chiang Mai</h2>
                    <h3 className='card-subtitle flex gap-2'>
                        <img src={locationicon} alt="" />
                        <p className='text-lg font-bold'>Thailand</p>
                    </h3>
                    <div className="divider"></div>

                    <p className='text-lg'>Visit the temples and the Chiang Mai Night
                        Bazaar, a huge huge market located on
                        Chiang Klan Road.</p>
                    <div className="divider"></div>

                    <div className="card-actions justify-evenly">
                    
                    <button className="btn bg-[#14B9D5]">Details</button>
                        <div>
                            <p className='text-xl font-bold'>From</p>
                            <p className='text-3xl font-bold'>$490 <span className='text-lg line-through text-red-500'>$598</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card [500px] bg-base-100 shadow-xl">
                <figure><img src={trip2} alt="Shoes" /></figure>
                <div className='flex justify-evenly m-5 border rounded bg-slate-200 p-2'>
                    <div className='flex gap-2'>
                        <img src={clock} alt="" />
                        <p>5 Days</p>
                    </div>
                    <div className='flex gap-2'>
                        <img src={map} alt="" />
                        <img src={contact} alt="" />
                    </div>

                </div>
                <div className="card-body">
                
                    <h2 className="card-title text-2xl">Chao Phraya</h2>
                    <h3 className='card-subtitle flex gap-2'>
                        <img src={locationicon} alt="" />
                        <p className='text-lg font-bold'>Thailand</p>
                    </h3>
                    <div className="divider"></div>

                    <p className='text-lg'>Boat tour in the capital of Thailand, Bangkok,
                    to see the beautiful palaces and
                    monuments from the water.</p>
                    <div className="divider"></div>

                    <div className="card-actions justify-evenly">
                    
                    <button className="btn bg-[#14B9D5]">Details</button>
                        <div>
                            <p className='text-xl font-bold'>From</p>
                            <p className='text-3xl font-bold'>$98 <span className='text-lg line-through text-red-500'>$134</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card [500px] bg-base-100 shadow-xl">
                <figure><img src={trip1} alt="Shoes" /></figure>
                <div className='flex justify-evenly m-5 border rounded bg-slate-200 p-2'>
                    <div className='flex gap-2'>
                        <img src={clock} alt="" />
                        <p>10 Days</p>
                    </div>
                    <div className='flex gap-2'>
                        <img src={map} alt="" />
                        <img src={contact} alt="" />
                    </div>

                </div>
                <div className="card-body">
                
                    <h2 className="card-title text-2xl">Bangkok</h2>
                    <h3 className='card-subtitle flex gap-2'>
                        <img src={locationicon} alt="" />
                        <p className='text-lg font-bold'>Thailand</p>
                    </h3>
                    <div className="divider"></div>

                    <p className='text-lg'>Marvelous culinary and cultural trip to the
                    Thai capital with its wonderful monuments
                    and Buddha statues.</p>
                    <div className="divider"></div>

                    <div className="card-actions justify-evenly">
                    
                    <button className="btn bg-[#14B9D5]">Details</button>
                        <div>
                            <p className='text-xl font-bold'>From</p>
                            <p className='text-3xl font-bold'>$1098 <span className='text-lg line-through text-red-500'>$1234</span></p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Trip;