import FormEdit from "../form/FormEdit";

function EducationEditForm ({degree, setDegree, school, setSchool, city, setCity, country, setCountry, startDate, setStartDate, endDate, setEndDate}) {
    return (
        <>
            <FormEdit
                              label="Degree"
                              type = 'text'
                              placeholder="Enter Degree / Field of Study"
                              value = {degree}
                              onChange={(e) => setDegree(e.target.value)}
                            />
                            <FormEdit
                              label="School"
                              type="text"
                              placeholder="Enter School / University"
                              value={school}
                              onChange={(e) => setSchool(e.target.value)}
                            />
                            <FormEdit
                              label="City"
                              type="text"
                              placeholder="Enter City"
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                            />
                            <FormEdit
                              label="Country"
                              type="text"
                              placeholder="Enter Country"
                              value={country}
                              onChange={(e) => setCountry(e.target.value)}
                            />
                            <FormEdit
                              label="Start Date"
                              type="date"
                              placeholder=""
                              value={startDate}
                              onChange={(e) => setStartDate(e.target.value)}
                            />
                            <FormEdit
                              label="End Date"
                              type="date"
                              placeholder=""
                              value={endDate}
                              onChange={(e) => setEndDate(e.target.value)}
                            />

                    <div class="btn-container">
                        <button>Save Edits</button>
                    </div>
        </>



    );
}

export default EducationEditForm;
