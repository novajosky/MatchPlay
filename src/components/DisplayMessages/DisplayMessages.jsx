import React from 'react'

export default function DisplayMessages({ posts }) {
  const titles = posts.map((p, index) => (
    <div key={index}>{p.title}</div>
  ))
  const messages = posts.map((p, index) => (
    <div key={index}>{p.content}</div>
  ))
  const photos = posts.map((p, index) => (
    <div key={index}>{p.photos}</div>
  ))
  return (
    <div>
      <div>Posts</div>
      <div>Photos: {}</div>
      <div>Title: {titles}</div>
      <div>Messages: {messages}</div>
    </div>
  )
}
