import Navigation from '@components/Navigation'
import TextField from '@components/TextField'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { PostStatus } from 'src/globaltypes/posts'
import * as Yup from 'yup'
import styles from './styles.module.scss'
import ReviewPost from './ReviewPost'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { useBusiness } from '@contracts/useBusiness'
import { useLoading } from '@components/Loading'
import { postImage } from '@apis/common/image'
import { useToast } from '@iscv/toast'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'
import { newPost } from '@apis/post'

// Page/Create Post

export type IForm = {
  image: File | undefined
  video: File | undefined
  job: string
  content: string
  hashtag: string
  status: PostStatus
}
const initialValues = {
  image: undefined,
  video: undefined,
  job: '',
  content: '',
  hashtag: '',
  status: PostStatus.OPEN
}
const schema = Yup.object({
  image: Yup.mixed()
    .optional()
    .test('type', 'Only the following formats are accepted: .jpeg, .jpg, .jpg', (value: any) => {
      return value
        ? value.type === 'image/jpeg' || value.type === 'image/jpg' || value.type === 'image/png'
        : true
    }),
  video: Yup.mixed()
    .optional()
    .test('type', 'Only the following formats are accepted: video/*', (value: any) => {
      return value
        ? value.type === 'video/mp4' || value.type === 'video/mkv' || value.type === 'video/webm'
        : true
    }),
  job: Yup.string().required('required'),
  content: Yup.string().required('required'),
  hashtag: Yup.string().required('required'),
  status: Yup.mixed<PostStatus>()
    .oneOf(Object.values(PostStatus) as PostStatus[])
    .required('required')
})
function Index() {
  const business = useSelector((root: RootState) => root.auth.business)
  const signer = useSelector((root: RootState) => root.auth.signer)
  const loading = useLoading()
  const toast = useToast()
  const { control, handleSubmit, watch, setValue } = useForm<IForm>({
    defaultValues: initialValues,
    resolver: yupResolver(schema)
  })
  const onSubmit = (data: IForm) => {
    newPost(business!.id, data)
  }
  const onErrors = (errors: any) => console.log(errors)
  // const formik = useFormik<IFormik>({
  //   ,
  //   validationSchema: Yup.object({
  //     image: Yup.mixed()
  //       .test('type', 'Only the following formats are accepted: .jpeg, .jpg, .jpg', (value) => {
  //         return (
  //           value &&
  //           (value.type === 'image/jpeg' ||
  //             value.type === 'image/jpg' ||
  //             value.type === 'image/png')
  //         )
  //       })
  //       .required('required'),
  //     job: Yup.string().required('required'),
  //     content: Yup.string().required('required'),
  //     hashtag: Yup.string().required('required'),
  //     status: Yup.mixed<PostStatus>()
  //       .oneOf(Object.values(PostStatus) as PostStatus[])
  //       .required('required')
  //   }),
  //   onSubmit: async (values) => {
  //     loading.open()
  //     try {
  //       const businessContract = useBusiness(signer!)

  //       const df = new FormData()
  //       df.append('image', values.image!)
  //       const imageSource = await postImage(df).then((success) => success.data)
  //       await businessContract.addPost(
  //         business!.id!,
  //         values.hashtag,
  //         values.job,
  //         values.content,
  //         imageSource,
  //         values.status
  //       )
  //     } catch (error) {
  //       console.log(error)
  //       toast.error()
  //     }
  //     toast.success()
  //     loading.close()
  //   }
  // })

  const { t } = useTranslation('page', { keyPrefix: 'dashboard.createPost' })

  return (
    <div className={styles.container}>
      <Navigation title={t('create_post')} to={-1}></Navigation>
      <div className={styles.group}>
        <form onSubmit={handleSubmit(onSubmit, onErrors)} className={styles.left}>
          <div className={styles.image}>
            <div className={styles.panelTitle}>
              <a>{t('media')}</a>
            </div>
            <div className=" flex gap-1">
              <Controller
                control={control}
                name="image"
                render={({ field }) => (
                  <label className={styles.imageTool}>
                    <i className="fa-regular fa-hexagon-image"></i>
                    <a>{t('add_photo')}</a>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      multiple={false}
                      accept="image/png, image/jpg, image/jpeg"
                      onChange={(e) => field.onChange(e.target.files?.item(0))}
                      style={{ display: 'none' }}
                      disabled={!!watch('video')}
                    ></input>
                  </label>
                )}
              />

              <Controller
                control={control}
                name="video"
                render={({ field }) => (
                  <label className={styles.imageTool}>
                    <i className="fa-regular fa-film"></i>
                    <a>{t('add_video')}</a>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      multiple={false}
                      accept="video/mp4,video/mkv,video/webm"
                      onChange={(e) => field.onChange(e.target.files?.item(0))}
                      style={{ display: 'none' }}
                      disabled={!!watch('image')}
                    ></input>
                  </label>
                )}
              />
            </div>
          </div>
          <div className={styles.job}>
            <div className={styles.panelTitle}>
              <a>{t('skills')}</a>
            </div>
            <Controller
              control={control}
              name="job"
              render={({ field }) => (
                <input
                  type="text"
                  value={field.value}
                  id="job"
                  name="job"
                  onChange={field.onChange}
                  className={styles.jobInput}
                  placeholder={t('type_your_skills_needed').toString()}
                ></input>
              )}
            />
          </div>
          <div className={styles.content}>
            <div className={styles.panelTitle}>
              <a>{t('content')}</a>
            </div>

            <Controller
              control={control}
              name="content"
              render={({ field }) => (
                <TextField
                  id="content"
                  name="content"
                  value={field.value}
                  onChange={field.onChange}
                  placeholder={t('describe').toString()}
                ></TextField>
              )}
            />

            <div className={styles.tool}></div>
          </div>
          <div className={styles.job}>
            <div className={styles.panelTitle}>
              <a>{t('hashtag')}</a>
            </div>
            <Controller
              control={control}
              name="hashtag"
              render={({ field }) => (
                <input
                  type="text"
                  value={field.value}
                  id="hashtag"
                  name="hashtag"
                  onChange={field.onChange}
                  className={styles.jobInput}
                ></input>
              )}
            />
          </div>
          <div className={styles.job}>
            <div className={styles.panelTitle}>
              <a>{t('status')}</a>
            </div>
            <Controller
              control={control}
              name="status"
              render={({ field }) => (
                <input
                  type="text"
                  value={field.value}
                  id="status"
                  name="status"
                  onChange={field.onChange}
                  className={styles.jobInput}
                ></input>
              )}
            />
          </div>
          <div className={styles.button}>
            <input type="submit" className={styles.publish} value={t('publish').toString()}></input>
            <Link to={-1 as any} className={styles.cancel}>
              {t('cancel')}
            </Link>
          </div>
        </form>
        <div className={styles.right}>
          <ReviewPost business={business} control={control} watch={watch}></ReviewPost>
        </div>
      </div>
    </div>
  )
}

export default Index
