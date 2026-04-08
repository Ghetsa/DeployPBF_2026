// pages/produk/[produk].tsx

import fetcher from "@/utils/swr/fetcher"
import { useRouter } from "next/router"
import useSWR from "swr"
import DetailProduk from "../../views/DetailProduct"
import { ProductType } from "@/types/Product.type"

const HalamanProduk = ({ product }: { product: ProductType }) => {

  return (
    <div>
      <DetailProduk products={product} />
    </div>
  )
}

export default HalamanProduk

//digunakan server-side rendering
export async function getServerSideProps({ params }: { params: { produk: string } }) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produk/${params?.produk}`);

    if (!res.ok) {
      return { notFound: true };
    }

    const response = await res.json();

    if (!response.data) {
      return { notFound: true };
    }

    return {
      props: {
        product: response.data,
      },
    };
  } catch (error) {
    console.error("ERROR DETAIL:", error);

    return { notFound: true };
  }
}

// digunakan static-site generation
// export async function getStaticPaths() {
//   const res = await fetch('http://localhost:3000/api/produk')
//   const response = await res.json()

//   const paths = response.data.map((product: ProductType) => ({
//     params: { produk: product.id }
//   }))
//   // console.log("Paths yang dihasilkan untuk produk:", paths); // Debugging: Tampilkan paths yang dihasilkan
//   return {
//     paths,
//     fallback: false
//   }
// }

// export async function getStaticProps({params}:{params:{produk:string}}) {
//   const res = await fetch(`http://localhost:3000/api/produk/${params?.produk}`)
//   // const respone: ProductType[] = await res.json()
//   const response: { data: ProductType } = await res.json()

//   // console.log("Data produk yang diambil dari API:", response)
//   return {
//     props: {
//       product: response.data,
//     }
//   }
// }
