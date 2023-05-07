import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";



const Searchcontainer = styled(Box)`
      background: #fff;
      width: 34%;
      border-radius:2px;
      margin-left: 10px;
      display: flex;
`;
const InputSearchBase = styled(InputBase)`
    padding-left:20px;
    width:  100%;

`;
const SearchIconWrapper = styled(Box)`
      color: blue;
      padding: 5px;
      font-size: unset;
      display: flex;
`
const ListWrapper = styled(List)`
      position:absolute;
      background-color:#FFFFFF;
      color:black;
      margin-top:36px;
`

const Search = () => {

      const [text, setText] = useState('')

      const { products } = useSelector(state => state.getProducts)
      const dispatch = useDispatch();

      useEffect(() => {
            dispatch(getProducts())
      }, [dispatch])


      const getText = (text) => {
            setText(text);
      }

      return (
            <Searchcontainer>
                  <InputSearchBase
                        placeholder="Search for products,brands and more"
                        onChange={(e) => getText(e.target.value)}
                        value={text}
                  />
                  <SearchIconWrapper>
                        <SearchIcon />
                  </SearchIconWrapper>
                  {
                        text &&
                        <ListWrapper>
                              {
                                    products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                                          <ListItem>
                                                <Link to={`/product/${product.id}`}
                                                      onClick={() => setText('')}
                                                      style={{ textDecoration: 'none', color: 'inherit' }}
                                                >
                                                      {product.title.longTitle}
                                                </Link>
                                          </ListItem>
                                    ))
                              }
                        </ListWrapper>
                  }

            </Searchcontainer>

      )

}
export default Search;