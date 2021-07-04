import React, { useState } from 'react';
import { Slide, Mask, PageList, Editor } from '@/comp/index';
import { json2html } from '../../utils';
import './index.less';

const SCHEMA = {
  tag: 'root',
  props: {},
  children: []
};

const PageModel: React.FC = () => {
  const [showList, setShowList] = useState<boolean>(false);
  const [maskShow, setMaskShow] = useState<boolean>(false);
  const [mode, setMode] = useState<string>('');
  const [content, setContent] = useState<string>('content');

  const toggleHandle = (action: string) => {
    setShowList(!showList);
    setMaskShow(!maskShow);
    setMode(action);
  };

  const pageHandle = (page: string) => {
    toggleHandle('');
    setContent(page);
  };

  const switchRender = () => {
    switch (mode) {
      case '切换页面': {
        return <PageList onClick={(content) => pageHandle(content)} />;
      };
      case '显示shema': {
        return <Editor language={'json'} code={JSON.stringify(SCHEMA, null, 2)} />;
      };
      case '显示代码': {
        return <Editor language={'html'} code={json2html(SCHEMA)} />;
      };
      default: {
        return null;
      }
    }
  }

  return <div className="page-model" >
    <div className="page-actions">
      {
        ['切换页面', '显示shema', '显示代码'].map(btn => {
          return <span
            className={mode === btn ? 'btn btn-active' : 'btn'}
            key={btn}
            onClick={(e) => toggleHandle(e.currentTarget.innerText)}
          >{btn}</span>;
        })
      }
    </div>
    <div className="page-node-pane">
      left
    </div>
    <div className="page-canvas">
      <div>{content}</div>
    </div>
    <div className="page-setting-pane">
      right
    </div>
    <div className="page-slide">
      <Slide isVisible={showList} width={mode === '' ? 100 : '100%'}>
        {switchRender()}
      </Slide>
    </div>
    {
      maskShow && <div className="page-mask" onClick={() => toggleHandle('')}>
        <Mask isVisible={maskShow} />
      </div>
    }
  </div>;
};

export default PageModel;

// isCode ? <Code /> : <List />
          // isCode ? <div>code</div> : <div onClick={(e) => {
          //   setContent(e.currentTarget.innerText);
          //   toggleHandle();
          // }} ><iframe style={{ width: '100%' }} src="https://ask.csdn.net/questions/339083"></iframe></div>
