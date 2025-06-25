import { products } from "../data/products";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "3rem", color: "#166534", margin: 0 }}>Dewiti Herbs</h1>
        <p style={{ fontSize: "1rem", color: "#4B5563" }}>Segar Bugar Bersama Dewiti 🍃</p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {products.map((p) => (
          <Link
            key={p.id}
            to={`/produk/${p.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                border: "1px solid #ccc",
                padding: "1rem",
                borderRadius: "8px",
                backgroundColor: "#fff",
                boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
              }}
            >
              <img
                src={p.image}
                alt={p.name}
                style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "6px" }}
              />
              <h3 style={{ fontSize: "1rem", marginTop: "0.5rem" }}>{p.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
