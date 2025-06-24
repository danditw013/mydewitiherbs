import { products } from "../data/products";
import { Link } from "react-router-dom";

export default function Home() {
  return (
   <main style={{ padding: "2rem" }}>
    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
    <h1 style={{ fontSize: "4rem", color: "#166534", margin: 0 }}>Dewiti Herbs</h1>
    <p style={{ fontSize: "1rem", color: "#4B5563" }}>Segar Bugar Bersama Dewiti 🍃</p>
    </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "3rem" }}>
        {products.map((p) => (
          <Link key={p.id} to={`/produk/${p.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}>
              <img src={p.image} alt={p.name} width="100%" />
              <h3>{p.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
