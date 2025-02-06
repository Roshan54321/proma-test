import { FunctionComponent, useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Button1 from "./Button1";
import styles from "./Button.module.css";

export type ButtonType = {
  className?: string;
};

const Button: FunctionComponent<ButtonType> = ({ className = "" }) => {
  const onAccordionHeaderClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const element = event.target as HTMLElement;

      const accItem: HTMLElement =
        element.closest("[data-acc-item]") || element;
      const accContent = accItem.querySelector(
        "[data-acc-content]"
      ) as HTMLElement;
      const isOpen = accItem.hasAttribute("data-acc-open");
      const nextOuterSibling =
        accItem?.nextElementSibling ||
        (accItem?.parentElement?.nextElementSibling as HTMLElement);
      const prevOuterSibling =
        accItem?.previousElementSibling ||
        (accItem?.parentElement?.previousElementSibling as HTMLElement);
      const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
        ? accItem?.nextElementSibling ||
          nextOuterSibling?.querySelector("[data-acc-item]") ||
          nextOuterSibling
        : accItem?.previousElementSibling ||
          prevOuterSibling?.querySelector("[data-acc-item]") ||
          prevOuterSibling;
      const siblingAccItem =
        (siblingContainerAccItem?.querySelector(
          "[data-acc-item]"
        ) as HTMLElement) || siblingContainerAccItem;

      if (!siblingAccItem) return;
      const originalDisplay = "flex";
      const siblingDisplay = "flex";

      const openStyleObject = {
        "grid-template-rows": "1fr",
      };
      const closeStyleObject = {
        "padding-top": "0px",
        "padding-bottom": "0px",
        "margin-bottom": "0px",
        "margin-top": "0px",
        "grid-template-rows": "0fr",
      };

      function applyStyles(
        element: HTMLElement,
        styleObject: Record<string, string>
      ) {
        Object.assign(element.style, styleObject);
      }

      function removeStyles(
        element: HTMLElement,
        styleObject: Record<string, string>
      ) {
        Object.keys(styleObject).forEach((key) => {
          element?.style.removeProperty(key);
        });
      }

      if (isOpen) {
        removeStyles(accContent, openStyleObject);
        applyStyles(accContent, closeStyleObject);

        setTimeout(() => {
          if (accItem) {
            accItem.style.display = "none";
            siblingAccItem.style.display = siblingDisplay;
          }
        }, 100);
      } else {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = originalDisplay;
        }
        const siblingAccContent = siblingAccItem?.querySelector(
          "[data-acc-content]"
        ) as HTMLElement;
        setTimeout(() => {
          removeStyles(siblingAccContent, closeStyleObject);
          applyStyles(siblingAccContent, openStyleObject);
        }, 1);
      }
    },
    []
  );

  return (
    <div className={[styles.button, className].join(" ")}>
      <header className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.buttonParent}>
              <a className={styles.button1}>Button</a>
              <h3 className={styles.displaysAButton}>
                Displays a button or a component that looks like a button.
              </h3>
            </div>
            <button className={styles.button2}>
              <a className={styles.viewDocs}>View docs</a>
            </button>
          </div>
        </div>
        <div className={styles.divider} />
      </header>
      <section className={styles.componentGridWrapper}>
        <div className={styles.componentGrid} data-acc-group>
          <div
            className={styles.frameContainer}
            data-acc-item
            data-acc-header
            data-acc-original
            onClick={onAccordionHeaderClick}
          >
            <div className={styles.buttonWrapper}>
              <Button1 size="default" variant="default" />
            </div>
            <div className={styles.buttonContainer}>
              <Button1
                size="sm"
                variant="default"
                buttonWidth="69px"
                buttonHeight="36px"
              />
            </div>
            <Button1
              size="lg"
              variant="default"
              buttonWidth="111px"
              buttonHeight="44px"
            />
            <div className={styles.buttonFrame}>
              <div className={styles.button3}>
                <img
                  className={styles.svgIcon}
                  loading="lazy"
                  alt=""
                  src="/svg1.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.accordionItemMock} data-acc-item data-acc-open>
            <div
              className={styles.frame5Open}
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <div className={styles.buttonWrapper}>
                <Button1
                  size="default"
                  variant="default"
                  buttonWidth="77px"
                  buttonHeight="40px"
                />
              </div>
              <div className={styles.buttonContainer}>
                <Button1
                  size="sm"
                  variant="default"
                  buttonWidth="69px"
                  buttonHeight="36px"
                />
              </div>
              <Button1
                size="lg"
                variant="default"
                buttonWidth="111px"
                buttonHeight="44px"
              />
              <div className={styles.buttonFrame}>
                <div className={styles.button3}>
                  <img
                    className={styles.svgIcon}
                    loading="lazy"
                    alt=""
                    src="/svg1.svg"
                  />
                </div>
              </div>
              <div className={styles.accordionContent} />
            </div>
            <div className={styles.accordionContent1} data-acc-content>
              <div className={styles.accordionContentWrap}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </div>
          </div>
          <div
            className={styles.frameContainer}
            data-acc-item
            data-acc-header
            data-acc-original
            onClick={onAccordionHeaderClick}
          >
            <div className={styles.buttonWrapper}>
              <Button1
                size="default"
                variant="destructive"
                buttonWidth="77px"
                buttonHeight="40px"
              />
            </div>
            <div className={styles.buttonContainer}>
              <Button1
                size="sm"
                variant="destructive"
                buttonWidth="69px"
                buttonHeight="36px"
              />
            </div>
            <Button1
              size="lg"
              variant="destructive"
              buttonWidth="111px"
              buttonHeight="44px"
            />
            <div className={styles.buttonFrame}>
              <div className={styles.button5}>
                <img
                  className={styles.svgIcon}
                  loading="lazy"
                  alt=""
                  src="/svg1.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.accordionItemMock} data-acc-item data-acc-open>
            <div
              className={styles.frame5Open}
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <div className={styles.buttonWrapper}>
                <Button1
                  size="default"
                  variant="default"
                  buttonWidth="77px"
                  buttonHeight="40px"
                />
              </div>
              <div className={styles.buttonContainer}>
                <Button1
                  size="sm"
                  variant="default"
                  buttonWidth="69px"
                  buttonHeight="36px"
                />
              </div>
              <Button1
                size="lg"
                variant="default"
                buttonWidth="111px"
                buttonHeight="44px"
              />
              <div className={styles.buttonFrame}>
                <div className={styles.button3}>
                  <img
                    className={styles.svgIcon}
                    loading="lazy"
                    alt=""
                    src="/svg1.svg"
                  />
                </div>
              </div>
              <div className={styles.accordionContent} />
            </div>
            <div className={styles.accordionContent1} data-acc-content>
              <div className={styles.accordionContentWrap}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </div>
          </div>
          <div
            className={styles.frameContainer}
            data-acc-item
            data-acc-header
            data-acc-original
            onClick={onAccordionHeaderClick}
          >
            <div className={styles.buttonWrapper}>
              <Button1
                size="default"
                variant="ghost"
                buttonWidth="77px"
                buttonHeight="40px"
              />
            </div>
            <div className={styles.buttonContainer}>
              <Button1
                size="sm"
                variant="ghost"
                buttonWidth="69px"
                buttonHeight="36px"
              />
            </div>
            <Button1
              size="lg"
              variant="ghost"
              buttonWidth="111px"
              buttonHeight="44px"
            />
            <div className={styles.buttonFrame}>
              <div className={styles.button7}>
                <img
                  className={styles.svgIcon}
                  loading="lazy"
                  alt=""
                  src="/svg-2.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.accordionItemMock} data-acc-item data-acc-open>
            <div
              className={styles.frame5Open}
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <div className={styles.buttonWrapper}>
                <Button1
                  size="default"
                  variant="default"
                  buttonWidth="77px"
                  buttonHeight="40px"
                />
              </div>
              <div className={styles.buttonContainer}>
                <Button1
                  size="sm"
                  variant="default"
                  buttonWidth="69px"
                  buttonHeight="36px"
                />
              </div>
              <Button1
                size="lg"
                variant="default"
                buttonWidth="111px"
                buttonHeight="44px"
              />
              <div className={styles.buttonFrame}>
                <div className={styles.button3}>
                  <img
                    className={styles.svgIcon}
                    loading="lazy"
                    alt=""
                    src="/svg1.svg"
                  />
                </div>
              </div>
              <div className={styles.accordionContent} />
            </div>
            <div className={styles.accordionContent1} data-acc-content>
              <div className={styles.accordionContentWrap}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </div>
          </div>
          <div
            className={styles.frameContainer}
            data-acc-item
            data-acc-header
            data-acc-original
            onClick={onAccordionHeaderClick}
          >
            <div className={styles.buttonWrapper}>
              <Button1
                size="default"
                variant="link"
                buttonWidth="77px"
                buttonHeight="40px"
              />
            </div>
            <div className={styles.buttonContainer}>
              <Button1
                size="sm"
                variant="link"
                buttonWidth="69px"
                buttonHeight="36px"
              />
            </div>
            <Button1
              size="lg"
              variant="link"
              buttonWidth="111px"
              buttonHeight="44px"
            />
            <div className={styles.buttonFrame}>
              <div className={styles.button7}>
                <img
                  className={styles.svgIcon}
                  loading="lazy"
                  alt=""
                  src="/svg-2.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.accordionItemMock} data-acc-item data-acc-open>
            <div
              className={styles.frame5Open}
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <div className={styles.buttonWrapper}>
                <Button1
                  size="default"
                  variant="default"
                  buttonWidth="77px"
                  buttonHeight="40px"
                />
              </div>
              <div className={styles.buttonContainer}>
                <Button1
                  size="sm"
                  variant="default"
                  buttonWidth="69px"
                  buttonHeight="36px"
                />
              </div>
              <Button1
                size="lg"
                variant="default"
                buttonWidth="111px"
                buttonHeight="44px"
              />
              <div className={styles.buttonFrame}>
                <div className={styles.button3}>
                  <img
                    className={styles.svgIcon}
                    loading="lazy"
                    alt=""
                    src="/svg1.svg"
                  />
                </div>
              </div>
              <div className={styles.accordionContent} />
            </div>
            <div className={styles.accordionContent1} data-acc-content>
              <div className={styles.accordionContentWrap}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </div>
          </div>
          <div
            className={styles.frameParent4}
            data-acc-item
            data-acc-header
            data-acc-original
            onClick={onAccordionHeaderClick}
          >
            <div className={styles.buttonWrapper21}>
              <Button1
                size="default"
                variant="outline"
                buttonWidth="79px"
                buttonHeight="40px"
              />
            </div>
            <div className={styles.buttonWrapper22}>
              <Button1
                size="sm"
                variant="outline"
                buttonWidth="71px"
                buttonHeight="36px"
              />
            </div>
            <Button1
              size="lg"
              variant="outline"
              buttonWidth="111px"
              buttonHeight="44px"
            />
            <div className={styles.buttonFrame}>
              <div className={styles.button11}>
                <img
                  className={styles.svgIcon}
                  loading="lazy"
                  alt=""
                  src="/svg-2.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.accordionItemMock} data-acc-item data-acc-open>
            <div
              className={styles.frame5Open}
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <div className={styles.buttonWrapper}>
                <Button1
                  size="default"
                  variant="default"
                  buttonWidth="77px"
                  buttonHeight="40px"
                />
              </div>
              <div className={styles.buttonContainer}>
                <Button1
                  size="sm"
                  variant="default"
                  buttonWidth="69px"
                  buttonHeight="36px"
                />
              </div>
              <Button1
                size="lg"
                variant="default"
                buttonWidth="111px"
                buttonHeight="44px"
              />
              <div className={styles.buttonFrame}>
                <div className={styles.button3}>
                  <img
                    className={styles.svgIcon}
                    loading="lazy"
                    alt=""
                    src="/svg1.svg"
                  />
                </div>
              </div>
              <div className={styles.accordionContent} />
            </div>
            <div className={styles.accordionContent1} data-acc-content>
              <div className={styles.accordionContentWrap}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </div>
          </div>
          <div
            className={styles.frameContainer}
            data-acc-item
            data-acc-header
            data-acc-original
            onClick={onAccordionHeaderClick}
          >
            <div className={styles.buttonWrapper}>
              <Button1
                size="default"
                variant="secondary"
                buttonWidth="77px"
                buttonHeight="40px"
              />
            </div>
            <div className={styles.buttonContainer}>
              <Button1
                size="sm"
                variant="secondary"
                buttonWidth="69px"
                buttonHeight="36px"
              />
            </div>
            <Button1
              size="lg"
              variant="secondary"
              buttonWidth="111px"
              buttonHeight="44px"
            />
            <div className={styles.buttonFrame}>
              <div className={styles.button13}>
                <img
                  className={styles.svgIcon}
                  loading="lazy"
                  alt=""
                  src="/svg-2.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.accordionItemMock} data-acc-item data-acc-open>
            <div
              className={styles.frame5Open}
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <div className={styles.buttonWrapper}>
                <Button1
                  size="default"
                  variant="default"
                  buttonWidth="77px"
                  buttonHeight="40px"
                />
              </div>
              <div className={styles.buttonContainer}>
                <Button1
                  size="sm"
                  variant="default"
                  buttonWidth="69px"
                  buttonHeight="36px"
                />
              </div>
              <Button1
                size="lg"
                variant="default"
                buttonWidth="111px"
                buttonHeight="44px"
              />
              <div className={styles.buttonFrame}>
                <div className={styles.button3}>
                  <img
                    className={styles.svgIcon}
                    loading="lazy"
                    alt=""
                    src="/svg1.svg"
                  />
                </div>
              </div>
              <div className={styles.accordionContent} />
            </div>
            <div className={styles.accordionContent1} data-acc-content>
              <div className={styles.accordionContentWrap}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Button;
