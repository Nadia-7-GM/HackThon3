import { NextResponse } from 'next/server'
import { client } from '../../../../lib/sanity'

const productsQuery = `*[_type == "product"]`

export async function GET() {
  const products = await client.fetch(productsQuery)
  return NextResponse.json(products)
}

