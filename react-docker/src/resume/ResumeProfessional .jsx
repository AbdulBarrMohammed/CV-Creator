function ResumeProfessional ({id, job, company, proStartDate, proEndDate, description}) {

    return (
        <div class="flex justify-between pt-1 mb-5">
            <div class="flex flex-col gap-1">
                <p><span class="wordBold">{job}</span>, {company}</p>
                <p class="resumeDescription">{description}</p>
            </div>
            <div class="resumeRight">
                <p>{proStartDate} - {proEndDate}</p>
            </div>
        </div>

    );
}

export default ResumeProfessional;
