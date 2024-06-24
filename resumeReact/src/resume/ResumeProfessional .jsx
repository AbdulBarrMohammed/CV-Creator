function ResumeProfessional ({id, job, company, proStartDate, proEndDate, description}) {

    return (
        <div class="proResume">
            <div class="resumeLeft">
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
