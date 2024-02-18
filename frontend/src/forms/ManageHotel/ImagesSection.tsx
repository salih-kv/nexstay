import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";
import { ErrorToolTip } from "@/components/ErrorToolTip";
import { Input } from "@/components/ui/input";

const ImagesSection = () => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<HotelFormData>();

  const existingImageUrls = watch("imageUrls");

  const handleDelete = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    imageUrl: string
  ) => {
    event.preventDefault();
    setValue(
      "imageUrls",
      existingImageUrls.filter((url) => url !== imageUrl)
    );
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-black/80 relative">
        <span className="mr-2">Images</span>
        {errors.imageFiles && (
          <ErrorToolTip errorMessage={errors.imageFiles.message} />
        )}
      </h2>

      <div className="border rounded p-4 flex flex-col gap-4">
        {existingImageUrls && (
          <div className="grid grid-cols-6 gap-4">
            {existingImageUrls?.map((url, index) => (
              <div key={index} className="relative group">
                <img src={url} className="min-h-full object-cover" />
                <button
                  onClick={(event) => handleDelete(event, url)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 text-white"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}

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
