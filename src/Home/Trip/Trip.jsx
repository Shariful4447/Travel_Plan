
import trip1 from '../../assets/egypt.jpeg'
import trip2 from '../../assets/greece.jpeg'
import trip3 from '../../assets/france.jpeg'
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
                <div>
                    <div><p>icon</p></div>
                    <div><p>details</p></div>

                </div>
                <div className="card-body">
                    <h2 className="card-title">Chiang Mai</h2>
                    <p>Visit the temples and the Chiang Mai Night
Bazaar, a huge huge market located on
Chiang Klan Road.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Trip;