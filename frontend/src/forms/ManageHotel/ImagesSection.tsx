import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";
import { ErrorToolTip } from "@/components/ErrorToolTip";
import { Input } from "@/components/ui/input";

const ImagesSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-black/80 relative">
        <span className="mr-2">Images</span>
        {errors.imageFiles && (
          <ErrorToolTip errorMessage={errors.imageFiles.message} />
        )}
      </h2>

      <div className="border rounded p-4 flex flex-col gap-4">
        <div className="grid w-full items-center gap-1.5">
          <Input
            type="file"
            multiple
            accept="image/*"
            {...register("imageFiles", {
              validate: (imageFiles) => {
                const totalLength = imageFiles.length;

                totalLength === 0 && "At least one image should be added";
                totalLength > 6 &&
                  "Total number of images cannot be more than 6";

                return true;
              },
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default ImagesSection;
