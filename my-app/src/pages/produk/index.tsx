// jobsheet-19/my-app/src/pages/produk/index.tsx

import useSWR from "swr"
import fetcher from "../../utils/swr/fetcher"
import TampilanProduk from "../../views/produk"

const ProdukPage = () => {
  const { data, error, isLoading } = useSWR("/api/produk", fetcher)

  if (error) {
    return <div>Gagal memuat data</div>
  }

  return (
    <div>
      <TampilanProduk products={isLoading ? [] : data?.data || []} />
    </div>
  )
}

export default ProdukPage