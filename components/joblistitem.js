import {useState, useCallback} from 'react'
import moment from 'moment';


export default function JobItem({orgDetails}) {
    const [expanded, setExpanded] = useState(false)
    const toggleExpanded = useCallback((sortKey) => {
        setExpanded(!expanded)
    })

    const shortenName = (nameString) => {
        const namePartFirstLetters = []
        nameString.split(' ').forEach(x => {
            namePartFirstLetters.push(x.charAt(0))
        })
        return namePartFirstLetters.splice(0, 2).join('');
    }

    return (
        <li className="my-6" onClick={toggleExpanded}>
            <span className="bg-gray-400 uppercase p-2 rounded-lg text-white mr-2 text-lg"> {shortenName(orgDetails.name)}</span> {orgDetails.total_jobs_in_hospital} jobs for {orgDetails.name}
            {expanded ? (
                <ul className="divide-y divide-black-600 divide-solid">
                    {orgDetails.items.map((job, index) => (
                        <li key={index} className="p-3 divide-gray-600 divide-y-2 divide-solid">
                            <div className="md:flex flex-row items-center">
                                <div className="grid grid-rows-2 flex-grow">
                                    <div className="font-semibold">{job.job_title}</div>
                                    <div>{job.job_type} | ${job.salary_range[0]} - ${job.salary_range[1]} an hour | {job.city}</div>
                                </div>
                                <div>{moment(job.created).fromNow()}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                ''
            )}
        </li>
    )
}