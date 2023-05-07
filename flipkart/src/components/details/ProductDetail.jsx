import { Box, Table, TableBody, TableCell, TableRow, Typography, styled } from "@mui/material"

import LocalOfferIcon from '@mui/icons-material/LocalOffer';


const SmallText = styled(Box)`
    font-size:14px;
    vertical-align:baseline;
    & > p {
        font-size:14px;
        margin-top:10px;
    }
`
const StyledBadge = styled(LocalOfferIcon)`
    margin-top:10px;
    color:#00CC00;
    font-size:15px;

`
const ColumText = styled(TableRow)`
    vertical-align:baseline;
    font-size:14px;
    & > td{
        font-size:14px;
        border:none;
    }
`


const ProductDetail = ({ product }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';


    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 1000))
    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
                8 Ratings & 1 Reviews
                <Box component="span" ><img src={fassured} style={{ width: 77, marginLeft: 20 }} alt="covid" /></Box>
            </Typography>
            <Typography>
                <Box component="span" style={{ fontSize: 28, }}>₹{product.price.cost}</Box>
                <Box component="span" style={{ color: '#878787', marginLeft: 10 }}><strike>₹{product.price.mrp}</strike></Box>
                <Box component="span" style={{ color: '#388E3C', marginLeft: 10 }}>{product.price.discount}</Box>
            </Typography>
            <Typography>Availabel Offers  </Typography>
            <SmallText>
                <Typography><StyledBadge /> Get extra 20% Off upto ₹50 on 1 item(s) T&C</Typography>
                <Typography><StyledBadge />Get extra 13% Off (price inclusive of discount) T&C</Typography>
                <Typography><StyledBadge />Sign up for Flipkart  PayLater and get Flipkart Gift Card worth ₹100* Know More</Typography>
                <Typography><StyledBadge />5% Cashback on Flipkart Axis Bank Card T&C</Typography>
                <Typography><StyledBadge />No cost EMI ₹3,999/month. Standard EMI also available T&C</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumText>
                    <ColumText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell >No Warranty</TableCell>
                    </ColumText>
                    <ColumText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell >
                            <Box component='span' style={{ color: '#2874f0' }}>SuperCent</Box>
                            <Typography>GST invoice available</Typography>
                            <Typography>7 Days Replacement Policy</Typography>
                        </TableCell>
                    </ColumText>
                    <ColumText>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{ width: 300 }} alt="SuperCoin" />
                        </TableCell>
                    </ColumText>
                    <ColumText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell >{product.description}</TableCell>
                    </ColumText>

                </TableBody>
            </Table>
        </>
    )
}
export default ProductDetail

