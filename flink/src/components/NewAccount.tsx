import { getDisplayName } from "next/dist/shared/lib/utils";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router';



import { validarEmail } from './FuncionesValidacion';
import { signIn } from "next-auth/react";
import router from "next/router";

export default function NewAccounts() {
  const [email, setEmail] = useState('');
  const [emailValido, setEmailValido] = useState(true);
  
  const [contraseña, setContraseña] = useState('');
  const [contraseñaValida, setContraseñaValida] = useState(true);
  const [confirmarContraseña, setConfirmarContraseña] = useState('');
  const [contraseñaConfirmada, setContraseñaConfirmada] = useState(true);
  const [isEmailMoved, setIsEmailMoved] = useState(false);
  const [isContraseñaMoved, setIsContraseñaMoved] = useState(false);
  const [isConfirmarContraseñaMoved, setIsConfirmarContraseñaMoved] = useState(false);
  const [isNombresMoved, setIsNombresMoved] = useState(false);
  const [isTelefonoMoved, setIsTelefonoMoved] = useState(false);
  const [isApellidoMoved, setIsApellidoMoved] = useState(false);
  const [isBloodtypeMoved, setIsBloodtypeMoved] = useState(false);
  const [isRoleMoved, setIsRoleMoved] = useState(false);
  const [isSicknessMoved, setIsSicknessMoved] = useState(false);
  const [isAgeMoved, setIsAgeMoved] = useState(false);
  const [isDniMoved, setIsDniMoved] = useState(false);
  const [Nombres, setNombres] = useState('');
  const [Telefono, setTelefono] = useState('');
  const [Apellido, setApellido] = useState('');
  const [Bloodtype, setBloodtype] = useState('');
  const [Sickness, setSickness] = useState('');
  const [Role, setRole] = useState('');  
  const [Age, setAge] = useState('');
  const [Dni, setDni] = useState('');
  const router = useRouter();

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const nuevoEmail = event.target.value;
    setEmail(nuevoEmail);
    const esValido = validarEmail(nuevoEmail);
    setEmailValido(esValido);
  };

  const handleChangeContraseña = (event: ChangeEvent<HTMLInputElement>) => {
    const nuevaContraseña = event.target.value;
    setContraseña(nuevaContraseña);
    setContraseñaValida(nuevaContraseña.length >= 8);
    setContraseñaConfirmada(nuevaContraseña === confirmarContraseña);
  };

  const handleChangeConfirmarContraseña = (event: ChangeEvent<HTMLInputElement>) => {
    const nuevaConfirmarContraseña = event.target.value;
    setConfirmarContraseña(nuevaConfirmarContraseña);
    setContraseñaConfirmada(nuevaConfirmarContraseña === contraseña);
  };

  const handleChangeNombre = (event: ChangeEvent<HTMLInputElement>) => {
    const nuevoNombre = event.target.value;
    setNombres(nuevoNombre);
    const esValido = /^[a-zA-Z\s]*$/.test(nuevoNombre);
    // Mostrar mensaje de error si no solo hay letras en el nombre
    // Puedes usar otro estado para manejar el estado de validez del nombre
    // Aquí se establece en false si no es válido
  };

  const handleChangeApellido = (event: ChangeEvent<HTMLInputElement>) => {
    const nuevoApellido = event.target.value;
    setApellido(nuevoApellido);
    const esValido = /^[a-zA-Z\s]*$/.test(nuevoApellido);
    // Mostrar mensaje de error si no solo hay letras en el apellido
    // Puedes usar otro estado para manejar el estado de validez del apellido
    // Aquí se establece en false si no es válido
  };

  const handleChangeTelefono = (event: ChangeEvent<HTMLInputElement>) => {
    const nuevoTelefono = event.target.value;
    setTelefono(nuevoTelefono);
    const esValido = /^\d+$/.test(nuevoTelefono);
    // Mostrar mensaje de error si hay letras en el número de teléfono
    // Puedes usar otro estado para manejar el estado de validez del teléfono
    // Aquí se establece en false si no es válido
  };

  const handleChangeAge = (event: ChangeEvent<HTMLInputElement>) => {
    const newAge = event.target.value;
    setAge(newAge);
    const esValido = /^\d+$/.test(newAge);
    // Mostrar mensaje de error si hay letras en el número de teléfono
    // Puedes usar otro estado para manejar el estado de validez del teléfono
    // Aquí se establece en false si no es válido
  };

  const handleChangeBloodtype = (event: ChangeEvent<HTMLInputElement>) => {
    const newBT = event.target.value;
    setBloodtype(newBT);
    const esValido = /^\d+$/.test(newBT);
    // Mostrar mensaje de error si hay letras en el número de teléfono
    // Puedes usar otro estado para manejar el estado de validez del teléfono
    // Aquí se establece en false si no es válido
  };

  const handleChangeRole = (newRole: string) => {
    setRole(newRole);
    const esValido = /^\d+$/.test(newRole);
    // Mostrar mensaje de error si hay letras en el número de teléfono
    // Puedes usar otro estado para manejar el estado de validez del teléfono
    // Aquí se establece en false si no es válido
  };

  const handleChangeSickness = (event: ChangeEvent<HTMLInputElement>) => {
    const newSCK = event.target.value;
    setSickness(newSCK);
    const esValido = /^\d+$/.test(newSCK);
    // Mostrar mensaje de error si hay letras en el número de teléfono
    // Puedes usar otro estado para manejar el estado de validez del teléfono
    // Aquí se establece en false si no es válido
  };

  const handleChangeDni = (event: ChangeEvent<HTMLInputElement>) => {
    const newDni = event.target.value;
    setDni(newDni);
    const esValido = /^\d+$/.test(newDni);
    // Mostrar mensaje de error si hay letras en el número de teléfono
    // Puedes usar otro estado para manejar el estado de validez del teléfono
    // Aquí se establece en false si no es válido
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validar campos antes de enviar el formulario
    if (!emailValido || !contraseñaValida || !contraseñaConfirmada) {
      // Si alguno de los campos no es válido, mostrar mensaje de error o realizar acciones necesarias
      return;
    }

    // Resto de la lógica para enviar el formulario
  };


  const handleTelefonoInputClick = () => {
    setIsTelefonoMoved(true);
    setIsNombresMoved(false);
    setIsContraseñaMoved(false);
    setIsConfirmarContraseñaMoved(false);
    setIsEmailMoved(false);
    setIsApellidoMoved(false);
  };

  const handleApellidoInputClick = () => {
    setIsApellidoMoved(true);
    setIsTelefonoMoved(false);
    setIsNombresMoved(false);
    setIsContraseñaMoved(false);
    setIsConfirmarContraseñaMoved(false);
    setIsEmailMoved(false);
  };

  const handleNombresInputClick = () => {
    setIsNombresMoved(true);
    setIsContraseñaMoved(false);
    setIsConfirmarContraseñaMoved(false);
    setIsEmailMoved(false);
    setIsTelefonoMoved(false);
    setIsApellidoMoved(false);

  };

  const handleEmailInputClick = () => {
    setIsEmailMoved(true);
    setIsContraseñaMoved(false);
    setIsConfirmarContraseñaMoved(false);
    setIsNombresMoved(false);
    setIsTelefonoMoved(false);
    setIsApellidoMoved(false);

  };

  const handleContraseñaInputClick = () => {
    setIsContraseñaMoved(true);
    setIsEmailMoved(false);
    setIsConfirmarContraseñaMoved(false);
    setIsNombresMoved(false);
    setIsTelefonoMoved(false);
    setIsApellidoMoved(false);

  };

  const handleConfirmarContraseñaInputClick = () => {
    setIsConfirmarContraseñaMoved(true);
    setIsEmailMoved(false);
    setIsContraseñaMoved(false);
    setIsNombresMoved(false);
    setIsTelefonoMoved(false);
    setIsApellidoMoved(false);

  };

  const handleRoleInputClick = () => {
    setIsTelefonoMoved(false);
    setIsNombresMoved(false);
    setIsContraseñaMoved(false);
    setIsConfirmarContraseñaMoved(false);
    setIsEmailMoved(false);
    setIsApellidoMoved(false);
    setIsBloodtypeMoved (false);
    setIsRoleMoved (true);
    setIsSicknessMoved (false);
    setIsAgeMoved (false);
    setIsDniMoved(false);
  };

  const handleBloodtypeInputClick = () => {
    setIsTelefonoMoved(false);
    setIsNombresMoved(false);
    setIsContraseñaMoved(false);
    setIsConfirmarContraseñaMoved(false);
    setIsEmailMoved(false);
    setIsApellidoMoved(false);
    setIsBloodtypeMoved (true);
    setIsRoleMoved (true);
    setIsSicknessMoved (false);
    setIsAgeMoved (false);
    setIsDniMoved(false);
  };

  const handleSicknessInputClick = () => {
    setIsTelefonoMoved(false);
    setIsNombresMoved(false);
    setIsContraseñaMoved(false);
    setIsConfirmarContraseñaMoved(false);
    setIsEmailMoved(false);
    setIsApellidoMoved(false);
    setIsBloodtypeMoved (false);
    setIsRoleMoved (true);
    setIsSicknessMoved (true);
    setIsAgeMoved (false);
    setIsDniMoved(false);
  };

  const handleAgeInputClick = () => {
    setIsTelefonoMoved(true);
    setIsNombresMoved(false);
    setIsContraseñaMoved(false);
    setIsConfirmarContraseñaMoved(false);
    setIsEmailMoved(false);
    setIsApellidoMoved(false);
    setIsBloodtypeMoved (false);
    setIsRoleMoved (true);
    setIsSicknessMoved (false);
    setIsAgeMoved (true);
    setIsDniMoved(false);
  };

  const handleDniInputClick = () => {
    setIsTelefonoMoved(true);
    setIsNombresMoved(false);
    setIsContraseñaMoved(false);
    setIsConfirmarContraseñaMoved(false);
    setIsEmailMoved(false);
    setIsApellidoMoved(false);
    setIsBloodtypeMoved (false);
    setIsRoleMoved (true);
    setIsSicknessMoved (false);
    setIsAgeMoved (false);
    setIsDniMoved(true);
  };

  const handleInputBlur = () => {
    setIsEmailMoved(false);
    setIsContraseñaMoved(false);
    setIsConfirmarContraseñaMoved(false);
    setIsNombresMoved(false);
    setIsTelefonoMoved(false);
    setIsApellidoMoved(false);
    setIsBloodtypeMoved (false);
    setIsRoleMoved (false);
    setIsSicknessMoved (false);
    setIsAgeMoved (false);
    setIsDniMoved(false);
  };

  const handleEnter = async () => {

    if (Role == "OP") {
      try {
        const response = await signIn("credentials", {
          email,
          name: Nombres,
          password: contraseña,
          method: "signUp",
          redirect: false,
          dni: Dni,
          role: Role,
          phoneNumber: Telefono,
          sickness: Sickness,
          bloodType: Bloodtype,
          age: Age
        });  
        // if (response?.ok) {
        //   void router.push("/PanelDeActividades"); // Redirect to the desired page
        // } else {
        //   alert("No se pudo entrar");
        // }
        console.log (response);
      } catch (error) {
        console.error("Error:", error);
        // Handle any errors that occur during the sign-in process
      }
    }
    else{
      try {
        const response = await signIn("credentials", {
          email,
          name: Nombres,
          password: contraseña,
          method: "signUp",
          redirect: false,
          dni: Dni,
          role: Role,
          phoneNumber: Telefono,
          sickness: "",
          bloodtype: "",
          age: ""
        });
        // if (response?.ok) {
        //   void router.push("/PanelDeActividades"); // Redirect to the desired page
        // } else {
        //   alert("No se pudo entrar");
        // }
        console.log (response);
      } catch (error) {
        console.error("Error:", error);
        // Handle any errors that occur during the sign-in process
      }
    }
  }

  return (
    <div className=" items-center justify-center h-screen">

    
  
      <header className="bg-white py-4 px-6 flex items-center justify-between border-gray-200">
        <div className="flex z-20">
          <Image
            src="/Familylink Simple.png"
            alt="Picture of the author"
            width={40}
            height={40}
          />
          <div>
        <svg
        className="absolute top-0 left-0 z-10"
        viewBox="0 0 1366 257"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="1366" height="127" fill="#7E22CE"/>
        <path d="M-114 242.922C-114 242.922 102.87 137.689 192.501 129.422C300.712 119.442 355.52 196.839 464 190.422C572.751 183.989 630.361 131.188 738.5 118C916.667 96.2731 1012 268.921 1173 222.422C1225.65 207.214 1288.69 172 1343.5 172C1416.5 172 1601.68 140.922 1601.68 140.922" stroke="#85DFF3" strokeWidth="31"/>
        <path d="M-98 159.597C-98 159.597 41.0751 79.8195 139.739 68.6674C258.856 55.2034 320.038 137.762 439.489 128.155C559.235 118.523 591.301 78.8701 710.306 61.9319C906.374 34.0246 1006.93 201.415 1197 151C1319 118.637 1320.48 91.4957 1379.15 78.1527C1460.16 59.7288 1567 37 1567 37" stroke="#7E22CE" strokeWidth="73"/>
        <path d="M-64 217.473C-64 217.473 78.9074 110.19 173.333 102.866C287.334 94.0236 343.799 168.395 458.028 162.962C572.54 157.515 632.703 94.8816 746.677 82.9726C934.458 63.3506 994.769 263.484 1169 196C1226.5 173.729 1307 134 1368 134C1453.72 134 1578.68 102.866 1578.68 102.866" stroke="#4151DA" strokeWidth="39"/>
      </svg>
      </div>
        </div>
      </header>
    <div className="flex items-center justify-center h-screen">
      
      <div className="w-1/2 p-6 bg-white rounded shadow-xl shadow-grey">
        <h2 className="font-semibold text-3xl mb-4 text-center">Crea tu cuenta</h2>
        <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <div className="App items-center py-3">
            <label className="relative">
              <input
                className="w-full px-4 py-2 border-[2.5px] border-blue-700 rounded-md outline-none focus:border-blue-700 focus:text-black transition duration-200"
                type="text"
                id="Nombres"
                onClick={handleNombresInputClick}
                onBlur={handleInputBlur}
                onChange={handleChangeNombre}
              />
              <span className={`text-1xl text-black bg-white text-opacity-75 absolute left-4 -top-[1.5px] transition duration-200 ${isNombresMoved || Nombres !== '' ? 'transform -translate-y-[20.5px] text-opacity-100 text-sm text-blue-700' : ''}`}>
                &nbsp;Nombre&nbsp;
              </span>
            </label>
          </div>
          <div className="App items-center py-3">
            <label className="relative">
              <input
                className="w-full px-4 py-2 border-[2.5px] border-blue-700 rounded-md outline-none focus:border-blue-700 focus:text-black transition duration-200"
                type="text"
                id="Apellido"
                onClick={handleApellidoInputClick}
                onBlur={handleInputBlur}
                onChange={handleChangeApellido}/>
              <span className={`text-1xl text-black bg-white text-opacity-75 absolute left-4 -top-[1.5px] transition duration-200 ${isApellidoMoved || Apellido !== '' ? 'transform -translate-y-[20.5px] text-opacity-100 text-sm text-blue-700' : ''}`}>
                &nbsp;Apellido&nbsp;
              </span>
            </label>
          </div>
          <div className="App items-center py-3">
            <label className="relative">
              <input
                className="w-full px-4 py-2 border-[2.5px] border-blue-700 rounded-md outline-none focus:border-blue-700 focus:text-black transition duration-200"
                type="email"
                id="email"
                onClick={handleEmailInputClick}
                onBlur={handleInputBlur}
                onChange={handleChangeEmail}
              />
              {!emailValido && <p className="error-message text-red-600">El correo electrónico ingresado no es válido.</p>}
              <span className={`text-1xl text-black bg-white text-opacity-75 absolute left-4 -top-[1.5px] transition duration-200 ${isEmailMoved || email !== '' ? 'transform -translate-y-[20.5px] text-opacity-100 text-sm text-blue-700' : ''}`}>
                &nbsp;Email&nbsp;
              </span>
            </label>
          </div>
          <div className="App items-center py-3">
            <label className="relative">
              <input
                className="w-full px-4 py-2 border-[2.5px] border-blue-700 rounded-md outline-none focus:border-blue-700 focus:text-black transition duration-200"
                type="text"
                id="telefono"
                onClick={handleTelefonoInputClick}
                onBlur={handleInputBlur}
                onChange={handleChangeTelefono}
              />
              <span className={`text-1xl text-black bg-white text-opacity-75 absolute left-4 -top-[1.5px] transition duration-200 ${isTelefonoMoved || Telefono !== '' ? 'transform -translate-y-[20.5px] text-opacity-100 text-sm text-blue-700' : ''}`}>
                &nbsp;Telefono&nbsp;
              </span>
            </label>
          </div>
          <div className="App items-center py-3">
            <label className="relative">
              <select
                className="w-full px-4 py-2 border-[2.5px] border-blue-700 rounded-md outline-none focus:border-blue-700 focus:text-black transition duration-200"
                id="Role"
                onChange={(e) => {
                  const selectedRole = e.target.value;
                  handleChangeRole(selectedRole);
                }}
              >
                <option value="OP">OP</option>
                <option value="FM">FM</option>
                <option value="NS">NS</option>
              </select>
              <span className={`text-1xl text-black bg-white text-opacity-75 absolute left-4 -top-[1.5px] transition duration-200 ${isRoleMoved || Role !== '' ? 'transform -translate-y-[20.5px] text-opacity-100 text-sm text-blue-700' : ''}`}>
              &nbsp;Rol&nbsp;
            </span>
          </label>
        </div>
        {Role === 'OP' && (
          <div className="App items-center py-3">
            <label className="relative">
              <input
                className="w-full px-4 py-2 border-[2.5px] border-blue-700 rounded-md outline-none focus-border-blue-700 focus-text-black transition duration-200"
                type="text"
                id="bloodType"
                onClick={handleBloodtypeInputClick}
                onBlur={handleInputBlur}
                onChange={handleChangeBloodtype}
              />
              <span className={`text-1xl text-black bg-white text-opacity-75 absolute left-4 -top-[1.5px] transition duration-200 ${isBloodtypeMoved || Bloodtype !== '' ? 'transform -translate-y-[20.5px] text-opacity-100 text-sm text-blue-700' : ''}`}>
                &nbsp;Tipo de sangre&nbsp;
              </span>
            </label>
          </div>
        )}
        {Role === 'OP' && (
          <div className="App items-center py-3">
            <label className="relative">
              <input
                className="w-full px-4 py-2 border-[2.5px] border-blue-700 rounded-md outline-none focus-border-blue-700 focus-text-black transition duration-200"
                type="text"
                id="sickness"
                onClick={handleSicknessInputClick}
                onBlur={handleInputBlur}
                onChange={handleChangeSickness}
              />
              <span className={`text-1xl text-black bg-white text-opacity-75 absolute left-4 -top-[1.5px] transition duration-200 ${isSicknessMoved || Sickness !== '' ? 'transform -translate-y-[20.5px] text-opacity-100 text-sm text-blue-700' : ''}`}>
                &nbsp;Enfermedad&nbsp;
              </span>
            </label>
          </div>
        )}
        {Role === 'OP' && (
          <div className="App items-center py-3">
            <label className="relative">
              <input
                className="w-full px-4 py-2 border-[2.5px] border-blue-700 rounded-md outline-none focus-border-blue-700 focus-text-black transition duration-200"
                type="text"
                id="age"
                onClick={handleAgeInputClick}
                onBlur={handleInputBlur}
                onChange={handleChangeAge}
              />
              <span className={`text-1xl text-black bg-white text-opacity-75 absolute left-4 -top-[1.5px] transition duration-200 ${isAgeMoved || Age !== '' ? 'transform -translate-y-[20.5px] text-opacity-100 text-sm text-blue-700' : ''}`}>
                &nbsp;Edad&nbsp;
              </span>
            </label>
          </div>
        )}
        <div className="App items-center py-3">
            <label className="relative">
              <input
                className="w-full px-4 py-2 border-[2.5px] border-blue-700 rounded-md outline-none focus:border-blue-700 focus:text-black transition duration-200"
                type="text"
                id="dni"  // Asigna un ID único para el segundo nuevo input
                onClick={handleDniInputClick}  // Reemplaza handleNewInput2Click con la función adecuada
                onBlur={handleInputBlur}  // Reemplaza handleInputBlur con la función adecuada
                onChange={handleChangeDni}  // Reemplaza handleChangeNewInput2 con la función adecuada
              />
              <span className={`text-1xl text-black bg-white text-opacity-75 absolute left-4 -top-[1.5px] transition duration-200 ${isDniMoved || Dni !== '' ? 'transform -translate-y-[20.5px] text-opacity-100 text-sm text-blue-700' : ''}`}>
                &nbsp;DNI&nbsp;
              </span>
            </label>
          </div>
          <div className="App items-center py-3">
            <label className="relative">
              <input
                className="w-full px-4 py-2 border-[2.5px] border-blue-700 rounded-md outline-none focus:border-blue-700 focus:text-black transition duration-200"
                type="password"
                id="password"
                onClick={handleContraseñaInputClick}
                onBlur={handleInputBlur}
                onChange={handleChangeContraseña}
              />
              {!contraseñaValida && contraseña.length > 0 && (<p className="error-message text-red-600">La contraseña debe tener al menos 8 caracteres.</p>)}
              <span className={`text-1xl text-black bg-white text-opacity-75 absolute left-4 -top-[1.5px] transition duration-200 ${isContraseñaMoved || contraseña !== '' ? 'transform -translate-y-[20.5px] text-opacity-100 text-sm text-blue-700' : ''}`}>
                &nbsp;Contraseña&nbsp;
              </span>
            </label>
          </div>
          <div className="App items-center py-3">
            <label className="relative">
              <input
                className="w-full px-4 py-2 border-[2.5px] border-blue-700 rounded-md outline-none focus:border-blue-700 focus:text-black transition duration-200"
                type="password"
                id="confirmarpassword"
                onClick={handleConfirmarContraseñaInputClick}
                onBlur={handleInputBlur}
                onChange={handleChangeConfirmarContraseña}
              />
              {!contraseñaConfirmada && confirmarContraseña.length > 0 && <p className="error-message text-red-600">La confirmación de la contraseña no coincide.</p>}
              <span className={`text-1xl text-black bg-white text-opacity-75 absolute left-4 -top-[1.5px] transition duration-200 ${isConfirmarContraseñaMoved || confirmarContraseña !== '' ? 'transform -translate-y-[20.5px] text-opacity-100 text-sm text-blue-700' : ''}`}>
                &nbsp;Confirmar contraseña&nbsp;
              </span>
            </label>
          </div>
          <div className="flex flex-col items-center justify-center w-full col-span-2">
            <button className="w-1/2 px-4 py-2 text-white bg-blue-700 rounded hover:bg-blue-600" type="submit" onClick={() => void handleEnter()}>
              Entrar
              <nav>
                <a href="/Landing"></a>
              </nav>
              
            </button>
            <label htmlFor="text" className="py-0 text-center">
              ¿Ya tienes una cuenta? <a href="/logIn" className="text-blue-600">Iniciar sesión</a>
            </label>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}
