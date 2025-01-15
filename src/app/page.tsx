'use client'

import { Userdata } from "@/interface/users";
import { getUserData } from "@/services/usersService";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState<{ _id: string; name: string; email: string; }[]>([]);

  const fetchUser = async () => {
    try {
      const fetchedUser = await getUserData() as Userdata;
      console.log(fetchedUser.data);
      setUser(fetchedUser.data);
    } catch (error) {
      console.error('Error al obtener los Usuarios:', error);
    }
  };

  return (
    <div className="bg-black h-screen align-items-center d-flex justify-content-center">
      <div className="col-xl-3 col-md-4 col-5">
        <div className="card p-5">
          <input className="form-control mb-3" type="text" placeholder="Correo electrónico" name="email" id="email" />
          <input className="form-control mb-3" type="password" placeholder="Contraseña" name="password" id="password" />
          <button onClick={fetchUser} className="btn btn-dark">Enviar</button>
          {user && user.length > 0 && user.map((u) => (
            <div key={u._id} className="mt-3">
              <p>Nombre: {u.name}</p>
              <p>Email: {u.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
