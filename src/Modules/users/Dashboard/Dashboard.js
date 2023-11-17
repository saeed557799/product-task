import React from 'react';
import Courses from './Courses/Courses';
import Charts from './Charts/Charts';
import Feedback from './Feedback/Feedback';
export default function Dashboard() {
  return (
    <>
      <Courses />
      <Charts />
      <Feedback />
    </>
  );
}
