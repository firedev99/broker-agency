import React from 'react'
import Layout from '../components/layout'
import {Router} from '@reach/router'
import '../styles/main.scss'
//components 
import Home from '../components/home'
import Private from './private'
import Business from './business'


const Index = () => {
  return (
    <Layout>
      <Router>
        <Home path="/" />
        <Private path="/private/" />
        <Business path="/business/" />
      </Router>
    </Layout>
  )
}

export default Index
