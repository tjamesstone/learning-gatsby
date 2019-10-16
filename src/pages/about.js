import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"

const AboutPage = () => {
    return(
        <Layout>
            <SEO title='about'/>
                <div>
                    <h1>This is our About page</h1>
                    <p>Adding other pages is pretty simple</p>
                </div>
        </Layout>       
    )
}
export default AboutPage