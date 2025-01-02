export default function TabButton({ children, onSelect, isSelected }) {
  console.log(children, onSelect, isSelected)
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
