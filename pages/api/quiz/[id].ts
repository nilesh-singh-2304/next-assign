const quizData = {
  'hist-1': {
    title: 'World War II Basics',
    questions: [
      {
        question: 'Which year did World War II begin?',
        options: ['1939', '1941', '1935', '1945'],
        correct: '1939'
      },
      {
        question: 'Who was the British Prime Minister during WWII?',
        options: ['Churchill', 'Roosevelt', 'Hitler', 'Stalin'],
        correct: 'Churchill'
      },
      {
        question: 'What event triggered WWII?',
        options: ['Pearl Harbor', 'D-Day', 'Invasion of Poland', 'Battle of Britain'],
        correct: 'Invasion of Poland'
      }
    ]
  },
  'hist-2': {
    title: 'Ancient Civilizations',
    questions: [
      {
        question: 'Where did the Mesopotamian civilization flourish?',
        options: ['Nile Valley', 'Tigris-Euphrates', 'Indus Valley', 'Amazon Basin'],
        correct: 'Tigris-Euphrates'
      },
      {
        question: 'Who built the pyramids in Egypt?',
        options: ['Romans', 'Mayans', 'Pharaohs', 'Greeks'],
        correct: 'Pharaohs'
      },
      {
        question: 'What was the Roman Senate?',
        options: ['Military group', 'Religious order', 'Governing body', 'Trade guild'],
        correct: 'Governing body'
      }
    ]
  },
  'hist-3': {
    title: 'Indian Freedom Struggle',
    questions: [
      {
        question: 'Who started the Non-Cooperation Movement?',
        options: ['Bhagat Singh', 'Nehru', 'Gandhi', 'Patel'],
        correct: 'Gandhi'
      },
      {
        question: 'Which year was India declared independent?',
        options: ['1945', '1947', '1950', '1930'],
        correct: '1947'
      },
      {
        question: 'What was the Quit India Movement?',
        options: ['A war', 'A law', 'A protest against British rule', 'A tax reform'],
        correct: 'A protest against British rule'
      }
    ]
  },
  'sci-1': {
    title: 'Basic Physics',
    questions: [
      {
        question: 'Unit of force?',
        options: ['Watt', 'Joule', 'Newton', 'Pascal'],
        correct: 'Newton'
      },
      {
        question: 'Speed of light?',
        options: ['3x10^8 m/s', '1x10^6 m/s', '5x10^4 m/s', '1x10^9 m/s'],
        correct: '3x10^8 m/s'
      },
      {
        question: 'Gravity acts in which direction?',
        options: ['Upward', 'Downward', 'Sideways', 'No direction'],
        correct: 'Downward'
      }
    ]
  },
  'sci-2': {
    title: 'Biology Facts',
    questions: [
      {
        question: 'DNA is made up of?',
        options: ['Proteins', 'Amino acids', 'Nucleotides', 'Carbs'],
        correct: 'Nucleotides'
      },
      {
        question: 'Plant cell has?',
        options: ['No membrane', 'Cell wall', 'Nucleus only', 'Flagella'],
        correct: 'Cell wall'
      },
      {
        question: 'Heart pumps?',
        options: ['Oxygen', 'Blood', 'Air', 'Food'],
        correct: 'Blood'
      }
    ]
  },
  'sci-3': {
    title: 'Space & Universe',
    questions: [
      {
        question: 'Nearest star to Earth?',
        options: ['Sirius', 'Alpha Centauri', 'Sun', 'Polaris'],
        correct: 'Sun'
      },
      {
        question: 'Number of planets in our solar system?',
        options: ['7', '9', '8', '10'],
        correct: '8'
      },
      {
        question: 'Largest planet?',
        options: ['Earth', 'Saturn', 'Jupiter', 'Mars'],
        correct: 'Jupiter'
      }
    ]
  },
  'math-1': {
    title: 'Algebra Essentials',
    questions: [
      {
        question: 'Solve: x + 2 = 5',
        options: ['1', '3', '2', '5'],
        correct: '3'
      },
      {
        question: 'Expression: a² - b² = ?',
        options: ['a+b', '(a-b)(a+b)', 'a²+b²', 'None'],
        correct: '(a-b)(a+b)'
      },
      {
        question: 'x² = 49. What is x?',
        options: ['6', '7', '-7', '±7'],
        correct: '±7'
      }
    ]
  },
  'math-2': {
    title: 'Quick Arithmetic',
    questions: [
      {
        question: '12 + 25 = ?',
        options: ['35', '37', '40', '47'],
        correct: '37'
      },
      {
        question: '15 x 3 = ?',
        options: ['30', '45', '35', '50'],
        correct: '45'
      },
      {
        question: '100 ÷ 4 = ?',
        options: ['25', '20', '30', '15'],
        correct: '25'
      }
    ]
  },
  'math-3': {
    title: 'Geometry Mastery',
    questions: [
      {
        question: 'Angles of a triangle sum to?',
        options: ['360°', '90°', '180°', '270°'],
        correct: '180°'
      },
      {
        question: 'Area of circle = ?',
        options: ['πr²', '2πr', 'πd²', 'r²'],
        correct: 'πr²'
      },
      {
        question: 'Number of sides in hexagon?',
        options: ['5', '6', '8', '4'],
        correct: '6'
      }
    ]
  },
  'prog-1': {
    title: 'JavaScript Basics',
    questions: [
      {
        question: 'typeof null?',
        options: ['"null"', '"object"', '"undefined"', '"boolean"'],
        correct: '"object"'
      },
      {
        question: 'Which is JS framework?',
        options: ['Django', 'Laravel', 'React', 'Flask'],
        correct: 'React'
      },
      {
        question: 'let x = 5; x += 3; x = ?',
        options: ['8', '10', '5', '3'],
        correct: '8'
      }
    ]
  },
  'prog-2': {
    title: 'Python Essentials',
    questions: [
      {
        question: 'Python is?',
        options: ['Compiled', 'Interpreted', 'Binary', 'Machine'],
        correct: 'Interpreted'
      },
      {
        question: 'Data type for 1.23?',
        options: ['int', 'float', 'str', 'bool'],
        correct: 'float'
      },
      {
        question: 'List in Python is?',
        options: ['Ordered', 'Unordered', 'Immutable', 'Static'],
        correct: 'Ordered'
      }
    ]
  },
  'prog-3': {
    title: 'Data Structures',
    questions: [
      {
        question: 'Stack follows?',
        options: ['FIFO', 'LIFO', 'FILO', 'Random'],
        correct: 'LIFO'
      },
      {
        question: 'Which DS uses priority?',
        options: ['Stack', 'Queue', 'Priority Queue', 'Array'],
        correct: 'Priority Queue'
      },
      {
        question: 'Binary tree has max ___ children?',
        options: ['1', '2', '3', 'Infinite'],
        correct: '2'
      }
    ]
  }
};

export default function handler(req, res) {
  const { id } = req.query;
  const quiz = quizData[id];
  if (quiz) res.status(200).json(quiz);
  else res.status(404).json({ error: 'Quiz not found' });
}
