
import { Box, Grid, Typography, styled, Button } from '@mui/material';
import { useSelector } from 'react-redux'
import CartItems from './CartItem';
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';


const Conatiner = styled(Grid)(({ theme }) => ({
    padding: '30px 135px',
    [theme.breakpoints.down('sm')]: {
        padding: '15px 0',
    }
}))

const Header = styled(Box)`
    padding:15px 24px;
    background-color: #fff;

`
const ButtonWrapper = styled(Box)`
    padding:10px 22px;
    background-color: #fff;
    box-shadow:0 -2px 10px 0 rgb(0 0 /10%);
    border-top: 1px solid #f0f0f0;
`
const StyledButton = styled(Button)`
    display:flex;
    margin-left:auto;
    background-color: #fb641b;
    color: #fff;
    width:200px;
    height:51px;
    border-radius:2px;
`
const LeftComponent = styled(Grid)(({ theme }) => ({
    paddingRight: '15px',
    [theme.breakpoints.down('md')]: {
        marginBottom: 15,
    }
}))

const Cart = () => {
    const { cartItems } = useSelector(state => state.cart)

    return (
        <>
            {
                cartItems.length ?
                    <Conatiner container>
                        <LeftComponent item lg={9} md={9} xs={12}>
                            <Header>
                                <Typography>My Cart({cartItems.length})</Typography>
                            </Header>
                            {
                                cartItems.map(item => (
                                    <CartItems item={item} />
                                ))
                            }
                            <ButtonWrapper>
                                <StyledButton>Place Order</StyledButton>
                            </ButtonWrapper>
                        </LeftComponent>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalView cartItems={cartItems} />
                        </Grid>
                    </Conatiner>
                    : <EmptyCart />
            }
        </>
    )
}

export default Cart;


