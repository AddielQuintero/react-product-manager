import { NavLink } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { CustomButton, CustomDialog, CustomLinkList } from '../common'
import { AuthButton } from './AuthButton'
import { MobileMenuProps } from '../../types'

export const MobileMenu = (props: MobileMenuProps) => {
  const { navigation, open, onClose, closeModal } = props

  const styles = {
    dialog: '',
    panel: 'fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10',
    title: '',
    content: 'fixed inset-0 z-50',
    backdrop: 'fixed inset-0 bg-black bg-opacity-25',
  }

  const transitionProps = {
    backdrop: {
      enter: 'ease-out duration-300',
      enterFrom: 'opacity-0',
      enterTo: 'opacity-100',
      leave: 'ease-in duration-200',
      leaveFrom: 'opacity-100',
      leaveTo: 'opacity-0',
    },
    panel: {
      enter: 'transform transition ease-in-out duration-300 sm:duration-400',
      enterFrom: 'translate-x-full',
      enterTo: 'translate-x-0',
      leave: 'transform transition ease-in-out duration-300 sm:duration-400',
      leaveFrom: 'translate-x-0',
      leaveTo: 'translate-x-full',
    },
  }

  return (
    <CustomDialog
      show={open}
      onClose={onClose}
      className="md:hidden"
      styles={styles}
      transitionProps={transitionProps}
    >
      <div className="flex items-center justify-between">
        <NavLink to="/" className="-m-1.5 p-1.5" onClick={closeModal}>
          <span className="sr-only">Your Company</span>
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=gray&shade=600"
            alt=""
          />
        </NavLink>
        <CustomButton
          type="button"
          className="-m-2.5 rounded-md p-2.5 text-gray-700"
          onClick={closeModal}
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </CustomButton>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
            <CustomLinkList
              navigation={navigation}
              handleClose={closeModal}
              className={({ isActive, isPending }) =>
                `-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 ${
                  isPending
                    ? ''
                    : isActive
                    ? 'text-indigo-600'
                    : 'text-gray-900'
                }`
              }
            />
          </div>

          <AuthButton handleClose={closeModal} className="py-6" />
        </div>
      </div>
    </CustomDialog>
  )
}
