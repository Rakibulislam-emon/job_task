
import Container from '@/components/Container'
import Content from '@/components/Content/Content'
import Settings from '@/components/Settings/Settings'
import Sidebar from '@/components/sidebar/Sidebar'
// import MenuBar from '@/components/sidebar/SideNav'
// import { fetchData } from '@/db/lib/api'
import React from 'react'

export default async function Home() {

  return (
    <Container>
      <div className='lg:flex justify-between py-4 '>
        <Sidebar />
        {/* <MenuBar/> */}
        {/* main body with navbar */}
        <div className='w-full'>
          <Content />
        </div>
        {/* settings */}
        <Settings />
      </div>
    </Container>
  )
}
