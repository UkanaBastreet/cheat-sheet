import React from "react";
import Sheet from "../Sheet";
import s from "./HomePage.module.scss";

export default function HomePage() {
  const [sheets, setSheets] = React.useState([
    { id: 1, name: "JavaScript", blocks: [{ a: 1 }] },
  ]);

  return (
    <>
      <main className={s.HomePage}>
        <ul>
          {sheets.length === 0 ? (
            <h3>Loading...</h3>
          ) : (
            sheets.map((sheet) => {
              return <Sheet key={sheet.id} {...sheet} />;
            })
          )}
        </ul>
      </main>
    </>
  );
}
