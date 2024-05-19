const dataOld = [
    {
        id: 1, question: "Where can the 10 commandments be found in the Bible (book and chapter)?"
    },
    {
        id: 2,
        question:
            "Who said this and where in the bible can it be found? <br /> <strong> <em>The Lord shall fight for you, and ye shall hold your peace.</em> </strong>",
    },
    {
        id: 3,
        question: `Who said <q><em>It is the Lord; let Him do what seemeth Him good</em></q>?`,
    },
    { id: 4, question: "What tribe is the first King of Israel from?" },
    {
        id: 5,
        question:
            "<em><q>Intreat me not to leave thee, or to return from following after thee: for whither thou goest, I will go; and where thou lodgest, I will logde: thy people shall be my people, and thy God my God</q></em> <br/> <br/> <strong> Who said this and to whom was the person speaking to?</strong>",
    },
    {
        id: 6,
        question:
            "<q><em>O Nebuchadnezzar, we are not careful to answer thee in this matter.</em></q> <br/><strong>Where in the bible and who said this?</strong>",
    },
    {
        id: 7,
        question:
            "Where in the bible can the Beatitudes be found (Book and Chapter)?",
    },
    {
        id: 8,
        question:
            "<q>Blessed are the meek: for _ _ _ _ _</q><br/> <strong>Complete the verse</strong>",
    },
    {
        id: 9,
        question:
            "<q><em>Abide in me and I in you. As the branch cannot bear fruit of itself, except it abide in the vine; no more can ye except ye abide in me</em></q><br/> <strong>Where is this verse found?</strong>",
    },
    {
        id: 10,
        question:
            "<q><em>The thief cometh not, but to steal, and to kill, and to destroy; I am come that they might have life, and that they might have it more abundantly </em></q><br/> <strong>Where is this verse found (chapter and verse)?</strong>",
    },
    { id: 11, question: "Why didn't Moses enter into the Promise Land?" },
    {
        id: 12,
        question:
            "<q><em>Every good and every perfect gift is from above, and cometh from the Father of Lights, with whom there is no variableness, neither shadow of turning </em></q> <br/><br/> <strong>Where is this in the Bible?</strong>",
    },
    {
        id: 13,
        question:
            "<q><em>Be careful for nothing, but in everything by prayer and supplication with thanksgiving, _ _ _ _ _ _ _</em></q> <br/><br/> <strong>Complete the verse</strong>",
    },
    {
        id: 14,
        question:
            "<q><em>I beseech you therefore, brethren, by the mercies of God, that ye present yourself a living sacrifice, holy, acceptable unto God, which is your reasonable service</em></q> <br/><br/> <strong>Where is this verse found in the Bible?</strong>",
    },
    {
        id: 15,
        question:
            "<q><em>Am I my brother's keeper? </em></q><br/> <strong>Where is this verse found in the Bible and who said it?</strong>",
    },
    {
        id: 16,
        question:
            "<q><em>Commit thy works unto the Lord, _ _ _ _ _ _ _</em></q> <br/><br/> <strong>Complete the verse</strong>",
    },
    {
        id: 17,
        question:
            "<q><em>For everyone that asketh receiveth and he that seeketh, findeth; and to him that knocketh, it shall be opened</em></q> <br/><br/> <strong>Where is this verse found in the Bible (book, chapter, verse)?</strong>",
    },
    {
        id: 18,
        question:
            "<q><em>I can do all thing through Christ which strenghteneth me</em></q> <br/><br/> <strong>Where is this verse found in the Bible (book, chapter, verse)?</strong>",
    },
    {
        id: 19,
        question:
            "<q><em>Daughter, be of good comfort; thy faith hath made thee whole</em></q> <br/><br/> <strong>Who was Jesus talking to?</strong>",
    },
    {
        id: 20,
        question:
            "<q><em>Verily, I say to you, whatsoever ye shall bind on earth shall be bound in Heaven, and whatsoever ye shall be loose on earth shall be loose in Heaven </em></q> <br/><br/> <strong>Where is this found in the Bible?</strong>",
    },
    {
        id: 21,
        question:
            "Sold into slavery by his brethren, sent to prision ny his master over alleged sexual assault, and later exhalted.<br/><br/> <strong>What is his name and where in the Bible can we find this account?</strong>",
    },
];

