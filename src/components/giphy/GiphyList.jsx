function TextList(props) {
  const items = props.gifs.map((itemData) => <Item url={itemData.url} />);
  return (
    <div className="text-container">
      {items}
    </div>
  );
}
function Item(props) {
  return (
    <div className="gif-item">
      <img src={props.url} />
    </div>
  );
}
export default TextList;
