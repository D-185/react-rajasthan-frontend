import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

const DynamicSection = ({ section }) => {
    console.log('section', section)
  if (!section || !section.__typename) return null;

  switch (section.__typename) {
    case 'ComponentSharedSection1':
      return <Section1 data={section} />;
    case 'ComponentSharedSection2':
      return <Section2 data={section} />;
    case 'ComponentSharedSection3':
      return <Section3 data={section} />;
    default:
      console.warn(`No component found for section type: ${section.__typename}`);
      return null;
  }
};

export default DynamicSection;
