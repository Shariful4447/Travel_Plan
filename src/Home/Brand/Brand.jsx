import Marquee from "react-fast-marquee";
import brand1 from '../../assets/BrandsImage/brand1.png'
import brand2 from '../../assets/BrandsImage/brand2.png'
import brand3 from '../../assets/BrandsImage/brand3.png'
import brand4 from '../../assets/BrandsImage/brand4.png'
import brand5 from '../../assets/BrandsImage/brand5.png'


const Brand = () => {
    return (
        <div className="m-5">
            <Marquee>
                <img className="h-24 w-36" src={brand1} alt="" />
                <img className="h-24 w-36" src={brand2} alt="" />
                <img className="h-24 w-36" src={brand3} alt="" />
                <img className="h-24 w-36" src={brand4} alt="" />
                <img className="h-24 w-36" src={brand5} alt="" />
            </Marquee>
        </div>
    );
};

export default Brand;