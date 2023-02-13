import PostStatus from './PostStatus';
import clsx from 'clsx';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { routes } from 'src/routes';
import { Post } from '@graphql/Posts';
import { IPFS_GATEWAY } from '@constants/index';

function Item({ post }: { post: Post }) {
  const { job, time, status, content, id, imageSource } = post;
  const navigate = useNavigate();
  const { t } = useTranslation('page', { keyPrefix: 'dashboard.posts' });

  const gotoViewPost = () => {
    navigate({ pathname: `view/${id}` });
  };
  return (
    <tr onClick={gotoViewPost}>
      <td>
        <div className={styles.name}>
          <img src={`${IPFS_GATEWAY}${imageSource}`}></img>
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
            <p className={styles.quantity}> {/* {list?.length} {t('applier')} */}</p>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default Item;
