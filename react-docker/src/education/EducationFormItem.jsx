function EducationFormItem ({id, degree, school, city, country, startDate, endDate, onDelete, onEdit}) {
    return (
        <div class="flex flex-col gap-3">
            <div class="leftFormItem">
                <h4>{degree}</h4>
                <p>{school}</p>
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
