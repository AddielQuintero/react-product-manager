import { useApp } from '../../context'

export const Profile = () => {
  const app = useApp()

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Profile
        </h1>
        {/* {auth?.user && ( */}
          <p className="mt-6 text-base leading-7 text-gray-600">
            welcome {app.user?.userName}
          </p>
        {/* )} */}
      </div>
    </main>
  )
}
