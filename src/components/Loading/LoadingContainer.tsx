import React, { memo, useEffect, useState } from 'react';
import { RingLoader } from 'react-spinners';
import styles from './styles.module.scss';
import events from 'events';

export const eventEmitter = new events.EventEmitter();

function Loading() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    eventEmitter.on('open', () => {
      setOpen(true);
    });
    eventEmitter.on('close', () => {
      setOpen(false);
    });
  }, []);
  if (!open) return null;
  return (
    <div className={styles.container}>
      <RingLoader
        color={'#133ceb'}
        loading={true}
        cssOverride={{
          position: 'fixed',
          top: '40%',
          left: '45%',
        }}
        size={150}
      />
    </div>
  );
}

export default memo(Loading);
