import Image from "next/image";
import React from "react";

import iconCoin from "../../public/img/icon-coin.png";

const Ticker = ({
  parentClass,
  dir,
  delay,
  changeIcon,
  iconLight,
  textClass,
  textClassTwo,
}) => {
  return (
    <>
      <div className={parentClass} data-delay={delay}>
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-12">
              <div
                className="scroller-x"
                data-speed="slow"
                data-direction={dir}
              >
                <ul className="list list-row align-items-center gap-4 scroller-x__list">
                  <li>
                    <Image
                      src={
                        iconLight
                          ? iconCoin
                          : changeIcon && !changeIcon
                          ? iconCoin
                          : iconCoin
                      }
                      width={26}
                      height={26}
                      alt="image"
                      className="img-fluid"
                    />
                  </li>
                  <li>
                    <h4 className={textClass}> PROOF OF STAKE </h4>
                  </li>
                  <li>
                    <Image
                      src={
                        iconLight
                          ? iconCoin
                          : changeIcon && !changeIcon
                          ? iconCoin
                          : iconCoin
                      }
                      width={26}
                      height={26}
                      alt="image"
                      className="img-fluid"
                    />
                  </li>
                  <li>
                    <h4 className={textClassTwo}> #GETDORKED </h4>
                  </li>
                  <li>
                    <Image
                      src={
                        iconLight
                          ? iconCoin
                          : changeIcon && !changeIcon
                          ? iconCoin
                          : iconCoin
                      }
                      alt="image"
                      className="img-fluid"
                    />
                  </li>
                  <li>
                    <h4 className={textClass}> PROOF OF STAKE </h4>
                  </li>
                  <li>
                    <Image
                      src={
                        iconLight
                          ? iconCoin
                          : changeIcon && !changeIcon
                          ? iconCoin
                          : iconCoin
                      }
                      width={26}
                      height={26}
                      alt="image"
                      className="img-fluid"
                    />
                  </li>
                  <li>
                    <h4 className={textClassTwo}> #GETDORKED </h4>
                  </li>
                  <li>
                    <Image
                      src={
                        iconLight
                          ? iconCoin
                          : changeIcon && !changeIcon
                          ? iconCoin
                          : iconCoin
                      }
                      alt="image"
                      className="img-fluid"
                    />
                  </li>
                  <li>
                    <h4 className={textClass}> PROOF OF STAKE </h4>
                  </li>
                  <li>
                    <Image
                      src={
                        iconLight
                          ? iconCoin
                          : changeIcon && !changeIcon
                          ? iconCoin
                          : iconCoin
                      }
                      width={26}
                      height={26}
                      alt="image"
                      className="img-fluid"
                    />
                  </li>
                  <li>
                    <h4 className={textClassTwo}> #GETDORKED </h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticker;
