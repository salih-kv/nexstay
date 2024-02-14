import { DatePickerWithRange } from "./DatePickerWithRange";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  return (
    <form className="-mt-7 p-2 bg-white rounded-xl shadow-md flex flex-wrap items-center gap-4">
      <div className="flex flex-row items-center flex-1 bg-white p-2 rounded-md min-w-60">
        <input
          placeholder="Where are you going?"
          className="w-full focus:outline-none"
        />
      </div>

      <div className="flex bg-white px-2 py-1 gap-2 rounded-md border">
        <label className="items-center flex">
          Adults:
          <input
            className="w-full p-1 focus:outline-none font-bold flex-1"
            type="number"
            min={1}
            max={20}
          />
        </label>
        <label className="items-center flex">
          Children:
          <input
            className="w-full p-1 focus:outline-none font-bold"
            type="number"
            min={0}
            max={20}
          />
        </label>
      </div>
      <DatePickerWithRange />
      <div className="flex flex-1 gap-4">
        <Button className="w-2/3 bg-black">Search</Button>
        <Button
          variant="secondary"
          className="w-1/3 flex items-center justify-center"
        >
          Clear
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
