import { Grid } from "@mui/material"

import { imageURL } from "../../assets/data"
import styled from "@emotion/styled"

// const Image = styled(Box)`
//     margin:10px;
//     padding:10px;
// `

const Wrapper = styled(Grid)`
    margin-top:10px;
    justify-content:space-between;
`
const Image = styled('img')(({ theme }) => ({
    marginTop: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
}));

const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
            <Wrapper lg={12} sm={12} md={12} xs={12} container>
                {
                    imageURL.map(image => (
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <img src={image} alt="ig" style={{ width: "100%" }} />
                        </Grid >
                    ))
                }
            </Wrapper>
            <Image src={url} />
        </>
    )

}
export default MidSection
