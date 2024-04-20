

const TripSearch = () => {
    return (
        <div className="bg-[#F2F2F2] text-center mb-5">
            <div className="">
                <h2 className="text-2xl m-2">Choose your Trip</h2>
                <h3 className="text-5xl m-5">Start your Vacation Now</h3>
                <h3 className="text-xl p-5">Looking for your dream vacation destination but do not know where to start? With the help<br /> of <br />
                    experienced and knowledgeable travel agents, you can plan the trip of a lifetime with ease.</h3>
            </div>
            <div className="flex gap-5 place-content-center bg-white border rounded-xl shadow-lg w-[800px] mx-auto">
                <div>
                    <p>search</p>
                </div>
                <div>
                    <p>destination</p>
                </div>
                <div>
                    <p>Typologies</p>
                </div>
                <div>
                    <button className="btn btn-primary mb-5">Search</button>
                </div>
            </div>
        </div>
    );
};

export default TripSearch;