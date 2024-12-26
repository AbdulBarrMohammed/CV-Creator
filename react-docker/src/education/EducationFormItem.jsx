function EducationFormItem ({id, degree, degreeType, school, city, country, startDate, endDate, gpa, onDelete, onEdit}) {
    return (
        <div class="flex flex-col gap-3">
            <div class="leftFormItem">
                <h4>{degree}</h4>
                <h2>{degreeType}</h2>
                <p>{school}</p>
                <p>{gpa}</p>
                <p>{city}, {country}</p>
                <p>{startDate} - {endDate}</p>
            </div>
            <div class="rightFormItem">
                <button onClick={() => onDelete(id)}>Delete</button>
                <button onClick={() => onEdit(id)}>Edit</button>
            </div>
        </div>

    );
}

export default EducationFormItem;
