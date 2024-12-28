function EducationFormItem ({id, degree, degreeType, school, city, country, startDate, endDate, gpa, onDelete, onEdit}) {
    return (
        <div>

            <div class="flex gap-3 items-center justify-between">
                <div class="leftFormItem">
                    <h4>{degree}</h4>
                    <h2>{degreeType}</h2>
                    <p>{school}</p>
                    <p>{gpa}</p>
                    <p>{city}, {country}</p>
                    <p>{startDate} - {endDate}</p>
                </div>
                <div class="rightFormItem">
                    <button className="rounded-3xl hover:bg-[#00c6ff] transition-all duration-300 ease-in-out'" onClick={() => onDelete(id)}>Delete</button>
                    <button className="rounded-3xl hover:bg-[#00c6ff] transition-all duration-300 ease-in-out'" onClick={() => onEdit(id)}>Edit</button>
                </div>
            </div>

            <hr className="border-black my-1"/>

        </div>


    );
}

export default EducationFormItem;
