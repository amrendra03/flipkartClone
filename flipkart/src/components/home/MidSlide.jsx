import { Box } from "@mui/material"
import Slide from "./Slide"
import styled from "@emotion/styled";

const Component = styled(Box)`
    display:flex;


`
const LeftComponent = styled(Box)`
    width: 80%;
    @media only screen and (max-width:1000px) {
       width: 100%;
    }

`
const RightComponent = styled(Box)`
    background-color:#FFFFFF;
    padding:5px;
    margin-top:10px;
    margin-left:10px;
    width:20%;
    text-align:center;
    @media only screen and (max-width: 1000px) {
        display: none;
      }
`


const MidSlide = ({ products, title, timer }) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <Component>
            <LeftComponent>
                <Slide products={products}
                    title={title}
                    timer={true} />

            </LeftComponent>
            <RightComponent>
                <img src={adURL} alt="Advertisement" style={{ width: 190, height: 350 }} />
            </RightComponent>
        </Component>
    )
}
export default MidSlide