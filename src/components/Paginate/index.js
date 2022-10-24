/*
    A component of paging that uses an external package to do the paging. 
    The component receives input parameters and executes a function that is returned to the Container (onPageChange).

    João Jorge 23/10/2022
*/
import React from 'react'
import PropTypes from 'prop-types'
import ReactPaginate from 'react-responsive-pagination'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css'

const Paginate = ({ total, current, onPageChange }) => {
  return (
    <Teste>
      <ReactPaginate
        total={total}
        current={current}
        onPageChange={page => onPageChange(page)}
        maxWidth={60}
        className="my-pagination"
      />
    </Teste>
  )
}

Paginate.propTypes = {
  total: PropTypes.number,
  current: PropTypes.number,
  onPageChange: PropTypes.func
}

export default Paginate

const Teste = styled.div`
  .my-pagination{
    list-style: none;
    display: inline-flex;
  }

  .my-pagination .page-item .page-link {
    color: #656f7e;
    border: 0px !important;
    border-radius: 50%;
    padding-inline: 10px;
  }
  .my-pagination .page-item .page-link:hover {
    color: #656f7e;
    background-color: #dce4f1 !important;
  }
  
  .my-pagination .page-item.active .page-link {
    font-weight: bold;
    background: #343434 !important;
    border-color: #40C2CC !important;
    color: #40C2CC !important;
    border-radius: 50%;
  }
  
  .my-pagination .page-item.disabled .page-link {
    color: #6c757d;
    pointer-events: none;
    cursor: auto;
  }
  
`
