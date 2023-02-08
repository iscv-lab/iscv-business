import avatarDefault from '@asset/avatar.png';
import { useLoading } from '@components/Loading';

import { useToast } from '@iscv/toast';
import { Modal } from '@iscv/modal';
import clsx from 'clsx';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { Business } from '@graphql/Business';
import { PostStatus } from 'src/types/posts';
import { IPFS_GATEWAY } from '@constants/index';

type FormikForm = {
  image: File | undefined;
  job: string | undefined;
  content: string | undefined;
  hashtag: string | undefined;
  status: PostStatus | undefined;
};

type Props = {
  business: Business | undefined;
  formikForm: FormikForm;
};
function ReviewPost(props: Props) {
  const { business } = props;
  const { content, job, hashtag, status, image } = props.formikForm;
  const [openClose, setOpenClose] = useState(false);
  const { t } = useTranslation('component', { keyPrefix: 'postItem.index' });
  const toast = useToast();
  const loading = useLoading();
  return (
    <div className={clsx(styles.item, styles.disabled)}>
      <div className={styles.head}>
        <div className={styles.personalWrapper}>
          <Link to={`/page/${business?.id}`} className={styles.avatarWrapper}>
            <img src={`${IPFS_GATEWAY}${business?.sourceImage}`}></img>
          </Link>
          <div className={styles.avatarTextWrapper}>
            <Link to={`/page/${business?.id}`} className={styles.name}>
              {business?.name}
            </Link>
            <div className={styles.date}>{new Date().toLocaleString()}</div>
            {/* <div className={clsx(styles.container, styles[PostStatus[status].toLowerCase()])}>
                <a>{t(PostStatus[status].toLowerCase())}</a>
              </div> */}
          </div>
        </div>
        <div className={styles.option}>
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </div>
      <div className={styles.hashtag}>
        <i className="fa-regular fa-hashtag"></i>
        <a>{hashtag}</a>
      </div>
      <div className={styles.job}>
        <i className="fa-solid fa-tags"></i>
        <a>{job}</a>
      </div>
      <div className={styles.contentWrapper}>
        <p>{content}</p>

        <div className={styles.imageContent}>
          {image && <img src={window.URL.createObjectURL(image)} alt="post"></img>}
          {!image && <i className={clsx('fa-duotone fa-image')}></i>}
        </div>
      </div>
      <div className={styles.foot}>
        <div className={styles.footItem}>
          <i className="fa-regular fa-heart"></i>
          <div className={styles.footItemTitle}> {t('like')}</div>
        </div>
        <div className={styles.footItem}>
          <i className="fa-regular fa-comment"></i>
          <div className={styles.footItemTitle}> {t('comment')}</div>
        </div>
        <div className={styles.footItem}>
          <i className="fa-regular fa-bookmark"></i>
          <div className={styles.footItemTitle}> {t('bookmark')}</div>
        </div>
        <div className={styles.footItem}>
          <i className="fa-light fa-share-nodes"></i>
          <div className={styles.footItemTitle}> {t('share')}</div>
        </div>
        {/* {!applied && loginState.for == 'employee' && parseInt(status) == 1 && (
            <button onClick={handleApplyPost} className={styles.footItem}>
              <div className={styles.buttonApply}> {t('apply')}</div>
            </button>
          )}
          {loginState.for == 'business' && id == loginState.id && parseInt(status) == 1 && (
            <button onClick={() => setOpenClose(true)} className={styles.footItem}>
              <div className={styles.buttonApply}> {t('close')}</div>
            </button>
          )}
          {parseInt(status) != 1 && (
            <button className={styles.footItem}>
              <div className={styles.buttonApply}> {t('closed')}</div>
            </button>
          )}
          {loginState.for == 'employee' && applied && (
            <button className={styles.footItem}>
              <div className={clsx(styles.buttonApply, styles.applied)}> {t('applied')}</div>
            </button>
          )} */}
      </div>
      {/* <div className={styles.commentWrapper}>
          <div className={styles.commentItem}>
            <img src={avatar} className={styles.commentIcon}></img>
            <div className={styles.commentInputWrapper}>
              <textarea
                onKeyDown={(e) => {
                  e.target.style.height = 'inherit'
                  e.target.style.height = `${e.target.scrollHeight}px`
                }}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your comment.."
              ></textarea>
              <div className={styles.commentTool}>
                <i className={clsx(styles.commentSend, 'fa-solid fa-paper-plane-top')}></i>
              </div>
            </div>
          </div>
          <CommentItem key={0}></CommentItem>
        </div> */}
    </div>
  );
}

export default ReviewPost;
