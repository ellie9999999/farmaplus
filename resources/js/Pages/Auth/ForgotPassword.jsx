import { Head, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

    useEffect(() => {
        const pills = document.querySelectorAll('.pill');
        pills.forEach((pill, i) => {
            pill.style.animationDelay = `${i * 1.5}s`;
        });
    }, []);

    return (
        <>
            <Head title="Recuperar contraseña - Farmaplus+" />

            <div className="relative min-h-screen bg-gradient-to-r from-pink-200 via-purple-200 to-yellow-100 flex items-center justify-center overflow-hidden">

                {/* 💊 Pastillas flotantes */}
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className="pill absolute w-5 h-2 rounded-full bg-white shadow-lg opacity-50 animate-float"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            transform: `rotate(${Math.random() * 360}deg)`,
                            animationDuration: `${4 + Math.random() * 4}s`,
                        }}
                    />
                ))}

                {/* 💌 Contenedor de recuperación */}
                <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md z-10 relative animate-fadeIn border border-purple-200 ring-2 ring-pink-100 backdrop-blur">
                    <h1 className="text-3xl font-bold text-purple-700 mb-4 text-center tracking-wide drop-shadow-sm">
                        ¿Olvidaste tu contraseña?
                    </h1>
                    <p className="text-center text-sm text-gray-600 mb-6">
                        No te preocupes, te enviaremos un enlace para restablecerla.
                    </p>

                    {status && (
                        <div className="mb-4 font-medium text-sm text-green-600 text-center">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-5">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Correo electrónico
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow focus:ring-purple-500 focus:border-purple-500"
                                required
                            />
                            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300"
                        >
                            Enviar enlace de recuperación
                        </button>
                    </form>

                    <p className="text-sm text-center text-gray-600 mt-6">
                        ¿Ya la recordaste?{' '}
                        <a href={route('login')} className="text-purple-600 hover:underline font-semibold">
                            Inicia sesión
                        </a>
                    </p>
                </div>
            </div>

            {/* 🌈 Animaciones */}
            <style>
                {`
                @keyframes float {
                    0% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(180deg); }
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
