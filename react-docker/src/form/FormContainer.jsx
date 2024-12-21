import React from 'react';
import downBtn from '../assets/triangle-small-down.svg';
import school from '../assets/school.svg';
import briefcase from '../assets/briefcase.svg';
import account from '../assets/account.svg';

const FormContainer = ({ Active, setActive, name}) => {
  let pic = school;
  if (name === 'Professional Experience') {
    pic = briefcase;
  }
  else if (name == 'General Information') {
    pic = account;
  }
  return (
        <>
            <div className="icon-container">

                <img src={pic} alt="School"/>
                <h2>{name}</h2>
            </div>
            <button onClick={() => setActive(!Active)}>
                <img className="downBtn" src={downBtn} alt="Toggle"/>
            </button>
        </>



  );
};

export default FormContainer;
