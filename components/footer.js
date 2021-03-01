export default function Footer({ fixed }) {
    return (

        <div class="absolute bottom-0 left-0 right-0">
            <div class="px-4 grid grid-cols-4 gap-4 bg-white mt-4 bottom-0">
                <div class="col-span-2 p-4">
                    <h3 class="text-xl font-semibold mb-2">About us</h3>
                    <p class="text-sm">
                        We are a team of nurses, docrors, technologists and executives dedicated to help nurses find jobs that they love.</p>
                    <p class="text-sm mt-1">All copyrights resereved &#169; 2020 - Health Explore</p>
                </div>
                <div class="col-span-1 p-4">
                    <h3 class="text-xl font-semibold mb-2">Sitemap</h3>
                    <ul class="list-none text-sm">
                        <li>Nurses</li>
                        <li>Employers</li>
                        <li>Social networking</li>
                        <li>Jobs</li>
                    </ul>
                </div>
                <div class="col-span-1 p-4">
                    <h3 class="text-xl font-semibold mb-2">Privacy</h3>
                    <ul class="list-none text-sm">
                        <li>Terms of use</li>
                        <li>Privacy policy</li>
                        <li>Cookie policy</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}