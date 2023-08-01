import { NavLink } from 'react-router-dom'
import { useApp } from '@/context'
import { TLink } from '@/types'

export const CustomLinkList = ({ navigation, className, handleClose }: TLink) => {
  const app = useApp()
  // console.log(auth?.user)

  return (
    <>
      {navigation.map((item) => {
        if (item.private && !app?.user) return null
        return (
          <NavLink
            key={item.name}
            to={item.to}
            onClick={handleClose}
            className={className}
          >
            {item.name}
          </NavLink>
        )
      })}
    </>
  )
}
