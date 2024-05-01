

const TravelPackage = () => {
    return (
        <div className="mt-5 mb-5">
            <div className="text-center">
                <p className="text-2xl m-2">
                    Clear Price
                </p>
                <h2 className="text-5xl m-2">Affordable Travel Packages</h2>
                <h2 className="text-xl">We believe that everyone deserves to experience their dream vacation without breaking the bank. <br />
                Thats why we offer a price section on our website that features a range of affordable travel</h2>
                <div className="flex gap-5 mt-5 place-content-center">
                    <div className="border-2 bg-[#F2F2F2]">
                        <div className="p-5">
                            <p>Half Board</p>
                            <h2>$ 50 Day/2</h2>
                            <p>Transfers from Airport</p>
                            <p>Minimum 3 Star Hotel</p>
                            <p>Incl. Museum Tickets</p>
                            <p>Alcoholic beverages</p>
                            <p>Meals in Restaurants</p>
                            <button className="btn btn-success">View Trips</button>
                        </div>
                    </div>
                    <div>
                        <p>All Inclusive</p>
                        <h2>$ 32 Day/2</h2>
                        <p>Meals in Restaurants</p>
                        <p>Alcoholic beverages</p>
                        <p>Minimum 3 Star Hotel</p>
                        <p>Transfers from Airport</p>
                        <p>Incl. Museum Tickets</p>
                        <button className="btn btn-active">View Trips</button>
                    </div>
                    <div>
                        <p>Excursions Included</p>
                        <h2>$ 68 Day/2</h2>
                        <p>Minimum 3 Star Hotel</p>
                        <p>Meals in Restaurants</p>
                        <p>Incl. Museum Tickets</p>
                        <p>Meals in Restaurants</p>
                        <p>Alcoholic beverages</p>
                        <button className="btn btn-success">View Trips</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default TravelPackage;