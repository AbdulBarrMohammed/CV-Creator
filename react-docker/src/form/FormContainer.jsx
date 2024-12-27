import React from 'react';
import downBtn from '../assets/triangle-small-down.svg';
import school from '../assets/school.svg';
import briefcase from '../assets/briefcase.svg';
import skills from '../assets/skills.png'
import projects from '../assets/start-up.png'
import profile from '../assets/user.png'

const FormContainer = ({ Active, setActive, name}) => {
  let pic = school;
  if (name === 'Professional Experience') {
    pic = briefcase;
  }
  else if (name == 'General Information') {
    pic = profile;
  }
  else if (name == 'Skills') {
     pic = skills
  }
  else if (name == 'Projects') {
    pic = projects
  }
  return (
        <>
            <div className="flex flex-col gap-2">

                <h2>{name}</h2>
                <img className='h-12 w-12' src={pic} alt="School"/>

            </div>
            <button onClick={() => setActive(!Active)}>
                <img className="h-10" src={downBtn} alt="Toggle"/>
            </button>
        </>



  );
};

export default FormContainer;
