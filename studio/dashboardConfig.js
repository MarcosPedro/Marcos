export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ed99f3b4873ef3726c25cac',
                  title: 'Sanity Studio',
                  name: 'Marcos-studio',
                  apiId: '40e99985-fcd8-4f6a-a744-eaa61c600746'
                },
                {
                  buildHookId: '5ed99f3b34a8cd0cd36192c4',
                  title: 'Landing pages Website',
                  name: 'Marcos-web',
                  apiId: 'fe5174cb-6982-4bea-8a4b-d5be0786b979'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MarcosPedro/Marcos',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://Marcos-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
