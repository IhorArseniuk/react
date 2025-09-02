export type Dimensions = {
  width: number;
  height: number;
  depth: number;
}

export type Reviews = {
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}



export type  ProductModel = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: string[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: string[];
  images: string[];
  thumbnail: string;
}
export type ProductDummyType={
    products:ProductModel[];
    total:number,
    skip:number,
    limit:number,
}
