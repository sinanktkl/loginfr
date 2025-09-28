// import React, { createContext, useState, useEffect } from 'react';
// import api from '../Services/Api';

// export const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchMe = async () => {
//     try {
//       setLoading(true);
//       const res = await api.get('/auth/me');
//       setUser(res.data.user);
//     } catch (err) {
//       setUser(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMe();
//   }, []);

//   const logout = async () => {
//     await api.post('/auth/logout');
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, setUser, loading, fetchMe, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }



// import React, { createContext, useState, useEffect } from "react";
// import { LoginAPI, GetUserAPI } from "../Services/allAPI";

// // Create Context
// export const AuthContext = createContext();

// // Provider
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // current logged-in user
//   const [loading, setLoading] = useState(true);

//   // Called after login
//   const login = async (credentials) => {
//     try {
//       const res = await LoginAPI(credentials);
//       if (res?.status === 200) {
//         // ✅ Save token in localStorage
//         localStorage.setItem("token", res.data.token);
//         setUser(res.data.user);
//         return { success: true };
//       } else {
//         return { success: false, message: res?.data?.message || "Login failed" };
//       }
//     } catch (err) {
//       return { success: false, message: "Server error" };
//     }
//   };

//   // Called on page load / refresh
//   const fetchMe = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setUser(null);
//         return;
//       }

//       const res = await GetUserAPI("", {
//         Authorization: `Bearer ${token}`,
//       });

//       if (res?.status === 200) {
//         setUser(res.data);
//       } else {
//         setUser(null);
//         localStorage.removeItem("token");
//       }
//     } catch (err) {
//       setUser(null);
//       localStorage.removeItem("token");
//     }
//   };

//   // Logout
//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//   };

//   // Auto-fetch user when app loads
//   useEffect(() => {
//     fetchMe().finally(() => setLoading(false));
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, loading, login, logout, fetchMe }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };






import React, { createContext, useState, useEffect } from "react";
import { LoginAPI, GetUserAPI } from "../Services/allAPI";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Login
  const login = async ({ email, password, remember }) => {
    try {
      const res = await LoginAPI({ email, password });
      if (res?.status === 200) {
        const token = res.data.token;

        // ✅ Save token: localStorage if remember, sessionStorage if not
        if (remember) {
          localStorage.setItem("token", token);
        } else {
          sessionStorage.setItem("token", token);
        }

        setUser(res.data.user);
        return { success: true };
      } else {
        return { success: false, message: res?.data?.message || "Login failed" };
      }
    } catch (err) {
      return { success: false, message: "Server error" };
    }
  };

  // Fetch user from token
  const fetchMe = async () => {
    try {
      const token = localStorage.getItem("token") || sessionStorage.getItem("token");
      if (!token) {
        setUser(null);
        return;
      }

      const res = await GetUserAPI(token);
      if (res?.status === 200) {
        setUser(res.data);
      } else {
        setUser(null);
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
      }
    } catch (err) {
      setUser(null);
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
  };

  useEffect(() => {
    fetchMe().finally(() => setLoading(false));
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, fetchMe }}>
      {children}
    </AuthContext.Provider>
  );
};
