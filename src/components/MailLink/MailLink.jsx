import React from 'react'
import { Card, Container } from "react-bootstrap"

export default function MailLink() {
  return (
    <>
    <h1>Contact Us</h1>
    <Container>
        <Card className="text-center" border="success" style={{ width: '85vw' }}>
            <h4>Have Any questions or an suggestions? </h4>
            <div className="link-button">
              <a href={"mailto:MikeNovajosky@gmail.com"}>Click Here to send me a message!</a>
            </div>
        </Card>
    </Container>
    </>
  )
}
