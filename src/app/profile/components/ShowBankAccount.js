"use client"
import { useContext, useState } from "react";
// import { DataContext } from "../core/context/DataContext"
// import FormComponent from "./FormComponent";

const ShowBankAccount = () => {
// const { userData } = useContext(DataContext);
// const [isEditing, setIsEditing] = useState(false);

return (
<div className="p-4 border rounded-md">
{isEditing ? (
{/* <FormComponent setIsEditing={setIsEditing} /> */}
) : (
<div>
<h2 className="text-lg font-bold">User Info</h2>
<p><strong>Name:</strong> {userData.name}</p>
<p><strong>Email:</strong> {userData.email}</p>
<p><strong>Phone:</strong> {userData.phone}</p>

<button
className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
onClick={() => setIsEditing(true)}
>
Edit
</button>
</div>
)}
</div>
);
};

export default ShowBankAccount;
