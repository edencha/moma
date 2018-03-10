import React from 'react'
// import config from 'config.js'

const Layout = ({ children, ...props }) => {
  return (
    <div>
      <header>this is header area</header>
      <div>
        {children}
      </div>
      <footer>this is footer area</footer>
    </div>
  )
}

export default Layout
