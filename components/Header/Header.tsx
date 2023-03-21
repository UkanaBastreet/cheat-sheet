import s from "./Header.module.scss";

export default function Header() {
  return (
    <>
      <header className={s.Header}>
        <h1>Cheet Sheet</h1>
        <div className={s.input}>
          <input type="text" />
        </div>
      </header>
    </>
  );
}
