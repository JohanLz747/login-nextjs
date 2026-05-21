"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="
      relative
      flex
      min-h-screen
      items-center
      justify-center
      overflow-hidden
      bg-[#020617]
      px-6
      font-sans
    ">
      <div className="
        absolute
        top-[-120px]
        left-[-120px]
        h-96
        w-96
        rounded-full
        bg-cyan-500/20
        blur-3xl
      " />

      <div className="
        absolute
        bottom-[-150px]
        right-[-150px]
        h-[450px]
        w-[450px]
        rounded-full
        bg-blue-600/20
        blur-3xl
      " />

      <div className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_50%)]
      " />
      <main className="
        relative
        z-10
        w-full
        max-w-md
        rounded-[32px]
        border
        border-white/10
        bg-white/5
        p-10
        shadow-2xl
        backdrop-blur-2xl
      ">
        <div className="flex justify-center">
          <div className="
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-400/10
            px-4
            py-1
            text-sm
            font-medium
            text-cyan-300
            shadow-lg
            shadow-cyan-500/10
          ">
            Frontend Developer Portfolio
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-3xl
            bg-gradient-to-br
            from-cyan-400
            to-blue-600
            shadow-xl
            shadow-cyan-500/30
          ">
            <Image
              className="brightness-0 invert"
              src="/next.svg"
              alt="Next.js Logo"
              width={55}
              height={55}
              priority
            />
          </div>
        </div>

        {/* Title */}
        <div className="mt-8 text-center">

          <h1 className="
            text-4xl
            font-extrabold
            tracking-tight
            text-white
          ">
            Bienvenido
          </h1>

          <p className="
            mt-4
            text-base
            leading-7
            text-zinc-400
          ">
            Plataforma moderna de autenticación con
            Next.js, Supabase y Tailwind CSS.
          </p>

        </div>

        <div className="mt-10 space-y-5">

          <div>
            <label className="
              mb-2
              block
              text-sm
              font-medium
              text-zinc-300
            ">
              Correo electrónico
            </label>

            <input
              type="email"
              placeholder="correo@gmail.com"
              className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-4
                py-3
                text-white
                outline-none
                transition
                placeholder:text-zinc-500
                focus:border-cyan-400
                focus:ring-2
                focus:ring-cyan-400/30
              "
            />
          </div>

          <div>
            <label className="
              mb-2
              block
              text-sm
              font-medium
              text-zinc-300
            ">
              Contraseña
            </label>

            <input
              type="password"
              placeholder="********"
              className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-4
                py-3
                text-white
                outline-none
                transition
                placeholder:text-zinc-500
                focus:border-cyan-400
                focus:ring-2
                focus:ring-cyan-400/30
              "
            />
          </div>

        </div>
        <div className="mt-8 flex flex-col gap-4">

          <Link
            href="/login"
            className="
              flex
              items-center
              justify-center
              rounded-xl
              bg-gradient-to-r
              from-cyan-400
              to-blue-600
              py-3
              text-base
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:shadow-xl
              hover:shadow-cyan-500/30
            "
          >
            Iniciar Sesión
          </Link>

          <Link
            href="/register"
            className="
              flex
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/5
              py-3
              text-base
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-white/10
              hover:scale-[1.02]
            "
          >
            Crear Cuenta
          </Link>

        </div>

        {/* Footer */}
        <div className="
          mt-8
          border-t
          border-white/10
          pt-6
          text-center
        ">
          <p className="text-sm text-zinc-500">
            © 2026 Johan Developer Portfolio
          </p>
        </div>

      </main>

    </div>
  );
}