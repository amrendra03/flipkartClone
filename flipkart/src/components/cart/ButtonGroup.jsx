import { Box, Button, ButtonGroup, styled } from "@mui/material"

const Component = styled(ButtonGroup)`
    margin-top:30px;
`
const StyledButton = styled(Button)`

border-radius:50%;

`


const ButtonGrouped = () => {
    return (
        <Component>
            <StyledButton>-</StyledButton>
            <Button>1</Button>
            <StyledButton>+</StyledButton>
        </Component>
    )
}

export default ButtonGrouped
