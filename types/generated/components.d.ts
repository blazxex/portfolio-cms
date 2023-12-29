import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogComponentBlog extends Schema.Component {
  collectionName: 'components_blog_component_blogs';
  info: {
    displayName: 'Blog';
    icon: 'bulletList';
  };
  attributes: {
    Title: Attribute.String;
    thumbnail: Attribute.Media & Attribute.Required;
    body: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    slideShow: Attribute.Media;
    date: Attribute.Date & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog-component.blog': BlogComponentBlog;
    }
  }
}
