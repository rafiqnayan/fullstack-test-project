export default function Footer({ fixed }) {
    return (
        <div className="">
            <div className="px-4 grid grid-cols-4 gap-4 bg-white mt-4 bottom-0">
                <div className="col-span-2 p-4">
                    <h3 className="text-xl font-semibold mb-2">About us</h3>
                    <p className="text-sm">
                        We are a team of nurses, docrors, technologists and executives dedicated to help nurses find jobs that they love.</p>
                    <p className="text-sm mt-1">All copyrights resereved &#169; 2020 - Health Explore</p>
                </div>
                <div className="col-span-1 p-4">
                    <h3 className="text-xl font-semibold mb-2">Sitemap</h3>
                    <ul className="list-none text-sm">
                        <li>Nurses</li>
                        <li>Employers</li>
                        <li>Social networking</li>
                        <li>Jobs</li>
                    </ul>
                </div>
                <div className="col-span-1 p-4">
                    <h3 className="text-xl font-semibold mb-2">Privacy</h3>
                    <ul className="list-none text-sm">
                        <li>Terms of use</li>
                        <li>Privacy policy</li>
                        <li>Cookie policy</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}