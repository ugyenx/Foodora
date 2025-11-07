import Search from "../components/Search";
import RestoCarousal from "../components/RestoCarousal";
import useFetchResto from "../hooks/useFetchResto";
import CarousalCard from "../components/CarousalCard";
const Restaurant = () => {
  const restObject = useFetchResto();
  const restaurants =
    restObject?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants || [];
  const restList = restaurants;
  return (
    <section>
      <Search />
      <div>
        <div className="px-80 pb-5">
          <hr className=" border-blue-500/10 pb-7 " />
          <h3 className="text-lg font-semibold ">Popular Restaurants</h3>
        </div>
        <div className="scale-93">
          <RestoCarousal />
        </div>
      </div>
      <div className="px-80 pb-5 pt-5">
        <hr className=" border-blue-500/10 pb-7 " />
        <h3 className="text-lg font-semibold ">All Restaurants</h3>
      </div>
      <div className="ml-70 mr-60 pt-10">
        <div className="flex gap-4 flex-wrap scale-93">
          {restList.map((res) => (
            <div key={res.info.id} className="mb-18">
              <CarousalCard restData={res} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
