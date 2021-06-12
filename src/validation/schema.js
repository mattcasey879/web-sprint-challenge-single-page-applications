import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('name is required')
        .min(2, 'name must be 2 characters long'),
    size: yup
        .string()
        .required('Must choose a size'),
 
    pepperoni: yup.boolean(),
    bannana: yup.boolean(),
    onions: yup.boolean(),
    sausage: yup.boolean(),
})

export default formSchema