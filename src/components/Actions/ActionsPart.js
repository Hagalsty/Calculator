import { ActionCell } from "./ActionCell";
import ActionClasses from "./Actions.module.css";

export function ActionsPart({ handleClick }) {
  return (
    <div style={{ display: "flex", width: 200, flexWrap: "wrap" }}>
      <ActionCell
        className={ActionClasses.actionCell}
        type={"AC"}
        onClick={handleClick.bind(this, "AC")}
      />
      <ActionCell
        className={ActionClasses.actionCell}
        type={"+/-"}
        onClick={handleClick.bind(this, "+/-")}
      />
      <ActionCell
        className={ActionClasses.actionCell}
        type={"%"}
        onClick={handleClick.bind(this, "%")}
      />
      <ActionCell
        className={ActionClasses.actionCell}
        type={"/"}
        onClick={handleClick.bind(this, "/")}
      />
      <ActionCell
        className={ActionClasses.actionCell}
        type={7}
        onClick={handleClick.bind(this, 7)}
      />
      <ActionCell
        className={ActionClasses.actionCell}
        type={8}
        onClick={handleClick.bind(this, 8)}
      />
      <ActionCell
        className={ActionClasses.actionCell}
        type={9}
        onClick={handleClick.bind(this, 9)}
      />
      <ActionCell
        className={ActionClasses.actionCell}
        type={"*"}
        onClick={handleClick.bind(this, "*")}
      />
      <ActionCell
        className={ActionClasses.actionCell}
        type={4}
        onClick={handleClick.bind(this, 4)}
      />
      <ActionCell
        className={ActionClasses.actionCell}
        type={5}
        onClick={handleClick.bind(this, 5)}
      />
      <ActionCell
        className={ActionClasses.actionCell}
        type={6}
        onClick={handleClick.bind(this, 6)}
      />
      <ActionCell
        className={ActionClasses.actionCell}
        type={"-"}
        onClick={handleClick.bind(this, "-")}
      />
      <ActionCell
        className={ActionClasses.actionCell}
        type={1}
        onClick={handleClick.bind(this, 1)}
      />
      <ActionCell
        className={ActionClasses.actionCell}
        type={2}
        onClick={handleClick.bind(this, 2)}
      />
      <ActionCell
        className={ActionClasses.actionCell}
        type={3}
        onClick={handleClick.bind(this, 3)}
      />
      <ActionCell
        className={ActionClasses.actionCell}
        type={"+"}
        onClick={handleClick.bind(this, "+")}
      />
      <ActionCell
        className={[ActionClasses.actionCell, ActionClasses.forZeroType].join(
          " "
        )}
        type={0}
        onClick={handleClick.bind(this, 0)}
      />
      <ActionCell
        className={ActionClasses.actionCell}
        type={"."}
        onClick={handleClick.bind(this, ".")}
      />
      <ActionCell
        className={ActionClasses.actionCell}
        type={"="}
        onClick={handleClick.bind(this, "=")}
      />
    </div>
  );
}
