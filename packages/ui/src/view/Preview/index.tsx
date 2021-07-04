import React, { useState } from 'react';
import { Slide } from '@/comp/index';
import './index.less';

const Preview: React.FC = () => {

  return <div className="preview" >
    <Slide isVisible={true} width="100%">
      <iframe style={{ width: '100%', height: '100%' }} src="https://ryven.org/" />
    </Slide>
  </div>;
};

export default Preview;
