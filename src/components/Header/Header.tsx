import { NavLink } from 'react-router-dom'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { MobileMenu } from './MobileMenu'
import { CustomButton, CustomLinkList } from '../common'
import { AuthButton } from './AuthButton'
import { NavigateProps } from '../../types'
import { useDialog } from '../../hooks'

export const Header = ({ navigation }: { navigation: NavigateProps }) => {
  const { isOpen, openModal, closeModal } = useDialog()

  return (
    <header className="relative z-10">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex md:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=gray&shade=600"
              alt=""
            />
          </NavLink>
        </div>
        <div className="flex md:hidden">
          <CustomButton
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={openModal}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </CustomButton>
        </div>

        <div className="hidden md:flex md:gap-x-12">
          <CustomLinkList
            navigation={navigation}
            className={({ isActive, isPending }) =>
              `text-sm font-semibold leading-6 ${
                isPending ? '' : isActive ? 'text-indigo-600' : 'text-gray-900'
              }`
            }
          />
        </div>

        <AuthButton className="hidden md:flex md:flex-1 md:justify-end" />
      </nav>

      <MobileMenu navigation={navigation} open={isOpen} onClose={closeModal} closeModal={closeModal} />
    </header>
  )
}
