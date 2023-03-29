import React from 'react';
import './PageNotFound.css';
import SadImage from '../../assets/sadEmoji.png';
import { Row } from 'react-bootstrap';

export default function PageNotFound() {
  return (
    <div className='mt-5'>
        <Row id="pageNotFoundDiv"><img src={SadImage} id="sadEmojiImg" /></Row>
        <Row id="pageNotFoundDiv" className='pb-5'><h1 id="pageNotFoundTxt">Page Not Found</h1></Row>
    </div>
  )
}
