import Carousel from "react-multi-carousel"
import { BannnerAsets } from "../../assets/NavAssets";
import { styled } from '@mui/material';
import 'react-multi-carousel/lib/styles.css';

const Image = styled('img')({
    width: '100%',
    height: 280,
})


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const Banner = () => {
    return (
        <Carousel responsive={responsive}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            containerClass="carousel-container"
            swipeable={false}
            keyBoardControl={true}
            slidesToSlide={1}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
        >
            {
                BannnerAsets.map(data => (
                    <Image src={data.url} alt='Banner' />
                ))
            }
        </Carousel>
    )
}
export default Banner