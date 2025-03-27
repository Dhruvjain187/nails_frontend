import { SignUpMain } from "../styles/SignUp"
import { SignH1, Span } from "../styles/Typography"
import { Input } from "../styles/SignUp"
import { BrownButton } from "../styles/Login"
import { useForm } from 'react-hook-form';
import { setCredentials } from "../Redux/Slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterUserMutation } from "../Redux/Api/userApi";

export default function SignUp() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm()

    const [registerUser, { isLoading }] = useRegisterUserMutation()

    const password = watch('password');
    const email = watch('email');
    const dispatch = useDispatch();

    const onSubmitForm = async (data) => {
        // performs something
        console.log(data)
        const newData = {
            firstname: data.firstname,
            lastname: data.lastname,
            contact: data.contact,
            dob: data.dob,
            address: data.address,
            country: data.country,
            state: data.state,
            city: data.city,
            zipcode: data.zipcode,
            email: data.email,
            password: data.password
        }

        const res = await registerUser(newData).unwrap();
        dispatch(setCredentials({ ...res }));
        // navigate("/")
    }


    return (
        <>
            <SignUpMain>
                <div>
                    <SignH1>
                        <Span>Create New Customer Account</Span>
                    </SignH1>
                </div>

                <form onSubmit={handleSubmit(onSubmitForm)}>
                    <fieldset>
                        <h1>Personal Information</h1>

                        <div className="field">
                            <label htmlFor="firstName">First Name</label>
                            <Input type="text" id="firstName" name="firstname"
                                {...register("firstname",
                                    {
                                        required: {
                                            value: true,
                                            message: "firstname is required"
                                        },
                                    })}
                            />
                            {errors.firstname && <div className="error">{errors.firstname.message}</div>}
                        </div>

                        <div className="field">
                            <label htmlFor="lastName">Last Name</label>
                            <Input type="text" id="lastName" name="lastname"
                                {...register("lastname",
                                    {
                                        required: {
                                            value: true,
                                            message: "lastname is required"
                                        },
                                    })}
                            />
                            {errors.lastname && <div className="error">{errors.lastname.message}</div>}
                        </div>

                        <div className="choice">
                            <input type="checkbox" id="check" />
                            <label htmlFor="check">Subscribe to our newletter</label>
                        </div>
                    </fieldset>

                    <fieldset className="exception-field">
                        <h1>Sign-in Information</h1>

                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <Input type="email" id="email" name="email"
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
                            <label htmlFor="confirmemail">Confirm Email</label>
                            <Input type="email" id="confirmemail" name="confirmemail"
                                {...register("confirmemail", {
                                    required: {
                                        value: true,
                                        message: "email is required"
                                    },
                                    validate: (value) =>
                                        value === email || 'email do not match'
                                })}
                            />
                            {errors.confirmemail && <div className="error">{errors.confirmemail.message}</div>}
                        </div>

                        <div className="field">
                            <label htmlFor="contact">Contact Number</label>
                            <Input type="text" id="contact" name="contact"
                                {...register("contact", {
                                    required: {
                                        value: true,
                                        message: "contact is required"
                                    }
                                })}
                            />
                            {errors.contact && <div className="error">{errors.contact.message}</div>}
                        </div>

                        <div className="field">
                            <label htmlFor="password">Password</label>
                            <Input type="password" id="password" name="password"
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

                        <div className="field">
                            <label htmlFor="confirmpass">Confirm Password</label>
                            <Input type="password" id="confirmpass" name="confirmpass"
                                {...register("confirmpassword",
                                    {
                                        required: {
                                            value: true,
                                            message: "Password is required"
                                        },
                                        // pattern: {
                                        //     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                                        //     message: 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character',
                                        // },
                                        validate: (value) =>
                                            value === password || 'Passwords do not match'
                                    })}
                            />
                            {errors.confirmpassword && <div className="error">{errors.confirmpassword.message}</div>}
                        </div>

                        <div className="field">
                            <label htmlFor="dateofbirth">Date of Birth</label>
                            <Input type="date" id="dateofbirth" name="dateofbirth"
                                {...register("dob", {
                                    required: {
                                        value: true,
                                        message: "date of birth is required"
                                    }
                                })}
                            />
                            {errors.dob && <div className="error">{errors.dob.message}</div>}
                        </div>

                        <div className="field">
                            <label htmlFor="address">Address</label>
                            <Input type="text" id="address" name="address"
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: "address is required"
                                    }
                                })}
                            />
                            {errors.address && <div className="error">{errors.address.message}</div>}
                        </div>

                        <div className="field">
                            <label htmlFor="country">Country</label>
                            <select name="country" id="country"
                                {...register("country", {
                                    required: {
                                        value: true,
                                        message: "country is required"
                                    }
                                })}
                            >
                                <option value="us">United States</option>
                            </select>
                            {errors.country && <div className="error">{errors.country.message}</div>}
                        </div>

                        <div className="field">
                            <label htmlFor="state">State</label>
                            <select name="state" id="state"
                                {...register("state", {
                                    required: {
                                        value: true,
                                        message: "state is required"
                                    }
                                })}
                            >
                                <option value="">Please select a region, state or province</option>
                                <option value="california">California</option>
                                <option value="arizona">Arizona</option>
                                <option value="alabama">Alabama</option>
                                <option value="alaska">Alaska</option>
                            </select>
                            {errors.state && <div className="error">{errors.state.message}</div>}
                        </div>

                        <div className="field">
                            <label htmlFor="city">City</label>
                            <Input type="text" id="city" name="city"
                                {...register("city", {
                                    required: {
                                        value: true,
                                        message: "city is required"
                                    }
                                })}
                            />
                            {errors.city && <div className="error">{errors.city.message}</div>}
                        </div>

                        <div className="field">
                            <label htmlFor="zipcode">Zip Code</label>
                            <Input type="number" id="zipcode" name="zipcode"
                                {...register("zipcode", {
                                    required: {
                                        value: true,
                                        message: "zipcode is required"
                                    }
                                })}
                            />
                            {errors.zipcode && <div className="error">{errors.zipcode.message}</div>}
                        </div>

                        <div className="choice field exception">
                            <input type="checkbox" id="remember" name="remember" />
                            <label htmlFor="remember">Remember me</label>
                            <span> What's this?</span>
                        </div>

                        {/* <div className="field">
                            <input type="checkbox" id="remember" name="remember" />
                            <label htmlFor="remember">Remember me</label>
                            <span>What's this?</span>
                        </div> */}
                    </fieldset>

                    <BrownButton type="submit">CREATE AN ACCOUNT <i className="fa-solid fa-arrow-right"></i></BrownButton>
                </form>
            </SignUpMain>
        </>
    )
}