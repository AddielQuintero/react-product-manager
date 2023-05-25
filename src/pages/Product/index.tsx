import { useApp } from '../../context'
import { CustomButton, ProductTable } from '../../components'
import { PlusSmallIcon, FunnelIcon } from '@heroicons/react/24/outline'
import { ProductDialog } from '../../components/Product/ProductDialog'
import { useDialog } from '../../hooks'

export const Product = () => {
  const { isOpen, openModal, closeModal } = useDialog()
  const { products } = useApp()

  const headers = [
    { name: 'ID', hideOnMobile: true },
    { name: 'Title', hideOnMobile: false },
    { name: 'Date', hideOnMobile: true },
    { name: 'Price', hideOnMobile: false },
    { name: 'Category', hideOnMobile: false },
    { name: 'Author', hideOnMobile: true },
    { name: 'Action', hideOnMobile: false },
  ]

  // console.log(products)
  const handleAddProduct = () => {
    openModal()
  }

  return (
    <>
      <section className="container lg:w-4/5 px-4 mx-auto ">
        <div className="flex justify-between  mb-8 py-4 border-b border-gray-200">
          <h1 className=" text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 ">Products</h1>
          <div className="flex items-end gap-x-6 flex-shrink-0">
            <CustomButton className="flex justify-center items-center gap-1 w-[105px] rounded-md px-3.5 py-2.5 text-sm font-semibold text-green-600  hover:bg-gray-100 outline outline-1 outline-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400">
              <FunnelIcon className="h-5 w-auto inline-block" aria-hidden="true" />
              Filter
            </CustomButton>
            <CustomButton
              onClick={handleAddProduct}
              className="flex justify-center items-center gap-1 w-[105px] rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              <PlusSmallIcon className="h-5 w-auto inline-block" aria-hidden="true" />
              Add
            </CustomButton>
          </div>
        </div>
        <div>
          <ProductTable headers={headers} data={products} />
        </div>
      </section>

      <ProductDialog add="add" open={isOpen} onClose={closeModal} closeModal={closeModal} />
    </>
  )
}
