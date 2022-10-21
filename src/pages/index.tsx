import Image from "next/future/image";

import styles from "../styles/Home.module.css";

import rocketseatLogo from "../assets/logo.svg";
import githubLogo from "../assets/github.svg";

export default function Home() {
  return (
    <div>
      <div className={styles.header}>
        <Image src={rocketseatLogo} width={286 / 2} alt="" />

        <div className={styles.nav}>
          <a href="https://github.com/amanda-santos">
            <Image src={githubLogo} width={24} alt="" />
          </a>
        </div>
      </div>

      <div className={styles.content}>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>

        <h4>
          Repellat cupiditate in veniam sit maiores iste magni perferendis
          commodi blanditiis perspiciatis, amet sed deserunt ullam voluptas
          repellendus voluptatibus quibusdam
        </h4>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          similique omnis nisi vero, necessitatibus odio qui beatae totam modi
          officia provident quisquam, et eos corporis maiores, quam voluptatum
          earum autem?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
          tenetur architecto amet quae magnam culpa! Sunt atque assumenda ea,
          modi dolorum dicta suscipit repudiandae ab sapiente omnis iste. Magni,
          fuga?
        </p>

        <h3>Temporibus, nobis possimus?</h3>
      </div>
    </div>
  );
}
