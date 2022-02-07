// @flow
import * as React from 'react';
import {useState} from 'react';
import {Input} from "../components/input";

const Joi = require('joi-browser');

type Props = {};


export function SingUp(props: Props) {
    const schema = {
        email: Joi.string().required().email().label('Email'),
        password: Joi.string().required().min(5).label('Password')
    }
    const [data, setData] = useState({email: '', password: ''});
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errs = validate();
        // @ts-ignore
        setErrors(errs);

    }
    const validate = () => {
        const options = {abortEarly: false};
        const {error} = Joi.validate(data, schema, options);
        if (!error) return null;
        const errors = {};
        error.details.forEach((err: any) => {
            // @ts-ignore
            errors[err.path[0]] = err.message;
        });
        return errors;
    }
    const clearError = (key: string) => {
        setErrors({...errors, [key]: ""});
    }
    const validateProperty = ({name, value}: EventTarget & HTMLInputElement) => {
        const obj = {[name]: value};
        // @ts-ignore
        const subSchema = {[name]: schema[name]};
        const {error} = Joi.validate(obj, subSchema, {abortEarly: false});
        return error ? error.details[0].message : null;
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const errs = {...errors};
        const input = e.currentTarget;
        const errorMessage = validateProperty(input);
        // @ts-ignore
        if (errorMessage) errs[input.name] = errorMessage;
        // @ts-ignore
        else errs[input.name] = '';
        const {name, value} = input;
        const newdata = {...data};
        // @ts-ignore
        newdata[name] = value;
        setData(newdata);
        setErrors(errs);
    }
    return (
        <div className="min-h-full h-screen  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img className="mx-auto h-30 w-auto"
                         src="data:image/png;base64,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" alt="Workflow"/>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign Up
                    </h2>
                </div>
                <form className="mt-8" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" value="true"/>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <Input
                            name="email"
                            label="email"
                            type="email"
                            value={data.email}
                            placeHolder="Email address"
                            error={errors.email}
                            clearError={clearError}
                            onChange={handleChange}/>
                        <Input
                            name="password"
                            label="password"
                            type="password"
                            value={data.password}
                            error={errors.password}
                            clearError={clearError}
                            placeHolder="Password"
                            onChange={handleChange}/>
                    </div>


                    <div>
                        <button type="submit"
                                className="group relative my-5 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"/>
            </svg>
          </span>
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};