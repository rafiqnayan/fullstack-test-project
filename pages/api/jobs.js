import jobs from '../../data/jobs'

export default async (req, res) => {
  res.statusCode = 200
  // @todo: implement filters and search
  let totalJobs = 0
  const results = req.query.q ? jobs.filter(
    job => {
      return job.job_title.toLowerCase().includes(req.query.q) || job.name.toLowerCase().includes(req.query.q)
    }
  ) : jobs
  
  results.forEach(job => totalJobs = totalJobs + job.items.length);

  // @todo: implement automated tests

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()))

  res.json({jobs: results, totalJobs: totalJobs})
}
