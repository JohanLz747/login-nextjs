import { supabaseServer } from "@/lib/supabaseServer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    // Validaciones
    if (!name || !email || !password) {
      return Response.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return Response.json(
        { error: "La contraseña debe tener al menos 6 caracteres" },
        { status: 400 }
      );
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    // 1. Crear usuario en Supabase Auth
    const { data: authData, error: authError } = await supabaseServer.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });

    if (authError) {
      console.error("Error en Auth:", authError);
      
      // Error específico para email duplicado
      if (authError.message.includes("already been registered")) {
        return Response.json(
          { error: "Este correo ya está registrado. Por favor, usa otro correo o inicia sesión." },
          { status: 400 }
        );
      }
      
      return Response.json(
        { error: authError.message || "Error al crear usuario" },
        { status: 400 }
      );
    }

    // 2. Insertar en tabla usuarios
    const { data, error } = await supabaseServer
      .from("usuarios")
      .insert([
        {
          nombre: name,
          email: email,
          id: authData.user.id,
        },
      ])
      .select();

    if (error) {
      console.error("Error en base de datos:", error);
      return Response.json(
        { error: "Error al registrar usuario en la base de datos" },
        { status: 400 }
      );
    }

    return Response.json(
      {
        success: true,
        message: "Usuario registrado correctamente",
        user: {
          id: authData.user.id,
          nombre: name,
          email: email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error en registro:", error);
    return Response.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
