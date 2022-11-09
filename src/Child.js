const Child = (props) => {
  return (
    <div className="Child">
      <p>This is some text, same on each child</p>
      <p>{props.content}</p>
    </div>
  );
};

export default Child;
