export interface PageData {
  acf?: {
    page_component: PageComponent[];
    common_component: PageComponent[];
  };
}
export interface ImageProps {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}
export interface PageComponent {
  acf_fc_layout: string;
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
  author_name: string;
  author_designation: string;
  author_image: ImageProps;
  comments: string;
}
