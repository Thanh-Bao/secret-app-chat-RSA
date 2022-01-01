import { SWITCH_FORM } from './constants'

export const switchForm = payload => (
    {
        type: SWITCH_FORM,
        payload
    }
)