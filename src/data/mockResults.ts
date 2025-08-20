import { NCOResult } from "@/components/SearchResults";

export const mockSearchResults: Record<string, NCOResult[]> = {
  "software engineer": [
    {
      code: "2512.01",
      title: "Software Developer",
      description: "Design, develop, test, and maintain software applications and systems. Create computer programs using various programming languages and development tools.",
      confidence: 95,
      category: "Professionals",
      relatedTerms: ["programmer", "developer", "software engineer", "coder"]
    },
    {
      code: "2513.02", 
      title: "Web Developer",
      description: "Design and develop websites and web applications using web technologies, ensuring functionality, usability, and performance.",
      confidence: 87,
      category: "Professionals",
      relatedTerms: ["web designer", "frontend developer", "fullstack developer"]
    },
    {
      code: "2521.01",
      title: "Database Administrator",
      description: "Design, implement, maintain, and repair an organization's database management systems and ensure optimal database performance.",
      confidence: 72,
      category: "Professionals",
      relatedTerms: ["DBA", "database designer", "data architect"]
    }
  ],
  
  "tailor": [
    {
      code: "7531.01",
      title: "Tailor",
      description: "Make, alter, and repair garments according to customers' and fashion designers' specifications, working with various fabrics and materials.",
      confidence: 98,
      category: "Craft and Related Trades Workers",
      relatedTerms: ["seamstress", "garment maker", "alterations specialist"]
    },
    {
      code: "7532.01",
      title: "Dressmaker",
      description: "Design, cut, fit, and sew women's clothing, including dresses, suits, and other garments according to customer specifications.",
      confidence: 89,
      category: "Craft and Related Trades Workers", 
      relatedTerms: ["dress designer", "costume maker", "fashion seamstress"]
    },
    {
      code: "8141.01",
      title: "Sewing Machine Operator",
      description: "Operate industrial sewing machines to stitch together pieces of fabric to form garments or other textile products in manufacturing settings.",
      confidence: 75,
      category: "Plant and Machine Operators",
      relatedTerms: ["machine operator", "textile worker", "garment assembler"]
    }
  ],

  "nurse": [
    {
      code: "2221.01",
      title: "Professional Nurse",
      description: "Provide nursing care to patients in hospitals, clinics, and other healthcare facilities. Administer medications, monitor patient conditions, and coordinate patient care.",
      confidence: 96,
      category: "Health Professionals",
      relatedTerms: ["registered nurse", "RN", "staff nurse", "clinical nurse"]
    },
    {
      code: "3221.01", 
      title: "Nursing Associate Professional",
      description: "Assist professional nurses in providing patient care, including basic nursing procedures, patient monitoring, and healthcare support services.",
      confidence: 84,
      category: "Health Associate Professionals",
      relatedTerms: ["nursing assistant", "healthcare aide", "patient care technician"]
    },
    {
      code: "2221.02",
      title: "Specialized Nurse",
      description: "Provide specialized nursing care in areas such as intensive care, emergency care, operating room, or specific medical specialties.",
      confidence: 88,
      category: "Health Professionals",
      relatedTerms: ["ICU nurse", "ER nurse", "OR nurse", "specialty nurse"]
    }
  ],

  "teacher": [
    {
      code: "2341.01",
      title: "Primary Education Teacher",
      description: "Teach basic academic skills including reading, writing, and mathematics to students in primary schools, typically ages 6-11.",
      confidence: 92,
      category: "Education Professionals",
      relatedTerms: ["elementary teacher", "primary school teacher", "grade teacher"]
    },
    {
      code: "2342.01",
      title: "Secondary Education Teacher", 
      description: "Teach specialized subjects to students in secondary schools, developing curricula and assessing student progress in specific academic areas.",
      confidence: 90,
      category: "Education Professionals",
      relatedTerms: ["high school teacher", "subject teacher", "secondary teacher"]
    },
    {
      code: "2310.01",
      title: "University Professor",
      description: "Conduct research and teach undergraduate and graduate students in universities and higher education institutions in specialized academic fields.",
      confidence: 78,
      category: "Education Professionals", 
      relatedTerms: ["professor", "lecturer", "academic", "faculty member"]
    }
  ],

  "chef": [
    {
      code: "3434.01",
      title: "Chef",
      description: "Plan menus, supervise kitchen staff, and prepare high-quality meals in restaurants, hotels, and other food service establishments.",
      confidence: 97,
      category: "Service Workers",
      relatedTerms: ["head chef", "executive chef", "culinary chef", "kitchen manager"]
    },
    {
      code: "5120.01",
      title: "Cook",
      description: "Prepare and cook meals, following recipes and food safety standards in restaurants, cafeterias, and other food service venues.",
      confidence: 85,
      category: "Service Workers",
      relatedTerms: ["line cook", "prep cook", "kitchen cook", "food preparer"]
    },
    {
      code: "3434.02",
      title: "Pastry Chef",
      description: "Specialize in creating desserts, pastries, breads, and other baked goods in restaurants, bakeries, and specialty food establishments.",
      confidence: 82,
      category: "Service Workers",
      relatedTerms: ["baker", "pastry cook", "dessert chef", "confectioner"]
    }
  ]
};