const data = [
  {
    "id": 1,
    "question": "Which judge of Israel made a vow that resulted in him sacrificing his daughter?",
    "answer": "Jephthah"
  },
  {
    "id": 2,
    "question": "In which book of the Bible is the story of Balaam and his talking donkey?",
    "answer": "Numbers"
  },
  {
    "id": 3,
    "question": "What was the name of the high priest who mentored Samuel?",
    "answer": "Eli"
  },
  {
    "id": 4,
    "question": "Which New Testament book is written to a wealthy Christian named Theophilus?",
    "answer": "Luke"
  },
  {
    "id": 5,
    "question": "What was the name of David's first wife?",
    "answer": "Michal"
  },
  {
    "id": 6,
    "question": "Which Old Testament book is a collection of love poems?",
    "answer": "Song of Solomon (Song of Songs)"
  },
  {
    "id": 7,
    "question": "What is the name of the place where Jacob dreamed of a ladder reaching to heaven?",
    "answer": "Bethel"
  },
  {
    "id": 8,
    "question": "Which New Testament letter emphasizes faith without works is dead?",
    "answer": "James"
  },
  {
    "id": 9,
    "question": "Who was the prophet that married a prostitute to symbolize Israel's unfaithfulness to God?",
    "answer": "Hosea"
  },
  {
    "id": 10,
    "question": "Which book of the Bible begins with 'In the beginning was the Word, and the Word was with God, and the Word was God'?",
    "answer": "John"
  },
  {
    "id": 11,
    "question": "Which New Testament character was struck dead for lying to the Holy Spirit?",
    "answer": "Ananias (and his wife Sapphira)"
  },
  {
    "id": 12,
    "question": "Who was the mother of John the Baptist?",
    "answer": "Elizabeth"
  },
  {
    "id": 13,
    "question": "In which book of the Bible is the story of the sun standing still during a battle?",
    "answer": "Joshua"
  },
  {
    "id": 14,
    "question": "Which epistle addresses the 'fruit of the Spirit'?",
    "answer": "Galatians"
  },
  {
    "id": 15,
    "question": "What was the name of the Roman centurion who became a follower of Jesus after a vision?",
    "answer": "Cornelius"
  },
  {
    "id": 16,
    "question": "Which book contains the prophecy of the valley of dry bones?",
    "answer": "Ezekiel"
  },
  {
    "id": 17,
    "question": "Who was the prophet that confronted David about his sin with Bathsheba?",
    "answer": "Nathan"
  },
  {
    "id": 18,
    "question": "What is the Hebrew name for the first five books of the Old Testament?",
    "answer": "Torah"
  },
  {
    "id": 19,
    "question": "What was the occupation of Simon Peter before he became an apostle?",
    "answer": "Fisherman"
  },
  {
    "id": 20,
    "question": "Which book of the Bible tells the story of the fall of Jericho?",
    "answer": "Joshua"
  },
  {
    "id": 21,
    "question": "Which prophet confronted King Ahab about his wickedness and prophesied a drought?",
    "answer": "Elijah"
  },
  {
    "id": 22,
    "question": "Who was the woman who hid the Israelite spies in Jericho?",
    "answer": "Rahab"
  },
  {
    "id": 23,
    "question": "What does the name 'Emmanuel' mean?",
    "answer": "God with us"
  },
  {
    "id": 24,
    "question": "In which book is the phrase 'Vanity of vanities, all is vanity' found?",
    "answer": "Ecclesiastes"
  },
  {
    "id": 25,
    "question": "Who was the first person to see Jesus after His resurrection?",
    "answer": "Mary Magdalene"
  },
  {
    "id": 26,
    "question": "Which New Testament book contains the Beatitudes?",
    "answer": "Matthew"
  }
]
      

export { data };
