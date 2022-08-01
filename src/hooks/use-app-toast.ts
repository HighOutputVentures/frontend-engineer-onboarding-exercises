import { useRef } from 'react'
import { useToast, UseToastOptions } from '@highoutput/ui-components'

const useAppToast = () => {
  const toast = useToast()
  const toastRef = useRef<string | number | undefined>()

  const showToast = (description: string, status: UseToastOptions['status'], duration = 3000) => {
    if (toastRef.current) toast.close(toastRef.current)
    toastRef.current = toast({
      variant: 'left-accent',
      description,
      status,
      position: 'top',
      duration,
    })
  }

  return { showToast }
}

export default useAppToast
