import FormEdit from "../form/FormEdit";

function ProfessionalEditForm ({job, setJob, company, setCompany, location, setLocation, proStartDate, setProStartDate, proEndDate, setProEndDate, setDescription, description}) {
    return (
        <>
           <FormEdit
                              label="Job Title"
                              type = 'text'
                              placeholder="Enter Job Title"
                              value = {job}
                              onChange={(e) => setJob(e.target.value)}
                            />
                            <FormEdit
                              label="Company"
                              type="text"
                              placeholder="Enter Company"
                              value={company}
                              onChange={(e) => setCompany(e.target.value)}
                            />
                            <FormEdit
                              label="Location"
                              type="text"
                              placeholder="Enter City, State"
                              value={location}
                              onChange={(e) => setLocation(e.target.value)}
                            />
                            <FormEdit
                              label="Start Date"
                              type="date"
                              placeholder=""
                              value={proStartDate}
                              onChange={(e) => setProStartDate(e.target.value)}
                            />
                            <FormEdit
                              label="End Date"
                              type="date"
                              placeholder=""
                              value={proEndDate}
                              onChange={(e) => setProEndDate(e.target.value)}
                            />

                      <div class="label-container">
                            <label>Description</label>
                            <textarea className="description h-40"
                                placeholder="Main Tasks"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}>
                            </textarea>
                        </div>

                        <div class="btn-container">
                            <button>Save Edit</button>
                        </div>
        </>



    );
}

export default ProfessionalEditForm;
