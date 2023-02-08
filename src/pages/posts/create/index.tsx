import { useQuery } from '@apollo/client';
import Navigation from '@components/Navigation';
import TextField from '@components/TextField';
import { GetBusinessByUser, getBusinessByUser } from '@graphql/Business';
import { useToast } from '@iscv/Toast';
import { RootState } from '@redux/store';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PostStatus } from 'src/types/posts';
import * as Yup from 'yup';
import ReviewPost from './ReviewPost';
import styles from './styles.module.scss';
import { usePost } from './usePost';
// Page/Create Post
function Index() {
  const account = useSelector((state: RootState) => state.auth.account);
  const signer = useSelector((state: RootState) => state.auth.signer);
  const dataBusiness = useQuery<GetBusinessByUser>(getBusinessByUser, {
    variables: { user: account },
    notifyOnNetworkStatusChange: true,
  });
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      image: undefined,
      job: "",
      content: "",
      hashtag: "",
      status: PostStatus.OPEN,
    },
    validationSchema: Yup.object({
      image: Yup.mixed()
        .test('type', 'Only the following formats are accepted: .jpeg, .jpg, .jpg', (value) => {
          return (
            value &&
            (value.type === 'image/jpeg' ||
              value.type === 'image/jpg' ||
              value.type === 'image/png')
          );
        })
        .required('required'),
      job: Yup.string().required('required'),
      content: Yup.string().required('required'),
      hashtag: Yup.string().required('required'),
      status: Yup.mixed<PostStatus>()
        .oneOf(Object.values(PostStatus) as PostStatus[])
        .required('required'),
    }),
    onSubmit: async (values) => {
      if (!signer || !dataBusiness.data?.businessByUser.id) return;
      usePost(values as any, toast, signer, dataBusiness.data?.businessByUser.id);
    },
  });
  const { t } = useTranslation('page', { keyPrefix: 'dashboard.createPost' });

  return (
    <div className={styles.container}>
      <Navigation title={t('create_post')} to={-1}></Navigation>
      <div className={styles.group}>
        <form onSubmit={formik.handleSubmit} className={styles.left}>
          <div className={styles.image}>
            <div className={styles.panelTitle}>
              <a>{t('media')}</a>
            </div>
            <label className={styles.imageTool}>
              <i className="fa-regular fa-hexagon-image"></i>
              <a>{t('add_photo')}</a>
              <input
                type="file"
                id="image"
                name="image"
                multiple={false}
                accept="image/png, image/jpg, image/jpeg"
                onChange={(e) => formik.setFieldValue('image', e.target.files?.item(0))}
                style={{ display: 'none' }}
              ></input>
            </label>
          </div>
          <div className={styles.job}>
            <div className={styles.panelTitle}>
              <a>{t('skills')}</a>
            </div>
            <input
              type="text"
              value={formik.values.job}
              id="job"
              name="job"
              onChange={formik.handleChange}
              className={styles.jobInput}
              placeholder={t('type_your_skills_needed').toString()}
            ></input>
          </div>
          <div className={styles.content}>
            <div className={styles.panelTitle}>
              <a>{t('content')}</a>
            </div>

            <TextField
              id="content"
              name="content"
              value={formik.values.content}
              onChange={formik.handleChange}
              placeholder={t('describe').toString()}
            ></TextField>
            <div className={styles.tool}></div>
          </div>
          <div className={styles.job}>
            <div className={styles.panelTitle}>
              <a>{t('hashtag')}</a>
            </div>
            <input
              type="text"
              value={formik.values.hashtag}
              id="hashtag"
              name="hashtag"
              onChange={formik.handleChange}
              className={styles.jobInput}
            ></input>
          </div>
          <div className={styles.job}>
            <div className={styles.panelTitle}>
              <a>{t('status')}</a>
            </div>
            <input
              type="text"
              value={formik.values.status}
              id="status"
              name="status"
              onChange={formik.handleChange}
              className={styles.jobInput}
            ></input>
          </div>
          <div className={styles.button}>
            <input type="submit" className={styles.publish} value={t('publish').toString()}></input>
            <Link to={-1 as any} className={styles.cancel}>
              {t('cancel')}
            </Link>
          </div>
        </form>
        <div className={styles.right}>
          <ReviewPost
            business={dataBusiness.data?.businessByUser}
            formikForm={formik.values}
          ></ReviewPost>
        </div>
      </div>
    </div>
  );
}

export default Index;
