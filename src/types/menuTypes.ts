// types/Menu.ts

export interface MainMenu {
  ID: number;
  title: string;
  slug: string;
  url: string;
  subItem?: ChildItem
}

export interface ChildItem {
  ID: number;
  title: string;
  url: string;
  slug?: string;
}

export interface MenuItem {
  ID: number;
  title: string;
  child_items?: ChildItem[];
}

export interface FooterMenu {
  items: MenuItem[];
}
