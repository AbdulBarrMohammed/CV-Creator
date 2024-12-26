
import Form from '../form/Form';
import '../App.css'
const ProfessionalContainerForm = ({job, setJob, company, setCompany, location, setLocation, proStartDate, setProStartDate, proEndDate, setProEndDate, setDescription, description}) => {
    return (
        <>
                        <Form
                              label="Job Title"
                              type = 'text'
                              placeholder="Enter Job Title"
                              value = {job}
                              onChange={(e) => setJob(e.target.value)}
                            />
                            <Form
                              label="Company"
                              type="text"
                              placeholder="Enter Company"
                              value={company}
                              onChange={(e) => setCompany(e.target.value)}
                            />

                          <Form
                              label="Location"
                              type="text"
                              placeholder="Enter City, State"
                              value={location}
                              onChange={(e) => setLocation(e.target.value)}
                            />
                            <Form
                              label="Start Date"
                              type="date"
                              placeholder=""
                              value={proStartDate}
                              onChange={(e) => setProStartDate(e.target.value)}
                            />
                            <Form
                              label="End Date"
                              type="date"
                              placeholder=""
                              value={proEndDate}
                              onChange={(e) => setProEndDate(e.target.value)}
                            />
                        <div class="label-container">
                          <label>Description</label>
                          <textarea className="description"
                              placeholder="Enter each task seperated by ;"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}>
                          </textarea>
                      </div>
                      <div class="btn-container">
                          <button className='bg-[#2356F6]'>Save</button>
                      </div>



        </>
    );
  };

  export default ProfessionalContainerForm;
