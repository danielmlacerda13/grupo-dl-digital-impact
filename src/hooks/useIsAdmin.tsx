import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";

export const useIsAdmin = () => {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      console.log("useIsAdmin: No user found");
      setIsAdmin(false);
      setLoading(false);
      return;
    }

    const checkAdmin = async () => {
      try {
        console.log("useIsAdmin: Checking admin status for user:", user.id);
        const { data, error } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", user.id)
          .eq("role", "admin")
          .maybeSingle();

        console.log("useIsAdmin: Query result:", { data, error });

        if (error) {
          console.error("useIsAdmin: Error checking admin status:", error);
          setIsAdmin(false);
        } else {
          const adminStatus = !!data;
          console.log("useIsAdmin: Admin status:", adminStatus);
          setIsAdmin(adminStatus);
        }
      } catch (error) {
        console.error("useIsAdmin: Exception checking admin status:", error);
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };

    checkAdmin();
  }, [user]);

  console.log("useIsAdmin RETURN:", { isAdmin, loading, userId: user?.id });
  return { isAdmin, loading };
};
