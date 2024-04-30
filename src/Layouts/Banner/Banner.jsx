
const Banner = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative h-[400px]  w-full">
            <img src="https://i.ibb.co/qRBYrrM/ant-rozetsky-SLIFI67jv5k-unsplash-1.jpg" alt="ant-rozetsky-SLIFI67jv5k-unsplash-1" className="w-full rounded-2xl" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative  h-[400px] w-full">
           <img src="https://i.ibb.co/S5Cp88W/patrick-hendry-6xe-DIZgo-Paw-unsplash.jpg" alt="patrick-hendry-6xe-DIZgo-Paw-unsplash" className="w-full rounded-2xl" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative  h-[400px] w-full">
            <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full rounded-2xl" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide4" className="carousel-item relative  h-[400px] w-full">
            <img src="https://i.ibb.co/S5Cp88W/patrick-hendry-6xe-DIZgo-Paw-unsplash.jpg" alt="patrick-hendry-6xe-DIZgo-Paw-unsplash" className="w-full rounded-2xl" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
    </div>
    );
};

export default Banner;