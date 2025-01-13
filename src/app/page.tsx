
export default function Home() {
  return (
    <div className="bg-black h-screen align-items-center d-flex justify-content-center">
      <div className="col-xl-3 col-md-4 col-5">
        <div className="card p-5">
          <input className="form-control mb-3" type="text" placeholder="Correo electrónico" name="email" id="email" />
          <input className="form-control mb-3" type="password" placeholder="Contraseña" name="password" id="password" />
          <button className="btn btn-dark">Enviar</button>
        </div>
      </div>
    </div>
  );
}
