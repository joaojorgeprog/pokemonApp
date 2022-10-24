/*
    Component responsible for presenting the "Card" of each pokemon. And manage the onClick of the Favourite and the onClick of the Pokemon Name.

    João Jorge 23/10/2022
*/
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'


import { useNavigate } from 'react-router-dom';

const Card = ({ title, image, onClick, id , isFavorite}) => {
    const navigate = useNavigate();
    return (
    <GlobalWraper>
        <DivFavourite>
            {isFavorite && <AiFillHeart fill={"#40C2CC"} size="35px" onClick={() => onClick({id: id, isFavorite: !isFavorite, image: image, name:title})}/>}
            {!isFavorite && <AiOutlineHeart fill={"#40C2CC"} size="35px" onClick={() => onClick({id: id, isFavorite: !isFavorite, image: image, name:title})}/>}
        </DivFavourite>
        
        <Wrapper onClick={(() => navigate(`/details/${id}`, { replace: true }))}>
            <img src={image} alt="Pokemon card" height="150px" width="60%"/>
        </Wrapper>
            <WrapperTitle onClick={(() => navigate(`/details/${id}`, { replace: true }))}>
                <Title>{title}</Title>
            </WrapperTitle>
    </GlobalWraper>
    )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  image: PropTypes.string,
  onClick: PropTypes.func,
  isFavorite: PropTypes.bool
}

export default Card

const DivFavourite = styled.div`
    justify-content: end;
    align-items: end;
    display: flex;
    padding: 15px 15px 0px 15px;
`

const WrapperTitle = styled.div`
background-color:#2E2E2E;
border-radius: 4px;
`

const GlobalWraper = styled.div`
margin-bottom: 20px;
background-color: #343434;
border-radius: 4px;
opacity: 0.9;
cursor: pointer;
&:hover {
  -ms-transform: scale(1.1); /* IE 9 */
  -webkit-transform: scale(1.1); /* Safari 3-8 */
  transform: scale(1.05); 
  background-color: #343434;
  opacity: 1;
}
`

const Wrapper = styled.div`
justify-content: center;
align-items: center;
display: flex;
box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.28);
border-radius: 4px;
width: 100%;
height: 18vh;
`

const Title = styled.p`
font-size: 17px;
font-weight: 600;
color: white;
margin: 0;
text-align:center;
`