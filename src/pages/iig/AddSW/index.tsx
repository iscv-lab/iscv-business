import Button from '@components/Button'
import { Modal, useLoading } from '@components/index'
import { useToast } from '@iscv/toast'

import { putApproved } from '@apis/iig'
import { useIIG } from '@contracts/iig/useIIG'
import { yupResolver } from '@hookform/resolvers/yup'
import { RootState } from '@redux/store'
import clsx from 'clsx'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { IForm, getSchema } from './types'

type Props = {
  className?: string
  requestId: string
  employeeId: number
  onSuccess: (...args: any[]) => void
}

const AddSW = (props: Props) => {
  const [open, setOpen] = useState(false)
  const { control, handleSubmit } = useForm<IForm>({
    defaultValues: {
      employeeId: props.employeeId,
      testDate: undefined,
      shiftTest: undefined,
      expireDate: undefined,
      speakingScore: undefined,
      writingScore: undefined
    },
    resolver: yupResolver(getSchema())
  })
  const { t } = useTranslation('page', { keyPrefix: 'dashboard.employeeCertificate' })

  const loading = useLoading()
  const signer = useSelector((state: RootState) => state.auth.signer)
  const toast = useToast()
  const onSubmit = async (data: IForm) => {
    if (!signer) {
      toast.error('Không có người kí.')
      return
    }
    loading.open()
    const iigContract = useIIG(signer)

    await iigContract
      .addSWResult(
        data.employeeId!,
        Math.round(new Date(data.testDate!).getTime() / 1000),
        data.shiftTest!,
        Math.round(new Date(data.expireDate!).getTime() / 100),
        data.speakingScore!,
        data.writingScore!
      )
      .then(async (tx) => {
        await tx.wait().then(async (success) => {
          await putApproved(props.requestId).then(() => {
            props.onSuccess()
            setOpen(false)
            toast.success('Thành công')
          })
        })
      })
      .catch((error) => {
        console.log(error)
        toast.error(error)
      })
      .catch((error) => {
        console.log(error)
        toast.error(error)
      })

    loading.close()
  }
  const onValidate = (errors: any) => {
    console.log(errors)
  }
  return (
    <>
      {open && (
        <Modal
          setShow={setOpen}
          className="w-[500px]"
          title={
            <div className=" text-white text-center text-xl font-semibold w-full">
              {t('add_a_listening_reading_certificate')}
            </div>
          }
        >
          <div className={clsx('p-6 flex flex-col gap-4')}>
            <div className=" flex flex-col gap-4">
              <div>
                <div className=" text-lg font-normal">{t('test_date')}</div>

                <Controller
                  name={'testDate'}
                  control={control}
                  render={({ field, fieldState }) => {
                    return (
                      <div className="mt-2">
                        <input
                          type="date"
                          className="input input-bordered w-full"
                          onChange={field.onChange}
                          value={field.value}
                        />
                        {fieldState.error?.message && <p>{fieldState.error?.message}</p>}
                      </div>
                    )
                  }}
                ></Controller>
              </div>

              <div>
                <div className=" text-lg font-normal">{t('test_shift')}</div>

                <Controller
                  control={control}
                  name={'shiftTest'}
                  render={({ field, fieldState }) => {
                    return (
                      <div className="mt-2">
                        <input
                          type="text"
                          className="input input-bordered w-full"
                          onChange={field.onChange}
                          value={field.value}
                        />
                        {fieldState.error?.message && <p>{fieldState.error?.message}</p>}
                      </div>
                    )
                  }}
                ></Controller>
              </div>

              <div>
                <div className=" text-lg font-normal">{t('expire_date')}</div>

                <Controller
                  control={control}
                  name={'expireDate'}
                  render={({ field, fieldState }) => {
                    return (
                      <div className="mt-2">
                        <input
                          type="date"
                          className="input input-bordered w-full"
                          onChange={field.onChange}
                          value={field.value}
                        />
                        {fieldState.error?.message && <p>{fieldState.error?.message}</p>}
                      </div>
                    )
                  }}
                ></Controller>
              </div>

              <div>
                <div className=" text-lg font-normal">{t('speaking_score')}</div>

                <Controller
                  control={control}
                  name={'speakingScore'}
                  render={({ field, fieldState }) => {
                    return (
                      <div className="mt-2">
                        <input
                          type="text"
                          className="input input-bordered w-full"
                          onChange={field.onChange}
                          value={field.value}
                        />
                        {fieldState.error?.message && <p>{fieldState.error?.message}</p>}
                      </div>
                    )
                  }}
                ></Controller>
              </div>

              <div>
                <div className=" text-lg font-normal">{t('writing_score')}</div>

                <Controller
                  control={control}
                  name={'writingScore'}
                  render={({ field, fieldState }) => {
                    return (
                      <div className="mt-2">
                        <input
                          type="text"
                          className="input input-bordered w-full"
                          onChange={field.onChange}
                          value={field.value}
                        />
                        {fieldState.error?.message && <p>{fieldState.error?.message}</p>}
                      </div>
                    )
                  }}
                ></Controller>
              </div>
            </div>

            <Button onClick={handleSubmit(onSubmit, onValidate)}>Lưu</Button>
          </div>
        </Modal>
      )}
      <Button onClick={() => setOpen(true)} className={props.className}>
        {t('add')} SW
      </Button>
    </>
  )
}

export default AddSW
