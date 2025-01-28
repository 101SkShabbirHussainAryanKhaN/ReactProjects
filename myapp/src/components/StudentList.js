const Student = (props)=>{
    return(
        <>
        {/* <li>{props.detail.name} {props.detail.email}</li> */}
        <tr>
            <td> {props.detail.id} </td>
            <td> {props.detail.name} </td>
            <td> {props.detail.email} </td>
        </tr>
        </>
    );

}
const StudentList = ()=>{
    const Students = [
        {
            id : 1,
            name : "SK",
            email : "sk@gamil.com"
        },
        {
            id : 2,
            name : "Shabbir",
            email : "shabbir@gamil.com"
        },
        {
            id : 3,
            name : "Hussain",
            email : "hussain@gamil.com"
        }
    ];
    return(
        <>
        <h1>Student List</h1>
        {/* <li>{Students[0]}</li>
        <li>{Students[1]}</li>
        <li>{Students[2]}</li>
        <li>{Students[3]}</li>
        <li>{Students[4]}</li> */}
        {/* <li> {Students.map((data) => <Student key={data.id} detail={data}/>)}</li> */}
        <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email </th>
                </tr>
                </thead>
                <tbody>
                {Students.map((data) => <Student key={data.id} detail={data}/>)}
                </tbody>
            
        </table>
        </>
    );
}
export default StudentList;