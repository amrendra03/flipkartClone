import React from 'react'
import { useEffect, useState } from "react"


import { Box, Button, Dialog, TextField, Typography, styled } from '@mui/material'




const Component = styled(Box)`
height: 70vh;
width: 90vh;
padding: 0;
padding-top: 0;
background-color:red;
`;

const LoginButton = styled(Button)`
text-transform: none;
background: #FB641B;
color: #fff;
height: 48px;
border-radius: 2px;
`;

const RequestOTP = styled(Button)`
text-transform: none;
background: #fff;
color: #2874f0;
height: 48px;
border-radius: 2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
color: #878787;
font-size: 12px;
`;

const CreateAccount = styled(Typography)`
margin: auto 0 5px 0;
text-align: center;
color: #2874f0;
font-weight: 600;
font-size: 14px;
cursor: pointer
`

const Wrapper = styled(Box)`
padding: 25px 35px;
display: flex;
flex: 1;
overflow: auto;
flex-direction: column;
& > div, & > button, & > p {
    margin-top: 20px;
}
`;

const Error = styled(Typography)`
font-size: 10px;
color: #ff6161;
line-height: 0;
margin-top: 10px;
font-weight: 600;
`
const Image = styled(Box)`
background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
width: 40%;
height: 100%;
padding: 45px 35px;
& > p, & > h5 {
    color: #FFFFFF;
    font-weight: 600
}
`





const LoginDialogeB = ({ open, setOpen }) => {

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography variant="h5"> </Typography>
                        <Typography style={{ marginTop: 20 }}></Typography>
                    </Image>

                    <Wrapper>
                        <TextField variant="standard" name='username' label='Enter Email/Mobile number' />
                        <TextField variant="standard" name='password' label='Enter Password' />
                        <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                        <LoginButton  >Login</LoginButton>
                        <Text style={{ textAlign: 'center' }}>OR</Text>
                        <RequestOTP>Request OTP</RequestOTP>
                        <CreateAccount >New to Flipkart? Create an account</CreateAccount>
                    </Wrapper>


                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialogeB
