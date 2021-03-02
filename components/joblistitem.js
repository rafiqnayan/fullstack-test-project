export default function JobItem({companyName, jobCount}) {
    const shortenName = (nameString) => {
        const namePartFirstLetters = []
        nameString.split(' ').forEach(x => {
            namePartFirstLetters.push(x.charAt(0))
        })
        return namePartFirstLetters.splice(0, 2).join('');
    }

    return (
        <li className="my-6">
            <span className="bg-gray-400 uppercase p-2 rounded-lg text-white mr-2 text-lg"> {shortenName(companyName)}</span> {jobCount} jobs for {companyName}
        </li>
    )
}