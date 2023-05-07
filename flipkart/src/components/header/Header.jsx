
import { AppBar, Toolbar, Box, Typography, styled, IconButton, Drawer, List, ListItem } from '@mui/material';

///component
import Search from './search';
import CustomButtons from './CustomButton';

import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';


const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;

`;
const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    text-Decoration: none;
    color:inherit;
`;
const SubHeader = styled(Typography)`
       font-size:10px;
       margin-top: -1px;
       font-style: italic;
`
const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4

});
const CustomButtonWrapper = styled(Box)(({ theme }) => ({
    margin: '0 7% 0 auto',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    }

}))

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}))


const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButtons />
                </ListItem>
            </List>
        </Box>
    )

    return (
        <StyledHeader>
            <Toolbar style={{ minHeight: 55 }}>
                <MenuButton color='inherit' onClick={handleOpen}>
                    <MenuIcon />
                </MenuButton>

                <Drawer open={open} onClose={handleClose} >
                    {list()}
                </Drawer>



                <Component to='/'>
                    <img src={logoURL} alt="logo" style={{ width: 75 }} />
                    <Box style={{ display: 'flex' }}>
                        <SubHeader>Explore&nbsp;
                            <Box component="span" style={{ color: '#FFE500' }}>Plus</Box>
                        </SubHeader>
                        <PlusImage src={subURL} alt="sub-logo" />
                    </Box>

                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
}
export default Header