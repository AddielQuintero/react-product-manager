import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLongLeftIcon, TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import { CustomButton, ProductDialog } from '@/components'
import { TProduct, AuthorizePostActions } from '@/types'
import { useApp } from '@/context'
import { NotFound } from '@/pages'
import { useDialog } from '@/hooks'

export const ProductDetails = (): JSX.Element => {
  const [selectedProduct, setSelectedProduct] = useState<TProduct | null>(null)
  const { isOpen, openModal, closeModal } = useDialog()
  const { slug } = useParams()
  const navigate = useNavigate()
  const app = useApp()
  const product = app.products.find((product) => product.slug === slug)
  // console.log(auth)
  if (!product || !slug) return <NotFound />

  const { edit, deleted, author } = AuthorizePostActions(app, product)

  const handleDelete = (id: number) => {
    app.handleDeleteProduct(id)
    navigate('/product')
  }

  const handleUpdate = (product: TProduct) => {
    setSelectedProduct(product)
    openModal()
  }

  // console.log(AuthorizePostActions(app, product))

  return (
    <>
      <div className="mx-auto max-w-7xl py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">Product Information</h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and Product.</p>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Title</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {product.title}
                </dd>
              </div>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Category</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {product.category?.name}
                </dd>
              </div>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Price</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <span> $ {product.price}</span>
                </dd>
              </div>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Author</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {product.author || 'Unknown'}
                </dd>
              </div>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Description</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {product.description}
                </dd>
              </div>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Actions</dt>
                <dd className="mt-2 flex items-center gap-x-6 sm:col-span-2 sm:mt-0">
                  <CustomButton
                    onClick={() => navigate('/product')}
                    className="flex justify-center items-center gap-1 w-[105px] rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                  >
                    <ArrowLongLeftIcon className="h-4 w-auto inline-block" aria-hidden="true" />
                    Go back
                  </CustomButton>
                  {(deleted || author) && (
                    <CustomButton
                      onClick={() => handleDelete(product.id)}
                      className="flex justify-center items-center gap-1 w-[105px] rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                      <TrashIcon className="h-4 w-auto inline-block" aria-hidden="true" />
                      Delete
                    </CustomButton>
                  )}
                  {(edit || author) && (
                    <CustomButton
                      onClick={() => handleUpdate(product)}
                      className="flex justify-center items-center gap-1 w-[105px] rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      <PencilSquareIcon  className="h-4 w-auto inline-block" aria-hidden="true" />
                      Edit
                    </CustomButton>
                  )}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <ProductDialog
        product={selectedProduct}
        setProduct={setSelectedProduct}
        open={isOpen}
        onClose={closeModal}
        closeModal={closeModal}
      />
    </>
  )
}
