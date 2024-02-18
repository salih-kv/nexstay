import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import * as apiClient from "../../api-client";
import ManageHotelForm from "@/forms/ManageHotel/ManageHotelForm";
import { toast } from "@/components/ui/use-toast";

const EditHotel = () => {
  const { hotelId } = useParams();

  const { data: hotel } = useQuery(
    "fetchMyHotelById",
    () => apiClient.fetchHotelById(hotelId || ""),
    {
      enabled: !!hotelId,
    }
  );

  const { mutate, isLoading } = useMutation(apiClient.updateMyHotelById, {
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
    console.log(hotelFormData.get("_id"));

    mutate(hotelFormData);
  };
  return (
    <ManageHotelForm hotel={hotel} onSave={handleSave} isLoading={isLoading} />
  );
};

export default EditHotel;
