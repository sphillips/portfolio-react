import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Thumbnail from './Thumbnail';

function App() {
  return (
    <div className="Home">
      <Header />
      <div className="Portfolio">
        <Thumbnail url="http://seanbphillips.com.s3.amazonaws.com/site_assets/thumbs/DSCF0141_retouched.jpg" img_id="DSCF0141_retouched" width="400" height="300" alt="placeholder"/>
        <Thumbnail url="https://seanbphillips.com.s3.amazonaws.com/site_assets/thumbs/DSCF6579_retouched.jpg" img_id="DSCF6579_retouched" height="267" alt="placeholder"/>
        <Thumbnail url="https://seanbphillips.com.s3.amazonaws.com/site_assets/thumbs/DSCF0432_retouched.jpg" img_id="DSCF0432_retouched" width="400" height="300" alt="placeholder"/>

        <Thumbnail url="https://seanbphillips.com.s3.amazonaws.com/site_assets/thumbs/DSCF0532_retouched.jpg" img_id="DSCF0532_retouched" width="400" height="300" alt="placeholder"/>
        <Thumbnail url="https://seanbphillips.com.s3.amazonaws.com/site_assets/thumbs/DSCF0551_retouched.jpg" img_id="DSCF0551_retouched" width="400" height="300" alt="placeholder"/>
        <Thumbnail url="https://seanbphillips.com.s3.amazonaws.com/site_assets/thumbs/DSCF0566_retouched.jpg" img_id="DSCF0566_retouched" width="400" height="300" alt="placeholder"/>
        <Thumbnail url="https://seanbphillips.com.s3.amazonaws.com/site_assets/thumbs/DSCF0576_retouched.jpg" img_id="DSCF0576_retouched" width="400" height="300" alt="placeholder"/>
        <Thumbnail url="https://seanbphillips.com.s3.amazonaws.com/site_assets/thumbs/DSCF8760_retouched.jpg" img_id="DSCF8760_retouched" height="267" alt="placeholder"/>

        <Thumbnail url="https://seanbphillips.com.s3.amazonaws.com/site_assets/thumbs/DSCF4201_processed.jpg" img_id="DSCF4201_processed" width="400" height="300" alt="placeholder"/>
        <Thumbnail url="https://seanbphillips.com.s3.amazonaws.com/site_assets/thumbs/DSCF4522_processed.jpg" img_id="DSCF4522_processed" width="400" height="300" alt="placeholder"/>
        <Thumbnail url="https://seanbphillips.com.s3.amazonaws.com/site_assets/thumbs/DSCF4752_processed.jpg" img_id="DSCF4752_processed" width="400" height="300" alt="placeholder"/>
      </div>
    </div>
  );
}

export default App;
