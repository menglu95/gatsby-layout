import React from "react"

export default function Layout({ children }) {
  return (
    <div
      style={{
        margin: `auto`,
        maxWidth: 650,
        padding: `0 1rem`,
        backgroundColor: `yellow`,
        border: `3px solid red`,
      }}
    >
      {children}
    </div>
  )
}
