// src/types/heroTypes.ts

export interface Button {
  button_title: string;
  button_url: string;
}

export interface HeroSection {
  banner_title: string;
  banner_description: string;
  button_1?: Button;
  button_2?: Button;
  banner_left_block?: {
    title: string;
    list_item: Array<{ item_title: string; item_icon: string }>;
  };
  banner_right_block?: {
    title: string;
    image: string;
  };
}
