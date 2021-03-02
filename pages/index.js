import Navbar from '../components/navbar'
import JobFilters from '../components/jobfilters'
import Footer from '../components/footer'
import JobList from '../components/joblist'
import {useState, useCallback} from 'react'


export default function Index() {
  const [query, setQuery] = useState('')
  
  const onChange = useCallback((e) => {
    const q = e.target.value
    setQuery(q)
  })

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar></Navbar>
      <div className="flex flex-row bg-white m-4 h-12 items-center p-4">
        <svg width="24" height="24" fill="none" className="flex-none text-gray-400 group-hover:text-gray-500 transition-colors duration-200">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        <input type="text" className="flex-grow m-2 outline-none" onChange={onChange} />
      </div>

      <div className="px-4 md:grid grid-cols-12 gap-4">
        <div className="md:col-span-2">
          <JobFilters></JobFilters>
        </div>
        <JobList query={query}></JobList>
      </div>
      <Footer></Footer>
    </div>
  )
}

