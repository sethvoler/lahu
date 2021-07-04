import React, { useState, useEffect } from 'react';
import './index.less';

const PAGE_LIST = [
  '页面一',
  '页面二',
  '页面三',
  '页面四',
  '页面五',
];

type ListProps = {
  onClick: (content: string) => void
}

const PageList: React.FC<ListProps> = ({ onClick }) => {
  return <div className="page-list">
    {
      PAGE_LIST.map(page => {
        return <div onClick={(e) => onClick(e.currentTarget.innerText)} className="page-item" key={page}>
          {page}
        </div>;
      })
    }
  </div>;
};

export default PageList;
