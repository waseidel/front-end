import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="flex flex-col gap-4 p-4 rounded-lg border shadow-lg"
      onSubmit={handleSubmit}
    >
      <div>
        <h1 className="w-full text-3xl font-semibold text-center mb-4">
          Iniciar sesión
        </h1>
        <div className="flex flex-col gap-2">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput
              id="email"
              type="email"
              ploceholder="30000.operaciones@etm-cali.com"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Contraseña" />
            </div>
            <TextInput
              id="password"
              type="password"
              ploceholder="********"
              required={true}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-x-4">
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Recuerdame</Label>
        </div>
        <Link to="/auth/forgot-password">
          <Label
            className="cursor-pointer text-purple-500 font-medium"
            htmlFor="forgot-password"
          >
            ¿Olvidó su contraseña?
          </Label>
        </Link>
      </div>
      <div>
        <Button className="w-full" type="submit">
          Iniciar sesión
        </Button>
      </div>
    </form>
  );
};
