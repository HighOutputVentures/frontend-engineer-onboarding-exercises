import { createStandaloneToast } from '@highoutput/ui-components'
import { UseToastOptions } from '@chakra-ui/toast'

const { toast } = createStandaloneToast()

export const showToast = (description: string, status: UseToastOptions['status'], duration = 3000) => {
  toast.closeAll()
  toast({
    variant: 'left-accent',
    description,
    status,
    position: 'top',
    duration,
    isClosable: true,
  })
}
