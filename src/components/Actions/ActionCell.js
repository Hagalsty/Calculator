export function ActionCell({ type, onClick, className }) {
  return (
    <div className={className} onClick={onClick}>
      {type}
    </div>
  );
}
