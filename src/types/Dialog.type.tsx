import { Dialog } from '@headlessui/react'

export interface StylesProps {
  dialog: string
  panel: string
  title: string
  content: string
  backdrop: string
}

export interface TransitionOption {
  enter: string
  enterFrom: string
  enterTo: string
  leave: string
  leaveFrom: string
  leaveTo: string
}

export interface TransitionProps {
  backdrop?: TransitionOption
  panel?: TransitionOption
}

export interface CustomDialogProps {
  open: boolean
  title?: string
  className?: string
  styles?: StylesProps
  transition: TransitionProps
  children?: React.ReactNode
  onClose: (value: boolean) => void
}

export interface HookDialogProps {
  open: boolean
  onClose: () => void
  closeModal: () => void
}
