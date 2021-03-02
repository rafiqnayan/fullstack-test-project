import JobItem from './joblistitem'
import SortParam from './sortparam'
import useSWR from 'swr'
import {useState, useCallback} from 'react'


const fetcher = (url) => fetch(url).then((res) => res.json())

export default function JobList({query}) {
    const [sortOptions, setSortOptions] = useState({location: 0, role: 0, education: 0, experience: 0, department: 0}) 
    
    const handleSort = useCallback((sortKey) => {
        let sortOptionsCopy = Object.assign({}, sortOptions);  // creating copy of state variable jasper

        if(sortOptionsCopy[sortKey] === 0) {
            sortOptionsCopy[sortKey] = 1
        } else {
            sortOptionsCopy[sortKey] = sortOptionsCopy[sortKey] * -1;
        }
        setSortOptions(sortOptionsCopy)
    })

    const { data, error } = useSWR('/api/jobs?q='+query, fetcher)
    if (!data) return <div>Loading...</div>

    return (
        <div className="bg-white col-span-10 p-4">
          <div className="flex justify-between">
            <div>{parseInt(data.jobs.length).toLocaleString()} job postings</div>
            <div className="order-last">
              <div className="grid grid-flow-col auto-cols-max gap-4 inline-flex">
                <div className="text-gray-400">Sort by</div>
                <SortParam handleSort={handleSort} paramKey="location" paramName="Location" sortOrder={sortOptions.location}></SortParam>
                <SortParam handleSort={handleSort} paramKey="role" paramName="Role" sortOrder={sortOptions.role}></SortParam>
                <SortParam handleSort={handleSort} paramKey="department" paramName="Department" sortOrder={sortOptions.department}></SortParam>
                <SortParam handleSort={handleSort} paramKey="education" paramName="Education" sortOrder={sortOptions.education}></SortParam>
                <SortParam handleSort={handleSort} paramKey="experience" paramName="Experience" sortOrder={sortOptions.experience}></SortParam>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <ul>
            {data.jobs.map((job, index) => (
                <JobItem key={index} companyName={job.name} jobCount={job.total_jobs_in_hospital}></JobItem>
            ))}
            </ul>
          </div>

        </div>
    )
}