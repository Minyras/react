/* eslint-disable react/prop-types */

const Wine = (props) => {
  return (
    <div className="wine">
      <h1>{props.title}</h1>
      <span>{props.description}</span>
      <p>{props.rating}</p>
    </div>
  );
};

export default Wine;
