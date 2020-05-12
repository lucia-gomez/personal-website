import React from "react"

import Layout from "../components/layout";
import Image404 from "../images/404-office.gif";

const NotFoundPage = () => (
  <Layout>
    <section id='section-404' className='bg-image'>
      <div style={{ margin: 'auto' }}>
        <h1>Error 404</h1>
        <img src={Image404} alt="the office cringe" />
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
