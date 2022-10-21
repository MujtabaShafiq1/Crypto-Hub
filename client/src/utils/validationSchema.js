import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().trim().required("Password is required").min(8, 'Minimum characters: 8').max(15, 'Maximum characters: 15'),
})

export const signupSchema = yup.object().shape({
    // email: yup.string().email('Invalid email format').required('Email is required'),
    // password: yup.string().trim().required("Password is required").min(8, 'Minimum characters: 8').max(15, 'Maximum characters: 15'),
})
