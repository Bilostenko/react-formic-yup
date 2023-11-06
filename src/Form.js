import { useFormik } from "formik";
import * as Yup from "yup";

const Form = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            amount: 0,
            currency: '',
            text: '',
            terms: false
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, "Minimum 2 characters")
                .required("Required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            amount: Yup.number()
                .min(5, "Minimum 5")
                .required("Required"),
            currency: Yup.string()
                .required("Required"),
            text: Yup.string()
                .min(10, "Minimum 10 characters")
                .required("Required"),
            terms: Yup.boolean()
                .required("Required")
                .oneOf([true], "You must accept the terms and conditions")
        }),
        onSubmit: values => console.log(JSON.stringify(values, null, 2))
    })

    return (
        <form className="form" onSubmit={formik.handleSubmit}>
            <h2>Send donate</h2>
            <label htmlFor="name">Your name</label>
            <input
                id="name"
                name="name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name ? <div className="error">{formik.errors.name}</div> : null}
            <label htmlFor="email">Your email</label>
            <input
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? <div className="error">{formik.errors.email}</div> : null}
            <label htmlFor="amount">Quantity</label>
            <input
                id="amount"
                name="amount"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.amount}
                onBlur={formik.handleBlur}
            />
            {formik.errors.amount && formik.touched.amount ? <div className="error">{formik.errors.amount}</div> : null}
            <label htmlFor="currency">Currency</label>
            <select
                id="currency"
                name="currency"
                onChange={formik.handleChange}
                value={formik.values.currency}
                onBlur={formik.handleBlur}>
                <option value="">Choose currency</option>
                <option value="USD">USD</option>
                <option value="UAH">UAH</option>
                <option value="EUR">EUR</option>
            </select>
            {formik.errors.currency && formik.touched.currency ? <div className="error">{formik.errors.currency}</div> : null}
            <label htmlFor="text">Your message</label>
            <textarea
                id="text"
                name="text"
                onChange={formik.handleChange}
                value={formik.values.text}
                onBlur={formik.handleBlur}
            />
            {formik.errors.text && formik.touched.text ? <div className="error">{formik.errors.text}</div> : null}
            <label className="checkbox">
                <input
                    name="terms"
                    type="checkbox"
                    onChange={formik.handleChange}
                    value={formik.values.terms}
                    onBlur={formik.handleBlur}
                />
                Do you agree to the privacy policy?
            </label>
            {formik.errors.terms && formik.touched.terms ? <div className="error">{formik.errors.terms}</div> : null}
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;