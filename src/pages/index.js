import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import LeftSider from "../components/leftSider"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div>
      <Header>I'm Header</Header>
      <Layout>
        <h1 style={{ marginTop: `0rem` }}>
          Hi! I'm building a fake Gatsby site as part of a tutorial!
        </h1>
        <LeftSider>leftside content</LeftSider>
        <p>
          What do I like to do? Lots of course but definitely enjoy building
          websites.
        </p>
      </Layout>
      <Footer>
        <p>This is Footer content.</p>
      </Footer>
    </div>
  )
}
