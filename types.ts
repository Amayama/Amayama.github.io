export interface Education {
  school: string;
  location: string;
  degree: string;
  period: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  supervisor?: string;
}

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year?: string; // Extracted or inferred
  status?: string; // e.g., "Under Review", "Oral"
  url?: string;
}

export interface Award {
  title: string;
  date: string;
  description?: string;
}

export interface News {
  date: string;
  content: string;
}

export interface Profile {
  name: string;
  email: string;
  phone: string;
  wechat: string;
  education: Education[];
  interests: string[];
  skills: {
    languages: string;
    software: string;
  };
}