const Input = ({label, placeholder, value, id, type }) => {
  return (
    <div className="rounded-b-md mx-auto w-[80%] border-b-2 border-neutral-300 mb-5">
      {label ? (
        <label className="block text-neutral-500" htmlFor={id}>
          {label}
        </label>
      ) : (
        true
      )}

      <input
        placeholder={placeholder}
        value={value}
        className=" bg-transparent "
        id={id}
        type={type}
      />
    </div>
  );
};

export default Input;
