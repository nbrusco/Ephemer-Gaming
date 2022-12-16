import React from 'react'
import { Formik, Form, Field } from "formik";
import * as yup from 'yup';

const ValidationSchema = yup.object().shape({
    firstName: yup.string().required("*Obligatorio"),
    lastName: yup.string().required("*Obligatorio"),
    phone: yup.string().required("*Obligatorio"),
    email: yup
    .string()
    .required("*Obligatorio")
    .email("*El email no es válido"),
});

export const CartForm = ({ onSubmit, onClose }) => {
  return (
    <Formik initialValues={{firstName: "", lastName: "", email: "", phone: ""}}
    validationSchema={ValidationSchema}
    onSubmit={onSubmit}>
      {
        ({errors, touched}) => (
          <Form className="form">
            <div className='flex justify-center items-center'>
              <Field name="firstName" placeholder="Nombre completo" className="p-2 m-2 text-center text-xl font-serif font-thin border-indigo-500 border-4 rounded-lg border-solid"/>
              {errors.firstName && touched.firstName ? (
             <div className="font-sans font-light text-sm text-red-600">{errors.firstName}</div>
           ) : null}
            </div>
            <div className='flex justify-center items-center'>
              <Field name="lastName" placeholder="Apellido" className="p-2 m-2 text-center text-xl font-serif font-thin border-indigo-500 border-4 rounded-lg border-solid"/>
              {errors.lastName && touched.lastName ? (
             <div className="font-sans font-light text-sm text-red-600">{errors.lastName}</div>
           ) : null}
            </div>
            <div className='flex justify-center items-center'>
              <Field name="email" placeholder="Correo electrónico" className="p-2 m-2 text-center text-xl font-serif font-thin border-indigo-500 border-4 rounded-lg border-solid" />
              {errors.email && touched.email ? (
             <div className="font-sans font-light text-sm text-red-600">{errors.email}</div>
           ) : null}
            </div>
            <div className='flex justify-center items-center'>
              <Field name="phone" placeholder="Número de teléfono" className="p-2 m-2 text-center text-xl font-serif font-thin border-indigo-500 border-4 rounded-lg border-solid" />
              {errors.phone && touched.phone ? (
             <div className="font-sans font-light text-sm text-red-600">{errors.phone}</div>
           ) : null}
            </div >

            <div className='p-4'>
              <button className="bg-red-600 p-2 rounded-md m-1 font-light hover:bg-red-700 transition-all w-40 shadow-md shadow-red-700 text-slate-50 text-lg mr-6" onClick={onClose} type="button">
                Cancelar
              </button>
              <button className="bg-green-600 p-2 rounded-md m-1 font-light hover:bg-green-700 transition-all w-40 shadow-md shadow-green-700 text-slate-50 text-lg ml-6" type="submit">
                Comprar
              </button>
            </div>
          </Form>
        )
      }
    </Formik>
  );
};

export default CartForm