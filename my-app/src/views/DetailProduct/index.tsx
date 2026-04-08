// jobsheet-19/my-app/src/views/DetailProduct/index.tsx

import { ProductType } from "../../types/Product.type"
import styles from "../DetailProduct/detailProduct.module.scss"

const DetailProduk = ({ products }: { products: ProductType }) => {
  return (
    <>
      <h1 data-testid="title" className={styles.title}>
        Detail Produk
      </h1>

      <div className={styles.produkdetail}>
        <div className={styles.produkdetail__image}>
          <img
            data-testid="product-image"
            src={products?.image || ""}
            alt={products?.name || "product"}
          />
        </div>

        <div className={styles.produkdetail__info}>
          <h1 className={styles.produkdetail__name}>
            {products?.name}
          </h1>

          <p className={styles.produkdetail__category}>
            {products?.category}
          </p>

          <p className={styles.produkdetail__price}>
            Rp {products?.price?.toLocaleString("id-ID")}
          </p>

          <button className={styles.produkdetail__button}>
            Beli Sekarang
          </button>
        </div>
      </div>
    </>
  )
}

export default DetailProduk