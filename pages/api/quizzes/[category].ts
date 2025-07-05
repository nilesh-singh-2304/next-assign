const data = {
  history: [{ id: "1", title: "World War Quiz" }],
  programming: [{ id: "4", title: "JavaScript Basics" }]
};
export default function handler(req, res) {
  const { category } = req.query;
  res.status(200).json(data[category] || []);
}
