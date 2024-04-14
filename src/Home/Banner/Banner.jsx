
import ParallaxComponent from 'react-parallax-component';
const Banner = () => {
    return (
        <div>
            <ParallaxComponent
                speed="0.003"
                width="300"
                top="40%"
                left="100"
                >
                <div>
                    Children component
                </div>
            </ParallaxComponent>
            
        </div>
    );
};

export default Banner;