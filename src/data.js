const data = [
  {
    id: 1,
    question: "Which of the following company don't make car?",
    answers: [
      {
        key: 1,
        value: "A)",
        text: "TATA",
        correct: false,
      },
      {
        key: 2,
        value: "B)",
        text: "NISSAN",
        correct: false,
      },
      {
        key: 3,
        value: "C)",
        text: "APPLE",
        correct: true,
      },
      {
        key: 4,
        value: "D)",
        text: "TESLA",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "Who founded facebook?",
    answers: [
      {
        key: 1,
        value: "A)",
        text: "MARK ZUCKERBERG",
        correct: true,
      },
      {
        key: 2,
        value: "B)",
        text: "ELON MUSK",
        correct: false,
      },
      {
        key: 3,
        value: "C)",
        text: "BILLGATES",
        correct: false,
      },
      {
        key: 4,
        value: "D)",
        text: "STEVE JOBS",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: "Entomology is the science that studies",
    answers: [
      {
        key: 1,
        value: "A)",
        text: "BEHAVIOUR OF HUMAN BEINGS",
        correct: false,
      },
      {
        key: 2,
        value: "B)",
        text: "INSECTS",
        correct: true,
      },
      {
        key: 3,
        value: "C)",
        text: "THE ORIGIN AND HISTORY OF TECHNICAL AND SCIENTIC TERMS",
        correct: false,
      },
      {
        key: 4,
        value: "D)",
        text: "THE FORMATION OF ROCKS",
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question: "Hitler party which came into power in 1933 is known as",
    answers: [
      {
        key: 1,
        value: "A)",
        text: "LABOUR PARTY",
        correct: false,
      },
      {
        key: 2,
        value: "B)",
        text: "NAZI PARTY",
        correct: true,
      },
      {
        key: 3,
        value: "C)",
        text: "DEMOCRATIC PARTY",
        correct: false,
      },
      {
        key: 4,
        value: "D)",
        text: "KU-KLUX-KLAN",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: "Galileo was an Italian astronomer who?",
    answers: [
      {
        key: 1,
        value: "A)",
        text: "DEVELOPED TELEVISION",
        correct: false,
      },
      {
        key: 2,
        value: "B)",
        text: "DISCOVERED FOUR SATELLITES OF JUPITER",
        correct: false,
      },
      {
        key: 3,
        value: "C)",
        text: "DISCOVERED GRAVITY",
        correct: false,
      },
      {
        key: 4,
        value: "D)",
        text: "DISCOVERED TELESCOPE",
        correct: true,
      },
    ],
  },
  {
    id: 6,
    question: "'Pongal' is a popular festival of which state?",
    answers: [
      {
        key: 1,
        value: "A)",
        text: "KARNATAKA",
        correct: false,
      },
      {
        key: 2,
        value: "B)",
        text: "KERALA",
        correct: false,
      },
      {
        key: 3,
        value: "C)",
        text: "TAMIL NADU",
        correct: true,
      },
      {
        key: 4,
        value: "D)",
        text: "ANDRA PRADESH",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question: "Ghototkach in Mahabharata wa s the son of",
    answers: [
      {
        key: 1,
        value: "A)",
        text: "DURYODHANA",
        correct: false,
      },
      {
        key: 2,
        value: "B)",
        text: "ARJUNA",
        correct: false,
      },
      {
        key: 3,
        value: "C)",
        text: "YUDHISHTIR",
        correct: false,
      },
      {
        key: 4,
        value: "D)",
        text: "BHIMA",
        correct: true,
      },
    ],
  },
  {
    id: 8,
    question: "The value of π (Pai) was first given by",
    answers: [
      {
        key: 1,
        value: "A)",
        text: "BHASKARA",
        correct: false,
      },
      {
        key: 2,
        value: "B)",
        text: "VARAHAMIHIRA",
        correct: false,
      },
      {
        key: 3,
        value: "C)",
        text: "ARYABHATTA",
        correct: true,
      },
      {
        key: 4,
        value: "D)",
        text: "NONE OF THESE",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question: "'The Bhopal Disaster' was result of which of the following?",
    answers: [
      {
        key: 1,
        value: "A)",
        text: "COLLAPSING OF A DAM",
        correct: false,
      },
      {
        key: 2,
        value: "B)",
        text: "GREAT FIRE",
        correct: false,
      },
      {
        key: 3,
        value: "C)",
        text: "PLAGUE EPIDEMIC",
        correct: false,
      },
      {
        key: 4,
        value: "D)",
        text: "NONE OF THESE",
        correct: true,
      },
    ],
  },
  {
    id: 10,
    question: "The abbreviation MPLA stands for",
    answers: [
      {
        key: 1,
        value: "A)",
        text: "MAHARASHTRA PRADESH LEGISLATIVE ASSEMBLY",
        correct: false,
      },
      {
        key: 2,
        value: "B)",
        text: "MEMBER OF PARLIAMENT AND LEGISLATIVE ASSEMBLY",
        correct: false,
      },
      {
        key: 3,
        value: "C)",
        text: "PEOPLE'S MOVEMENT FOR LIBERATION OF ANGOLA",
        correct: true,
      },
      {
        key: 4,
        value: "D)",
        text: "NONE OF THESE",
        correct: false,
      },
    ],
  },
  {
    id: 11,
    question: "Which of the following newspaper is 150 years old?",
    answers: [
      {
        key: 1,
        value: "A)",
        text: "THE STATESMAN",
        correct: false,
      },
      {
        key: 2,
        value: "B)",
        text: "THE TIMES OF INDIA",
        correct: true,
      },
      {
        key: 3,
        value: "C)",
        text: "THE HINDU",
        correct: false,
      },
      {
        key: 4,
        value: "D)",
        text: "MALAYALA MANORMA",
        correct: false,
      },
    ],
  },
  {
    id: 12,
    question: "Field Marshal is the highest rank in?",
    answers: [
      {
        key: 1,
        value: "A)",
        text: "ARMY",
        correct: true,
      },
      {
        key: 2,
        value: "B)",
        text: "NAVY",
        correct: false,
      },
      {
        key: 3,
        value: "C)",
        text: "AIR FORCE",
        correct: false,
      },
      {
        key: 4,
        value: "D)",
        text: "TERRITORIAL ARMY",
        correct: false,
      },
    ],
  },
  {
    id: 13,
    question: "Delhi became capital of India in?",
    answers: [
      {
        key: 1,
        value: "A)",
        text: "1910",
        correct: false,
      },
      {
        key: 2,
        value: "B)",
        text: "1911",
        correct: true,
      },
      {
        key: 3,
        value: "C)",
        text: "1916",
        correct: false,
      },
      {
        key: 4,
        value: "D)",
        text: "1923",
        correct: false,
      },
    ],
  },
  {
    id: 14,
    question: "Lunar month is equal to ?",
    answers: [
      {
        key: 1,
        value: "A)",
        text: "1 EARTH DAY",
        correct: false,
      },
      {
        key: 2,
        value: "B)",
        text: "14 EARTH DAY",
        correct: false,
      },
      {
        key: 3,
        value: "C)",
        text: "28 EARTH DAY",
        correct: true,
      },
      {
        key: 4,
        value: "D)",
        text: "365 EARTH DAY",
        correct: false,
      },
    ],
  },
  {
    id: 15,
    question:
      "Which of the following is one of the seven wonders of Medieval World?",
    answers: [
      {
        key: 1,
        value: "A)",
        text: "HANGING GARDENS  OF BABYLON",
        correct: false,
      },
      {
        key: 2,
        value: "B)",
        text: "TAJ MAHAL",
        correct: false,
      },
      {
        key: 3,
        value: "C)",
        text: "LEANING TOWER OF PISA",
        correct: true,
      },
      {
        key: 4,
        value: "D)",
        text: "PYRAMIDS OF EGYPT",
        correct: false,
      },
    ],
  },
];

export default data;
