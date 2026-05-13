import type { Schema, Struct } from '@strapi/strapi';

export interface GeneralButton extends Struct.ComponentSchema {
  collectionName: 'components_general_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    icon_position: Schema.Attribute.Enumeration<['hidden', 'left', 'right']> &
      Schema.Attribute.DefaultTo<'hidden'>;
    label: Schema.Attribute.String;
    target: Schema.Attribute.Enumeration<
      ['_blank', '_self', '_parent', '_top']
    > &
      Schema.Attribute.DefaultTo<'_blank'>;
    text: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'tertiary', 'link']
    > &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface GeneralLink extends Struct.ComponentSchema {
  collectionName: 'components_general_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String;
    target: Schema.Attribute.Enumeration<
      ['_blank', '_self', '_parent', '_top']
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'general.button': GeneralButton;
      'general.link': GeneralLink;
    }
  }
}
