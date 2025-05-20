import { Head, useForm } from '@inertiajs/react';

export default function Register({}) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <>
            <Head title="Registrarse - Farmaplus+" />

            <div className="min-h-screen bg-gradient-to-r from-purple-300 via-pink-200 to-yellow-100 flex items-center justify-center overflow-hidden">
                <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md z-10 relative animate-fadeIn">
                    <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center tracking-wide">
                        Crear cuenta en <span className="text-pink-500">Farmaplus+</span>
                    </h1>

                    <form onSubmit={submit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nombre completo</label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                className="w-full mt-1 px-4 py-2 border rounded-md shadow focus:ring-purple-500 focus:border-purple-500"
                                required
                            />
                            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="w-full mt-1 px-4 py-2 border rounded-md shadow focus:ring-purple-500 focus:border-purple-500"
                                required
                            />
                            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                            <input
                                type="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                className="w-full mt-1 px-4 py-2 border rounded-md shadow focus:ring-purple-500 focus:border-purple-500"
                                required
                            />
                            {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Confirmar contraseña</label>
                            <input
                                type="password"
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                className="w-full mt-1 px-4 py-2 border rounded-md shadow focus:ring-purple-500 focus:border-purple-500"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300"
                        >
                            Registrarse
                        </button>

                        <p className="text-sm text-center text-gray-600 mt-4">
                            ¿Ya tienes cuenta?{' '}
                            <a href={route('login')} className="text-purple-600 hover:underline">
                                Inicia sesión aquí
                            </a>
                        </p>
                    </form>
                </div>

                <style>
                    {`
                    @keyframes fadeIn {
                        from { opacity: 0; transform: scale(0.95); }
                        to { opacity: 1; transform: scale(1); }
                    }
                    .animate-fadeIn {
                        animation: fadeIn 1s ease-out forwards;
                    }
                    `}
                </style>
            </div>
        </>
    );
}
