"use client";
import { apple, bill, google } from "../../public";
import { slideIn } from "../styles/animations";
import Image from "next/image";
import { motion } from "framer-motion";

const Billing = () => (
  <section id="product" className="sectionReverse">
    <motion.div
      className="sectionImgReverse"
      variants={slideIn("left", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Image
        src={bill}
        alt="billing"
        width={0}
        height={0}
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </motion.div>

    <motion.div
      className="sectionInfo"
      variants={slideIn("right", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="heading2">
      Security and  <br className="sm:block hidden" /> Compliance :
      </h2>
      <p className="paragraph max-w-[470px] mt-5">
      We take security seriously at DeployBuddy. Our platform offers robust security features to safeguard your website and data against threats. With compliance certifications and regular security updates, you can trust DeployBuddy to keep your deployments secure and compliant.

  </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        
      </div>
    </motion.div>
  </section>
);

export default Billing;
