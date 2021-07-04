import React, { useState, useEffect } from 'react';
import { Animated } from "react-animated-css";
import './index.less';

type SlideProps = {
  height?: number | string,
  width?: number | string,
  isVisible: boolean,
  // onClick: (content: string) => void
}

const Slide: React.FC<SlideProps> = ({
  isVisible,
  width = 200,
  // onClick = () => { },
  children
}) => {
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    if (isVisible) {
      setShow(isVisible);
    }
    return () => { }
  }, [isVisible])
  return <Animated style={{ height: '100%', width: '100%' }} animationIn="fadeInLeft" animationOut="fadeOutLeft" isVisible={isVisible}>
    {
      show && <div className="slide" style={{
        width: typeof width === 'number' ? `${width}px` : width,
      }}>
        {children}
        {/* <p onClick={(e) => {
          console.log('e', e.currentTarget.innerText);
          onClick(e.currentTarget.innerText);
        }}>hh</p> */}
      </div>
    }
  </Animated>;
};

export default Slide;
