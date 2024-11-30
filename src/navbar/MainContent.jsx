import React from 'react';

import LoanCalculator from '../component/LoanCalculator';
import SortFAQ from './SortFAQ';
import FrontPage from '../component/FrontPage';
import WhoWeAre from '../component/WhoWeAre';
import ScrollImages from '../component/ScrollImages';
import LoanProcess from '../component/LoanProcess';
function MainContent() {
 
  return (
    <div>
      <FrontPage/>
      <WhoWeAre/>
      <ScrollImages/>
      <LoanProcess/>
      <LoanCalculator />
      
    
    
      
      <SortFAQ />
    </div>
  );
}

export default MainContent;
