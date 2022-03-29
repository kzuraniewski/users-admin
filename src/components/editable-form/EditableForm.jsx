import React from 'react';
import { useFormik } from 'formik';

export const FormContext = React.createContext(null);

const EditableForm = ({ editMode, formikConfig, children, ...props }) => {
	const formik = useFormik(formikConfig);

	return (
		<form
			onSubmit={e => {
				formik.handleSubmit(e);
			}}
			{...props}
		>
			<FormContext.Provider value={{ formik, editMode }}>{children}</FormContext.Provider>
		</form>
	);
};

export default EditableForm;
