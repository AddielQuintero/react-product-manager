import React from 'react'
import { CustomButton } from './Button'

export const CustomSnackBar = () => {
  return (
    <div className="flex justify-between fixed top-8 left-1/2 transform -translate-x-1/2 z-20 w-64 rounded-md bg-gray-800 p-4 text-base leading-5 text-white">
      Alert primary
      <CustomButton>X</CustomButton>
    </div>
  )
}
