
import avatar from '../../assets/Icons/profile_avatar.jpeg'
const ReviewSection = () => {
    return (
        <div className="mb-5">
            <div className="hero h-[630px]" style={{backgroundImage: 'url(https://i.ibb.co/MMCKWz3/review-Bg-Image.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content">
                    <div className="flex gap-10 justify-between">
                        <div className='pl-10 pr-10'>
                            <h1 className="mb-5 text-5xl font-bold">Unforgettable Travel <br />
                                Experiences</h1>
                            <p className="mb-5 text-xl">Our customers feedback is essential in building a great reputation and
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
            </div>
        </div>
    );
};

export default ReviewSection;