import DetailProduk from "../../views/DetailProduct"
import { ProductType } from "@/types/Product.type"

const HalamanProduk = ({ product }: { product: ProductType | null }) => {
  // ✅ Guard biar ga crash
  if (!product) {
    return <div>Produk tidak ditemukan</div>
  }

  return (
    <div>
      <DetailProduk products={product} />
    </div>
  )
}

export default HalamanProduk

// ✅ SSR yang aman (ANTI ERROR 500)
export async function getServerSideProps({ params }: { params: { produk: string } }) {
  try {
    // 🔒 Validasi params
    if (!params?.produk) {
      return { notFound: true }
    }

    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/produk/${params.produk}`)

    // 🔒 Cek response
    if (!res.ok) {
      return { notFound: true }
    }

    const response = await res.json()

    // 🔒 Cek data
    if (!response?.data) {
      return { notFound: true }
    }

    return {
      props: {
        product: response.data,
      },
    }
  } catch (error) {
    console.error("SSR ERROR:", error)

    return {
      notFound: true,
    }
  }
}