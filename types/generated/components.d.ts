import type { Schema, Attribute } from '@strapi/strapi';

export interface MenRestaurant extends Schema.Component {
  collectionName: 'components_men_restaurants';
  info: {
    displayName: 'Restaurant';
    icon: 'emotionHappy';
  };
  attributes: {
    textField: Attribute.String;
  };
}

export interface ModuleModule extends Schema.Component {
  collectionName: 'components_module_modules';
  info: {
    displayName: 'Module';
  };
  attributes: {
    Media: Attribute.Media;
    name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'men.restaurant': MenRestaurant;
      'module.module': ModuleModule;
    }
  }
}
