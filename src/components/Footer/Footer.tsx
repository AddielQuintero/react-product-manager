import { NavLink } from 'react-router-dom'
import { CustomLinkList } from '@/components'
import { NavigateProps } from '@/types'

export const Footer = ({ navigation }: { navigation: NavigateProps }) => {
  return (
    <footer className="bg-gray-800">
      <nav
        className="flex items-center justify-between p-3 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=white"
              alt=""
            />
          </NavLink>
        </div>

        <div className="flex gap-x-12">
          <CustomLinkList
            navigation={navigation}
            className="text-sm font-semibold leading-6 text-white"
          />
        </div>
      </nav>
    </footer>
  )
}
