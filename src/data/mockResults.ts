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
  
  "data scientist": [
    {
      code: "2521.10",
      title: "Data Scientist",
      description: "Analyze complex datasets to extract insights using statistics, machine learning, and data visualization.",
      confidence: 95,
      category: "Professionals",
      relatedTerms: ["ml engineer", "machine learning", "data analyst", "ai", "analytics"]
    },
    {
      code: "2522.03",
      title: "Machine Learning Engineer",
      description: "Design and deploy machine learning models and pipelines for predictive applications.",
      confidence: 86,
      category: "Professionals",
      relatedTerms: ["ml", "mle", "modeling", "pytorch", "tensorflow"]
    },
    {
      code: "2529.05",
      title: "Data Analyst",
      description: "Interpret data, analyze results, and create dashboards to support business decisions.",
      confidence: 78,
      category: "Professionals",
      relatedTerms: ["analytics", "bi analyst", "business analyst", "sql"]
    }
  ],

  "electrician": [
    {
      code: "7411.01",
      title: "Electrician",
      description: "Install, maintain, and repair electrical systems in residential, commercial, and industrial settings.",
      confidence: 96,
      category: "Craft and Related Trades Workers",
      relatedTerms: ["electrical technician", "wireman", "sparky", "electrical fitter"]
    },
    {
      code: "7412.01",
      title: "Electrical Installer",
      description: "Install wiring, fixtures, and equipment for power distribution and lighting.",
      confidence: 82,
      category: "Craft and Related Trades Workers",
      relatedTerms: ["installer", "electrical installer", "panel wiring"]
    }
  ],

  "accountant": [
    {
      code: "2411.01",
      title: "Accountant",
      description: "Prepare and examine financial records, ensure accuracy, and ensure taxes are paid properly and on time.",
      confidence: 94,
      category: "Professionals",
      relatedTerms: ["accounting", "finance", "chartered accountant", "ca", "cpa", "bookkeeping"]
    },
    {
      code: "4311.02",
      title: "Bookkeeper",
      description: "Maintain financial records, process transactions, and produce statements.",
      confidence: 80,
      category: "Clerical Support Workers",
      relatedTerms: ["accounts assistant", "ap ar", "ledger", "finance assistant"]
    }
  ],

  "mechanic": [
    {
      code: "7231.01",
      title: "Motor Vehicle Mechanic",
      description: "Inspect, maintain, and repair automobiles and light trucks.",
      confidence: 93,
      category: "Craft and Related Trades Workers",
      relatedTerms: ["auto mechanic", "technician", "garage", "automotive"]
    },
    {
      code: "7233.02",
      title: "Diesel Mechanic",
      description: "Service and repair diesel engines and heavy vehicles.",
      confidence: 81,
      category: "Craft and Related Trades Workers",
      relatedTerms: ["heavy vehicle mechanic", "truck mechanic", "diesel technician"]
    }
  ],

  "pharmacist": [
    {
      code: "2262.01",
      title: "Pharmacist",
      description: "Dispense medications, counsel patients, and ensure safe use of prescriptions.",
      confidence: 96,
      category: "Health Professionals",
      relatedTerms: ["chemist", "pharmacy", "dispensing", "pharma"]
    }
  ],

  "police officer": [
    {
      code: "5412.01",
      title: "Police Officer",
      description: "Maintain public order, enforce laws, and prevent crime.",
      confidence: 92,
      category: "Service Workers",
      relatedTerms: ["cop", "constable", "law enforcement", "patrol"]
    }
  ],

  "marketing manager": [
    {
      code: "1221.01",
      title: "Marketing Manager",
      description: "Plan and execute marketing strategies, campaigns, and brand initiatives.",
      confidence: 93,
      category: "Managers",
      relatedTerms: ["seo", "digital marketing", "smm", "brand manager", "growth"]
    }
  ],

  "product manager": [
    {
      code: "1321.01",
      title: "Product Manager",
      description: "Own product strategy, roadmap, and execution in collaboration with cross-functional teams.",
      confidence: 92,
      category: "Managers",
      relatedTerms: ["pm", "product owner", "roadmap", "backlog", "feature"]
    }
  ],

  "graphic designer": [
    {
      code: "2166.01",
      title: "Graphic Designer",
      description: "Create visual concepts and assets for print and digital media.",
      confidence: 92,
      category: "Professionals",
      relatedTerms: ["designer", "visual designer", "brand", "logo", "illustrator", "photoshop"]
    }
  ],

  "civil engineer": [
    {
      code: "2142.01",
      title: "Civil Engineer",
      description: "Design, build, and supervise infrastructure projects and systems.",
      confidence: 94,
      category: "Professionals",
      relatedTerms: ["construction engineer", "structural", "site engineer", "roads", "bridges"]
    }
  ],

  "plumber": [
    {
      code: "7126.01",
      title: "Plumber",
      description: "Install and repair water supply lines, waste disposal systems, and related appliances.",
      confidence: 96,
      category: "Craft and Related Trades Workers",
      relatedTerms: ["plumbing", "pipefitter", "pipes", "fixtures"]
    }
  ],

  "carpenter": [
    {
      code: "7115.01",
      title: "Carpenter",
      description: "Construct, install, and repair structures and fixtures made of wood and other materials.",
      confidence: 95,
      category: "Craft and Related Trades Workers",
      relatedTerms: ["joiner", "woodworker", "cabinet maker"]
    }
  ],

  "receptionist": [
    {
      code: "4226.01",
      title: "Receptionist",
      description: "Greet visitors, manage front desk operations, and handle communications.",
      confidence: 90,
      category: "Clerical Support Workers",
      relatedTerms: ["front desk", "foh", "admin assistant", "office assistant"]
    }
  ],

  "customer support": [
    {
      code: "4222.01",
      title: "Customer Support Representative",
      description: "Assist customers, resolve issues, and provide product information via calls, chat, and email.",
      confidence: 90,
      category: "Service Workers",
      relatedTerms: ["csr", "customer service", "support agent", "helpdesk"]
    }
  ],

  "driver": [
    {
      code: "8332.01",
      title: "Driver",
      description: "Operate vehicles to transport passengers or goods.",
      confidence: 90,
      category: "Plant and Machine Operators",
      relatedTerms: ["chauffeur", "delivery driver", "truck driver"]
    }
  ],

  "farmer": [
    {
      code: "6111.01",
      title: "Farmer",
      description: "Plan, direct, and coordinate agricultural production of crops and livestock.",
      confidence: 88,
      category: "Skilled Agricultural Workers",
      relatedTerms: ["agriculture", "grower", "rancher"]
    }
  ],

  "welder": [
    {
      code: "7212.01",
      title: "Welder",
      description: "Join and cut metal parts using welding equipment and techniques.",
      confidence: 92,
      category: "Craft and Related Trades Workers",
      relatedTerms: ["welding", "fabricator", "metalworker", "mig", "tig"]
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

// --- Helpers for fuzzy/typo-tolerant search ---
const tokenize = (text: string): string[] =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

// Damerau–Levenshtein distance (supports adjacent transpositions)
const damerauLevenshtein = (a: string, b: string): number => {
  const al = a.length;
  const bl = b.length;
  const max = al + bl;
  const da: Record<string, number> = {};
  const d: number[][] = Array(al + 2)
    .fill(0)
    .map(() => Array(bl + 2).fill(0));
  d[0][0] = max;
  for (let i = 0; i <= al; i++) {
    d[i + 1][0] = max;
    d[i + 1][1] = i;
  }
  for (let j = 0; j <= bl; j++) {
    d[0][j + 1] = max;
    d[1][j + 1] = j;
  }
  for (let i = 1; i <= al; i++) {
    let db = 0;
    for (let j = 1; j <= bl; j++) {
      const i1 = da[b[j - 1]] ?? 0;
      const j1 = db;
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      if (cost === 0) db = j;
      d[i + 1][j + 1] = Math.min(
        d[i][j] + cost, // substitution
        d[i + 1][j] + 1, // insertion
        d[i][j + 1] + 1, // deletion
        d[i1][j1] + (i - i1 - 1) + 1 + (j - j1 - 1) // transposition
      );
    }
    da[a[i - 1]] = i;
  }
  return d[al + 1][bl + 1];
};

export const getSearchResults = (query: string): NCOResult[] => {
  const normalizedQuery = query.toLowerCase().trim();

  // Direct matches
  if (mockSearchResults[normalizedQuery]) {
    return mockSearchResults[normalizedQuery];
  }

  // Build a corpus from all mock data for fuzzy matching
  const corpus: Array<{ key: string; items: NCOResult[]; tokens: string[]; joined: string }>
    = Object.entries(mockSearchResults).map(([key, items]) => ({
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
      .filter(Boolean),
    joined: (key + " " + items.map((i) => `${i.title} ${i.description} ${(i.relatedTerms||[]).join(" ")}`).join(" "))
      .toLowerCase()
  }));

  // Simple fuzzy scoring: count of overlapping tokens and substring presence
  const queryTokens = tokenize(normalizedQuery);

  const scoreEntry = (entry: { tokens: string[]; key: string; joined: string }) => {
    let score = 0;
    for (const t of queryTokens) {
      if (entry.tokens.includes(t)) score += 3;
      // partial token matches (prefix/suffix)
      if (entry.tokens.some((et) => et.startsWith(t) || et.endsWith(t))) score += 2;
      // substring presence in combined string
      if (entry.key.includes(t)) score += 2;
      // typo tolerance using edit distance
      const minDist = entry.tokens.reduce((min, et) => Math.min(min, damerauLevenshtein(t, et)), Number.POSITIVE_INFINITY);
      if (minDist <= 1) score += 3; // very close typo
      else if (minDist <= 2) score += 1; // small typo
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
    dev: "software engineer",
    "software eng": "software engineer",
    frontend: "software engineer",
    backend: "software engineer",
    "full stack": "software engineer",
    programmer: "software engineer",
    coder: "software engineer",
    tester: "software engineer",
    qa: "software engineer",
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
    ds: "data scientist",
    "ml": "data scientist",
    "machine learning": "data scientist",
    ai: "data scientist",
    analyst: "data scientist",
    electrician: "electrician",
    electrical: "electrician",
    sparky: "electrician",
    accounting: "accountant",
    accountant: "accountant",
    bookkeeper: "accountant",
    finance: "accountant",
    mechanic: "mechanic",
    auto: "mechanic",
    automotive: "mechanic",
    pharmacy: "pharmacist",
    chemist: "pharmacist",
    police: "police officer",
    cop: "police officer",
    seo: "marketing manager",
    marketing: "marketing manager",
    brand: "marketing manager",
    "product owner": "product manager",
    pm: "product manager",
    "ui ux": "graphic designer",
    designer: "graphic designer",
    civil: "civil engineer",
    construction: "civil engineer",
    structural: "civil engineer",
    plumbing: "plumber",
    plumber: "plumber",
    carpenter: "carpenter",
    "front desk": "receptionist",
    reception: "receptionist",
    csr: "customer support",
    "customer service": "customer support",
    support: "customer support",
    chauffeur: "driver",
    driver: "driver",
    agriculture: "farmer",
    farmer: "farmer",
    welder: "welder",
    welding: "welder"
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