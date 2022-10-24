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

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const AccordionEdited = ({ title, open, elements }) => {
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
          <Col lg={12}>
                <Row>
                {Object.keys(ability).map((key) => {
                  if(key !== 'versionGroupDetails'){
                    const text = key
                    const result = text.replace(/([A-Z])/g, ' $1')
                    const finalResult = result.charAt(0).toUpperCase() + result.slice(1)
                    //ALERT(finalResult)
                    return (
                        
                          <Col lg={2} key={index}>
                            <AbilityTitle>{finalResult}:</AbilityTitle>
                            <Ability>{ability[key]}</Ability>
                          </Col>
                        
                    )
                  }else{
                    const text = key
                    const result = text.replace(/([A-Z])/g, ' $1')
                    const finalResult = result.charAt(0).toUpperCase() + result.slice(1)
                    //ALERT(finalResult)

                    const oo = (array) => (
                      array.map((b) => (
                        <Col lg={4}>
                          <DivElement>
                            <DivElementCenter>
                              <DivElementCenterTitle>Level Learned At: </DivElementCenterTitle>
                              <DivElementCenterText>{b.levellearnedAt}</DivElementCenterText>
                            </DivElementCenter>
                            <DivElementCenter>
                              <DivElementCenterTitle>Move Learn Method: </DivElementCenterTitle>
                              <DivElementCenterText>{b.moveLearnMethod}</DivElementCenterText>
                            </DivElementCenter>
                            <DivElementCenter>
                              <DivElementCenterTitle>Version Group: </DivElementCenterTitle>
                              <DivElementCenterText>{b.versionGroup}</DivElementCenterText>
                            </DivElementCenter>
                          </DivElement>
                        </Col>
                        )
                    )
                          
                  )

                    return (
                          <Col lg={10} key={index}>
                            <AbilityTitle>{finalResult}:</AbilityTitle>
                         
                              <Row>
                              {oo(ability[key])}
                              </Row>
                            </Col>

                    )
                  }
                })}
                </Row>
          </Col>
        ))}

                  
        </Row>

      </DivContent>
      }
    </Main>
  )
}

export default AccordionEdited

AccordionEdited.propTypes = {
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
`

const DivTitle = styled.div`
  display: flex;
  justify-content: space-between
`

const DivTitleHeader = styled.div`

`

const DivDate = styled.div`
  background-color: ${({ selecionado }) => selecionado || '#343434'};
  border-radius: 10px;
  padding: 5px;
  justify-content: center;
  display: flex;
  align-items: center;
  width: 20%;
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


const DivElement = styled.div`
    background-color: #343434;
    color: white;
    border-radius: 10px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    margin: 10px 0px;
`

const DivElementCenter = styled.div`
  display: flex;
  justify-content: space-between;
`

const DivElementCenterTitle = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 9pt;
  color: #40C2CC;
  opacity: 0.7;

`

const DivElementCenterText = styled.p`
  margin: 0;
  font-size: 9pt;
`