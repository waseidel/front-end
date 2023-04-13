import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export const ForgotPasswordPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-semibold">Olvide mi contraseña</h1>
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
      <div className="flex items-center justify-center">
        <Link to="/auth/login">
          <Label className="cursor-pointer" htmlFor="forgot-password">
            Iniciar sesión
          </Label>
        </Link>
      </div>
      <div>
        <Button className="w-full" type="submit">
          Solicitar contraseña nueva
        </Button>
      </div>
    </form>
  );
};
