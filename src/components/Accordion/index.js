/*
    Component responsible for the accordion-like characteristics. 
    It was implemented a function responsible for presenting the data in a dynamic way, to allow different fields, 
    without being necessary to create a component for each characteristic. 
    For that the function interprets the [key] of the object received by parameter, that arrives in camel case and then it is formatted for the correct output. 

    João Jorge 23/10/2022
*/
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { AiOutlineDownCircle, AiOutlineUpCircle } from 'react-icons/ai'
import { MdOutlineGppGood } from 'react-icons/md'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Accordion = ({ title, open, elements }) => {
  const [isActive, setIsActive] = useState(open)

  return (
    <Main className="accordion-item">
      <DivTitle className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <DivTitleHeader>
          <Title selecionado={'#343434'}>{title}</Title>
        </DivTitleHeader>
        
        <DivCorner>
        {isActive && <AiOutlineUpCircle fill={isActive ? '#40C2CC' : '#343434'} size="30px"/>}
        {!isActive && <AiOutlineDownCircle fill={isActive ? '#40C2CC' : '#343434'} size="30px"/>}
          
        </DivCorner>
      </DivTitle>
      {isActive &&
      <DivContent className="accordion-content">

      <Row>

        {elements && elements.map((ability, index) => (
          <Col lg={3} key={index}>
          <DivAbility>
                <MdOutlineGppGood fill='#40C2CC' size="30px"/>

                  {Object.keys(ability).map((key, index) => {
                    const text = key
                    const result = text.replace(/([A-Z])/g, ' $1')
                    const finalResult = result.charAt(0).toUpperCase() + result.slice(1)
                    //ALERT(finalResult)
                    return (
                        <div style={{display: 'flex'}} key={index}>
                          <AbilityTitle>{finalResult}:</AbilityTitle>
                          <Ability>{ability[key]}</Ability>
                        </div>
                        
                    )
                  })}
                  
          </DivAbility></Col>
        ))}
        </Row>
      </DivContent>
      }
    </Main>
  )
}

export default Accordion

Accordion.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
  elements: PropTypes.array
}

const AbilityTitle = styled.p`
font-size: 12pt;
margin:0;
padding-inline: 5px;
font-weight: 600;
color: #40C2CC;
`

const Ability = styled.p`
  font-size: 12pt;
  margin:0;
  padding-inline: 5px;
`
const DivAbility = styled.div`
  align-items: center;
  background-color: #343434;
  width: 100%;
  border-radius: 10px;
  margin-top: 10px;
  color: white;
  display: block;
    padding: 5px;
`

const DivContent = styled.div`
  padding-top: 1vh;
`

const Main = styled.div`
  padding-top: 2vh;
  padding-bottom: 2vh;
  border-bottom: 1px solid lightgray;
  border-radius: 3px;
  background-color: ${({ selecionado }) => selecionado || 'transparent'};
  margin-bottom: 1vh;
  cursor: pointer;
`

const DivTitle = styled.div`
  display: flex;
  justify-content: space-between;
`

const DivTitleHeader = styled.div`

`

const Title = styled.p`
  font-size: 17pt;
  font-weight: 600;
  color: ${({ selecionado }) => selecionado || '#343434'};
  margin: 0;
`

const DivCorner = styled.div`
height: 25px;
`
