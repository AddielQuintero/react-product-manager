import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline'
import { Links, parseLinkHeader } from '@web3-storage/parse-link-header'
import { TResponse } from '@/types'

export const CustomPagination = ({ getProducts }: { getProducts: (page: number) => Promise<TResponse> }) => {

  const handleCurrentPage = () => {
    const currentPageStorage = localStorage.getItem('CurrentPage')
    return 
  }

  const [linkHeader, setLinkHeader] = useState('')
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [parse, setParse] = useState<Links>({})

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected)
  }

  const fetchData = async () => {
    const result = await getProducts(currentPage + 1)
    if (result.success) {
      setLinkHeader(result.response)
    }
  }

  useEffect(() => {
    fetchData()
  }, [currentPage])

  useEffect(() => {
    const parsed = parseLinkHeader(linkHeader)
    parsed && setTotalPages(+parsed.last._page)
    parsed && setParse(parsed)
  }, [linkHeader])

  return (
    <div className="flex items-center justify-center my-6 gap-x-4">
      <ReactPaginate
        previousLabel={
          <div className="flex pr-6">
            <ArrowLongLeftIcon className="h-6 w-6 pr-" aria-hidden="true" />
            <span>previous</span>
          </div>
        }
        nextLabel={
          <div className="flex pl-6">
            <span>Next</span>
            <ArrowLongRightIcon className="h-6 w-6" aria-hidden="true" />
          </div>
        }
        breakLabel="..."
        pageCount={totalPages}
        onPageChange={handlePageChange}
        containerClassName="react-paginate flex items-center justify-between my-6 gap-x-4"
        previousLinkClassName={`flex items-center px-5 py-2 gap-x-2 text-gray-500 text-sm font-medium capitalize transition-colors duration-200  rounded-md ${
          parse.prev ? 'hover:bg-gray-100' : ''
        } `}
        nextLinkClassName={`flex items-center px-5 py-2 gap-x-2 text-gray-500 text-sm font-medium capitalize transition-colors duration-200  rounded-md ${
          parse.next ? ' hover:bg-gray-100' : ''
        }`}
        disabledLinkClassName="text-gray-200"
        activeClassName="li-active py-1 text-sm !text-blue-500 rounded-md bg-blue-100/60"
        breakClassName="text-gray-500 hidden md:flex"
        pageClassName="li px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100 hidden md:flex"
        // forcePage={currentPage}
        disableInitialCallback={true} // To prevent the initial page load callback
      />
    </div>
  )
}
