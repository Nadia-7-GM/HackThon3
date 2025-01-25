import { useState, useEffect } from 'react'
import { client } from '../lib/sanity'

interface Category {
  _id: string
  title: string
}

interface CategoryFilterProps {
  onCategoryChange: (categoryId: string) => void
}

export default function CategoryFilter({ onCategoryChange }: CategoryFilterProps) {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    async function fetchCategories() {
      const result = await client.fetch(`*[_type == "categories"]{_id, title}`)
      setCategories(result)
    }
    fetchCategories()
  }, [])

  return (
    <div className="mb-4">
      <select
        onChange={(e) => onCategoryChange(e.target.value)}
        className="border rounded px-2 py-1"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.title}
          </option>
        ))}
      </select>
    </div>
  )
}

