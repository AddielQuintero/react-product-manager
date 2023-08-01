import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CustomDialogProps } from '@/types'

export const CustomDialog = (props: CustomDialogProps): JSX.Element => {
  const { open, onClose, title, styles, children, className, transition } =
    props
  const { dialog, panel, title: titleStyle, content, backdrop } = styles || {}

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className={className} onClose={onClose}>
        <Transition.Child as={Fragment} {...transition.backdrop}>
          <div className={backdrop} />
        </Transition.Child>

        <div className={dialog}>
          <div className={content}>
            <Transition.Child as={Fragment} {...transition.panel}>
              <Dialog.Panel className={panel}>
                <Dialog.Title as="h3" className={titleStyle}>
                  {title}
                </Dialog.Title>

                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
