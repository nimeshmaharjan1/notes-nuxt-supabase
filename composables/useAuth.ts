const useAuth = () => {
  const user = useState("userDetails", () => null);
  const { supabase } = useSupabase();
  supabase.auth.onAuthStateChange((event, session) => {
    user.value = session?.user || null;
  }); //! Acts as a listener when something in the auth changes
  const signUp = async ({ email, password, ...metaData }) => {
    const { user: u, error } = await supabase.auth.signUp(
      { email, password },
      { data: metaData, redirectTo: `${window.location.origin}/profile` },
    ); //? Returns an object
    if (error) throw error;
    return u;
  };
  const login = async ({ email, password }) => {
    const { user: u, error } = await supabase.auth.signIn({ email, password });
    if (error) throw error;
    return u;
  };
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
      throw error;
    }
  };
  const isLoggedIn = () => {
    return !!user.value;
  };
  return {
    user,
    signUp,
    login,
    signOut,
    isLoggedIn,
  };
};
export default useAuth;
