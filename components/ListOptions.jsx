const ListOptions = (props) => {
  return (
    <div className="mt-4">
      <label className="flex justify-between items-center border border-gray-500 rounded-lg p-3 text-sm">
        Port-harcourt
        <input type="radio" value="option1" checked={props.selectedOption === 'option1'} onChange={props.handleChange} />
      </label>
      <br />
      <label className="flex justify-between items-center border border-gray-500 rounded-lg p-3 text-sm">
        Port-harcourt
        <input type="radio" value="option2" checked={props.selectedOption === 'option2'} onChange={props.handleChange} />
      </label>
      <br />
      <label className="flex justify-between items-center border border-gray-500 rounded-lg p-3 text-sm">
        Port-harcourt
        <input type="radio" value="option3" checked={props.selectedOption === 'option3'} onChange={props.handleChange} />
      </label>
      <br />
      <label className="flex justify-between items-center border border-gray-500 rounded-lg p-3 text-sm">
        Port-harcourt
        <input type="radio" value="option4" checked={props.selectedOption === 'option4'} onChange={props.handleChange} />
      </label>
    </div>
  );
}

export default ListOptions;
