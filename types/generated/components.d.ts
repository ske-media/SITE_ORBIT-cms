import type { Schema, Struct } from '@strapi/strapi';

export interface GlobalKeyword extends Struct.ComponentSchema {
  collectionName: 'components_global_keywords';
  info: {
    displayName: 'Keyword';
    icon: 'bulletList';
  };
  attributes: {
    keyword: Schema.Attribute.String;
  };
}

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
      'global.keyword': GlobalKeyword;
      'global.seo': GlobalSeo;
    }
  }
}
