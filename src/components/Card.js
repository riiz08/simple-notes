const Card = (props) => {
  return (
    <div className="rounded-lg mt-4 p-2 w-full bg-slate-700">
      <h3 className="text-xl font-bold">{props.title}</h3>
      <p className="text-sm italic">{props.date}</p>
      <p className="text-md font-normal overflow-hidden my-6 text-ellipsis">
        {props.content}
      </p>
    </div>
  );
};

export default Card;
