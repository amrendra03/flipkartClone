
import styled from "@emotion/styled";
import { Box, Typography, Button, Divider } from "@mui/material";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Countdown from 'react-countdown';
import { Link } from "react-router-dom";



const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const Component = styled(Box)`
    margin-top: 10px;
    background: #FFFFFF;
`
const Deal = styled(Box)`
      
    padding: 15px 20px;
    display:flex; #7f7f7f;
`
const Timer = styled(Box)`
    display: flex;
    margin-left: 10px;
    align-items: center;
    color:
`
const DealText = styled(Typography)`
    font-size:22px;
    font-weight:600;
    margin-right:25px;
    line-height:32px;
    

`
const ViewAllButtons = styled(Button)`

    margin-left:auto;
    background-color: #2874f0;
    color:#d0edf7;
    border-radius:2px;
    font-size:11px;
    font-weight:600;
`
const Imge = styled("img")({
    width: "auto",
    height: 150
})

const Text = styled(Typography)`
    font-size:14px;
    margin-top:5px;
`

const Slide = ({ products, title, timer }) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds }) => {
        return <Box varient="span">{hours}:{minutes}:{seconds} Left</Box>
    }

    return (
        <Component>
            <Deal>
                <DealText>{title}</DealText>
                {
                    timer &&
                    <Timer>
                        <img src={timerURL} alt="timer" style={{ width: 24 }} />
                        <Countdown date={Date.now() + 5.05e+7} renderer={renderer} />
                    </Timer>
                }
                <ViewAllButtons varient="contained" color="primary">View All</ViewAllButtons>
            </Deal>
            <Divider />

            <Carousel
                responsive={responsive}
                swipeable={false}
                keyBoardControl={true}
                slidesToSlide={1}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                centerMode={true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
                {
                    products.map(product => (
                        <Link to={`product/${product.id}`} style={{ textDecoration: 'none' }}>
                            <Box textAlign={"center"} style={{ padding: "25px 15px" }}>
                                <Imge src={product.url} alt="Products" />
                                <Text style={{ fontWeight: 600, color: '#212121' }}>{product.title.shortTitle}</Text>
                                <Text style={{ color: 'green' }}>{product.discount}</Text>
                                <Text style={{ color: '#212121', opacity: 0.6 }}>{product.tagline}</Text>
                            </Box>
                        </Link>
                    ))
                }

            </Carousel>
        </Component>
    )
}

export default Slide


