import React from 'react'
import { storiesOf } from '@storybook/react'
import AppSidebar from './index'

storiesOf('AppSidebar', module)
  .add('should render AppSidebar', () => (
    // AppSidebar fills the parent container
    // the parent container sets the size of the AppSidebar
    <div
      style={{
        width: '300px',
        height: '100%',
      }}
    >
      <AppSidebar
        profile={{
          name: 'Bobson Dugnutt',
          image: 'https://hharnisc.github.io/images/me3.jpg',
        }}
      />
    </div>
  ))
  .add('should render a loading AppSidebar', () => (
    // AppSidebar fills the parent container
    // the parent container sets the size of the AppSidebar
    <div
      style={{
        width: '300px',
        height: '100%',
      }}
    >
      <AppSidebar
        loading={true}
        profile={{
          name: 'Bobson Dugnutt',
          image: 'https://hharnisc.github.io/images/me3.jpg',
        }}
      />
    </div>
  ))
