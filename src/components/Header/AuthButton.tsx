import { NavLink } from 'react-router-dom'
import { TAuthButton } from '@/types'
import { useApp } from '@/context'

export const AuthButton = ({ className, handleClose }: TAuthButton) => {
  const app = useApp()

  const { to, linkText, handleClick, icon } = app.AuthConfigItem

  const handleMenu = () => {
    handleClick?.()
    handleClose?.()
  }

  return (
    <>
      <div className={className}>
        <NavLink
          to={to}
          className="flex items-center text-sm font-semibold leading-6 text-gray-900"
          onClick={handleMenu}
        >
          {linkText} {icon}
        </NavLink>
      </div>
    </>
  )
}
