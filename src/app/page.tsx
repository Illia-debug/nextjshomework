import styles from "./page.module.css";
import AllCars from "@/components/AllCars/AllCars";

export default function Home() {
  return (
    <div className={styles.page}>
     <AllCars/>
    </div>
  );
}
