import db from "../_db.json" with { type: "json" };

export default function handler(req, res) {
  const { category } = req.query;
  const data = category
    ? db.products.filter((p) => p.category === category)
    : db.products;
  res.status(200).json(data);
}
