import React from "react"
import styles from "./common.module.css"

export default function Layout({ children }) {
  return <div className={styles.layout}>{children}</div>
}
