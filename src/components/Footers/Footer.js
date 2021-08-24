import React from 'react'
import PageContainer from '../global/PageContainer/PageContainer'
import classes from "./Footer.module.scss"
import FooterNavigation from './FooterNavigation/FooterNavigation'
import FooterNewsletter from './FooterNewsletter.js/FooterNewsletter'

const Footer = (props) => {
  return (
    <nav className={classes.Footer}>
      <PageContainer>
        <FooterNewsletter/>
        <FooterNavigation/>
      </PageContainer>
    </nav>
  )
}