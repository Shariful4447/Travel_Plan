
import trip1 from '../../assets/egypt.jpeg'
import trip2 from '../../assets/greece.jpeg'
import trip3 from '../../assets/france.jpeg'
import clock from '../../assets/Icons/clock.png'
import map from '../../assets/Icons/map.png'
import contact from '../../assets/Icons/email.png'
import locationicon from '../../assets/Icons/navigation.png'
const Trip = () => {
    return (
        <div className="mb-5 grid grid-cols-3 gap-5 place-items-center">
            <div className="card w-[500px] bg-base-100 shadow-xl">
                <figure><img src={trip1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card [500px] bg-base-100 shadow-xl">
                <figure><img src={trip2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
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
                            <p className='text-3xl font-bold'>$98 <span className='text-lg line-through text-red-500'>$134</span></p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Trip;