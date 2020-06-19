import React from "react"
import styles from "./common.module.css"
import ListLink from "./listLink"

export default function Layout({ children }) {
  console.log({ children })
  return (
    <div className={styles.footer}>
      <footer>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </footer>
      {children}
    </div>
  )
}
