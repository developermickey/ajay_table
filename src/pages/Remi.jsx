import React ,{ useState } from 'react'

const Remi = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    password: '',
    email: '',
    errors: {},
  });

  const validate = (name, value) => {
    const errors = {};
    switch (name) {
      case 'firstName':
        if (value.trim() === '') {
          errors.firstName = 'Geben Sie bitte Ihren Vornamen ein';
        }
        break;
      case 'lastName':
        if (value.trim() === '') {
          errors.lastName = 'Geben Sie bitte Ihren Nachnamen ein';
        }
        break;
      case 'mobileNumber':
        if (value.trim() === '') {
          errors.mobileNumber = 'Geben Sie bitte Ihre Handynummer ein';
        } else if (!/^\d{10}$/.test(value)) {
          errors.mobileNumber = 'Geben Sie bitte eine gültige Handynummer ein (10 Ziffern)';
        }
        break;
      case 'email':
        if (value.trim() === '') {
          errors.email = 'Geben Sie bitte Ihre E-Mail ein';
        } else if (!value.match(/\S+@\S+\.\S+/)) {
          errors.email = 'Geben Sie bitte eine gültige E-Mail ein';
        }
        break;
      case 'password':
        if (value.trim() === '') {
          errors.password = 'Geben Sie bitte Ihr Passwort ein';
        } else if (value.length > 8) {
          errors.password = 'Das Passwort darf maximal 8 Zeichen enthalten';
        }
        break;
      default:
        break;
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const errors = validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
      errors: {
        ...formValues.errors,
        [name]: errors[name] || '',
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateAll(formValues);
    setFormValues({
      ...formValues,
      errors,
    });
    if (Object.keys(errors).length === 0) {
      const registerObj = {
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        mobileNumber: formValues.mobileNumber,
        password: formValues.password,
        email: formValues.email,
      };
      console.log(registerObj);
      // proceed with form submission
    }
  };

  const validateAll = (values) => {
    const errors = {};
    for (const key in values) {
      if (key !== 'errors') {
        const error = validate(key, values[key]);
        if (Object.keys(error).length > 0) {
          errors[key] = error[key];
        }
      }
    }
    return errors;
  };
  
  return (
    <>
    <form onSubmit={handleSubmit}>
        <div>
          <label>Vorname:</label>
          <input type="text" name="firstName" value={formValues.firstName} onChange={handleChange} />
          {formValues.errors.firstName && <span>{formValues.errors.firstName}</span>}
        </div>
        <div>
          <label>Nachname:</label>
          <input type="text" name="lastName" value={formValues.lastName} onChange={handleChange} />
          {formValues.errors.lastName && <span>{formValues.errors.lastName}</span>}
        </div>
        <div>
          <label>Mobilnummer:</label>
          <input type="text" name="mobileNumber" value={formValues.mobileNumber} onChange={handleChange} maxLength={10} />
          {formValues.errors.mobileNumber && <span>{formValues.errors.mobileNumber}</span>}
        </div>
        <div>
          <label>E-Mail:</label>
          <input type="email" name="email" value={formValues.email} onChange={handleChange} />
          {formValues.errors.email && <span>{formValues.errors.email}</span>}
        </div>
        <div>
          <label>Passwort:</label>
          <input type="password" name="password" value={formValues.password} onChange={handleChange} />
          {formValues.errors.password && <span>{formValues.errors.password}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
  </>
  )
}

export default Remi
