import { useEffect, useState } from "react";
import "./ToTop.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const ToTop = () => {
  const [isHidden, setIsHidden] = useState(true);

  // const handleClick = () => {
  //   window.scroll({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  const handleScroll = () => {
    const top = document.documentElement.scrollTop;
    let height = document.documentElement.clientHeight;
    if (top > height / 2) setIsHidden(false);
    else setIsHidden(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // return (
  //   !isHidden && (
  //     <button onClick={handleClick} className="btn btn-to-top">
  //       TOP
  //     </button>
  //   )
  // );
  return (
    !isHidden && (
      <AnchorLink href="#header" className="btn btn-to-top">
        <img className="icon icon-up" src="./up.png" alt="Chevron UP" />
      </AnchorLink>
    )
  );
};

export default ToTop;
