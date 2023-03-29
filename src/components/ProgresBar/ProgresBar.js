import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function ProgresBar(props) {
  return (
    <>
         <ProgressBar variant="danger" animated now={props.percentage} />
    </>
  )
}
