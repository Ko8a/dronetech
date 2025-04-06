
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

// Phone number max length by country
export const phoneMaxLengthByCountry: Record<string, number> = {
  Kazakhstan: 15,  // +7 (10 digits) + format characters
  Russia: 15,      // +7 (10 digits) + format characters
  Kyrgyzstan: 16,  // +996 (9 digits) + format characters
  Uzbekistan: 17,  // +998 (9 digits) + format characters
  Tajikistan: 17,  // +992 (9 digits) + format characters
  China: 17,       // +86 (11 digits) + format characters
  Other: 20        // Allow longer for other countries
};

// Get maximum phone length for a country
export const getPhoneMaxLength = (country: string): number => {
  return phoneMaxLengthByCountry[country] || 20; // Default to 20 if country not found
};

// Get country code for phone input
export const getCountryCode = (country: string): string | undefined => {
  const countryMap: Record<string, string> = {
    "Kazakhstan": "KZ",
    "Russia": "RU",
    "Kyrgyzstan": "KG",
    "Uzbekistan": "UZ",
    "Tajikistan": "TJ",
    "China": "CN"
  };
  return countryMap[country];
};
