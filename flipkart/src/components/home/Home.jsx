import { Fragment } from 'react';
import NavBar from './NavBar.jsx';
import Banner from './Banner.jsx';

import { useEffect } from 'react';

import { Box, styled } from '@mui/material';
import { getProducts } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';

import Slide from './Slide';
import MidSlide from './MidSlide.jsx';
import MidSection from './MidSection.jsx';


const Containt = styled(Box)`
padding:18px 8px 10px 8px;
background:#f0f0f0;
`

const Home = () => {

    const pro = useSelector(state => state.getProducts)
    const { products } = pro //Object Destructuring


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <>
            <NavBar />
            <Containt>
                <Banner />
                <MidSlide products={products} title="Deal of the Day" timer={true} />
                <MidSection />
                <Slide products={products} title="Vacay Travel Essentials" timer={false} />
                <Slide products={products} title="Beauty, Food, Toys & more" timer={false} />
                <Slide products={products} title="Best of Electronics" timer={false} />
                <Slide products={products} title="Home & Kitchen Essentials" timer={false} />
                <Slide products={products} title="Shop for a Cool Summer" timer={false} />
            </Containt>

        </>
    )
}


export default Home;