import React from "react";
import { NavLogin } from "../components/nav-home/NavLogin.js";
import { useAuth } from "../components/auth/UserAuth.js";
import CardsMisAvatars from "../components/avatars/CardsMisAvatars.js";
import '../components/avatars/misAvatars.css'

export default function Avatars()
{
 const {updateAvatar} = useAuth()

  return (
  <div>
     <NavLogin />
     <h1 className="mis-avatar-title">MIS AVATARS</h1>
     <CardsMisAvatars updateAvatar={updateAvatar}/>
  </div>
  )
}
