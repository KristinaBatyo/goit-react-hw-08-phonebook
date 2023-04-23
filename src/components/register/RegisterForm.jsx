

import useForm from 'hooks/useForm';
import initialState from './initialState';
import TextField from 'components/textfield/TextField';
import fields from './fields';
import { Form } from './RegisterPage.styled';
import Button from 'components/button/Button';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;



  return (
    // < div >
    //     <h1>Register page</h1>
    // </ div>
    <Form onSubmit={handleSubmit}>
      <TextField value={name} handleChange={handleChange} {...fields.name} />
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button> Register</Button>
    </Form>
  );
};

export default RegisterForm;
