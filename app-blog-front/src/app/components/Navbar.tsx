import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPlusCircle,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log(isAuthenticated);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("http://localhost:5000/check-auth", {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        console.log(data);
        setIsAuthenticated(data.isAuthenticated);
      } catch (error) {
        console.log("Error al verificar la autenticacion:", error);
      }
    };
    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:5000/logout", {
        method: "POST",
        credentials: "include",
      });
      setIsAuthenticated(false);
    } catch (error) {
      console.log("Error al cerrar sesion", error);
    }
  };

  return (
    <nav className="bg-indigo-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold">
          Mi blog
        </a>
        <div className="flex-grow ">
          <div className="relative max-w-md mx-auto">
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute lef-2 top-3 text-white h-5 w-5 ml-3"
            />
            <input
              type="text"
              placeholder="Buscar articulos.."
              className="bg-gray-300 text-black rounded-full pl-10 pr-4 py-2 w-full focus:outline-none"
            />
          </div>
        </div>

        <ul className="flex space-x-6 items-center">
          {isAuthenticated && (
            <li>
              <Link
                href="/create"
                className="flex items-center hover:text-gray-300 top-3"
              >
                <FontAwesomeIcon icon={faPlusCircle} className="mr-2 h-6 w-6" />
                Crear Articulo
              </Link>
            </li>
          )}
          {!isAuthenticated ? (
          <li>
            <Link
              href="/pages/login"
              className="flex items-center hover:text-gray-300 top-3"
            >
              <FontAwesomeIcon
                icon={faSignInAlt}
                className="mr-2 h-6 w-6 top-3"
              />
              Iniciar Sesion
            </Link>
          </li>
          ) : (
          <li>
            <button
              onClick={handleLogout}
              className="flex items-center hover:text-gray-300 top-3"
            >
              <FontAwesomeIcon
                icon={faSignInAlt}
                className="mr-2 h-6 w-6 top-3"
              />
              Cerrar sesion
            </button>
          </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
