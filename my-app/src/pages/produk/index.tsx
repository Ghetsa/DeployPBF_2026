// jobsheet-19/my-app/src/pages/produk/index.tsx

import { useEffect, useState } from "react"
// import TampilanProduk from "../../views/produk"
import useSWR from "swr"
import fetcher from "../../utils/swr/fetcher"
import { useRouter } from "next/navigation"
import dynamic from "next/dynamic"

const TampilanProduk = dynamic(() => import("../../views/produk"), {
  loading: () => <p>Loading produk...</p>,
})

// const fetcher = (url: string) => fetch(url).then((res) => res.json())
const kategori = () => {
  const { push } = useRouter()
  const [products, setProducts] = useState([])

  const { data, error, isLoading } = useSWR("/api/produk", fetcher)

  return (
    <div>
      <h1 data-testid="title">Product Page</h1>
      <TampilanProduk products={isLoading ? [] : data?.data} />
    </div>
  )
}

export default kategori