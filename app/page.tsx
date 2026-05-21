"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex items-center justify-center px-6">

      <div className="w-full max-w-5xl bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Lado Izquierdo */}
        <div className="hidden md:flex flex-col justify-center bg-blue-600 p-10 text-white">

          <h1 className="text-4xl font-bold mb-4">
            Bienvenido
          </h1>

          <p className="text-blue-100 text-lg leading-relaxed">
            Sistema de autenticación desarrollado con Next.js y Supabase.
          </p>

          <div className="mt-10">

            <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-3">
                Login con Supabase
              </h3>

              <p className="text-blue-100 leading-relaxed">
                Proyecto moderno de inicio de sesión y registro de usuarios
                utilizando autenticación segura con Supabase y frontend
                desarrollado en Next.js.
              </p>
            </div>

          </div>
        </div>

        {/* Lado Derecho */}
        <div className="flex flex-col justify-center p-8 md:p-12">

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-black dark:text-white">
              Sistema Web
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Plataforma de gestión moderna
            </p>
          </div>

          <div className="space-y-4">

            <a
              href="/login"
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition-colors"
            >
              Iniciar Sesión
            </a>

            <a
              href="/register"
              className="block w-full text-center border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-zinc-800 text-black dark:text-white py-3 rounded-xl font-medium transition-colors"
            >
              Registrarse
            </a>

          </div>

          <div className="mt-10 border-t border-gray-200 dark:border-zinc-700 pt-6">
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              © 2026 Sistema Web - Todos los derechos reservados
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}