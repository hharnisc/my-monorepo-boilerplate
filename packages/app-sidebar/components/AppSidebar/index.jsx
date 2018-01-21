import React from 'react'
import {
  Link,
  List,
  ListItem,
  Text,
  Image,
} from 'my-component-library-boilerplate';

const menuItems = [
  {
    name: 'Packages',
    href: '/packages',
  },
  {
    name: 'Settings',
    href: '/settings',
  },
];

const Loading = () => <Text>Loading...</Text>;

const Profile = ({ profile }) =>
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <Image
      src={profile.image}
      height={'2rem'}
      width={'2rem'}
    />
    <div
      style={{
        flexGrow: 1,
        paddingLeft: '1rem',
      }}
    >
      <Text>{profile.name}</Text>
    </div>
  </div>;

export default ({
  loading,
  profile,
}) =>
  <nav
    style={{
      height: '100%',
      width: '100%',
      padding: '1rem',
      background: '#F2F2F2',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Text size={2}>My Monorepo App</Text>
    <div
      style={{
        flexGrow: 1,
      }}
    >
      <List
        items={menuItems.map((item) =>
          <Link
            href={item.href}
            unstyled
          >
            <div
              style={{
                paddingTop: '1rem',
              }}
            >
              <Text size={1.5}>
                {item.name}
              </Text>
            </div>
          </Link>)}
      />
    </div>
    {loading ? <Loading /> : <Profile profile={profile} />}
  </nav>
