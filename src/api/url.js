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
    reportQuestion: 'report-question',
  },
  dashboard: {
    getSubjectPrefrence: 'subject-pref/dashboard',
    postSubjectPrefrence: 'subject-pref',
    continueQuiz: 'user-quiz/get-continue-quiz',
    quizGraph: '/user-quiz/graph/quiz',
  },
  user: {
    user: 'auth/user',
  },
  result: {
    finishQuiezz: '',
  },
};

export default urls;
