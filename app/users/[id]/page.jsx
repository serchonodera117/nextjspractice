import React from "react";
import { useParams } from "next/navigation";


async function getSingleUser(id){
    const response = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await response.json();
    return data.data;
}

async function anyUser({params}){
    const user = await getSingleUser(params.id);
    return (
        <div>
            <h1>User Details</h1>
            <div className="row">
                <div className="col-md-6 ofset-md3">
                    <div className="card">
                        <div className="card-header text-center">
                            <img src={user.avatar} alt={user.email}/>
                        </div>
                        <div className="card-body text-center">
                            <h3>{user.first_name} {user.last_name}</h3>
                            <h5>{user.id}</h5>
                            <h5>{user.email}</h5>
                        </div>
                    </div>
                    <br></br>
                </div>
            </div>
        </div>
    )
}

export default anyUser;