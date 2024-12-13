import Carousel from 'react-bootstrap/Carousel';
import img1 from "./imgs/slider1-img.jpg"
import img2 from "./imgs/slider2-img.jpg"
import img3 from "./imgs/slider3-img.jpg"
import "./App.css"
function UncontrolledExample() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img src={img3} className='w-100' alt="Slider Img 03" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={img2} className='w-100' alt="Slider Img 02" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={img1} className='w-100' alt="Slider Img 01" />
            </Carousel.Item>
        </Carousel>
    );
}
export default UncontrolledExample;