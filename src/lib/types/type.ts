type IconProps = {
  className?: string
}
type NodeType<T> = {
  node: T;
};


type EdgeType<T> = {
  edges: NodeType<T>[];
};


type ProductImage = {
  id: string;
  url: string;
  altText?: string | null;
};

type VariantType = {
  id: string;
  title: string;
  availableForSale: boolean;
  price: {
    amount: string;
    currencyCode: string;
  };
  quantityAvailable: number;
  sku: string;
};

type ProductsDetailsType = {
  id: string;
  title: string;
  description?: string;
  handle?: string;
  vendor?: string;
  images?: EdgeType<ProductImage>;
  variants?: EdgeType<VariantType>;
  featuredImage: {
    url: string,
    altText:string
  }
};


type ProductActionType = {
  id: string,
  title: string,
  price?: string,
  image?: string
}



type CartItemType = {
  id: string,
  title: string,
  quantity: number,
  price?: string,
  featuredImage?: {
    url: string
  }
}



export type {
  IconProps,
  ProductsDetailsType,
  ProductActionType,
  CartItemType
}
