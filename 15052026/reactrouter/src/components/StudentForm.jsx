import { Formik, Form, Field } from "formik";

const FIELD_LABELS = {
  mssv: "MSSV",
  name: "Name",
  age: "Age",
  classname: "Class",
};

function StudentForm({
  initialValues,
  validationSchema,
  onSubmit,
  submitLabel,
  readOnlyMssv = false,
  enableReinitialize = false,
}) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize={enableReinitialize}
    >
      {({ isSubmitting }) => (
        <Form className="text-start">
          {Object.keys(FIELD_LABELS).map((name) => (
            <FormField
              key={name}
              name={name}
              label={FIELD_LABELS[name]}
              readOnly={name === "mssv" && readOnlyMssv}
            />
          ))}

          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {submitLabel}
          </button>
        </Form>
      )}
    </Formik>
  );
}

function FormField({ name, label, readOnly }) {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <Field name={name}>
        {({ field, meta }) => (
          <>
            <input
              {...field}
              id={name}
              type="text"
              readOnly={readOnly}
              className={`form-control ${
                meta.touched && meta.error ? "is-invalid" : ""
              }`}
            />
            {meta.touched && meta.error && (
              <div className="invalid-feedback d-block">{meta.error}</div>
            )}
          </>
        )}
      </Field>
    </div>
  );
}

export default StudentForm;
