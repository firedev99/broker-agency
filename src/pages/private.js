import React from 'react'
import Layout from '../components/layout'
//components
import PrivateIntro from '../components/privateIntro'
import PrivateItems from '../components/privateItems'

const Private = () => {
    return (
        <Layout>
           <PrivateIntro />
           <PrivateItems />
        </Layout>
    )
}

export default Private
