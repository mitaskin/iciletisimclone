import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import MainBlock from "../components/main/main";

export default function Home() {
  let [x, setx] = useState([1]);

  return (
    <>
      <MainBlock />

      {x.map((y) => (
        <div>
          <h3>indexjs Bölgesi</h3>
        </div>
      ))}
      
    </>
  );
}
