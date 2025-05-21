import { useState } from "react"

let FullName=()=>{
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [fullName,setFullName]=useState('');

    const handleSubmit=()=>{
        setFullName(`Full Name: ${firstName} ${lastName}`);
    };

return(
    <div>
        <h1>Full Name Display</h1>
        <p>First Name: <input value={firstName} onChange={(e)=>setFirstName(e.target.value)}/></p>
        <p>Last Name: <input value={lastName} onChange={(e)=>setLastName(e.target.value)}/></p>
        <button onClick={handleSubmit}>Submit</button>
        {fullName && <p>{fullName}</p>}
    </div>
)
}
export default FullName