import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('name is required')
        .min(2,  "name must be at least 2 characters"),
    size: yup
        .string()
        .oneOf(['Large', 'Medium', 'Small'], 'Please Choose a size')
        ,
    special: yup
        .string(),
    pepperoni: yup.boolean(),
    bannana: yup.boolean(),
    onions: yup.boolean(),
    sausage: yup.boolean(),
})

export default formSchema