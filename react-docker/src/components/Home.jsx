import { useState } from 'react'
import '../App.css'
import FormContainer from '../form/FormContainer';
import EducationContainerForm from '../education/EducationFormContainer';
import ProfessionalContainerForm from '../professional/ProfessionalContainerForm';
import GeneralFormContainer from './GeneralFormContainer';
import EducationFormItem from '../education/EducationFormItem';
import ResumeHeader from '../resume/ResumeHeader';
import ResumeEducation from '../resume/ResumeEducation';
import ResumeProfessional from '../resume/ResumeProfessional ';
import ProfessionalFormItem from '../professional/ProfessionalFormItem';
import EducationEditForm from '../education/EducationEditForm';
import ProfessionalEditForm from '../professional/ProfessionalEditForm';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Home() {
  const [currKey, setCurrKey] = useState('');
  const [genActive, setGenActive] = useState(false); const [eduActive, setEduActive] = useState(false); const [proActive, setProActive] = useState(false);

  const [eduResumeActive, setEduResumeActive] = useState(false); const [proResumeActive, setProResumeActive] = useState(false);

  //Education states
  const [degree, setDegree] = useState('');
  const [degreeType, setDegreeType] = useState('');
  const [school, setSchool] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  //Professional Experience states
  const [job, setJob] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [proStartDate, setProStartDate] = useState('');
  const [proEndDate, setProEndDate] = useState('');
  const [description, setDescription] = useState('');

  //General Information states
  const [fullName, setFullName] = useState(''); const [email, setEmail] = useState(''); const [phone, setPhone] = useState(''); const [cityProv, setCityProv] = useState('');

  //Form arrays
  const [education, setEducation] = useState([]); const [professional, setProfessional] = useState([]);

  //Edit buttons
  const [eduEditActive, setEduEditActive] = useState(false); const [proEditActive, setProEditActive] = useState(false);

  const handleEduSubmit = (e) => {
    e.preventDefault();

    //Creates new education object and adds it to education list
    const newEducation = { id: self.crypto.randomUUID(), degree: degree, degreeType: degreeType, school: school, city: city, country: country, startDate: startDate, endDate: endDate };
    setEducation([...education, newEducation]);

    // Clear input fields
    setDegree('');  setDegreeType(''), setSchool(''); setCity(''); setCountry(''); setStartDate(''); setEndDate('');
    setEduResumeActive(true);
    setEduActive(false);
  };

  const handleEduEditSubmit = (e) => {
    e.preventDefault();
    const key = currKey;

    const updatedEducation = education.map(edu => {
      if (edu.id === key) {
          // Creates an object with the updated fields that are not empty
          const updatedFields = {
              ...(degree && { degree }),
              ...(degreeType && {degreeType}),
              ...(school && { school }),
              ...(city && { city }),
              ...(country && { country }),
              ...(startDate && { startDate }),
              ...(endDate && { endDate }),
          };
          // Merges the updated fields into the existing education entry
          return { ...edu, ...updatedFields };
      }
      return edu;
      });
      setEducation(updatedEducation);
      setEduEditActive(false);
      setDegree(''); setDegreeType(''), setSchool(''); setCity(''); setCountry(''); setStartDate(''); setEndDate('');
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
          // Creates an object with the updated fields that are not empty
          const updatedFields = {
              ...(job && { job }),
              ...(company && { company }),
              ...(location && { location }),
              ...(proStartDate&& { proStartDate }),
              ...(proEndDate && { proEndDate }),
              ...(description && { description}),
          };
          // Merges the updated fields into the existing education entry
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
    const newProfessional = { id: self.crypto.randomUUID(), job: job, company: company, location: location, proStartDate: proStartDate, proEndDate: proEndDate, description: description };
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


  const handleDownload = () => {
    const input = document.getElementById('Resume');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = pdfWidth;
      const pageHeight = pdfHeight;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('download.pdf');
    }).catch((err) => console.error('Failed to generate PDF', err));
  };

  return (
    <>
      <div className="bottom bg-slate-100">
        <div className="flex flex-col gap-y-5 pt-5">
          <div className="education-container">
            <div className="education">
              <FormContainer Active={eduActive}
                  setActive={setEduActive}
                  name={'Education'}
                  />
            </div>
            {education.map(edu => (
                  <EducationFormItem onDelete={handleEduDelete} onEdit={handleEduEdit} key={edu.id} id={edu.id} degree={edu.degree} degreeType={edu.degreeType} city={edu.city} school={edu.school} country={edu.country} startDate={edu.startDate} endDate={edu.endDate}  />
              ))}

            {eduActive && (
                      <div>
                          <form onSubmit={handleEduSubmit}>
                            <EducationContainerForm degree ={degree} setDegree={setDegree} degreeType={degreeType} setDegreeType={setDegreeType} school={school} setSchool={setSchool} city={city} setCity={setCity}
                                country={country} setCountry={setCountry} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>
                          </form>
                      </div>
                  )}
              {eduEditActive && (
                <>
                    <form onSubmit={handleEduEditSubmit}>
                            <EducationEditForm degree ={degree} setDegree={setDegree} degreeType={degreeType} setDegreeType={setDegreeType} school={school} setSchool={setSchool} city={city} setCity={setCity}
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
                  <ProfessionalFormItem onDelete={handleProDelete} onEdit={handleProEdit} key={pro.id} id={pro.id} job={pro.job} location={pro.location} company={pro.company} proStartDate={pro.proStartDate} proEndDate={pro.proEndDate} description={pro.description}  />
              ))}

            {proActive && (
                    <div>
                    <form onSubmit={handleProSubmit}>
                      <ProfessionalContainerForm job ={job} setJob={setJob} company={company} setCompany={setCompany} location={location} setLocation={setLocation} proStartDate={proStartDate} setProStartDate={setProStartDate}
                             proEndDate={proEndDate} setProEndDate={setProEndDate} setDescription={setDescription} description={description}/>
                    </form>
                </div>
                  )}

                {proEditActive && (
                  <>
                    <form onSubmit={handleProEditSubmit}>
                      <ProfessionalEditForm  job ={job} setJob={setJob} company={company} setCompany={setCompany} location={location} setLocation={setLocation} proStartDate={proStartDate} setProStartDate={setProStartDate}
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
          <div className='flex items-start py-5'>
            <button onClick={handleDownload} className='bg-[#2356F6] rounded-full text-white px-7 py-2 text-center hover:bg-[#00c6ff] transition-all duration-300 ease-in-out'>Download</button>
          </div>

        </div>

        <div className="right-side">
          <div className="Resume" id="Resume">
            <ResumeHeader name={fullName} email={email} phone={phone} cityProv={cityProv}/>
            {eduResumeActive && (
              <>
                <h3 className='pb-2'>Education</h3>
                <div class="line"></div>
              </>

              )}
            {education.map(edu => (
              <ResumeEducation key={edu.id} id={edu.id} degree={edu.degree} degreeType={edu.degreeType} school={edu.school} city={edu.city} country={edu.country} startDate={edu.startDate} endDate={edu.endDate}/>
              ))}
            {proResumeActive && (
              <>
                <h3 className='pb-2'>Work Experience</h3>
                <div class="line"></div>
              </>
            )}
            {professional.map(pro  => (
                <ResumeProfessional key={pro.id} id={pro.id} job={pro.job} company={pro.company} location={pro.location} proStartDate={pro.proStartDate} proEndDate={pro.proEndDate} description={pro.description}/>
            ))}

          </div>

        </div>



      </div>

    </>
  )
}
export default Home
