import { Box, Button, Typography, styled } from "@mui/material"
import { addEllipse } from "../../utils/common-utils"

import ButtonGrouped from "./ButtonGroup"
import { removeCart } from "../../redux/actions/cartAction"
import { useDispatch } from "react-redux"

const Component = styled(Box)`
    border-top:1px solid #f0f0f0;
    display:flex;
    background-color: #fff;
`
const LeftContainer = styled(Box)`
    margin:20px;
    display:flex;
    flex-direction:column;
`
const SmallText = styled(Typography)`
    color:#878787;
    font-size:14px;
    margin-top:10px;
`
const Remove = styled(Button)`
    margin-top:20px;
    font-size:16px;
    color:#000;
    font-weight:600;

      
`


const CartItems = ({ item }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const dispatch = useDispatch();

    const removeItemsFromCart = (id) => {
        dispatch(removeCart(id))
    }

    return (
        <Component>
            <LeftContainer>
                <img src={item.url} alt="product" style={{ height: 110, width: 110 }} />
                <ButtonGrouped />
            </LeftContainer>
            <Box style={{ margin: 20 }}>
                <Typography>{addEllipse(item.title.longTitle)}</Typography>
                <SmallText>Seller: Retail
                    <Box component="span"><img src={fassured} alt="Fassured" style={{ width: 50, marginLeft: 10 }} /></Box>
                </SmallText>
                <Typography style={{ margin: '20px 0' }}>
                    <Box component="span" style={{ fontWeight: 600, fontSize: 18 }}>₹{item.price.cost}</Box>
                    <Box component="span" style={{ color: '#878787', marginLeft: 10 }}><strike>₹{item.price.mrp}</strike></Box>
                    <Box component="span" style={{ color: '#388E3C', marginLeft: 10 }}>{item.price.discount}</Box>
                </Typography>
                <Remove onClick={() => removeItemsFromCart(item.id)}>Remove</Remove >
            </Box>
        </Component>
    )

}
export default CartItems









