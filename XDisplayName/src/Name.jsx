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

        <form onSubmit={handleSubmit}>

        <p>First Name: <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required/></p>
        <p>Last Name: <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} required/></p>

        <button type="submit">Submit</button>
        </form>
        {fullName && <p>{fullName}</p>}
    </div>
)
}
export default FullName