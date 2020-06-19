import React from "react"
import { Link } from "gatsby"
import styles from "./common.module.css"

export default function ListLink(props) {
  console.log(props.children)
  return (
    <li className={styles.listlink}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )
}
