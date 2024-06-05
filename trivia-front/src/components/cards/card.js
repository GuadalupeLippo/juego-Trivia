import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
} from 'mdb-react-ui-kit';

const Card = ({ title, imageSrc }) => {
  return (
    <MDBCard>
        <div className='faceFront'>
      <MDBCardImage src={imageSrc} position='top' alt='...' />
      </div>
      <div className='faceBack'>
      <MDBCardBody>
        <MDBCardTitle>{title}</MDBCardTitle>
      </MDBCardBody>
      </div>
    </MDBCard>
  );
};

export default Card;
