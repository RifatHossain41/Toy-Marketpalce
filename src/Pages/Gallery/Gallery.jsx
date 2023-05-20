import Marquee from "react-fast-marquee";
import img2 from '../../assets/image/img-2.jpg'
import img3 from '../../assets/image/img-3.jpg'
import img4 from '../../assets/image/img-4.jpg'
// import img5 from '../../assets/image/img-5.jpg'
import img6 from '../../assets/image/img-6.jpg'
import img7 from '../../assets/image/img-7.jpg'
import img8 from '../../assets/image/img-8.jpg'
import img9 from '../../assets/image/img-9.jpg'

const Gallery = () => {
  return (
    <div>
      <h2 className="text-5xl text-purple-700 font-bold mb-3 text-center">The Gallery Section</h2>
      <Marquee>
        <img className="w-60" src={img2} alt="" />
        <img className="w-60" src={img3} alt="" />
        <img className="w-60" src={img4} alt="" />
        {/* <img className="w-60" src={img5} alt="" /> */}
        <img className="w-60" src={img6} alt="" />
        <img className="w-60" src={img7} alt="" />
        <img className="w-60" src={img8} alt="" />
        <img className="w-60" src={img9} alt="" />
   
      </Marquee>
  
      
    </div>
  );
};

export default Gallery;