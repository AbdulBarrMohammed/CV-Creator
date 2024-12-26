import { useEffect, useState } from "react";

function ResumeProject ({id, title, tools, projectDescription, dateCompleted}) {

    const [desc, setDesc] = useState([]);
    const descArray = projectDescription.split(';')

    useEffect(() => {
        setDesc(descArray)
    }, [])


    return (
        <div class="flex justify-between pt-1 mb-5">
            <div class="flex flex-col">
                <div className="flex gap-1">
                    <p><span class="wordBold">{title}</span></p>
                    <p>|</p>
                    <p>{tools}</p>
                </div>
                <ul className="list-disc ml-7">
                    {desc.map((d, index) => (
                        <li key={index} className="resumeDescription">
                            {d}
                        </li>
                    ))}
                </ul>


            </div>
            <div class="">
                <p className="font-bold">{dateCompleted}</p>

            </div>
        </div>

    );
}

export default ResumeProject;
