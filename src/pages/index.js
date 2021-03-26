import * as React from "react"
import {Page,TopSection,Slider,BottomSection} from "../components"

const IndexPage = () => {
  let fakeData = [
    {
      title:"Beyond Page Speed",
      subTitle:"Meet Hexometer, your AI sidekick that works 24/7 to catch problems before they affect your business.",
      text1:"Every day your website can face an increasing range of threats. Server  problems, slow landing pages, broken links, frustrating mobile experiences,  embarrassing spelling mistakes, changing SEO rules, 3rd party services  breaking, or security issues that put your business at risk.",
      text2:"To make matters worse, these issues can linger unnoticed, wasting your ad-budget and costing your business lost sales.",
      text3:"Hexometer monitors your website 24/7, to catch Availability, Performance, User experience, SEO, Health and Security problems, before they affect your customers.",
    },
    {
      title:'Trusted by 15,000+  businesses & compatible with over 100+ platforms',
      partnersLogos:[
        {photo: 'assets/images/partnersLogos/bg.png'},
        {photo: 'assets/images/partnersLogos/dr.png'},
        {photo: 'assets/images/partnersLogos/jm.png'},
        {photo: 'assets/images/partnersLogos/mg.png'},
        {photo: 'assets/images/partnersLogos/ps.png'},
        {photo: 'assets/images/partnersLogos/wc.png'},
        {photo: 'assets/images/partnersLogos/wp.png'},
        {photo: 'assets/images/partnersLogos/wx.png'},
      ]
    },
    {
      ratingsArr:[
        {
          logo:'assets/images/logo.svg',
          rate:'4.8'
        },
        {
          logo:'assets/images/logo.svg',
          rate:'5'
        },
        {
          logo:'assets/images/logo.svg',
          rate:'4.5'
        },
        {
          logo:'assets/images/logo.svg',
          rate:'4.9'
        }
      ],
      comments:[
        {
          comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          avatar:'assets/images/avatar.jpg',
          role:'Content Manager',
          companyLogo:'assets/images/logo.svg'
        },
        {
          comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          avatar:'assets/images/avatar.jpg',
          role:'SEO Specialist',
          companyLogo:'assets/images/logo.svg'
        },
        {
          comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          avatar:'assets/images/avatar.jpg',
          role:'Marketing Manager',
          companyLogo:'assets/images/logo.svg'
        }
      ]
    }
  ]

  return(
    <Page className='main-page'>
      <TopSection 
        title={fakeData[0].title}
        subtitle={fakeData[0].subTitle}
        text1={fakeData[0].text1}
        text2={fakeData[0].text2}
        text3={fakeData[0].text3}
        />
        <Slider 
          sliderTitle={fakeData[1].title}
          partnersArr={fakeData[1].partnersLogos}
        />
        <BottomSection ratingsArr={fakeData[2].ratingsArr} comments={fakeData[2].comments}/>
    </Page>
  )
}


export default IndexPage
