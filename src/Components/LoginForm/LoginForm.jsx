import { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { DataContext } from '../../Contexts/ProviderData';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from 'react-bootstrap/Button';
import Loader from '../Loader/Loader'
import './LoginForm.css'

function LoginForm() {

    const history = useHistory()

    const {user, password, setUser, setPassword, loading, setLoading} = useContext(DataContext)

    const pushHome = () => {

        history.push('/home')
        setLoading(false)

    }    

    const token = (values) => {

        if (values.email === '' && values.password === '') {
            return 
        } else {
            
            localStorage.setItem("token", values.email)

            setLoading(true)

            setTimeout(pushHome, 3000)

        }
        
    }


    return (

        <Formik

            initialValues={{
                email: '',
                password: '',

            }}

            validate={(values) => {
                let errors = {}

                //Email validation
                if (!values.email) {
                    errors.email = 'Please submit a email'
                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                    errors.email = 'Please submit a correct email'
                } else if (values.email === '') {
                    errors.email = 'Please complete the form'
                }

                //Password validation
                if (!values.password) {
                    errors.password = 'Please submit a password'
                } else if (values.password.length < 4 || values.password.length > 20) {
                    errors.password = 'Please submit a correct password'
                } else if (values.password === '') {
                    errors.password = 'Please complete the form'
                }

                return errors;

            }}

            onSubmit={(values) => {
                token(values)
            }}
        >
        {({ errors,values }) => (

        

        <div className="container-fluid">

        

            <div className="row no-gutter">
                <div className="col-md-6 d-none d-md-flex bg-image"></div>


                <div className="col-md-6 bg-light">

                {
                    loading ? (
                         <div className="login d-flex align-items-center py-5"> 
                            <Loader />
                        </div>
                    ) : (
                            
                    <div className="login d-flex align-items-center py-5">

                        <Form className="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-7 mx-auto">
                                    <h3 className="display-4 text-center m-5">Log In!</h3>
                                    <form>
                                        <div className="form-group mb-3">
                                            <Field 
                                                id="email" 
                                                type="email" 
                                                placeholder="Email address" 
                                                value={values.email}
                                                className="form-control rounded-pill border-0 shadow-sm px-4" 
                                            />
                                            <ErrorMessage name="email"  component={() => (
                                                <span className="text-danger text-center">
                                                    {errors.email}
                                                </span>
                                            )} />
                                        </div>
                                        <div className="form-group mb-3">
                                            <Field 
                                                id="password" 
                                                type="password" 
                                                placeholder="Password" 
                                                value={values.password}
                                                className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" 
                                            />
                                            <ErrorMessage name="password" component={() => (
                                                <span className="text-danger">
                                                    {errors.password}
                                                </span>
                                            )} />
                                        </div>
                                    
                                        <Button 
                                            className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                                            type="submit"
                                            onClick={() => token(values)}
                                        >Sign in</Button>
                                    
                                    </form>
                                </div>
                            </div>
                        </Form>

                    </div>
                    )
                }    

                </div>

            </div>
        </div>
         )}
        </Formik>
    )
}

export default LoginForm
