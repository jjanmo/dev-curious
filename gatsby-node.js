const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Import Post Template Component
  const PostTemplateComponent = path.resolve('./src/templates/post_template.tsx')

  // Get All Markdown File For Paging
  const queryAllMarkdownData = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  if (queryAllMarkdownData.errors) {
    reporter.panicOnBuild(`Error while running query`)
    return
  }

  // Page Generating Function
  const generatePostPage = ({
    node: {
      fields: { slug },
    },
  }) => {
    console.log('🙏', slug)
    const pageOptions = {
      path: `post${slug}`,
      component: PostTemplateComponent,
      context: { slug },
    }

    createPage(pageOptions)
  }

  // Generate Post Page And Passing Slug Props for Query
  queryAllMarkdownData.data.allMarkdownRemark.edges.forEach(generatePostPage)
}

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {}

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        constants: path.resolve(__dirname, 'src/constants'),
        assets: path.resolve(__dirname, 'src/assets'),
        styles: path.resolve(__dirname, 'src/styles'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        types: path.resolve(__dirname, 'src/types'),
        utils: path.resolve(__dirname, 'src/utils'),
        contexts: path.resolve(__dirname, 'src/contexts'),
      },
    },
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })

    createNodeField({ node, name: 'slug', value: slug })
  }
}
