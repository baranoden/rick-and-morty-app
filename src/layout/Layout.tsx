import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = (): JSX.Element => {
  return (
    <Box>
      <Outlet />
    </Box>
  )
}

export default Layout
