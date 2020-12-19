import React from "react";
import  {Field, reduxForm, InjectedFormProps} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../Utils/Validators/validators";
import {connect} from "react-redux";
import {loginTC} from "../Redux/auth-reducer";
import { Redirect } from "react-router-dom";

 type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

 const LoginForm:React.FC<InjectedFormProps<FormDataType>> =(props)=> {

     return <div>
              <form onSubmit={props.handleSubmit}>

            <div>
                <Field  placeholder={'Email'} name={'email'}
                        component={Input} validate={[required]}/>
            </div>
            <div>
                <Field  placeholder={'Password'} name={'password'} type={'password'}
                        component={Input} validate={[required]}/>
            </div>
            <div>

                <Field type={"checkbox"}  name={'rememberMe'}
                       component={Input}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm);

const Login=(props: any)=> {
     const onSubmit=(formData: FormDataType)=> {
        // @ts-ignore
         props.loginTC(formData.email, formData.password, formData.rememberMe)};
        if(props.isAuth) {
            return <Redirect to={'/profile'}/>
        }
    return <div>
        <h1>Login</h1>
       <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps =(state: any)=>( {
    isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {loginTC }) (Login);