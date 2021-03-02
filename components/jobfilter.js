const JobFilter = ({filterKey, filterObj}) => (
    <div className="bg-white p-4">
        <div className="uppercase text-l font-semibold mb-1">{filterKey.replace('_', ' ')}</div>
        <ul>
            {filterObj.map((f, index) => (
              <li className="py-1" key={index}>{f.key} <span className="text-sm text-gray-400">{f.doc_count.toLocaleString()}</span></li>
            ))}
        </ul>
    </div>
  )
export default JobFilter  