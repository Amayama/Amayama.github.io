import { Profile, Experience, Publication, Award, News } from './types';

export const profile: Profile = {
  name: "Linyao Chen",
  email: "chen-linyao217@g.ecc.u-tokyo.ac.jp",
  phone: "+81 090 7454 0472",
  wechat: "+86 185 2085 4017",
  education: [
    {
      school: "University of Tokyo",
      location: "Tokyo, Japan",
      degree: "PhD of Frontier Science, Major: Spatial Information Science",
      period: "10.2024 - Present"
    },
    {
      school: "University of Tokyo",
      location: "Tokyo, Japan",
      degree: "Master of Frontier Science, Major: Spatial Information Science",
      period: "10.2021 - 09.2023"
    },
    {
      school: "Southern University of Science and Technology",
      location: "Shenzhen, China",
      degree: "Bachelor of Engineering, Major: Computer Science and Engineering",
      period: "09.2015 - 06.2019"
    }
  ],
  interests: [
    "Large Language Model-driven Agent",
    "Multimodal Agent",
    "Multi-agent System",
    "Natural Language Processing"
  ],
  skills: {
    languages: "Chinese (native), English (proficient), Japanese (proficient)",
    software: "Python, Java, C++"
  }
};

export const news: News[] = [
  {
    date: "12.2025",
    content: "One paper (The Avengers) accepted to AAAI 2026 as Oral Presentation! 🏆"
  },
  {
    date: "10.2025",
    content: "Honored to receive the Shibasaki Scholarship 2025."
  },
  {
    date: "08.2025",
    content: "Joined EnvX Team as a Tech Lead to work on open-source agentization."
  },
  {
    date: "06.2025",
    content: "Visiting Oxford University this summer, supervised by Prof. Philip Torr. (Cancelled, due to the Achilles Tendon repair surgery)"
  },
  {
    date: "10.2024",
    content: "Started my Ph.D. journey at the University of Tokyo!"
  }
];

export const experiences: Experience[] = [
  {
    role: "Tech Lead",
    company: "EnvX Team",
    period: "08.2025 - 12.2025",
    description: [
      "Research on Multi-agent system and github agentization",
      "EnvX Team, invested with 1M Dollar in pre-seed turn, focused on open-source agentization"
    ]
  },
  {
    role: "Visiting Student",
    company: "Oxford University",
    period: "06.2025 - 07.2025",
    description: [
      "Research on agentic data synthesis and agentic capacity",
      "Focused on synthesis agentic trajectory and model post-training",
      "Supervisor: Phillip Torr (Marr Prize awarded in 1998)"
    ]
  },
  {
    role: "Research Intern",
    company: "Shanghai Artificial Intelligence Labs",
    period: "02.2025 - 05.2025",
    description: [
      "Research on Centric Multi-agent system, focus on the routing methods",
      "Two papers published in AAAI 2026",
      "Follow-up paper was awarded as best paper in DAI2025"
    ],
    supervisor: "Shuyue Hu"
  },
  {
    role: "Research Intern",
    company: "Camel.AI",
    period: "09.2024 - 12.2024",
    description: [
      "Research on better GUI automation and function calls of multi-agent system",
      "Research based on the first multi-agent architecture-CAMEL",
      "Research was incorporated into the CAMEL framework and related product"
    ],
    supervisor: "Guohao Li"
  },
  {
    role: "Research Intern",
    company: "King Abdullah University of Science and Technology (KAUST)",
    period: "02.2024 - 08.2024",
    description: [
      "Research on better GUI agent system for cross-environment task",
      "One work was published in ACL25"
    ],
    supervisor: "Bernard Ghanem"
  },
  {
    role: "Visiting Student",
    company: "Singapore University of Technology and Design",
    period: "09.2023 - 12.2023",
    description: [
      "Research on better reasoning capacity based on pre-trained large language model",
      "Supervisor was the No.1 AI researcher in Singapore according to CSRanking"
    ],
    supervisor: "Wei Lu"
  },
  {
    role: "Research Intern",
    company: "Location Mind Co. Ltd Japan",
    period: "10.2022 - 08.2023",
    description: [
      "Investigation on the prediction for time series analysis with large language model"
    ],
    supervisor: "Zipei Fan"
  }
];

