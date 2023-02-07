import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import handleClickOutside from '@helpers/handleClickOutside';

type Props = {
  content: React.ReactNode;
  children: React.ReactNode;
};

export default function Index(props: Props) {
  const { content, children } = props;
  const [onShow, setOnShow] = useState(false);
  const wrapperRef = useRef(null);
  const toggleRef = useRef(null);
  useEffect(() => {
    handleClickOutside([wrapperRef.current, toggleRef.current], onShow, setOnShow);
  }, [wrapperRef.current, toggleRef.current, onShow]);
  return (
    <div ref={toggleRef} className={styles.tooltip}>
      <div onClick={() => setOnShow(!onShow)}> {children || 'Button'}</div>

      {onShow && (
        <span ref={wrapperRef} className={clsx(styles.tooltipContent, styles.bottom)}>
          {content}
        </span>
      )}
    </div>
  );
}
