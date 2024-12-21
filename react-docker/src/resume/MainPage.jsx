import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import FormContainer from './form/FormContainer';
import EducationContainerForm from './education/EducationFormContainer';
import ProfessionalContainerForm from './professional/ProfessionalContainerForm';
import GeneralFormContainer from './components/GeneralFormContainer';
import EducationFormItem from './education/EducationFormItem';
import ResumeHeader from './resume/ResumeHeader';
import ResumeEducation from './resume/ResumeEducation';
import ResumeProfessional from './resume/ResumeProfessional ';
import ProfessionalFormItem from './professional/ProfessionalFormItem';
import EducationEditForm from './education/EducationEditForm';
import ProfessionalEditForm from './professional/ProfessionalEditForm';

function MainPage() {
  const [currKey, setCurrKey] = useState('');
  const [genActive, setGenActive] = useState(false); const [eduActive, setEduActive] = useState(false); const [proActive, setProActive] = useState(false);

  const [eduResumeActive, setEduResumeActive] = useState(false); const [proResumeActive, setProResumeActive] = useState(false);

  //Education states
  const [degree, setDegree] = useState('');
  const [school, setSchool] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  //Professional Experience states
  const [job, setJob] = useState(''); const [company, setCompany] = useState(''); const [proStartDate, setProStartDate] = useState(''); const [proEndDate, setProEndDate] = useState(''); const [description, setDescription] = useState('');

  //General Information states
  const [fullName, setFullName] = useState(''); const [email, setEmail] = useState(''); const [phone, setPhone] = useState(''); const [cityProv, setCityProv] = useState('');

  //Form arrays
  const [education, setEducation] = useState([]); const [professional, setProfessional] = useState([]);

  //edit buttons
  const [eduEditActive, setEduEditActive] = useState(false); const [proEditActive, setProEditActive] = useState(false);

  const handleEduSubmit = (e) => {
    e.preventDefault();
    const newEducation = { id: self.crypto.randomUUID(), degree: degree, school: school, city: city, country: country, startDate: startDate, endDate: endDate };
    setEducation([...education, newEducation]);
    // Clear input fields
    setDegree(''); setSchool(''); setCity(''); setCountry(''); setStartDate(''); setEndDate('');
    setEduResumeActive(true);
    setEduActive(false);
  };

  const handleEduEditSubmit = (e) => {
    e.preventDefault();
    const key = currKey;

    const updatedEducation = education.map(edu => {
      if (edu.id === key) {
          // Create an object with the updated fields that are not empty
          const updatedFields = {
              ...(degree && { degree }),
              ...(school && { school }),
              ...(city && { city }),
              ...(country && { country }),
              ...(startDate && { startDate }),
              ...(endDate && { endDate }),
          };
          // Merge the updated fields into the existing education entry
          return { ...edu, ...updatedFields };
      }
      return edu;
      });
      setEducation(updatedEducation);
      setEduEditActive(false);
      setDegree(''); setSchool(''); setCity(''); setCountry(''); setStartDate(''); setEndDate('');
  }

  const handleEduEdit = (id) => {
      setCurrKey(id);
      setEduEditActive(true);
  }


  const handleProEditSubmit = (e) => {
    e.preventDefault();
    const key = currKey;

    const updatedProfessional = professional.map(pro => {
      if (pro.id === key) {
          // Create an object with the updated fields that are not empty
          const updatedFields = {
              ...(job && { job }),
              ...(company && { company }),
              ...(city && { city }),
              ...(proStartDate&& { proStartDate }),
              ...(proEndDate && { proEndDate }),
              ...(description && { description}),
          };
          // Merge the updated fields into the existing education entry
          return { ...pro, ...updatedFields };
      }
      return edu;
      });
      setProfessional(updatedProfessional);
      setProEditActive(false);
  }

  const handleProEdit = (id) => {
    setCurrKey(id);
    setProEditActive(true);

  }

  const handleProSubmit = (e) => {
    e.preventDefault();
    const newProfessional = { id: self.crypto.randomUUID(), job: job, company: company, proStartDate: proStartDate, proEndDate: proEndDate, description: description };
    setProfessional([...professional, newProfessional]);
    setJob(''); setCompany(''); setProStartDate(''); setProEndDate(''); setDescription('');
    setProResumeActive(true);
    setProActive(false);
  }

  const handleGenSubmit = (e) => {
    e.preventDefault();
  }

  const handleEduDelete = (id) => {
      setEducation(education.filter(edu => edu.id !== id))
  }
  const handleProDelete = (id) => {
    setProfessional(professional.filter(pro => pro.id !== id));
  }

  return (
    <>
      <Header />
      <div className="bottom">
        <div className="left-side">
          <div className="education-container">
            <div className="education">
              <FormContainer Active={eduActive}
                  setActive={setEduActive}
                  name={'Education'}
                  />
            </div>
            {education.map(edu => (
                  <EducationFormItem onDelete={handleEduDelete} onEdit={handleEduEdit} key={edu.id} id={edu.id} degree={edu.degree} city={edu.city} school={edu.school} country={edu.country} startDate={edu.startDate} endDate={edu.endDate}  />
              ))}

            {eduActive && (
                      <div>
                          <form onSubmit={handleEduSubmit}>
                            <EducationContainerForm degree ={degree} setDegree={setDegree} school={school} setSchool={setSchool} city={city} setCity={setCity}
                                country={country} setCountry={setCountry} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>
                          </form>
                      </div>
                  )}
              {eduEditActive && (
                <>
                    <form onSubmit={handleEduEditSubmit}>
                            <EducationEditForm degree ={degree} setDegree={setDegree} school={school} setSchool={setSchool} city={city} setCity={setCity}
                                country={country} setCountry={setCountry} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>
                    </form>
                </>
              )}
          </div>

          <div className="professional-container">
            <div className="professional">
              <FormContainer Active={proActive}
                  setActive={setProActive}
                  name={'Professional Experience'} />
            </div>
            {professional.map(pro => (
                  <ProfessionalFormItem onDelete={handleProDelete} onEdit={handleProEdit} key={pro.id} id={pro.id} job={pro.job} company={pro.company} proStartDate={pro.proStartDate} proEndDate={pro.proEndDate} description={pro.description}  />
              ))}

            {proActive && (
                    <div>
                    <form onSubmit={handleProSubmit}>
                      <ProfessionalContainerForm job ={job} setJob={setJob} company={company} setCompany={setCompany} proStartDate={proStartDate} setProStartDate={setProStartDate}
                             proEndDate={proEndDate} setProEndDate={setProEndDate} setDescription={setDescription} description={description}/>
                    </form>
                </div>
                  )}

                {proEditActive && (
                  <>
                    <form onSubmit={handleProEditSubmit}>
                      <ProfessionalEditForm  job ={job} setJob={setJob} company={company} setCompany={setCompany} proStartDate={proStartDate} setProStartDate={setProStartDate}
                             proEndDate={proEndDate} setProEndDate={setProEndDate} setDescription={setDescription} description={description}/>
                    </form>
                  </>
                )}
          </div>

          <div className="general-container">
            <div className="general">
              <FormContainer Active={genActive}
                  setActive={setGenActive}
                  name={'General Information'} />
            </div>

            {genActive && (
                    <div>
                    <form onSubmit={handleGenSubmit}>
                    <GeneralFormContainer fullName ={fullName} setFullName={setFullName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone}
                        cityProv={cityProv} setCityProv={setCityProv} />
                    </form>
                    </div>
                  )}
          </div>
        </div>

        <div className="right-side">
          <div className="Resume" id="Resume">
            <ResumeHeader name={fullName} email={email} phone={phone} cityProv={cityProv}/>
            {eduResumeActive && (
              <>
                <h3>Education</h3>
                <div class="line"></div>
              </>

              )}
            {education.map(edu => (
              <ResumeEducation key={edu.id} id={edu.id} degree={edu.degree} school={edu.school} city={edu.city} country={edu.country} startDate={edu.startDate} endDate={edu.endDate}/>
              ))}
            {proResumeActive && (
              <>
                <h3>Work Experience</h3>
                <div class="line"></div>
              </>
            )}
            {professional.map(pro  => (
                <ResumeProfessional key={pro.id} id={pro.id} job={pro.job} company={pro.company} proStartDate={pro.proStartDate} proEndDate={pro.proEndDate} description={pro.description}/>
            ))}

          </div>
        </div>
      </div>
    </>
  )
}
export default MainPage
