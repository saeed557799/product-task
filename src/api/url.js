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
    submitQuiz: 'question/submit',
    nextQuestion: 'question/nextQuestion',
    finishQuiz: 'url',
  },
  dashboard: {
    getSubjectPrefrence: 'subject-pref/dashboard',
    postSubjectPrefrence: 'subject-pref',
  },
  user: {
    user: 'auth/user',
  },
  result: {
    finishQuiezz: '',
  },
};

export default urls;
