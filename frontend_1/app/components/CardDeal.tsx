"use client";
import { motion } from "framer-motion";
import { card } from "../../public";
import { slideIn } from "../styles/animations";
import Button from "./Button";
import Image from "next/image";

const CardDeal = () => (
  <section className="section">
    <motion.div
      className="sectionInfo"
      variants={slideIn("left", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="heading2">
      Privacy Protection:
      </h2>
      <p className="paragraph max-w-[470px] mt-5">
      We prioritize user privacy in our decentralized voting system. Through cryptographic techniques such as zero-knowledge proofs and ring signatures, we ensure that votes remain anonymous and confidential. User identities are protected, safeguarding the integrity of the voting process.
      </p>

      
    </motion.div>

    <motion.div
      className="sectionImg"
      variants={slideIn("right", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Image
        src={card}
        width={0}
        height={0}
        alt="billing"
        className="w-[100%] h-[100%]"
      />
    </motion.div>
  </section>
);

export default CardDeal;
