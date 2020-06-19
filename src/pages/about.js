import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"

export default function About() {
  return (
    <div>
      <Header>Here is Header content.</Header>
      <Layout>
        <h1>About me</h1>
        <p>
          I’m good enough, I’m smart enough, and gosh darn it, people like me!
        </p>
      </Layout>
      <Footer>
        <p>Here is Footer content.</p>
      </Footer>
    </div>
  )
}
