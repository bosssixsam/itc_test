import { Container } from "@/components";

export interface IFilterView {
  types: Array<{ name: string; url: string }>;
  fillist: Array<{ name: string; url: string }>;
  handleFilter: (name: string, url: string) => void;
}

const FilterView = ({ types, fillist, handleFilter }: IFilterView) => {
  return (
    <div className="wrapper pt-[30px]">
      <Container>
        <div className="flex">
          <h2 className="mr-2 my-4 font-bold self-start">Types:</h2>
          <div className="flex flex-wrap -m-[6px]">
            {types.map((item, index) => (
              <div key={index} className="p-[6px]">
                <button
                  className={`px-2 py-2 border-red-900 border-2 rounded-md font-bold 
                    ${fillist.find((obj) => obj.name === item.name) ? "bg-red-900 text-white" : "text-red-900"}
                  `}
                  onClick={() => handleFilter(item.name, item.url)}
                >
                  {item.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FilterView;
