

const Destinations = () => {
    return (
        <div className="mb-5">
            <div>
                <p className="text-xl mb-2">Next Adventure</p>
                <h2 className="text-3xl font-bold mb-2">Travel Destinations <br />
                   <span className="mt-2 p-5">Available Worldwide</span> </h2>
                <h2 className="text-xl mb-2 pr-96 pb-5">We have compiled a list of top destinations across the globe, scoured the world
                for the most alluring and fascinating places to visit. From the beautiful beaches
                of the Caribbean to the majestic mountains of Europe and the vibrant cities of
                Asia, our destination list has something for everyone.</h2>
            </div>
            <div className="grid grid-cols-4 gap-5">
                <div className="">
                    <div className="hero h-96 " style={{backgroundImage: 'url(https://i.ibb.co/Bw3gjVS/chaina.jpg)'}}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content mt-56 text-center text-neutral-content">
                        <div className="max-w-md">
                        <h1 className="mb-2 text-5xl font-bold">China</h1>
                        <p className="mb-5">Experience the ancient history & Beaches</p>

                        </div>
                    </div>
                    </div>

                </div>
                <div>
                    <div className="hero h-96" style={{backgroundImage: 'url(https://i.ibb.co/WvwrRfc/greece.jpg)'}}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content mt-56 text-center text-neutral-content">
                        <div className="max-w-md">
                        <h1 className="mb-2 text-5xl font-bold">Greece</h1>
                        <p className="mb-5">Embark on a journey for your Life Times</p>
                        
                        </div>
                    </div>
                    </div>

                </div>
                <div>
                    <div className="hero h-96" style={{backgroundImage: 'url(https://i.ibb.co/rvMDhPS/egypt.jpg)'}}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content mt-56 text-center text-neutral-content">
                        <div className="max-w-md">
                        <h1 className="mb-2 text-5xl font-bold">Egypt</h1>
                        <p className="mb-5">Discover the land of pharaohs & Pyramids</p>
                        
                        </div>
                    </div>
                    </div>
                </div>
                <div>
                    <div className="hero h-96" style={{backgroundImage: 'url(https://i.ibb.co/BGdrrZn/france.jpg)'}}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content mt-56 text-center text-neutral-content">
                        <div className="max-w-md">
                        <h1 className="mb-2 text-5xl font-bold">France</h1>
                        <p className="mb-5">Indulge in the art, culture, and Cuisine</p>
                        
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destinations;