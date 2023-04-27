import { useApp } from '../../context'
import { CustomButton, CustomTable } from '../../components'
import { PlusSmallIcon, FunnelIcon } from '@heroicons/react/24/outline'
import { ProductDialog } from './ProductDialog'
import { useDialog } from '../../hooks'

export const Product = () => {
  const { isOpen, openModal, closeModal } = useDialog()
  const app = useApp()

  const headers = ['ID', 'Title', 'Date', 'Price', 'Category', 'Author', 'Actions']
  // console.log(auth.products)
  const products = app.products

  // console.log(products)
  const handleAddproduct = () => {
    openModal()
  }

  return (
    <>
      <section className="container lg:w-3/4 px-4 mx-auto ">
        <div className="flex justify-between  mb-8 py-4 border-b border-gray-200">
          <h1 className=" text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 ">Products</h1>
          <div className="flex items-end gap-x-6 flex-shrink-0">
            <CustomButton className="flex justify-center items-center gap-1 w-[105px] rounded-md px-3.5 py-2.5 text-sm font-semibold text-green-600  hover:bg-gray-100 outline outline-1 outline-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400">
              <FunnelIcon className="h-5 w-auto inline-block" aria-hidden="true" />
              Filter
            </CustomButton>
            <CustomButton
              onClick={handleAddproduct}
              className="flex justify-center items-center gap-1 w-[105px] rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              <PlusSmallIcon className="h-5 w-auto inline-block" aria-hidden="true" />
              Add
            </CustomButton>
          </div>
        </div>
        <div>
          <CustomTable headers={headers} data={products} />
        </div>
      </section>

      <ProductDialog add='add' open={isOpen} onClose={closeModal} closeModal={closeModal} />
    </>
  )
}
