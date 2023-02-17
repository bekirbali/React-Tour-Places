import styles from "./Main.module.scss";
import Card from "./Card";
import { data } from "../../utils/data";

const Main = () => {
  return (
    <div className={styles.container}>
      <Card {...data} />
    </div>
  );
};

export default Main;
