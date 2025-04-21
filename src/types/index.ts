export interface Feature {
  title: string;
  description: string;
  items: string[];
}

export interface TabContent {
  title: string;
  description: string;
  icon: JSX.Element;
  bulletPoints: string[];
}