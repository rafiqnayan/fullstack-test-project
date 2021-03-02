import useSWR from 'swr'
import JobFilter from './jobfilter'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function JobFilters() {
  const { data, error } = useSWR('/api/filters', fetcher)
  if (!data) return <div>Loading...</div>
  
  return (
    <div className="grid grid-flow-row auto-rows-max gap-4">
      {Object.entries(data).map(([key, value]) => (
        <JobFilter key={key} filterObj={value} filterKey={key} />
      ))}
    </div>
  )
}
