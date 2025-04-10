import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

import { Database } from "../../../database.types";

export const createServerSide = async <T = Database>() => {
  const cookieStore = await cookies();

  return createServerClient<T>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch (error) {
            console.error("supabase server side initialize error >>", error);
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );
};
