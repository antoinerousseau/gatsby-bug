/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages = async ({actions}) => {
  const {createPage} = actions
  const eventTemplate = path.resolve(`src/templates/event.js`)
  createPage({
    path: "/2019/10/26/test-event/",
    component: eventTemplate,
    context: {
      id: 666,
    },
  })
}

exports.onCreatePage = ({page, actions}) => {
  const {createPage} = actions

  // fallback for non-statically generated events:
  if (page.path === '/event/') {
    page.matchPath = '/:year/:month/:day/:slug'
    createPage(page) // update
    return
  }
}
