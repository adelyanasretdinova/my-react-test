import Child from "./Child";

const Display = (props) => {
  return (
    <div className="Display">
      <h1>A display component</h1>
      <p>{props.text}</p>
      {props.data.map((arrayItem, index) => (
        <Child content={arrayItem} key={index} />
      ))}
    </div>
  );
};

export default Display;
