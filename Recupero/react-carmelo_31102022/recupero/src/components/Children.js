const Children = ({ name, printHello }) => {
  return (
    <div className="Children">
      <p>{name}</p>
      <button onClick={() => printHello(name)}>
        Stampa il saluto per {name}
      </button>
    </div>
  );
};
export default Children;
