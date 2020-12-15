import React from "react";
import  {Field, reduxForm, InjectedFormProps} from "redux-form";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

 const LoginForm:React.FC<InjectedFormProps<FormDataType>> =(props)=> {

     return <div>
              <form onSubmit={props.handleSubmit}>

            <div>
                <Field  placeholder={'Login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field  placeholder={'Password'} name={'password'} component={'input'}/>
            </div>
            <div>

                <Field type={"checkbox"}  component={'input'} name={'rememberMe'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm);

const Login=()=> {
     const onSubmit=(formData: FormDataType)=> {

     };

    return <div>
        <h1>Login</h1>
       <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;