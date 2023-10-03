import React from "react";
import Users from '../components/users'

async function getUsers(){
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data
}

async function IndexPage(props) {

  const users = await getUsers();
  return(
    <div>
      <div>Index Page</div>
      <Users userResp={users}/>
    </div>
  );
}

export default IndexPage;