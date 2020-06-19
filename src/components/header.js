import React from "react"
import { Link } from "gatsby"
import ListLink from "./listLink"
import styles from "./common.module.css"

export default function Header({ children }) {
  console.log({ children })
  return (
    <div className={styles.header}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link
          to="/"
          style={{
            textShadow: `none`,
            backgroundImage: `none`,
          }}
        >
          <h3 style={{ display: `inline` }}>My sweet site!!!</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}
