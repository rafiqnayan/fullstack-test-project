export default function SortParam({paramName, paramKey, handleSort, sortOrder}) {
    let sortDirection = ""
    if(sortOrder === 1) {
        sortDirection = <>&darr;</>
    } else if(sortOrder === -1) {
        sortDirection = <>&uarr;</>
    }
    return (
        <div onClick={() => handleSort(paramKey)}>{sortDirection} {paramName}</div>
    )
}