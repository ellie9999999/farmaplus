import { Head, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    // Animar pastillas al cargar
    useEffect(() => {
        const pills = document.querySelectorAll('.pill');
        pills.forEach((pill, i) => {
            pill.style.animationDelay = `${i * 2}s`;
        });
    }, []);

    return (
        <>
            <Head title="Farmaplus+ | Login" />

            <div className="relative min-h-screen bg-gradient-to-r from-purple-300 via-pink-200 to-yellow-100 flex items-center justify-center overflow-hidden">

                {/* 💊 Pastillas flotantes */}
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="pill absolute w-4 h-2 rounded-full bg-white shadow-lg opacity-50 animate-float"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            transform: `rotate(${Math.random() * 360}deg)`,
                            animationDuration: `${5 + Math.random() * 5}s`,
                        }}
                    />
                ))}

                {/* 🧾 Contenedor login */}
                <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md z-10 relative animate-fadeIn border border-purple-200 ring-2 ring-purple-100 backdrop-blur">
                    <h1 className="text-4xl font-bold text-purple-700 mb-6 text-center tracking-wide drop-shadow-sm">
                        Farmaplus<span className="text-pink-400">+</span>
                    </h1>

                    {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                    <form onSubmit={submit} className="space-y-5">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Correo Electrónico
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow focus:ring-purple-500 focus:border-purple-500"
                                autoComplete="username"
                            />
                            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Contraseña
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow focus:ring-purple-500 focus:border-purple-500"
                                autoComplete="current-password"
                            />
                            {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                        </div>

                        <div className="flex justify-between items-center text-sm">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    className="rounded border-gray-300 text-purple-600 shadow-sm"
                                />
                                <span className="ml-2 text-gray-600">Recordarme</span>
                            </label>

                            {canResetPassword && (
                                <a
                                    href={route('password.request')}
                                    className="text-purple-600 hover:underline"
                                >
                                    ¿Olvidaste tu contraseña?
                                </a>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300"
                        >
                            Iniciar sesión
                        </button>
                    </form>

                    {/* Registro */}
                    <p className="text-sm text-center text-gray-600 mt-6">
                        ¿No tienes cuenta?{' '}
                        <a href={route('register')} className="text-purple-600 hover:underline font-semibold">
                            Regístrate aquí
                        </a>
                    </p>
                </div>
            </div>

            {/* 🎨 Estilos animados */}
            <style>
                {`
                @keyframes float {
                    0% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                    100% { transform: translateY(0) rotate(360deg); }
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }

                .animate-float {
                    animation: float infinite ease-in-out;
                }

                .animate-fadeIn {
                    animation: fadeIn 1s ease-out forwards;
                }
                `}
            </style>
        </>
    );
}
