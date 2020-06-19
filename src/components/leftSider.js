import React from "react"
import styles from "./common.module.css"

export default function LeftSider({ children }) {
  return (
    <div className={styles.leftsider}>
      <h4 style={{ marginTop: `0rem`, marginBottom: `0rem` }}>I'm leftside.</h4>
      {children}
    </div>
  )
}
