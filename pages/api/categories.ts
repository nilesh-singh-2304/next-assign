export default function handler(req, res) {
  res.status(200).json([
    { name: "History", slug: "history", icon: "/hist.webp" },
    { name: "Science", slug: "science", icon: "/sci.jpg" },
    { name: "Math", slug: "math", icon: "/math.webp" },
    { name: "Programming", slug: "programming", icon: "/prog.webp" }
  ]);
}
