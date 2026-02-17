function Child(props) {
  console.log(props);
  // props.name = "madhava reddy" read only

  return (
    <>
      <div>mana</div>
      {props.name} <br />
      {props.anime}
    </>
  );
}

export default Child;
