
export type TranslationKey =
  // Navigation
  | 'home'
  | 'competitions'
  | 'training'
  | 'contacts'
  | 'contactUs'
  
  // Hero section
  | 'heroTitle'
  | 'heroSubtitle'
  | 'learnMore'
  | 'startTraining'
  | 'registerCompetition'
  | 'registration'
  
  // Problem statement
  | 'problemTitle'
  | 'problemText1'
  | 'problemText2'
  | 'initiative'
  | 'quote'
  | 'president'
  
  // Products
  | 'ourPrograms'
  | 'programsTitle'
  | 'programsSubtitle'
  | 'exploreAll'
  
  // Team
  | 'meetTeam'
  | 'teamTitle'
  | 'teamSubtitle'
  | 'team_petrov_name'
  | 'team_petrov_title'
  | 'team_petrov_bio'
  | 'team_kim_name'
  | 'team_kim_title'
  | 'team_kim_bio'
  | 'team_volkov_name'
  | 'team_volkov_title'
  | 'team_volkov_bio'
  
  // Competition page
  | 'premierUAVCompetition'
  | 'mdc'
  | 'multiDroneChampionship'
  | 'competitionDescription'
  | 'registerNow'
  | 'registrationForm'
  | 'eventDetails'
  | 'dateTime'
  | 'eventDate'
  | 'eventTime'
  | 'eventVenue'
  | 'eventCity'
  | 'location'
  | 'participants'
  | 'prizes'
  | 'firstPlace'
  | 'secondPlace'
  | 'thirdPlace'
  | 'openToTeams'
  | 'allSkillLevels'
  | 'photoGallery'
  | 'competitionMoments'
  | 'galleryDescription'
  | 'loadingError'
  | 'imageLoadFailed'
  | 'imageProblems'
  | 'failedToLoad'
  | 'outOf'
  | 'images'
  | 'regulations'
  | 'competitionRules'
  | 'rulesDescription'
  | 'rulebook'
  | 'rulebookDescription'
  | 'pdfFormat'
  | 'lastUpdated'
  | 'downloadRulebook'
  | 'keyRules'
  | 'equipmentRequirements'
  | 'rule1'
  | 'rule2'
  | 'rule3'
  | 'rule4'
  | 'equipment1'
  | 'equipment2'
  | 'equipment3'
  | 'equipment4'
  | 'testimonials'
  | 'whatParticipantsSay'
  | 'testimonialsDescription'
  
  // Testimonials
  | 'testimonial_askar_quote'
  | 'testimonial_askar_name'
  | 'testimonial_askar_role'
  | 'testimonial_laura_quote'
  | 'testimonial_laura_name'
  | 'testimonial_laura_role'
  | 'testimonial_marat_quote'
  | 'testimonial_marat_name'
  | 'testimonial_marat_role'
  | 'shareYourExperience'
  | 'fullName'
  | 'rolePosition'
  | 'yourFeedback'
  | 'yourName'
  | 'participantRole'
  | 'shareExperience'
  | 'uploadPhoto'
  | 'submitFeedback'
  | 'submitting'
  | 'thankYouForFeedback'
  | 'feedbackSubmitted'
  
  // Contact section
  | 'getInTouch'
  | 'contactInfo'
  | 'email'
  | 'phone'
  | 'headquarters'
  | 'followUs'
  | 'sendMessage'
  | 'yourEmail'
  | 'subject'
  | 'message'
  | 'emailPlaceholder'
  | 'subjectPlaceholder'
  | 'messagePlaceholder'
  | 'sending'
  | 'findUs'
  
  // Footer
  | 'rights'
  | 'quickLinks'
  | 'training_footer'
  | 'freeLessons'
  | 'rtkInstallation'
  | 'opticalFlowSetup'
  | 'payloadDropSystems'
  | 'premiumCourses'
  | 'ourTeam'
  | 'privacy'
  | 'terms'
  | 'cookies'
  | 'designed'

  // Language selector
  | 'language'
  | 'english'
  | 'kazakh'
  | 'russian'
  | 'arabic'
  
  // Error page
  | 'errorCode'
  | 'pageNotFound'
  | 'pageNotFoundMessage'
  | 'backToHome'
  
  // Timer translations
  | 'registrationStartsIn'
  | 'days'
  | 'hours'
  | 'minutes'
  | 'seconds';

// Define the TeamMemberKey type
export type TeamMemberKey = 'petrov' | 'kim' | 'volkov';

// Create a type for team-specific translation keys
export type TeamTranslationKey = `team_${TeamMemberKey}_${'name' | 'title' | 'bio'}`;

export type TestimonialKey = 'askar' | 'laura' | 'marat';

export interface Testimonial {
  key: TestimonialKey;
}
