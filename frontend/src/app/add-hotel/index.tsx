import { useMutation } from "react-query";
import * as apiClient from "../../api-client";
import ManageHotelForm from "@/forms/ManageHotel/ManageHotelForm";
import { toast } from "@/components/ui/use-toast";

const AddHotel = () => {
  const { mutate, isLoading } = useMutation(apiClient.addMyHotel, {
    onSuccess: () => {
      toast({
        title: "Hotel Saved!",
      });
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Error Saving Hotel",
      });
    },
  });

  const handleSave = (hotelFormData: FormData) => {
    mutate(hotelFormData);
  };

  return <ManageHotelForm onSave={handleSave} isLoading={isLoading} />;
};

export default AddHotel;
