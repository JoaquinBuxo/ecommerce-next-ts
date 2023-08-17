export interface Product {
  id: number;
  brand_name: string;
  name: string;
  sku: string;
  small_image: {
    url: string;
  };
  url: string;
  original_price: number;
  final_price: number;
  percent_off: number;
  state: string | null;
}

export interface Aggregation {
  attribute_code: string;
  label: string;
  count: number;
  options: {
    label: string;
    value: string;
    count: number;
  }[];
}

export interface PageInfo {
  total_pages: number;
}

export interface ProductData {
  category: {
    name: string;
  };
  products: {
    items: Product[];
    aggregations: Aggregation[];
    page_info: PageInfo;
    total_count: number;
  };
}
