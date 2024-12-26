function ResumeEducation ({id, degree, degreeType, school, city, country, startDate, endDate, gpa}) {

    return (
        <div class="flex justify-between pt-1 mb-5">
            <div className="flex flex-col gap-1">
                <p><span class="wordBold">{school}</span>, {city}, {country}</p>
                <div className="flex gap-1">
                    <p>{degreeType},</p>
                    <p>{degree}</p>
                </div>

            </div>
            <div class="">
                <p>Cummilative GPA: {gpa}</p>
                <p>{startDate} - {endDate}</p>
            </div>
        </div>

    );
}

export default ResumeEducation;
