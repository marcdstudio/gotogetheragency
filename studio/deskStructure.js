import S from '@sanity/desk-tool/structure-builder'
import React from 'react'
import Emoji from 'react-emoji-render'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .icon(() => <Emoji style={{ fontSize: 24 }} text="📄" />)
        .child(
          S.list()
            .title('All Pages')
            .items([
              S.listItem()
                .title('Home')
                .icon(() => <Emoji style={{ fontSize: 24 }} text="🏠" />)
                .child(
                  S.editor()
                    .title('Config')
                    .schemaType('home')
                    .documentId('home'),
                ),
              S.listItem()
                .title('Work')
                .icon(() => <Emoji style={{ fontSize: 24 }} text="💼" />)
                .child(
                  S.editor()
                    .title('Featured Projects')
                    .schemaType('work')
                    .documentId('work'),
                ),
              S.listItem()
                .title('About')
                .icon(() => <Emoji style={{ fontSize: 24 }} text="👋" />)
                .child(
                  S.editor()
                    .title('About')
                    .schemaType('about')
                    .documentId('about'),
                ),
              S.listItem()
                .title('Blog')
                .icon(() => <Emoji style={{ fontSize: 24 }} text="📓" />)
                .child(
                  S.list()
                    .title('Blog Content')
                    .items([
                      S.listItem()
                        .title('Blog Collection')
                        .icon(() => <Emoji style={{ fontSize: 24 }} text="🗞" />)
                        .child(
                          S.documentTypeList('blog').title('Blog Collection'),
                        ),
                      S.listItem()
                        .title('Articles')
                        .icon(() => <Emoji style={{ fontSize: 24 }} text="🖋" />)
                        .child(
                          S.documentTypeList('article').title('All Articles'),
                        ),
                      S.listItem()
                        .title('Tags')
                        .icon(() => <Emoji style={{ fontSize: 24 }} text="🏷" />)
                        .child(S.documentTypeList('tag').title('Tag List')),
                    ]),
                ),
              S.listItem()
                .title('Projects')
                .icon(() => <Emoji style={{ fontSize: 24 }} text="🎨" />)
                .child(
                  S.documentList()
                    .title('All Projects')
                    .filter('_type == "project" '),
                ),
              S.listItem()
                .title('Contact')
                .icon(() => <Emoji style={{ fontSize: 24 }} text="🎤" />)
                .child(
                  S.editor()
                    .title('Contact')
                    .schemaType('contact')
                    .documentId('contact'),
                ),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title('Footer')
        .icon(() => <Emoji style={{ fontSize: 24 }} text="👟" />)
        .child(
          S.editor()
            .title('Config')
            .schemaType('footer')
            .documentId('footer'),
        ),
      S.listItem()
        .title('Config')
        .icon(() => <Emoji style={{ fontSize: 24 }} text="🌎" />)
        .child(
          S.editor()
            .title('Config')
            .schemaType('config')
            .documentId('config'),
        ),
    ])