export const publications: Publication[] = [
  {
    title: "CRAB: Cross-environment Agent Benchmark for Multimodal Language Model Agents",
    authors: ["Tianqi Xu*", "Linyao Chen*", "Dai-jie Wu*", "Yanjun Chen", "Zecheng Zhang", "Xiang Yao", "Zhiqiang Xie", "Yongchao Chen", "Shilong Liu", "Bochen Qian", "Philip Torr", "Bernard Ghanem", "Guohao Li"],
    venue: "Findings of the 63rd Annual Meeting of the Association for Computational Linguistics (ACL)",
    year: "2024/25",
    url: "https://arxiv.org/abs/2407.01511"
  },
  {
    title: "SensorLLM: Aligning Large Language Models with Motion Sensors for Human Activity Recognition",
    authors: ["Zechen Li", "Shohreh Deldari", "Linyao Chen", "Hao Xue", "Flora D. Salim"],
    venue: "The 2025 Conference on Empirical Methods in Natural Language Processing (EMNLP)",
    year: "2025",
    url: "https://arxiv.org/abs/2404.14441"
  },
  {
    title: "A2ABench: Benchmarking the agentization under A2A protocal",
    authors: ["Linyao Chen*", "Bo Huang*", "Qinlao Zhao", "Shuai Shao", "Zicai Cui", "Yikun Wang", "Tianqi Xu", "Zimian Peng", "Hiroki Hill Kobayashi", "Weinan Zhang"],
    venue: "The 35th International Joint Conference on Artificial Intelligence (IJCAI)",
    status: "Under Review",
    url: "https://arxiv.org/abs/2409.06553"
  },
  {
    title: "EnvX: agentize everything with agentic AI",
    authors: ["Linyao Chen", "Zimian Peng", "Yingxuan Yang", "Yikun Wang", "Wenzheng Tom Tang", "Hiroki Hill Kobayashi", "Weinan Zhang"],
    venue: "The 35th International Joint Conference on Artificial Intelligence (IJCAI)",
    status: "Under Review",
    url: "https://scholar.google.com/scholar?q=EnvX%3A+agentize+everything+with+agentic+AI"
  },
  {
    title: "The Avengers: A Simple Recipe for Uniting Smaller Language Models to Challenge Proprietary Giants",
    authors: ["Yiqun Zhang", "Hao Li", "Chenxu Wang", "Linyao Chen", "Qiaosheng Zhang", "Peng Ye", "Shi Feng", "Daling Wang", "Zhen Wang", "Xinrun Wang", "Jia Xu", "Lei Bai", "Wanli Ouyang", "Shuyue Hu"],
    venue: "The Fortieth AAAI Conference on Artificial Intelligence (AAAI)",
    status: "Oral",
    year: "2026",
    url: "https://arxiv.org/abs/2405.14378"
  },
  {
    title: "GUITARS: A simple yet effective recipe for reliable GUI agent via TAsk-Relevant Set-of-Mark",
    authors: ["Ce Zhou*", "Linyao Chen*", "Tianqi Xu", "Qinlao Zhao", "Hiroki Hill Kobayashi", "Bernard Ghanem", "Guohao Li", "Chen Zhao"],
    venue: "Conference on Computer Vision and Pattern Recognition (CVPR)",
    status: "Under Review",
    year: "2026",
    url: "https://arxiv.org/abs/2410.16016"
  },
  {
    title: "ICL-Router: In-Context Learned Model Representations for LLM Routing",
    authors: ["Chenxu Wang", "Hao Li", "Yiqun Zhang", "Linyao Chen", "Jianhao Chen", "Ping Jian", "Peng Ye", "Qiaosheng Zhang", "Shuyue Hu"],
    venue: "The Fortieth AAAI Conference on Artificial Intelligence (AAAI)",
    year: "2026",
    url: "https://arxiv.org/abs/2410.07684"
  },
  {
    title: "Finding the Sweet Spot: Preference Data Construction for Scaling Preference Optimization",
    authors: ["Yao Xiao", "Hai Ye", "Linyao Chen", "Hwee Tou Ng", "Lidong Bing", "Xiaoli Li", "Roy Ka-wei Lee"],
    venue: "The 63rd Annual Meeting of the Association for Computational Linguistics (ACL)",
    year: "2025",
    url: "https://arxiv.org/abs/2405.14723"
  }
];

export const awards: Award[] = [
  {
    title: "Shibasaki Scholarship 2025",
    date: "10.2025"
  },
  {
    title: "Recommendation Program for Young Researchers 2023, Information Technology Center of UTokyo",
    date: "03.2023"
  },
  {
    title: "3rd Prize of Guangdong Province Computer Programming Competition",
    date: "04.2019"
  }
];