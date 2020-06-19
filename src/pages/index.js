import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import LeftSider from "../components/leftSider"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div>
      <Header>Here is Header content.</Header>
      <Layout>
        <h1 style={{ marginTop: `0rem` }}>
          Hi! I'm building a fake Gatsby site as part of a tutorial!
        </h1>
        <LeftSider>Here is Leftside content</LeftSider>
        <p style={{ width: `70%` }}>
          What do I like to do? Lots of course but definitely enjoy building
          websites.
        </p>
      </Layout>
      <Footer>
        <p>Here is Footer content.</p>
      </Footer>
    </div>
  )
}
