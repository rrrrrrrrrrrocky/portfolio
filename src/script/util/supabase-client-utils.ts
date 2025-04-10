import { createBrowserClient } from "@supabase/ssr";

import { Database } from "../../../database.types";
import {
  SUPABASE_ANON_KEY,
  SUPABASE_URL,
} from "../constant/supabase-constants";

export const createClientSide = <T = Database>() => {
  return createBrowserClient<T>(SUPABASE_URL, SUPABASE_ANON_KEY);
};
