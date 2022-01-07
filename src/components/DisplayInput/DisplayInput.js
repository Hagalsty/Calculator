import DisplayInputClasses from "./DisplayInput.module.css";

export function DisplayInput({ isActionSet, firstArg, secondArg }) {
  return (
    <div className={DisplayInputClasses.displayInput}>
      {!isActionSet ? firstArg.join("") : secondArg.join("")}
    </div>
  );
}
