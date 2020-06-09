import React from 'react'
import Layout from '../components/layout'
import {Router} from '@reach/router'
import '../styles/main.scss'
import { Helmet } from 'react-helmet'
//components 
import Home from '../components/home'
import Private from './private'
import Business from './business'

const routes = [
  { path: "/", name: "AXIO GROUP", Component: Home },
  { path: "/private/", name: "AXIO GROUP", Component: Private },
  { path: "/business/", name: "AXIO GROUP", Component: Business }
]

const TITLE = "AXIO GROUP"


const Index = () => {
  return (
    <>
      <Helmet>
        <title> {TITLE} </title>
      </Helmet>
      <Layout>
        {routes.map(({ path, Component }) => (
          <Router>
            <Component key={path} path={path} />
          </Router>
        ))}
      </Layout>
    </>
  )
}

export default Index
