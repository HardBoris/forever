import Link from "next/link";
import { Fragment } from "react";
import navigation from "@/styles/Navigation.module.css";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  return (
    <Fragment>
      <ul className={navigation.lista}>
        <li className={navigation.item}>
          <div
            className={navigation.action}
            role="button"
            onClick={() => router.push("/")}
          >
            To Do App
          </div>
        </li>
        <li className={navigation.item}>
          <div
            className={navigation.action}
            role="button"
            onClick={() => router.push("/about")}
          >
            About
          </div>
        </li>
        <li className={navigation.item}>
          <div
            className={navigation.action}
            role="button"
            onClick={() => router.push("/add-todo")}
          >
            Add To Do
          </div>
        </li>
      </ul>
    </Fragment>
  );
};
export default Navigation;
