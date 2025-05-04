import * as styles from "./footer.module.css";
import { AltTeachLogo } from "@/components/icons/icons";
import Link from "next/link";
import { BannerBadge } from "@/components/banner_badge/banner_badge";
import { appStyles } from "@/components/styles/prog_styles";

const footerList: FooterLinkObject[] = [
  {
    title: "Product",
    subPaths: [
      {
        name: "Pricing",
        link: "",
        badge: null,
      },
      {
        name: "Overview",
        link: "",
        badge: null,
      },
      {
        name: "Browse",
        link: "",
        badge: null,
      },
      {
        name: "Accessibility",
        link: "",
        badge: (
          <BannerBadge
            bannerBackgroundColor={appStyles.LessonCardBanner.purple.background}
            bannerText="BETA"
            bannerTextColor={appStyles.LessonCardBanner.purple.text}
          />
        ),
      },
    ],
  },
  {
    title: "Solutions",
    subPaths: [
      {
        name: "Brainstorming",
        link: "",
        badge: null,
      },
      {
        name: "Ideation",
        link: "",
        badge: null,
      },
      {
        name: "Wireframing",
        link: "",
        badge: null,
      },
      {
        name: "Research",
        link: "",
        badge: null,
      },
    ],
  },
  {
    title: "Resources",
    subPaths: [
      {
        name: "Help Center",
        link: "",
        badge: null,
      },
      {
        name: "Blog",
        link: "",
        badge: null,
      },
      {
        name: "Tutorials",
        link: "",
        badge: null,
      },
      {
        name: "FAQs",
        link: "",
        badge: null,
      },
    ],
  },
  {
    title: "Support",
    subPaths: [
      {
        name: "Contact Us",
        link: "",
        badge: null,
      },
      {
        name: "Developers",
        link: "",
        badge: null,
      },
      {
        name: "Documentation",
        link: "",
        badge: null,
      },
      {
        name: "Integrations",
        link: "",
        badge: null,
      },
    ],
  },
  {
    title: "Company",
    subPaths: [
      {
        name: "About",
        link: "",
        badge: null,
      },
      {
        name: "Press",
        link: "",
        badge: null,
      },
      {
        name: "Events",
        link: "",
        badge: null,
      },
      {
        name: "Request Demo",
        link: "",
        badge: null,
      },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterList footerLinks={footerList} />
      <hr className={styles.divider} />
      <div className={styles.bottom_wrapper}>
        <p className={styles.copyright}>uteach @ 2023. All rights reserved.</p>
        <ul className={styles.bottom_link_wrapper}>
          <li>
            <Link href="">Terms</Link>
          </li>
          <li>
            <Link href="">Privacy</Link>
          </li>
          <li>
            <Link href="">EN</Link>
          </li>
          <li>
            <Link href="">EUR</Link>
          </li>
          <li>
            <Link href=""></Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

const FooterList: React.FC<{
  footerLinks: FooterLinkObject[];
}> = ({ footerLinks }) => {
  return (
    <ul className={styles.link_list}>
      <AltTeachLogo />

      {footerLinks.map((linkObject, index) => {
        return (
          <li
            key={`${linkObject.title}-${index}`}
            className={styles.link_item_wrapper}
          >
            <h4 className={styles.link_item_header}>{linkObject.title}</h4>
            {linkObject.subPaths.map((subPath, index) => {
              return (
                <div key={`${subPath}-${index}`} className={styles.link_item}>
                  <Link href={subPath.link} className={styles.link_path}>
                    {subPath.name}
                  </Link>
                  {subPath.badge ?? <></>}
                </div>
              );
            })}
          </li>
        );
      })}
    </ul>
  );
};

type LinkObject = {
  name: string;
  link: string;
  badge: React.ReactElement | null;
};

type FooterLinkObject = {
  title: string;
  subPaths: LinkObject[];
};
