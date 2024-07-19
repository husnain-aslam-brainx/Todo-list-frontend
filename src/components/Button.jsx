export default function Button({ children, onClick, type }) {
  let bgcolor = "bg-green-500";
  switch (children) {
    case "Add":
      bgcolor = "bg-blue-500";
      break;
    case "Delete":
      bgcolor = "bg-red-500";
      break;
    default:
      break;
  }
  return (
    <button
      type={type}
      className={`py-2 px-3 rounded h-10 ${bgcolor}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
