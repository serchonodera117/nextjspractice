"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";


function UsersPage({userResp}){
    const router = useRouter();
    return(
        <div>
            <h1>Users page</h1>
            <ul className="list-group">
            {
                userResp.map((user) =>(
                    <li key={user.id} className="list-group-item d-flex 
                    justify-content-between align-items-center
                    list-group-item-action" onClick={() =>{
                        router.push(`/users/${user.id}`)
                    }}>
                        <div>
                            <h3>{user.id} {user.first_name} {user.last_name}</h3>
                            <p>{user.email}</p>
                        </div>
                        <img src= {user.avatar} style={{borderRadius:"50%"}} alt={user.email}></img> 
                    </li>
                ))
            }
            </ul>
        </div>
    )
}

export default UsersPage