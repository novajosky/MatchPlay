import React from 'react'
import { Card } from "react-bootstrap"

export default function MailLink() {
  return (
    <>
    <h1>Contact Us</h1>
    <Card>
        <h4>Have Any questions or an suggestions? </h4>
        <a href={"mailto:MikeNovajosky@gmail.com"}>Click Here to send me a message!</a>
    </Card>
    </>
  )
}
