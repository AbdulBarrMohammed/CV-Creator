import Form from '../form/Form';
const EducationContainerForm = ({degree, setDegree, degreeType, setDegreeType, school, setSchool, city, setCity, country, setCountry, startDate, setStartDate, endDate, setEndDate, gpa, setGpa}) => {
    return (
        <>
                         <Form
                              label="Degree"
                              type = 'text'
                              placeholder="Enter Degree / Field of Study"
                              value = {degree}
                              onChange={(e) => setDegree(e.target.value)}
                            />
                            <Form
                              label="Degree Type"
                              type = 'text'
                              placeholder="Enter Degree Type / Bachelors"
                              value = {degreeType}
                              onChange={(e) => setDegreeType(e.target.value)}
                            />
                            <Form
                              label="Gpa"
                              type="text"
                              placeholder="0.0"
                              value={gpa}
                              onChange={(e) => setGpa(e.target.value)}
                            />
                            <Form
                              label="School"
                              type="text"
                              placeholder="Enter School / University"
                              value={school}
                              onChange={(e) => setSchool(e.target.value)}
                            />
                            <Form
                              label="City"
                              type="text"
                              placeholder="Enter City"
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                            />
                            <Form
                              label="Country"
                              type="text"
                              placeholder="Enter Country"
                              value={country}
                              onChange={(e) => setCountry(e.target.value)}
                            />
                            <Form
                              label="Start Date"
                              type="date"
                              placeholder=""
                              value={startDate}
                              onChange={(e) => setStartDate(e.target.value)}
                            />
                            <Form
                              label="End Date"
                              type="date"
                              placeholder=""
                              value={endDate}
                              onChange={(e) => setEndDate(e.target.value)}
                            />

    <div class="btn-container">
      <button>Save</button>
    </div>
        </>
    );
  };

  export default EducationContainerForm;
