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
            <div className="">

                <h2>{name}</h2>
                <img className='h-20' src={pic} alt="School"/>

            </div>
            <button onClick={() => setActive(!Active)}>
                <img className="h-10" src={downBtn} alt="Toggle"/>
            </button>
        </>



  );
};

export default FormContainer;
