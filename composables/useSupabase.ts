import { createClient } from "@supabase/supabase-js";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tcmhlZm1zZWVxeWdzeWdvenp2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1MzU1NjA4MywiZXhwIjoxOTY5MTMyMDgzfQ.Y4l2sFYexZs_8cLIt0uyocSk51alGmql4L9J92ieM3A";

const SUPABASE_URL = "https://omrhefmseeqygsygozzv.supabase.co";
const useSupabase = () => {
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  return {
    supabase,
  };
};

export default useSupabase;
