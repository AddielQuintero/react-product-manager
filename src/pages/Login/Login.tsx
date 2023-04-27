import { FormEventHandler, ChangeEventHandler, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { CustomButton, CustomInput } from '../../components'
import { useApp } from '../../context'

export const Login = () => {
  const [userName, setUserName] = useState('')
  const navigate = useNavigate()
  const app = useApp()

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    app.login(userName)
    navigate('/product')
  }

  const handleChangeInputUser: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setUserName(target.value)
  }
  // console.log(auth?.user?.userName)

  if (app.user) return <Navigate to="/profile" />

  return (
    <>
      <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Login in to your account
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  User
                </label>
                <CustomInput
                  value={userName}
                  onChange={handleChangeInputUser}
                  id="user"
                  name="user"
                  type="text"
                  required
                  className="relative block w-full rounded border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="User"
                />
              </div>
            </div>
            <div>
              <CustomButton
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
