export const Questions = {
  statusCode: 200,
  message: 'Question fetched successfully',
  question: {
    id: 'fc9fe740-9313-476c-8517-3d2fadc8daba',
    quizId: '4536f7c9-41eb-4b60-b688-cf87c5433ee0',
    question: 'What is the definition of disproportionation?',
    difficultyLevel: 1100,
    hint: 'The reaction involves atoms, not just electrons or ions.',
    explaination:
      'Disproportionation is a redox reaction in which two reactants exchange atoms (or ions) to form two new products with different oxidation states. This type of reaction is often seen in the presence of complex ions, when an oxidising and reducing agent simultaneously oxidise and reduce one another.',
    tag: 'Disproportionation',
    createdAt: '2023-11-13T11:45:41.138Z',
    updatedAt: '2023-11-13T11:45:41.138Z',
    answers: [
      {
        id: '7443387b-d736-4c0e-b545-38da26ff363d',
        answer:
          'A reaction in which two reactants exchange nuclei to form two new products with different electronic configurations.',
      },
      {
        id: 'a6eee9c7-7524-4b97-be65-21d1c6c8e22c',
        answer:
          'A reaction in which two reactants combine to form one new product.',
      },
      {
        id: 'bd2ea5a2-1dbe-4183-84c3-07982686b7ab',
        answer:
          'A reaction in which two reactants exchange atoms to form two new products with different oxidation states.',
      },
      {
        id: 'f132a73f-3c6d-4196-af13-9643d0070ea2',
        answer:
          'A reaction in which two reactants exchange electrons to form two new products with different oxidation numbers.',
      },
    ],
  },
};

export const SubmitResponse = {
  statusCode: 200,
  message: 'Answer Submitted successfully',
  data: {
    isCorrect: true,
  },
};
