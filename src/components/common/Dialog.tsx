import { useState, Fragment, ReactNode, ElementType } from 'react'
import { Dialog, DialogProps, Transition } from '@headlessui/react'

// interface DialogProps {

// }

export const CustomDialog = (props: any): JSX.Element => {
  const { show, onClose, title, styles, children, className, transitionProps } = props
  const { dialog, panel, title: titleStyle, content, backdrop } = styles || {}

  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className={className} onClose={onClose}>
        <Transition.Child as={Fragment} {...transitionProps.backdrop}>
          <div className={backdrop} />
        </Transition.Child>

        <div className={dialog}>
          <div className={content}>
            <Transition.Child as={Fragment} {...transitionProps.panel}>
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
