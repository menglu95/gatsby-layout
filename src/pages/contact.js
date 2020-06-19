import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Contact() {
  return (
    <div>
      <Header>Here is Header content.</Header>
      <Layout>
        <h1>I'd love to talk! Email me at the address below</h1>
        <p>
          <a href="mailto:me@example.com">me@example.com</a>
        </p>
      </Layout>
      <Footer>
        <p>Here is Footer content.</p>
      </Footer>
    </div>
  )
}
