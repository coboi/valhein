import { Toast as BaseToast } from '@base-ui/react/toast'

export const toastManager = BaseToast.createToastManager<{ variant?: 'default' | 'danger' }>()
