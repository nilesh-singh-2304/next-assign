const quizzesByCategory = {
  history: [
    { id: 'hist-1', title: 'World War II Basics' },
    { id: 'hist-2', title: 'Ancient Civilizations' },
    { id: 'hist-3', title: 'Indian Freedom Struggle' }
  ],
  science: [
    { id: 'sci-1', title: 'Basic Physics' },
    { id: 'sci-2', title: 'Biology Facts' },
    { id: 'sci-3', title: 'Space & Universe' }
  ],
  math: [
    { id: 'math-1', title: 'Algebra Essentials' },
    { id: 'math-2', title: 'Quick Arithmetic' },
    { id: 'math-3', title: 'Geometry Mastery' }
  ],
  programming: [
    { id: 'prog-1', title: 'JavaScript Basics' },
    { id: 'prog-2', title: 'Python Essentials' },
    { id: 'prog-3', title: 'Data Structures' }
  ]
};

export default function handler(req, res) {
  const { category } = req.query;
  const quizzes = quizzesByCategory[category.toLowerCase()] || [];
  res.status(200).json(quizzes);
}
