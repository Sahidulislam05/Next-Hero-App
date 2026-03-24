const Spinner = ({ count = 8 }) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="flex flex-col gap-4">
            <div className="skeleton h-56 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spinner;
