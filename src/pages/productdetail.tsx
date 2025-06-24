import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <div>Produk tidak ditemukan.</div>;

  return (
    <main style={{ padding: "2rem" }}>
      <Link to="/">← Kembali ke Beranda</Link>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} width="300" />
      <p>{product.description}</p>
      <div style={{ marginTop: "1rem" }}>
        <a href={product.whatsapp}>💬 WhatsApp</a> |{" "}
        <a href={product.shopee}>🛍 Shopee</a> |{" "}
        <a href={product.tokopedia}>🛒 Tokopedia</a>
      </div>
    </main>
  );
}
