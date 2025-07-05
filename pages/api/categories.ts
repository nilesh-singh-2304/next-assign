export default function handler(req, res) {
  res.status(200).json([
    { name: "History", slug: "history", icon: "/images/history.png" },
    { name: "Science", slug: "science", icon: "/images/science.png" },
    { name: "Math", slug: "math", icon: "/images/math.png" },
    { name: "Programming", slug: "programming", icon: "/images/programming.png" }
  ]);
}
