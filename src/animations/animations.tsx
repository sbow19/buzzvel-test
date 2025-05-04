/* Standrd animation variants reused throghout page */

// Text fade in orchestration
export const text = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

export const cards = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.75,
      type: "spring",
      damping: 30,
    },
  },
  hidden: {
    opacity: 0,
    y: 150,
    transition: {
      when: "afterChildren",
    },
  },
};

export const cardRows = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      type: "spring",
      damping: 30,
    },
  },
  hidden: {
    opacity: 0,
    x: 150,
    transition: {
      when: "afterChildren",
    },
  },
};
