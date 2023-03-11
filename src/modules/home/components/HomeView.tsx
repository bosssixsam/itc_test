import { Container } from "@/components";
import { Item } from "@/modules/home";

export interface IHomeView {
  list: Array<{ name: string; url: string }>;
}

const HomeView = ({ list }: IHomeView) => {
  return (
    <section className="sc_list pt-[30px]">
      <Container>
        <div className="flex flex-wrap -m-[12px]">
          {list.map((item, index) => (
            <div key={index} className={`p-[12px] w-1/3 md:w-1/4 lg:w-[12.5%] flex justify-center`}>
              <Item name={item.name} url={item.url} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HomeView;
