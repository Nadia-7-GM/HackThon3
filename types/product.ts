

export interface Product {
  imageUrl: string
  _id: string
  title: string
  price: number
  priceWithoutDiscount?: number
  badge?: string
  image: {
    asset: {
      url: string
    }
  }
  category: {
    _id: string
    title: string
  }
  description: string
  inventory: number
  tags: string[]
}

