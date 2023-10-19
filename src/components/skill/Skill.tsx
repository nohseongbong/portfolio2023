import Image from "next/image";
import styles from "@/styles/component/skill.module.css";
import { Skill, Tool } from "@/types/user";

interface Props {
  skill?: Skill[];
  tool?: Tool[];
}

export default function Skill({ skill, tool }: Props) {
  return (
    <div className={styles.skill_wrap}>
      <div className={styles.contents}>
        <h1>Skill</h1>
        <ul className={styles.list}>
          {skill?.map((item, index) => {
            return (
              <li className={styles.list_item} key={index}>
                <Image
                  className={item.type === "square_image" ? styles.image_square : styles.image_landscape}
                  src={item.image}
                  width={100}
                  height={100}
                  alt={item.name}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.contents}>
        <h1>Tool</h1>
        <ul className={styles.list}>
          {tool?.map((item, index) => {
            return (
              <li className={styles.list_item} key={index}>
                <Image
                  className={item.type === "square_image" ? styles.image_square : styles.image_landscape}
                  src={item.image}
                  width={100}
                  height={100}
                  alt={item.name}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
