import db from "../_db.json" with { type: "json" };

export default function handler(req, res) {
  const product = db.products.find(
    (p) => String(p.id) === String(req.query.id)
  );
  if (!product) return res.status(404).json({ error: "Not found" });
  res.status(200).json(product);
}
