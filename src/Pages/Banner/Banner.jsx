import img10 from '../../assets/image/img-10.jpg'
import img2 from '../../assets/image/img-2.jpg'
import img3 from '../../assets/image/img-3.jpg'
import img4 from '../../assets/image/img-4.jpg'

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[700px] mt-5 mb-5">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={img10}
            className="w-full rounded-xl"
            
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle btn-error">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle btn-error">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={img2}
            className="w-full rounded-xl"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle btn-error">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle btn-error">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={img3}
            className="w-full rounded-xl"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle btn-error">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle btn-error">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={img4}
            className="w-full rounded-xl"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle btn-error">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle btn-error">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
