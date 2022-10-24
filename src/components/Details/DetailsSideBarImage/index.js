/*
    Component responsible for receiving the image of the pokemon by parameter and return it in HTML format

    João Jorge 23/10/2022
*/
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const DetailsSideBarImage = ({ image }) => (
    <GlobalWraper>
        <img src={image} height="150px" width="80%"/>
    </GlobalWraper>
)

DetailsSideBarImage.propTypes = {
    image: PropTypes.string
}

export default DetailsSideBarImage

const GlobalWraper = styled.div`
width: 100%;
justify-content: center;
align-items: center;
display: flex;
padding: 20px 20px 0px 20px;
`