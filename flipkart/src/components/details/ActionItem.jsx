import { useState } from "react";
import { Box, Button, styled } from "@mui/material"

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartAction";
//import { payUsingPaytm } from "../../service/api";

// import { post } from "../../utils/paytm";


const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 20px 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}))
const Imge = styled('img')({

    padding: '15px 20px',
    border: '1px solid #f0f0f0',
    width: '90%',
})

const StyledButton = styled(Button)`
    width:48%;
    heigth:50px;
    border-radius:4px;
`

const ActionItem = ({ product }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);

    const { id } = product;

    const addItemToCart = () => {

        dispatch(addToCart(id, quantity));

        navigate('/cart')
    }
    const buyNow = () => {
        // let response = payUsingPaytm({ amount: 500, email: 'amrendra123@gmail.com' })
        // let information = {
        //     action: "http://www.google.com",
        //     params: response,
        // }
        // post(information);
    }

    return (
        <LeftContainer>

            <Imge src={product.detailUrl} alt="product" /><br />
            <StyledButton variant="contained" onClick={() => addItemToCart()} style={{ marginRight: 10, background: '#ff9f00', padding: 6, paddingLeft: 0, paddingRight: 0 }} ><ShoppingCartIcon />Add to Cart</StyledButton>
            <StyledButton variant="contained" style={{ background: '#fb541b' }} onClick={() => buyNow()}><FlashOnIcon />Buy Now</StyledButton>
        </LeftContainer>
    )

}
export default ActionItem



