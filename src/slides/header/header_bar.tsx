"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

// Custom components and content
import * as styles from "./header_bar.module.css";
import useResize from "@/hooks/useResize";
import { appStyles } from "@/components/styles/prog_styles";
import { ButtonTemplate } from "@/components/buttons/button_template";
import { DropdownArrow } from "@/components/icons/icons";
import { Waffle } from "@/components/icons/waffle";


export const HeaderBar = () => {
  const screenWidth = useResize();

  // Set dropdown visibility
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    if (screenWidth >= 960) setMenuActive(true);
    if (screenWidth < 960) setMenuActive(false);
  }, [screenWidth]);

  const handleSetMenuActive = useCallback(() => {
    setMenuActive((prev) => !prev);
  }, [menuActive]);

  return (
    <header className={styles.header_wrapper}>
      <Image
        src="/images/teach_logo.png"
        height={35}
        width={103}
        alt="Teach"
        className={styles.logo}
      />

      {/* NAV BAR */}
      <AnimatePresence initial={true}>
        {menuActive ? (
          <motion.nav
            initial={{
              top: -120,
              opacity: 0,
            }}
            animate={{
              top: menuActive ? 67 : -120,

              y: screenWidth >= 960 ? -51 : 0,
              opacity: 1,
            }}
            exit={{
              top: -120,
              opacity: 0,
            }}
            className={styles.header_nav_options}
          >
            <Link href="/products">Products</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/pricing">Pricing</Link>
            <Link 
            
            href="/resources"
            className={styles.resources_link}
            >
              <span>Resources</span>
              {screenWidth >= 960 ? <DropdownArrow /> : <></>}
            </Link>
          </motion.nav>
        ) : null}
      </AnimatePresence>

      
      {screenWidth >= 960 ? <></> : <Waffle onClick={handleSetMenuActive} />}

      {screenWidth >= 960 ? (
        <div className={styles.account_button_wrapper}>
          <button className={styles.log_in}>Log in</button>
          <ButtonTemplate
            text="Sign up now"
            borderColor={appStyles.HeaderSignUpButton.borderColor}
            textColor={appStyles.HeaderSignUpButton.color}
            backgroundColor={appStyles.HeaderSignUpButton.backgroundColor}
            onClick={() => {}}
            textStyle={[styles.sign_up]}
            height={48}
            width={153}
          />
        </div>
      ) : (
        <></>
      )}
    </header>
  );
};
