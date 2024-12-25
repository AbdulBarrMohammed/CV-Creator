function ResumeEducation ({id, degree, school, city, country, startDate, endDate}) {

    return (
        <div class="flex justify-between pt-1 mb-5">
            <div className="flex flex-col gap-1">
                <p><span class="wordBold">{school}</span>, {city}, {country}</p>
                <p>{degree}</p>
            </div>
            <div class="">
                <p>{startDate} - {endDate}</p>
            </div>
        </div>

    );
}

export default ResumeEducation;
