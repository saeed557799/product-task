const urls = {
  auth: {
    login: 'auth/login',
    signup: 'auth/signup',
  },
  content: {
    subjects: 'subjects/with-papers',
    topics: 'paper/with-topics',
    contentSummary: 'topic/get-content',
  },
  quiz: {
    startQuiz: 'url',
    submitQuiz: 'url',
    nextQuestion: 'url',
    finishQuiz: 'url',
  },
  dashboard: {
    getSubjectPrefrence: 'subject-pref/dashboard',
    postSubjectPrefrence: 'subject-pref',
  },
};

export default urls;
