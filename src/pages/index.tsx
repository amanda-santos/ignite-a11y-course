import Image from "next/future/image";
import * as Dialog from "@radix-ui/react-dialog";

import styles from "../styles/Home.module.css";

import rocketseatLogo from "../assets/logo.svg";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Image src={rocketseatLogo} width={286 / 2} alt="Rocketseat Blog" />

        <div className={styles.nav}>
          <a href="https://github.com/amanda-santos" aria-label="Access Github">
            <svg
              aria-hidden="true"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="28"
              width="28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 32C132.3 32 32 134.9 32 261.7a229.3 229.3 0 0 0 153.2 217.9c1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4l-.3-39.1c-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6a84.6 84.6 0 0 1 2.2-60.8s1.6-.5 5-.5c8.1 0 26.4 3.1 56.6 24.1a209.8 209.8 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5a84.6 84.6 0 0 1 2.2 60.8 90.3 90.3 0 0 1 23 61.6c0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4A229.2 229.2 0 0 0 480 261.7C480 134.9 379.7 32 256 32z"
                stroke="none"
              />
            </svg>
          </a>
        </div>
      </header>

      <main>
        <article className={styles.content}>
          <header>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>

            <h2>
              Repellat cupiditate in veniam sit maiores iste magni perferendis
              commodi blanditiis perspiciatis, amet sed deserunt ullam voluptas
              repellendus voluptatibus quibusdam
            </h2>
          </header>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            similique omnis nisi vero, necessitatibus odio qui beatae totam modi
            officia provident quisquam, et eos corporis maiores, quam voluptatum
            earum autem?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            tenetur architecto amet quae magnam culpa! Sunt atque assumenda ea,
            modi dolorum dicta suscipit repudiandae ab sapiente omnis iste.
            Magni, fuga?
          </p>

          <h3>Temporibus, nobis possimus?</h3>
        </article>
      </main>

      <footer className={styles.footer} aria-label="footer">
        <Image src={rocketseatLogo} width={286 / 2} alt="Rocketseat Blog" />

        <nav className={styles.nav}>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button type="button">About us</button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className={styles.overlay} />
              <Dialog.Content className={styles.modal}>
                <Dialog.Title>About us</Dialog.Title>
                <Dialog.Description>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Necessitatibus id praesentium qui, expedita cum fugit iusto
                  distinctio provident, repudiandae exercitationem delectus
                  molestiae nobis quaerat consequuntur aliquam fuga non odio
                  nihil!
                </Dialog.Description>
                <Dialog.Close asChild>
                  <button className={styles.closeModalButton} type="button">
                    Close
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </nav>
      </footer>
    </>
  );
}
