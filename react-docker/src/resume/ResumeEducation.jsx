function ResumeEducation ({id, degree, degreeType, school, city, country, startDate, endDate, gpa}) {

    return (
        <div class="flex justify-between pt-1 mb-5">
            <div className="flex flex-col gap-1">
                <p className="font-times"><span class="wordBold">{school}</span>, {city}, {country}</p>
                <div className="flex gap-1">
                    <p className="font-times">{degreeType},</p>
                    <p className="font-times">{degree}</p>
                </div>

            </div>
            <div>
                <p className="font-times"><span className="font-bold">Cummilative GPA:</span> {gpa}</p>
                <p className="font-times">{startDate} - {endDate}</p>
            </div>
        </div>

    );
}

export default ResumeEducation;
