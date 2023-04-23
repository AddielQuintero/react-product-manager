import React, { useState, Fragment, ReactNode, ElementType } from 'react'
import { Dialog, DialogProps, Transition } from '@headlessui/react'
import { useDialog } from '../../hooks'
import {
  CustomButton,
  CustomDialog,
  CustomForm,
  CustomInput,
} from '../../components'

export const ProductDialog = (props: any) => {
  const styles = {
    dialog: 'fixed inset-0 overflow-y-auto',
    panel:  'w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all',
    title: 'text-lg font-medium leading-6 text-gray-900',
    content: 'flex min-h-full items-center justify-center p-4 text-center',
    backdrop: 'fixed inset-0 bg-black bg-opacity-25',
  }

  const transitionProps = {
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

  return (
    <CustomDialog
      show={props.open}
      onClose={props.onClose}
      title=" Payment successful"
      className="relative z-10"
      styles={styles}
      transitionProps={transitionProps}
    >
      <CustomForm>
        <CustomInput
          id="full_name"
          name="full_name"
          type="text"
          required
          className="relative block w-full rounded border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="full_name"
        />
        <CustomInput
          id="category"
          name="category"
          type="text"
          required
          className="relative block w-full rounded border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="category"
        />
        <CustomInput
          id="author"
          name="author"
          type="text"
          required
          className="relative block w-full rounded border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="author"
        />
        <CustomInput
          id="price"
          name="price"
          type="text"
          required
          className="relative block w-full rounded border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="price"
        />
      </CustomForm>
      <div className="mt-4">
        <CustomButton
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={props.closeModal}
        >
          Got it, thanks!
        </CustomButton>
      </div>
    </CustomDialog>
  )
}
