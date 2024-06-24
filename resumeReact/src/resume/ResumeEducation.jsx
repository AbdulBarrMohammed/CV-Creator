function ResumeEducation ({id, degree, school, city, country, startDate, endDate}) {

    return (
        <div class="eduResume">
            <div class="resumeLeft">
                <p><span class="wordBold">{school}</span>, {city}, {country}</p>
                <p>{degree}</p>
            </div>
            <div class="resumeRight">
                <p>{startDate} - {endDate}</p>
            </div>
        </div>

    );
}

export default ResumeEducation;
