import { useEffect, useState } from "react";

function ResumeProfessional ({id, job, company, location, proStartDate, proEndDate, description}) {

    const [desc, setDesc] = useState([]);
    const descArray = description.split(';')

    useEffect(() => {
        setDesc(descArray)
        console.log(desc)
        console.log(descArray)
    }, [])


    return (
        <div class="flex justify-between pt-1 mb-5">
            <div class="flex flex-col">
                <p><span class="wordBold">{company}</span></p>
                <p>{job}</p>

                <ul className="list-disc ml-7">
                    {desc.map((d, index) => (
                        <li key={index} className="resumeDescription">
                            {d}
                        </li>
                    ))}
                </ul>


            </div>
            <div class="resumeRight">
                <p className="font-bold">{location}</p>
                <p>{proStartDate} - {proEndDate}</p>
            </div>
        </div>

    );
}

export default ResumeProfessional;