export const getSearchResults = (query: string): NCOResult[] => {
  const normalizedQuery = query.toLowerCase().trim();

  // Direct matches
  if (mockSearchResults[normalizedQuery]) {
    return mockSearchResults[normalizedQuery];
  }

  // Build a corpus from all mock data for fuzzy matching
  const corpus: Array<{ key: string; items: NCOResult[]; tokens: string[] }> = Object.entries(mockSearchResults).map(([key, items]) => ({
    key,
    items,
    tokens: [
      key,
      ...items.flatMap((it) => [
        it.title,
        it.description,
        it.category,
        ...(it.relatedTerms || [])
      ])
    ]
      .join(" ")
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter(Boolean)
  }));

  // Simple fuzzy scoring: count of overlapping tokens and substring presence
  const queryTokens = normalizedQuery
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

  const scoreEntry = (entry: { tokens: string[]; key: string }) => {
    let score = 0;
    for (const t of queryTokens) {
      if (entry.tokens.includes(t)) score += 3;
      // partial token matches (prefix/suffix)
      if (entry.tokens.some((et) => et.startsWith(t) || et.endsWith(t))) score += 2;
      // substring presence in combined string
      if (entry.key.includes(t)) score += 2;
    }
    // Bonus if key has all tokens as substrings
    if (queryTokens.every((t) => entry.key.includes(t))) score += 3;
    return score;
  };

  const ranked = corpus
    .map((e) => ({ e, score: scoreEntry(e) }))
    .sort((a, b) => b.score - a.score);

  const top = ranked[0];
  if (top && top.score > 0) {
    // Map a heuristic score to confidence bump
    const boost = Math.min(10, top.score);
    return top.e.items.map((item, idx) => ({
      ...item,
      confidence: Math.max(50, Math.min(99, item.confidence + Math.max(0, boost - idx)))
    }));
  }

  // Synonym fallback
  const synonymMap: Record<string, string> = {
    developer: "software engineer",
    programmer: "software engineer",
    coder: "software engineer",
    seamstress: "tailor",
    sewing: "tailor",
    garment: "tailor",
    "registered nurse": "nurse",
    rn: "nurse",
    nursing: "nurse",
    instructor: "teacher",
    educator: "teacher",
    professor: "teacher",
    cook: "chef",
    kitchen: "chef",
    culinary: "chef",
  };

  for (const [synonym, baseQuery] of Object.entries(synonymMap)) {
    if (normalizedQuery.includes(synonym) && mockSearchResults[baseQuery]) {
      return mockSearchResults[baseQuery];
    }
  }

  // Default fallback results for demo
  return [
    {
      code: "0000.00",
      title: "No Exact Match Found",
      description:
        "The search term entered doesn't match our current database. Please try a related job title or use a broader keyword.",
      confidence: 45,
      category: "General",
      relatedTerms: ["try: software engineer, tailor, nurse, teacher, chef"],
    },
  ];
};