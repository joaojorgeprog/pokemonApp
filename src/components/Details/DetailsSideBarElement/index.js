/*
    Component responsible for receiving the element and value by parameter and return it in HTML format

    João Jorge 23/10/2022
*/
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const DetailsSideBarElement = ({ element, value }) => (
    <GlobalWraper>
        <WrapperTitle>
            <Title>{element}: </Title>
            <Value>{value}</Value>
        </WrapperTitle>
    </GlobalWraper>
)

DetailsSideBarElement.propTypes = {
    element: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
}

export default DetailsSideBarElement

const WrapperTitle = styled.div`
border-radius: 4px;
display: flex;
`

const GlobalWraper = styled.div`
    width: 100%;
    padding: 5px 20px;

`

const Title = styled.p`
font-size: 15px;
font-weight: 600;
color: #40C2CC;
margin: 0;
text-align:center;
`

const Value = styled.p`
font-size: 15px;
font-weight: 600;
color: white;
margin: 0;
text-align:center;
padding-inline: 10px;
`