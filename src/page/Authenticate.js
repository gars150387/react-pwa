import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useStytch, useStytchSession } from "@stytch/stytch-react"

export const Authenticate = () => {
    const client = useStytch()
    const session = useStytchSession()
    const navigate = useNavigate()

    useEffect(() => {
if(session){
    navigate("/account")
} else {
    const token = new URLSearchParams(window.location.search).get('token')

    client.magicLink.authenticate( token, {
        session_duration_minutes: 60
    }).then(() => {
        alert("Successfully authentcated!")
        navigate(0)
    })}
    },[client,session])
    
  return (
    <div>Loading...</div>
  )
}
