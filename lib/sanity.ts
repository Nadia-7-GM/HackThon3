import { createClient } from "next-sanity"

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-19",
  useCdn: true,
})

export const getProducts = async () => {
  const products = await client.fetch(`*[_type == "products"]{
    _id,
    title,
    price,
    priceWithoutDiscount,
    badge,
    "imageUrl": image.asset->url,
    category->{
      _id,
      title
    },
    description,
    inventory,
    tags
  }`)
  return products
}

export const getProduct = async (id: string) => {
  const product = await client.fetch(
    `*[_type == "products" && _id == $id][0]{
    _id,
    title,
    price,
    priceWithoutDiscount,
    badge,
    "imageUrl": image.asset->url,
    category->{
      _id,
      title
    },
    description,
    inventory,
    tags
  }`,
    { id },
  )
  return product
}

export const getFeaturedProducts = async () => {
  const products = await client.fetch(`*[_type == "products" && "featured" in tags][0...5]{
    _id,
    title,
    price,
    "imageUrl": image.asset->url
  }`)
  return products
}

