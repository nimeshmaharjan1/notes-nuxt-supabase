import { createClient } from "@supabase/supabase-js";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tcmhlZm1zZWVxeWdzeWdvenp2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1MzQ3ODI4OCwiZXhwIjoxOTY5MDU0Mjg4fQ.N5h_aNX9FyAjMUByPx4nLbxSyem5Ylc_SyGNTchrC-Q";

const SUPABASE_URL = "https://omrhefmseeqygsygozzv.supabase.co";
const useSupabase = () => {
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  return {
    supabase,
  };
};

export default useSupabase;
