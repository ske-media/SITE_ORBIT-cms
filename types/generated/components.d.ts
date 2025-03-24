import type { Schema, Struct } from '@strapi/strapi';

export interface GlobalSeo extends Struct.ComponentSchema {
  collectionName: 'components_global_seos';
  info: {
    displayName: 'SEO';
    icon: 'earth';
  };
  attributes: {
    meta_description: Schema.Attribute.Text;
    meta_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    meta_title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'global.seo': GlobalSeo;
    }
  }
}
