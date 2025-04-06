
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

// Phone formatting helper function
export const formatPhoneNumber = (value: string, country: string): string => {
  if (!value) return value;
  
  // Remove all non-digit characters
  const phoneNumber = value.replace(/[^\d]/g, '');
  
  // Format based on country
  if (country === "Kazakhstan") {
    // Format as +7-(XXX)-XXX-XX-XX
    if (phoneNumber.length <= 1) return phoneNumber;
    if (phoneNumber.length <= 4) return `+7-(${phoneNumber.slice(1)})`;
    if (phoneNumber.length <= 7) return `+7-(${phoneNumber.slice(1, 4)})-${phoneNumber.slice(4)}`;
    if (phoneNumber.length <= 9) return `+7-(${phoneNumber.slice(1, 4)})-${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7)}`;
    return `+7-(${phoneNumber.slice(1, 4)})-${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`;
  } else if (country === "Russia") {
    // Format as +7-(XXX)-XXX-XX-XX
    if (phoneNumber.length <= 1) return phoneNumber;
    if (phoneNumber.length <= 4) return `+7-(${phoneNumber.slice(1)})`;
    if (phoneNumber.length <= 7) return `+7-(${phoneNumber.slice(1, 4)})-${phoneNumber.slice(4)}`;
    if (phoneNumber.length <= 9) return `+7-(${phoneNumber.slice(1, 4)})-${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7)}`;
    return `+7-(${phoneNumber.slice(1, 4)})-${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`;
  }
  
  // Default international format
  if (phoneNumber.length <= 3) return `+${phoneNumber}`;
  if (phoneNumber.length <= 6) return `+${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
  if (phoneNumber.length <= 9) return `+${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
  return `+${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 9)}-${phoneNumber.slice(9)}`;
};
