// types/footer.ts

export interface ChildItem {
  ID: number;
  title: string;
  url: string;
}

export interface MenuItem {
  ID: number;
  title: string;
  child_items?: ChildItem[];
}

export interface FooterMenu {
  items: MenuItem[];
}
