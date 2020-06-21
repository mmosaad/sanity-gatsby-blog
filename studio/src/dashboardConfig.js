export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eefaee751dfb939b0b4da0b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-e7bmzdnv',
                  apiId: 'b5aa017d-7038-499d-bb1b-19541ec2c5ec'
                },
                {
                  buildHookId: '5eefaee7e9fafe4fa89068b7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-79mw3xgf',
                  apiId: '429c301a-fcbb-431b-8ffb-d886eaed68f0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mmosaad/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-79mw3xgf.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
