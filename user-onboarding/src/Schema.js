import * as yup from 'yup'

export default yup.object().shape({
    username: yup
        .string()
        .required('username is required')
        .min(3, 'username must be at least 3 characters'),
    email: yup
        .string()
        .email('must be a valid email address')
        .required('email is required'),
    password: yup
        .string()
        .required('password required')
        .min(6, 'password must be at least 6 chars long'),
    terms: yup
        .boolean()
        .oneOf([true], "You must accept Terms and Conditions"),
    role: yup
        .string()
        .oneOf(["Barbarian", "Magician", "Necromancer", "Paladin", 'Amazon'], "role is required"),
    server: yup
        .string()
        .oneOf(['US WEST', 'US EAST', 'EUROPE', 'ASIA'], 'server is required'),
    gender: yup
        .string()
        .oneOf(['male', 'female', 'other'], 'gender is required'),
    hellmode: yup
        .string()
})