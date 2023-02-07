import { Dropdown } from '@components/Dropdown';
import { useLoading } from '@components/Loading';
import PostItem from '@components/PostItem';
import TextField from '@components/TextField';
import { useToast } from '@iscv/Toast';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '../../Components/Navigation';
import styles from './styles.module.scss';
// Page/Create Post
function Index() {
  const [hashtag, setHashtag] = useState('hashtag');
  const [openHashtag, setOpenHashtag] = useState(false);
  // const [content, setContent] = useState('');
  const [job, setJob] = useState('');
  const navigate = useNavigate();
  const loading = useLoading();
  const toast = useToast();
  const [image, setImage] = useState();

  const openImageRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation('page', { keyPrefix: 'dashboard.createPost' });

  return (
    <div className={styles.container}>
      <Navigation title={t('create_post')} to={"-1"}></Navigation>

      <div className={styles.group}>
        <div className={styles.left}>
          <div className={styles.image}>
            <div className={styles.panelTitle}>
              <a>{t('media')}</a>
            </div>
            <button onClick={() => openImageRef?.current?.click()} className={styles.imageTool}>
              <i className="fa-regular fa-hexagon-image"></i>
              <a>{t('add_photo')}</a>
              <input
                type="file"
                id="file"
                multiple={false}
                accept="image/png, image/jpg, image/jpeg"
                // onChange={(e) => setImage(e.target.files?.item(0))}
                ref={openImageRef}
                style={{ display: 'none' }}
              />
            </button>
          </div>
          <div className={styles.job}>
            <div className={styles.panelTitle}>
              <a>{t('skills')}</a>
            </div>
            <input
              type="text"
              value={job}
              onChange={(e) => setJob(e.target.value)}
              className={styles.jobInput}
              placeholder={t('type_your_skills_needed').toString()}
            ></input>
          </div>
          <div className={styles.content}>
            <div className={styles.panelTitle}>
              <a>{t('content')}</a>
            </div>
            <Dropdown
              content={
                <div className={styles.contentDropdown}>
                  <span
                    onClick={() => {
                      setHashtag('common');
                      setOpenHashtag(false);
                    }}
                  >
                    {'common'}
                  </span>
                  <span
                    onClick={() => {
                      setHashtag('recruit');
                      setOpenHashtag(false);
                    }}
                  >
                    {'recruit'}
                  </span>
                </div>
              }
            >
              <div onClick={() => setOpenHashtag(true)} className={styles.hashtag}>
                <i className={'fa-solid fa-star'}></i>
                <a>{hashtag}</a>
              </div>
            </Dropdown>

            {/* <TextField
              value={content}
              onChange={setContent}
              placeholder={t('describe').toString()}
            ></TextField> */}
            <div className={styles.tool}></div>
          </div>

          <div className={styles.button}>
            {/* <button onClick={handlePublish} className={styles.publish}>
              {t('publish')}
            </button>
            <Link to="/dashboard?tab=posts" className={styles.cancel}>
              {t('cancel')}
            </Link> */}
          </div>
        </div>
        <div className={styles.right}>
          {/* {console.log(image)} */}
          {/* <PostItem
            name={loginState.name}
            time={new Date().getTime() / 1000}
            content={content}
            job={job}
            id={loginState.id}
            hashTag={hashtag}
            status={1}
            typeFor={'business'}
            imageSource={image}
            disabled
          ></PostItem> */}
        </div>
      </div>
    </div>
  );
}

export default Index;
