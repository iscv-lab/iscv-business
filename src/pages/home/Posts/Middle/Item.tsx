import PostStatus from '@components/PostItem/PostStatus';
import clsx from 'clsx';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

function Item(props: any) {
  const { businessPostId, content, hashTag, id, imageSource, job, status, time } = props;
  const navigate = useNavigate();
  const { t } = useTranslation('page', { keyPrefix: 'dashboard.posts' });
  const [image, setImage] = useState();
  const gotoViewPost = () => {
    navigate(`/dashboard?tab=posts&businessPostId=${businessPostId}`);
  };
  return (
    <tr onClick={gotoViewPost}>
      <td>
        <div className={styles.name}>
          <img src={image}></img>
          <p>{job}</p>
        </div>
      </td>
      <td>{new Date(time * 1000).toLocaleString()}</td>
      <td>
        <PostStatus type={status}></PostStatus>
      </td>
      <td>
        <div className={styles.detail}>
          {/* <div className={styles.recruit}>Mobile App</div> */}
          <p>{content}</p>
        </div>
      </td>
      <td>
        <div className={styles.apply}>
          <div className={styles.iconWrapper}>
            <div className={styles.icon}>
              <img
                className={styles.itemIcon}
                src="https://image.thanhnien.vn/1200x630/Uploaded/2022/zxaijr/2021_03_16/rosealbumkyluc1_lgic.png"
              ></img>
              <div className={clsx(styles.itemIcon, styles.push)}>+1</div>
            </div>
            <p className={styles.quantity}>
              {' '}
              {/* {list?.length} {t('applier')} */}
            </p>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default Item;
