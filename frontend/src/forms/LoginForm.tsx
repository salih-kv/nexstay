import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import * as apiClient from "../api-client";
import { Button } from "@/components/ui/button";
import { ErrorToolTip } from "@/components/ErrorToolTip";
import { toast } from "@/components/ui/use-toast";

export type LoginFormInputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const mutation = useMutation(apiClient.login, {
    onSuccess: async () => {
      toast({
        title: "Login Successful!",
      });
      await queryClient.invalidateQueries("validateToken");
      navigate("/");
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        description: error.message,
      });
      console.log(error);
    },
  });

  const onsubmit: SubmitHandler<LoginFormInputs> = (data) => {
    mutation.mutate(data);
  };
  return (
    <form
      className="flex flex-col items-stretch pt-3 md:pt-8"
      onSubmit={handleSubmit(onsubmit)}
    >
      <div className="flex flex-col pt-4">
        <div className="form-textbox-cont">
          <input
            type="email"
            id="login-email"
            className="form-textbox"
            placeholder="Email"
            {...register("email", { required: "This field is required" })}
          />
          {errors.email && <ErrorToolTip errorMessage={errors.email.message} />}
        </div>
      </div>
      <div className="mb-4 flex flex-col pt-4">
        <div className="form-textbox-cont">
          <input
            type="password"
            id="login-password"
            className="form-textbox"
            placeholder="Password"
            {...register("password", { required: "This field is required" })}
          />
          {errors.password && (
            <ErrorToolTip errorMessage={errors.password.message} />
          )}
        </div>
      </div>
      <Button type="submit" className="md:w-32">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
