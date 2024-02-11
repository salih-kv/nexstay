import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import * as apiClient from "../api-client";
import { Button } from "@/components/ui/button";
import { ErrorToolTip } from "@/components/ErrorToolTip";
import { toast } from "@/components/ui/use-toast";

export type RegisterFormInputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const mutation = useMutation(apiClient.register, {
    onSuccess: async () => {
      toast({
        title: "Registration Success!",
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

  const onsubmit: SubmitHandler<RegisterFormInputs> = (data) => {
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
            type="text"
            className="form-textbox"
            placeholder="Name"
            {...register("name", { required: "This field is required" })}
          />
          {errors.name && <ErrorToolTip errorMessage={errors.name.message} />}
        </div>
      </div>
      <div className="flex flex-col pt-4">
        <div className="form-textbox-cont">
          <input
            type="email"
            className="form-textbox"
            placeholder="Email"
            {...register("email", { required: "This field is required" })}
          />
          {errors.email && <ErrorToolTip errorMessage={errors.email.message} />}
        </div>
      </div>
      <div className="mb-4 flex flex-col sm:flex-row gap-4 justify-between pt-4">
        <div className="form-textbox-cont">
          <input
            type="password"
            className="form-textbox"
            placeholder="Password"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <ErrorToolTip errorMessage={errors.password.message} />
          )}
        </div>
        <div className="form-textbox-cont">
          <input
            type="password"
            className="form-textbox"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              validate: (val) => {
                const password = watch("password");
                if (!val) {
                  return "This field is required";
                } else if (password !== val) {
                  return "Your passwords do not match";
                }
              },
            })}
          />
          {errors.confirmPassword && (
            <ErrorToolTip errorMessage={errors.confirmPassword.message} />
          )}
        </div>
      </div>

      <Button type="submit" className="md:w-32">
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
