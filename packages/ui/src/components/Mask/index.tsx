import React, { useState, useEffect } from 'react';
import { Animated } from "react-animated-css";
import './index.less';

type MaskProps = {
  isVisible: boolean
}

const Mask: React.FC<MaskProps> = ({
  isVisible
}) => {
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    if (isVisible) {
      setShow(isVisible);
    }
    return () => { }
  }, [isVisible])
  return <Animated style={{ height: '100%' }} animationIn="fadeIn" animationOut="fadeOut" isVisible={isVisible}>
    {
      show && <div className="mask"></div>
    }
  </Animated>;
};

export default Mask;
