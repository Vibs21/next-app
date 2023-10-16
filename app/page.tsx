import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <div>
        <Link href="/users">Users</Link> 
        <Link href="/users/new">New Users</Link> 
        <ProductCard/>
      </div>
    </main>
  )
}
