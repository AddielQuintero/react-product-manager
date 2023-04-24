import { useNavigate, useParams } from 'react-router-dom'
import { CustomButton } from '../../components'
import { authorizePostActions } from '../../types'
import { useApp } from '../../context'
import { NotFound } from '../noFound'
import { generateSlug } from '../../utils'
import { useDialog } from '../../hooks'
import { ProductDialog } from './ProductDialog'

export const ProductDetails = (): JSX.Element => {
  const { isOpen, openModal, closeModal } = useDialog()
  const { slug } = useParams()
  const navigate = useNavigate()
  const app = useApp()
  const blogpost = app.products.find(
    (product) => generateSlug(product.title) === slug
  )

  if (!blogpost || !slug) return <NotFound />

  const { edit, deleted, author } = authorizePostActions(app, blogpost)

  const handleDelete = (slug: string) => {
    const index = app.products.findIndex(
      (product) => generateSlug(product.title) === slug
    )
    if (index !== -1) {
      app.handleDeleteProduct(app.products[index].id)
      navigate('/product')
    }
  }

  const handleUpdate = (slug: string) => {
    openModal()
  }

  console.log(authorizePostActions(app, blogpost))

  return (
    <>
      <div className="mx-auto max-w-7xl py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Product Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
              Personal details and Product.
            </p>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Full name
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {blogpost.title}
                </dd>
              </div>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Category
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {blogpost.category?.name}
                </dd>
              </div>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Price
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <span> $ {blogpost.price}</span>
                </dd>
              </div>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Author
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {blogpost.author || 'Unknown'}
                </dd>
              </div>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Description
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {blogpost.description}
                </dd>
              </div>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Actions
                </dt>
                <dd className="mt-2 flex items-center gap-x-6 sm:col-span-2 sm:mt-0">
                  <CustomButton
                    onClick={() => navigate('/product')}
                    className="w-[88px] rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                  >
                    Go back
                  </CustomButton>
                  {(deleted || author) && (
                    <CustomButton
                      onClick={() => handleDelete(slug)}
                      className="w-[88px] rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                      Delete
                    </CustomButton>
                  )}
                  {/* {(edit || author) && ( */}
                  <CustomButton
                    onClick={() => handleUpdate(slug)}
                    className="w-[88px] rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Edit
                  </CustomButton>
                  {/* )} */}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <ProductDialog
        open={isOpen}
        onClose={closeModal}
        closeModal={closeModal}
      />
    </>
  )
}
