export interface PageData {
  acf?: {
    page_component: PageComponent[];
    common_component: PageComponent[];
  };
}
export interface ImageProps {
  url?: string;
  alt: string;
  width?: string | number;
  height?: string | number;
}
export interface ButtonProps {
  button_url: string;
  button_title: string;
}
export interface PageComponent {
  acf_fc_layout: string;
  sub_title?: string;
  title?: string;
  offer_text?: string;
  primary_button_title?: string;
  primary_button_url?: string;
  secondary_button_title?: string;
  secondary_button_url?: string;
  banner_image?: {
    url: string;
    alt: string;
  };
  banner_title?: string;
  banner_description?: string;
  button_1?: {
    button_title?: string;
    button_url?: string;
  };
  button_2?: {
    button_title: string;
    button_url: string;
  };
  banner_left_block?: {
    title: string;
    list_item: Array<{ item_title: string; item_icon: string }>;
  };
  banner_right_block?: {
    title: string;
    image: string;
  };
  section_title?: string;
  description?: string;
  features_list: featureListProps[];
  list_item: hostingSolutionProps[];
  section_image?: {
    url: string;
    alt: string;
  };
  block: MoneyBackProps[];
  faq_list_item: FaqProps[];
  tab: TabProps[];
  left_image?: {
    url: string;
    alt: string;
  };
  bottom_section_bock: DatacenterProps[];
  testimonial_block: testimonialProps[];
  section_sub_title?: string;
  button_url: string;
  button_title: string;
  featured_block?: FeaturedBlockListProps[];
  section?: Array<{
    id: string;
    banner_position?: {
      value: string;
      label?: string;
    };
    sub_title: string;
    title: string;
    description: string;
    banner_image: {
      url: string;
      alt: string;
    };
    button_title?: string;
    button_url?: string;
  }>;
  section_block: BlockProps[];
  banner_full?: string[] | undefined;
  image_group: ImageProps;
  image: AboutImageProps | undefined;
  list_item_block?: listItemDataProps[];
  map_image: ImageProps;
  add_block?: CounterCTAProps[] | undefined;
  about_sec_image_group?: AboutImageProps | undefined;
  about_section_block?: SectionBlockProps[];
  history: HistoryArrayProps[] | undefined;
  address_card: AddressCardProps | undefined;
  email_card: AddressCardProps | undefined;
  phone_card: AddressCardProps | undefined;
  timing_card: AddressCardProps | undefined;
  alternate_block?: alternateBlock[];
}

export interface featureListProps {
  id: number | string;
  is_featured: boolean;
  title: string;
  description: string;
  icon: string;
  page_url: string;
}

export interface hostingSolutionProps {
  id: number | string;
  title: string;
  description: string;
  icon?: string;
}

export interface MoneyBackProps {
  id: number | string;
  title: string;
  description: string;
  block_image: {
    url: string;
    alt: string;
  };
}

export interface FaqProps {
  id: number | string;
  question: string;
  answer: string;
}

export interface TabContentListProps {
  content_list: string;
  id: string;
}

export interface TabContentProps {
  title: string;
  content: string;
  image: ImageProps;
  tab_content_list: TabContentListProps[] | false;
}

export interface TabProps {
  tab_name: string;
  content: TabContentProps;
  id: string;
}

export interface DatacenterProps {
  id: number | string;
  title: string;
  content: string;
}

export interface testimonialProps {
  id: string | number;
  acf: acfTestimonial;
}
export interface acfTestimonial {
  testimonial_block: Testimonial_block;
}
export interface Testimonial_block {
  author_name: string;
  designation: string;
  author_image: ImageProps;
  comments: string;
}

export interface FeaturedBlockListProps {
  id: number | string;
  title: string;
  description: string;
  icon?: {
    url?: string;
    alt?: string;
  };
}
export interface BlockProps {
  id?: string | number;
  icon?: {
    url: string;
    alt: string;
  };
  title?: string;
  description?: string;
}
//About Page
export interface AboutImageProps {
  large_image?: ImageProps;
  small_image?: ImageProps;
}
export interface listItemDataProps {
  id: string;
  list_item: string;
}

export interface SectionBlockProps {
  id: string | number;
  title: string;
  image_group: string;
  description?: DescriptionArray[];
  icon?: ImageProps;
}

export interface DescriptionArray {
  id: string | number;
  paragraph: string;
}

export interface CounterCTAProps {
  id: number | string;
  title?: string;
  description?: string;
  icon: {
    url?: string;
    alt?: string;
  };
}

export interface HistoryArrayProps {
  id: string;
  year: string | number;
  title: string;
  description: string;
}
//Contact Page
export interface AddressCardProps {
  content?: string;
  more_content: string;
}
//Dedicated Hosting

export interface alternateBlock {
  id?: string;
  description?: string;
  title: string;
  banner_position: AlterBannerPosition;
  block_image?: ImageProps;
  compare_list_item?: compareListItem[];
}
export interface AlterBannerPosition {
  label?: string;
  value?: string;
}
export interface compareListItem {
  content?: string;
  icon: ImageProps;
  id: string;
}
