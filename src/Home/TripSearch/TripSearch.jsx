
import search from '../../assets/Icons/search 2.png'
import locationIcon from '../../assets/Icons/map.png'
const TripSearch = () => {
    return (
        <div className="bg-[#F2F2F2] text-center mb-5">
            <div className="">
                <h2 className="text-2xl m-2">Choose your Trip</h2>
                <h3 className="text-5xl m-5 font-bold">Start your Vacation Now</h3>
                <h3 className="text-xl p-5">Looking for your dream vacation destination but do not know where to start? With the help<br /> of <br />
                    experienced and knowledgeable travel agents, you can plan the trip of a lifetime with ease.</h3>
            </div>
            <div className="flex gap-5 place-content-center bg-white border rounded-xl shadow-lg w-[1200px] mx-auto">
                <div className='flex gap-2'>
                    <div>
                        <img className='h-16 w-16 m-2' src={search} alt="" />
                    </div>
                    <div>
                        <p className="text-2xl">Search</p>
                        <input type="text" placeholder="Type here" className="input input-bordered h-5" />
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div>
                        <img className='h-16 w-16 m-2' src={locationIcon} alt="" />
                    </div>
                    <div>
                        <p className="text-2xl">Destinations</p>
                        <input type="text" placeholder="All Destinations" className="input input-bordered h-5" />
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div>
                        <img className='h-16 w-16 m-2' src={search} alt="" />
                    </div>
                    <div>
                        <p className="text-2xl">Typologies</p>
                        <input type="text" placeholder="Type here" className="input input-bordered h-5" />
                    </div>
                </div>
                <div>
                    <button className="btn bg-[#F76570] m-5">Search</button>
                </div>
            </div>
        </div>
    );
};

export default TripSearch;