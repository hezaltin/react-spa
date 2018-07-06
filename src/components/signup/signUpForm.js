import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const signUpForm = ({ course, allAuthors, onSave, onChange, saving, errors }) => {
  return (
    <form>
     
      <h1>Sign Up</h1>
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

<TextInput
        name="email"
        label="Email"
        type="email"
        value={course.category}
        onChange={onChange}
        error={errors.category} />
 
      <TextInput
        name="firstName"
        label="First Name"
        type="text"
        value={course.length}
        onChange={onChange}
        error={errors.length} />

       <TextInput
        name="lastName"
        type="text"
        label="Last Name"
        value={course.length}
        onChange={onChange}
        error={errors.length} />

      <SelectInput
        name="country"
        label="Country"
        value={course.authorId}
        defaultOption="Select Country"
        options={allAuthors}
        onChange={onChange}
        error={errors.authorId} />

      

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Submit'}
        className="btn btn-primary"
        onClick={onSave} />
    </form>
  );
};

signUpForm.propTypes = {
  // course: React.PropTypes.object.isRequired,
  // allAuthors: React.PropTypes.array.isRequired,
  // onSave: React.PropTypes.func.isRequired,
  // onChange: React.PropTypes.func.isRequired,
  // saving: React.PropTypes.bool,
  // errors: React.PropTypes.object
};

export default signUpForm;
