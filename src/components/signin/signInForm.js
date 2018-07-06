import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const signInForm = ({ course, allCountrys, onSave, onChange, saving, errors }) => {
  return (
    <form>
     
      <h1>Sign In</h1>
      <TextInput
        name="username"
        label="Username"
        type="text"
        value={course.title}
        onChange={onChange}
        error={errors.title} />

      <TextInput
        name="password"
        label="Password"
        type="password"
        value={course.title}
        onChange={onChange}
        error={errors.title} />


      

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Submit'}
        className="btn btn-primary"
        onClick={onSave} />
    </form>
  );
};

signInForm.propTypes = {
  // course: React.PropTypes.object.isRequired,
  // allCountrys: React.PropTypes.array.isRequired,
  // onSave: React.PropTypes.func.isRequired,
  // onChange: React.PropTypes.func.isRequired,
  // saving: React.PropTypes.bool,
  // errors: React.PropTypes.object
};

export default signInForm;
