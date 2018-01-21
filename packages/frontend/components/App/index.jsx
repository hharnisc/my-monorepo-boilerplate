import React from 'react'
import AppSidebar from 'my-monorepo-boilerplate-app-sidebar'

export default () =>
  <div
    style={{
      display: 'flex',
      height: '100%',
    }}
  >
    <div
      style={{
        width: '20rem',
      }}
    >
      <AppSidebar />
    </div>
    <div
      style={{
        padding: '2rem',
      }}
    >
      <div>My Application</div>
    </div>
  </div>
