import Navbar from '../components/navbar'
import JobFilter from '../components/jobfilter'
import Footer from '../components/footer'


const Index = () => (
  <div class="bg-gray-100 min-h-screen">
    <Navbar></Navbar>
    <div class="flex flex-row bg-white m-4 h-12 items-center p-4">
      <svg width="24" height="24" fill="none" class="flex-none text-gray-400 group-hover:text-gray-500 transition-colors duration-200"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      <input type="text" class="flex-grow m-2 outline-none"></input>
    </div>

    <div class="px-4 grid grid-cols-12 gap-4">
      <div class="col-span-2">
      <div class="grid grid-flow-row auto-rows-max gap-4">
      
      <JobFilter></JobFilter>
        <JobFilter></JobFilter>
        <JobFilter></JobFilter>
        <JobFilter></JobFilter>
        <JobFilter></JobFilter>
        <JobFilter></JobFilter>
      </div>
        
      </div>
      <div class="bg-white col-span-10 p-4">
        Search results
      </div>
    </div>
    <Footer></Footer>
  </div>
)
export default Index
