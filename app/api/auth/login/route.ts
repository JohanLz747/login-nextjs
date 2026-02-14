import { supabaseServer } from "@/lib/supabaseServer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Validaciones
    if (!email || !password) {
      return Response.json(
        { error: "Correo y contraseña son requeridos" },
        { status: 400 }
      );
    }

    // Autenticarse con Supabase
    const { data, error } = await supabaseServer.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Error en login:", error);
      return Response.json(
        { error: "Credenciales inválidas" },
        { status: 401 }
      );
    }

    return Response.json(
      {
        success: true,
        message: "Sesión iniciada correctamente",
        user: {
          id: data.user.id,
          email: data.user.email,
        },
        session: data.session,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en login:", error);
    return Response.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
