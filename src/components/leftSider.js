import React from "react"

export default function LeftSider({ children }) {
  return (
    <div
      style={{
        width: `30%`,
        position: `relative`,
        float: `left`,
        border: `3px solid red`,
      }}
    >
      <h4 style={{ marginTop: `0rem`, marginBottom: `0rem` }}>I'm leftside.</h4>
      {children}
    </div>
  )
}
