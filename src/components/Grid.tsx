const Grid: React.FC = () => {
  return (
    <div className="absolute grid overflow-x-hidden">
      {Array.from({ length: 5 }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap">
          {Array.from({ length: 7 }).map((_, colIndex) => (
            <div
              key={colIndex}
              className="w-2 h-2 rounded-full mx-2 my-1"
              style={{ background: "#AEA8FF" }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
