
// Country list for dropdown
export const countries = [
  "Kazakhstan",
  "Russia",
  "Kyrgyzstan",
  "Uzbekistan",
  "Tajikistan",
  "China",
  "Other"
];

// City list for each country
export const citiesByCountry: Record<string, string[]> = {
  Kazakhstan: ["Astana", "Almaty", "Shymkent", "Aktobe", "Karaganda", "Other"],
  Russia: ["Moscow", "Saint Petersburg", "Novosibirsk", "Ekaterinburg", "Other"],
  Kyrgyzstan: ["Bishkek", "Osh", "Jalal-Abad", "Other"],
  Uzbekistan: ["Tashkent", "Samarkand", "Namangan", "Other"],
  Tajikistan: ["Dushanbe", "Khujand", "Kulob", "Other"],
  China: ["Beijing", "Shanghai", "Guangzhou", "Other"],
  Other: ["Other"]
};

// Competition types
export const competitionTypes = [
  { 
    id: "drone-race-5inch", 
    label: "Drone Race 5inch", 
    mentors: 1, 
    competitors: 1 
  },
  { 
    id: "drone-race-micro", 
    label: "Drone Race Micro", 
    mentors: 1, 
    competitors: 1 
  },
  { 
    id: "drone-soccer", 
    label: "Drone Soccer", 
    mentors: 1, 
    competitors: 6, 
    minCompetitors: 5
  }
];
