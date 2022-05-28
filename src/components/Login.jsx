import React from 'react';
const Login = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;
        console.log(email, password);
    };
    return (
        <div className='h-screen flex bg-gray-bg1'>
            <div className='w-full max-w-md text-cyan-900 m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-3xl font-medium text-primary mt-4 mb-12 text-center'>
                    Login Page🔐
                </h1>
                
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-cyan-900 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-cyan-900 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className={`bg-sky-600 py-2 px-8 font-semibold hover:bg-sky-700 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            LOGIN
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;