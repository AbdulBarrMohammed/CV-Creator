import { useEffect, useState } from "react";

function ResumeProfessional ({id, job, company, location, proStartDate, proEndDate, description}) {

    const [desc, setDesc] = useState([]);
    const descArray = description.split(';')

    useEffect(() => {
        setDesc(descArray)
    }, [description])


    return (
        <div className="flex justify-between pt-1 mb-5">
            <div className="flex flex-col">
                <p className="font-times"><span class="wordBold">{company}</span></p>
                <p className="font-times">{job}</p>

                <ul className="list-disc ml-7">
                    {desc.map((d, index) => (
                        <li key={index} className="font-times">
                            {d}
                        </li>
                    ))}
                </ul>


            </div>
            <div className="flex flex-col font-times">
                <p className="font-bold flex justify-end font-times">{location}</p>
                <p className="font-times">{proStartDate} - {proEndDate}</p>
            </div>
        </div>

    );
}

export default ResumeProfessional;
