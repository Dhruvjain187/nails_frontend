import { ProductHeader } from "../styles/ProductComponentHeader"
import { Span, H1 } from "../styles/Typography"
import { LoginMain, BrownButton } from "../styles/Login"
import { useState } from "react"
import { Input } from "../styles/SignUp"
import { Link } from "react-router"
import { useForm } from 'react-hook-form';
import { useLoginUserMutation } from "../Redux/Api/userApi"
import { useDispatch, useSelector } from "react-redux"
import { setCredentials } from "../Redux/Slices/userSlice"
import { useNavigate } from "react-router"

export default function Login() {
    const [showPass, setShowPass] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm()

    const [loginUser, { isLoading }] = useLoginUserMutation()

    const onSubmitForm = async (data) => {
        //  perform something
        console.log(data)
        const res = await loginUser(data).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate("/")
    }

    return (
        <>
            <LoginMain>
                <div>
                    <H1>
                        <Span>User Login</Span>
                    </H1>
                </div>

                <div className="pd">
                    <div className="login-container">
                        <div className="login">
                            <div className="strong">Registered Users</div>
                            <div className="block-content">
                                <form onSubmit={handleSubmit(onSubmitForm)}>
                                    <div className="field">If you have an account, sign in with your email address.</div>

                                    <div className="field">
                                        <label htmlFor="email">Email</label>
                                        <Input type="email" name="email" id="email"
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: "email is required"
                                                }
                                            })}
                                        />
                                        {errors.email && <div className="error">{errors.email.message}</div>}
                                    </div>
                                    <div className="field">
                                        <label htmlFor="password">Password</label>
                                        <Input type={showPass ? "text" : "password"} name="password" id="password"
                                            {...register("password",
                                                {
                                                    required: {
                                                        value: true,
                                                        message: "Password is required"
                                                    },
                                                    pattern: {
                                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                                                        message: 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character',
                                                    },
                                                })}
                                        />
                                        {errors.password && <div className="error">{errors.password.message}</div>}
                                    </div>
                                    <div className="field flex">
                                        <input className="show" type="checkbox" name="show" id="show" value={showPass}
                                            onChange={() => setShowPass(!showPass)} />
                                        <label className="show" htmlFor="show">Show Password</label>
                                    </div>

                                    <div className="btn">
                                        <BrownButton type="submit">SIGN IN <i className="fa-solid fa-arrow-right"></i></BrownButton>
                                        <a >Forget Your Password?</a>
                                    </div>

                                    <div className="required-field">* Required Fields</div>
                                </form>
                            </div>
                        </div>

                        <div className="new-customer">
                            <div className="strong">New User</div>
                            <div className="block-content">
                                <h2>Create an account</h2>
                                <p>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
                                <ul>
                                    <li>
                                        <Link to={`/signup`}>
                                            <img src="https://www.lanailsupplies.com/static/version1742805747/frontend/Cp/lanails/en_US/images/CUSTOMER.png" alt="" />
                                        </Link>
                                        <Link to={`/signup`}>CUSTOMER <i className="fa-solid fa-arrow-right"></i></Link>
                                        {/* <a href="">
                                            <img src="https://www.lanailsupplies.com/static/version1742805747/frontend/Cp/lanails/en_US/images/CUSTOMER.png" alt="" />
                                        </a> */}
                                        {/* <a href="">CUSTOMER <i className="fa-solid fa-arrow-right"></i></a> */}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </LoginMain>
        </>
    )
}