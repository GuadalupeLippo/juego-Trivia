import React from "react";
import { NavLoguin } from "../components/nav-home/NavLoguin";
import { useAuth } from "../components/form-loguin/UserAuth.js";
import CardsMisAvatars from "../components/avatars/CardsMisAvatars.js";
import '../components/avatars/misAvatars.css'

export default function Avatars()
{
 const {updateAvatar} = useAuth()

  return (
  <div>
     <NavLoguin />
     <h1 className="mis-avatar-title">MIS AVATARS</h1>
     <CardsMisAvatars updateAvatar={updateAvatar}/>
  </div>
  )
}
