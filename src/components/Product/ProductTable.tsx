import { ArrowLongLeftIcon, ArrowLongRightIcon, UserCircleIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { CustomTableProps, TProduct } from '@/types'
import { FormatDate } from '@/utilities'

export const ProductTable = ({ headers, data }: CustomTableProps) => {
  // const createdAtDate = new Date(product.creationAt);

  return (
    <>
      <div className="overflow-x-auto drop-shadow-md">
        <div className="inline-block min-w-full py-2 align-middle ">
          <div className="border border-gray-200 rounded ">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="">
                <tr>
                  {headers.map((header) => (
                    <th
                      key={header.name}
                      scope="col"
                      className={`${
                        header.hideOnMobile ? 'hidden lg:table-cell ' : ''
                      } px-1 md:px-2 lg:px-3 py-3.5 text-sm font-bold text-left rtl:text-right whitespace-nowrap text-gray-500 `}
                    >
                      {header.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 ">
                {data.map((product: TProduct) => (
                  <tr key={product.id}>
                    <td className="px-1 md:px-2 lg:px-3 py-2 text-sm text-gray-400 whitespace-nowrap hidden lg:table-cell">
                      {product.id}
                    </td>
                    <td className="px-1 md:px-2 lg:px-3 py-2 text-sm text-gray-400 whitespace-nowrap ">
                      {/* <Link to={product.slug}>{product.title}</Link> */}
                      {product.title}
                    </td>
                    <td className="px-1 md:px-2 lg:px-3 py-2 text-sm text-gray-400 whitespace-nowrap hidden lg:table-cell">
                      {FormatDate(product.creationAt)}
                    </td>
                    <td className="px-1 md:px-2 lg:px-3 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                      <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-1 text-emerald-500 bg-emerald-100/60">
                        $<h2 className="text-sm font-normal">{product.price}</h2>
                      </div>
                    </td>
                    <td className="px-1 md:px-2 lg:px-3 py-2 text-sm text-gray-400 whitespace-nowrap">
                      {product.category.name}
                    </td>
                    <td className="px-1 md:px-2 lg:px-3 py-2 text-sm text-gray-400 whitespace-nowrap hidden lg:table-cell">
                      <div className="flex items-center gap-x-2">
                        <UserCircleIcon className="h-10 w-10" aria-hidden="true" />
                        <div>
                          <h2 className="text-sm font-medium text-gray-800">{product.author || 'Unknown'}</h2>
                          <p className="text-text-truncate text-xs font-normal text-gray-600">
                            {product.author || 'Unknown'}@example.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-1 md:px-2 lg:px-3 py-2 text-sm text-gray-500 whitespace-nowrap">
                      <div className="flex items-center gap-x-2">
                        <Link to={product.slug}>
                          <ArrowTopRightOnSquareIcon className="h-5 w-6" aria-hidden="true" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between my-6">
        <a
          href="#"
          className="flex items-center px-5 py-2 text-sm text-gray-500 font-medium capitalize transition-colors duration-200 rounded-md gap-x-2 hover:bg-gray-100"
        >
          <ArrowLongLeftIcon className="h-6 w-6" aria-hidden="true" />
          <span>previous</span>
        </a>

        <div className="items-center hidden md:flex gap-x-3">
          <a href="#" className="px-2 py-1 text-sm text-blue-500 rounded-md bg-blue-100/60">
            1
          </a>
          <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">
            2
          </a>
          <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">
            3
          </a>
          <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">
            ...
          </a>
          <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">
            12
          </a>
          <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">
            13
          </a>
          <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">
            14
          </a>
        </div>

        <a
          href="#"
          className="flex items-center px-5 py-2 text-sm text-gray-500 font-medium capitalize transition-colors duration-200 rounded-md gap-x-2 hover:bg-gray-100"
        >
          <span>Next</span>
          <ArrowLongRightIcon className="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
    </>
  )
}
