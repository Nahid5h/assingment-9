import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const view = useLoaderData();
  console.log(view);
  const { id } = useParams();
  const IdInt = parseInt(id);
  const vie = view.find((vi) => vi.id === IdInt);
  console.log(vie);
  return (
    <div className="mt-8 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
      <div className="flex-1">
        <img className="rounded-2xl " src={vie.image} alt="" />
      </div>
      <div className="space-y-4 flex-1">
        <h1 className="text-3xl font-semibold">{vie.estate_title}</h1>
        <p className="text-2xl">{vie.segment_name}</p>
        <p>{vie.description}</p>

        <p className="text-2xl">{vie.price}</p>
        <p>{vie.status}</p>
        <h1>{vie.area}</h1>
        <p>{vie.location}</p>
        <p>{vie.facilities}</p>
      </div>
    </div>
  );
};

export default Details;
