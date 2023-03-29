import React from 'react';
import './PageNotFound.css';
import SadImage from '../../assets/dashboard/sadEmoji.png';

export default function PageNotFound() {
  return (
    <div className='mt-5'>
        <div id="pageNotFoundDiv"><img src={SadImage} id="sadEmojiImg" /></div>
        <div id="pageNotFoundDiv" className='pb-5'><h1 id="pageNotFoundTxt">Page Not Found</h1></div>
    </div>
  )
}
