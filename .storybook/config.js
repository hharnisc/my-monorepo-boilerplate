import { configure } from '@storybook/react'

// __PACKAGES__ is defined via plugin in ./webpack.config.js
// because require.context needs static values. This allows us to use
// an environment variable to narrow the scope of the packages loaded
const req = require.context(__PACKAGES__, true, /components\/.*\/story\.jsx$/)
const loadStories = () => req.keys().forEach(req)
configure(loadStories, module)
