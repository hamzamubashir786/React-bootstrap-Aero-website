import Carousel from 'react-bootstrap/Carousel';
import person from "./imgs/person.png"
function UncontrolledExample() {
    return (
        <Carousel className='slider5'>
            <Carousel.Item>
                <Slide namee="Jack Rohin"/>
            </Carousel.Item>
            <Carousel.Item>
                <Slide namee="Rubin Rock"/>
               
            </Carousel.Item>
        </Carousel>
    );
}

const Slide = ({namee}) =>{
    return(
            <div className='container d-flex flex-column align-items-center text-center'>
                <img src={person} alt="" />
                <div className='w-75 text-white mt-4'>
                    <p className='ccc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat ad fuga delectus saepe veritatis? Architecto ipsa maxime corporis. Dicta, tempora! Voluptates libero architecto asperiores perspiciatis aliquam atque corporis nemo voluptate.</p>
                    <p className='ccc fw-bold'>{namee}</p>
                </div>
            </div>

    )
}
export default UncontrolledExample;