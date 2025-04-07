
export type TeamMemberKey = 'petrov' | 'kim' | 'volkov';
export type TeamMemberProperty = 'name' | 'title' | 'bio';
export type TeamTranslationKey = `team_${TeamMemberKey}_${TeamMemberProperty}`;

export type TranslationKey =
  | 'home'
  | 'competitions'
  | 'training'
  | 'contacts'
  | 'contactUs'
  | 'heroTitle'
  | 'heroSubtitle'
  | 'learnMore'
  | 'startTraining'
  | 'registerCompetition'
  | 'registration'
  | 'problemTitle'
  | 'problemText1'
  | 'problemText2'
  | 'initiative'
  | 'quote'
  | 'president'
  | 'ourPrograms'
  | 'programsTitle'
  | 'programsSubtitle'
  | 'exploreAll'
  | 'meetTeam'
  | 'teamTitle'
  | 'teamSubtitle'
  | TeamTranslationKey
  | 'premierUAVCompetition'
  | 'mdc'
  | 'multiDroneChampionship'
  | 'competitionDescription'
  | 'registerNow'
  | 'registrationForm'
  | 'eventDetails'
  | 'dateTime'
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
  | 'shareYourExperience'
  | 'fullName'
  | 'rolePosition'
  | 'yourFeedback'
  | 'yourName'
  | 'participantRole'
  | 'shareExperience'
  | 'uploadPhoto'
  | 'submitFeedback'
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
  | 'language'
  | 'english'
  | 'kazakh'
  | 'russian'
  | 'arabic'
  | 'errorCode'
  | 'pageNotFound'
  | 'pageNotFoundMessage'
  | 'backToHome';

export type TranslationObject = Record<TranslationKey, string>;
