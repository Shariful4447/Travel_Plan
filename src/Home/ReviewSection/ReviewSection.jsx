
import avatar from '../../assets/Icons/profile_avatar.jpeg'
import avatar_profile1 from '../../assets/Icons/avatar_review.jpeg'
import avatar_profile2 from '../../assets/Icons/avatar_Review2.jpeg'
const ReviewSection = () => {
    return (
        <div className="mb-5">
            <div className="hero h-[700px]" style={{backgroundImage: 'url(https://i.ibb.co/MMCKWz3/review-Bg-Image.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content">
                    <div className="flex gap-10 justify-between">
                        <div className='pl-10 pr-10'>
                            <h1 className="mb-5 text-5xl font-bold">Unforgettable Travel <br />
                                Experiences</h1>
                            <p className="mb-10 text-xl">Our customers feedback is essential in building a great reputation and
                                maintaining excellent service. By listening to our customers needs, we can
                                improve our offerings and provide an exceptional travel experience.</p>
                        </div>
                        <div>
                            <div className="avatar">
                            <div className="w-40 rounded-full">
                                <img src={avatar} />
                            </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className='mt-96 flex gap-10'>
                    <div>
                        <div className="card w-96 bg-[#1BBC9B] text-primary-content">
                            <div className="card-body">
                                
                                <p>My husband and I have been using this
                                    travel agency for years and they have
                                    never disappointed us.</p>
                                <div className=" flex gap-10">
                                    <div>
                                        <div className="avatar">
                                        <div className="w-16 rounded-full">
                                            <img src={avatar_profile1} />
                                        </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Jennifer and Mark</p>
                                        <p>San Francisco</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-96 bg-[#1BBC9B] text-primary-content">
                            <div className="card-body">
                                
                                <p>This travel agency made my dream trip to
                                    Europe a reality. They worked with me
                                    every step of the way to plan the itinerary.</p>
                                <div className=" flex gap-10">
                                    <div>
                                        <div className="avatar">
                                        <div className="w-16 rounded-full">
                                            <img src={avatar_profile2} />
                                        </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Jennifer and Mark</p>
                                        <p>San Francisco</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewSection;