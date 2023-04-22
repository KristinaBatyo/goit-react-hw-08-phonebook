import useForm from "hooks/useForm";
import initialState from "./initialState";
import TextField from "components/textfield/TextField";
import fields from "./fields";
import { Form } from "./RegisterPage.styled";
import Button from "components/button/Button";

const RegisterPage = ({ onSubmit }) => {
    const { handleChange, handleSubmit } = useForm({initialState, onSubmit});

    return (
      // < div >
      //     <h1>Register page</h1>
      // </ div>
      <Form onSubmit={handleSubmit}>
        <TextField handleChange={handleChange} {...fields.name} />
        <TextField handleChange={handleChange} {...fields.email} />
            <TextField handleChange={handleChange} {...fields.password} />
            <Button> Register</Button>
      </Form>
    );
    
}

export default RegisterPage;