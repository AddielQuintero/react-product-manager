import React, { useState, ChangeEventHandler, useEffect } from 'react'
import { CustomButton, CustomDialog, CustomForm, CustomInput, CustomTextArea } from '../../components'
import {
  DefaultFormValues,
  StylesProps,
  TFormValues,
  TransitionProps,
  ProductDialogProps,
  TSelectCategory,
  TAddProduct,
  THandleSubmit,
} from '../../types'
import { useApp } from '../../context'
import { generateSlug } from '../../utilities'

const styles: StylesProps = {
  dialog: 'fixed inset-0 overflow-y-auto',
  panel:
    'w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all',
  title: 'text-lg font-medium leading-6 text-gray-900',
  content: 'flex min-h-full items-center justify-center p-4 text-center',
  backdrop: 'fixed inset-0 bg-black bg-opacity-25',
}

const transition: TransitionProps = {
  backdrop: {
    enter: 'ease-out duration-500',
    enterFrom: 'opacity-0',
    enterTo: 'opacity-100',
    leave: 'ease-in duration-500',
    leaveFrom: 'opacity-100',
    leaveTo: 'opacity-0',
  },
  panel: {
    enter: 'ease-out duration-300',
    enterFrom: 'opacity-0 scale-95',
    enterTo: 'opacity-100 scale-100',
    leave: 'ease-in duration-200',
    leaveFrom: 'opacity-100 scale-100',
    leaveTo: 'opacity-0 scale-95',
  },
}

const inputClassName =
  'relative block w-full rounded border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-indigo-300 sm:text-sm sm:leading-6'

const labelClassName = 'block text-sm font-medium leading-6 text-gray-900'



export const ProductDialog = (props: ProductDialogProps) => {
  const { open, onClose, closeModal, product, setProduct, add } = props
  const [formValues, setFormValues] = useState<TFormValues>(DefaultFormValues)
  const app = useApp()

  useEffect(() => {
    {
      product &&
        setFormValues({
          title: product?.title || '',
          category: {
            name: product?.category?.name || '',
          },
          price: product?.price || 0,
          author: product?.author || 'Unknown',
          description: product?.description || '',
        })
    }
  }, [product])

  console.log(formValues)
  console.log(product)
  console.log(DefaultFormValues)

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target
    if (name === 'categoryName') {
      setFormValues({ ...formValues, category: { name: value } })
    } else {
      setFormValues({ ...formValues, [name]: value })
    }
  }

  const handleChangeTextarea: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    const { name, value } = event.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleOnClose = () => {
    setFormValues(DefaultFormValues)
    closeModal()
    if (setProduct) {
      setProduct(null)
    }
  }

  const handleAdd = async (formValues: TAddProduct) => {
    console.log(formValues)
    const newProduct = {
      title: formValues.title,
      price: formValues.price,
      description: formValues.description,
      images: ['https://placeimg.com/640/480/any'],
      creationAt: new Date(),
      updatedAt: new Date(),
      category: {
        id: 1,
        name: formValues.category.name,
        image: 'https://picsum.photos/640/640?r=7647',
        creationAt: new Date(),
        updatedAt: new Date(),
      },
      author: formValues.author,
      slug: generateSlug(formValues.title),
    }

    try {
      await app.handleAddProduct(newProduct)
      setFormValues(DefaultFormValues)
      closeModal()
      if (setProduct) {
        setProduct(null)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleUpdate = async (formValues: TFormValues) => {
    if (!product?.id) return

    const updatedProduct = {
      ...product,
      title: formValues.title,
      price: formValues.price,
      description: formValues.description,
      category: {
        id: product.category.id,
        name: formValues.category.name,
        image: product.category.image,
        creationAt: product.category.creationAt,
        updatedAt: product.category.updatedAt,
      },
      author: formValues.author,
      slug: generateSlug(formValues.title),
    }

    try {
      await app.handleUpdateProduct(updatedProduct)
      setFormValues(DefaultFormValues)
      closeModal()
      if (setProduct) {
        setProduct(null)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit: THandleSubmit = async (formValues) => {
    if (add) {
      await handleAdd(formValues as TAddProduct)
    } else {
      await handleUpdate(formValues as TFormValues)
    }
  }

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title={add ? 'Add product' : 'Edit product'}
      className="relative z-10"
      styles={styles}
      transition={transition}
    >
      <CustomForm>
        <div className="my-4">
          <CustomInput
            id="title"
            name="title"
            type="text"
            labelText="Full name"
            placeholder="Full name"
            value={formValues.title}
            onChange={handleChangeInput}
            labelClassName={labelClassName}
            className={inputClassName}
            required
          />
        </div>
        <div className="my-4 flex justify-between gap-1">
          <CustomInput
            id="category"
            name="categoryName"
            type="text"
            labelText="Category"
            placeholder="Category"
            value={formValues.category.name}
            onChange={handleChangeInput}
            labelClassName={labelClassName}
            className={inputClassName}
            required
          />
          <CustomInput
            id="price"
            name="price"
            type="number"
            labelText="Price"
            placeholder="Price"
            value={formValues.price}
            onChange={handleChangeInput}
            labelClassName={labelClassName}
            className={inputClassName}
            required
          />
        </div>
        <div className="my-4">
          <CustomInput
            id="author"
            name="author"
            type="text"
            labelText="Author"
            placeholder="author"
            value={formValues.author}
            onChange={handleChangeInput}
            labelClassName={labelClassName}
            className={inputClassName}
            required
          />
        </div>
        <div className="my-4">
          <CustomTextArea
            id="description"
            name="description"
            labelText="Description"
            value={formValues.description}
            onChange={handleChangeTextarea}
            labelClassName={labelClassName}
            className={inputClassName}
            placeholder="description"
            maxLength={300}
          />
        </div>
      </CustomForm>
      <div className="mt-4 flex justify-end gap-4">
        <CustomButton
          type="button"
          className="w-[88px] rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          onClick={handleOnClose}
        >
          Cancel
        </CustomButton>
        <CustomButton
          type="button"
          className="w-[88px] rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          onClick={() => handleSubmit(formValues)}
        >
          Save
        </CustomButton>
      </div>
    </CustomDialog>
  )
}
