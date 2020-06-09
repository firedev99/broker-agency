const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const results = await graphql(`
    {
        items: allDataJson {
          nodes {
            category
            slug
          }
        }
      }    
    `)

    results.data.items.nodes.forEach(item => {
        createPage({
            path: `/${item.category}/${item.slug}`,
            component: path.resolve("./src/templates/item-template.js"),
            context: {
                slug: item.slug,
                category: item.category,
            }, 
        })
    })
}