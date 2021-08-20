import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('A name is required')
        .min(2,'name must be at least 2 characters'),
    
    email: yup
        .string()
        .trim()
        .required('An email is required'),
    
    size: yup
        .string()
        .required('Please choose a size'),

    sauce: yup
        .string()
        .required('Please choose a sauce'),

    pepperoni: yup
        .boolean(),

    sausage: yup
        .boolean(),

    chicken: yup
        .boolean(),

    ham: yup
        .boolean(),

    greenPeppers: yup
        .boolean(),

    olives: yup
        .boolean(),

    onions: yup
        .boolean(),

    mushrooms: yup
        .boolean(),

    extraCheese: yup
        .boolean()

})


export default formSchema;