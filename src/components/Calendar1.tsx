import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./Calendar1.module.css";

export type Calendar1Type = {
  className?: string;
};

const Calendar1: FunctionComponent<Calendar1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.calendar, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.container1}>
          <div className={styles.container2}>
            <div className={styles.container3}>
              <div className={styles.dayContent}>July 2024</div>
            </div>
            <div className={styles.container4}>
              <div className={styles.buttonGoToPreviousMonth}>
                <img
                  className={styles.svgIcon}
                  loading="lazy"
                  alt=""
                  src="/svg.svg"
                />
              </div>
              <div className={styles.buttonGoToNextMonth}>
                <img
                  className={styles.svgIcon}
                  loading="lazy"
                  alt=""
                  src="/svg-1.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.header}>
              <div className={styles.container}>
                <div className={styles.cellSunday}>
                  <div className={styles.su}>Su</div>
                </div>
                <div className={styles.cellMonday}>
                  <div className={styles.su}>Mo</div>
                </div>
                <div className={styles.cellTuesday}>
                  <div className={styles.su}>Tu</div>
                </div>
                <div className={styles.cellWednesday}>
                  <div className={styles.su}>We</div>
                </div>
                <div className={styles.cellThursday}>
                  <div className={styles.su}>Th</div>
                </div>
                <div className={styles.cellFriday}>
                  <div className={styles.su}>Fr</div>
                </div>
                <div className={styles.cellSunday}>
                  <div className={styles.su}>Sa</div>
                </div>
              </div>
            </div>
            <div className={styles.rowgroup}>
              <div className={styles.container}>
                <div className={styles.container5}>
                  <div className={styles.gridcell}>
                    <div className={styles.dayContent}>30</div>
                  </div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.gridcell1}>
                    <div className={styles.dayContent}>1</div>
                  </div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.gridcell2}>
                    <div className={styles.dayContent}>2</div>
                  </div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.gridcell2}>
                    <div className={styles.dayContent}>3</div>
                  </div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.gridcell4}>
                    <div className={styles.dayContent}>4</div>
                  </div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.gridcell4}>
                    <div className={styles.dayContent}>5</div>
                  </div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.gridcell4}>
                    <div className={styles.dayContent}>6</div>
                  </div>
                </div>
              </div>
              <div className={styles.container}>
                <div className={styles.container6}>
                  <div className={styles.gridcell7}>
                    <div className={styles.dayContent}>7</div>
                  </div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.gridcell8}>
                    <div className={styles.dayContent}>8</div>
                  </div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.gridcell4}>
                    <div className={styles.dayContent}>9</div>
                  </div>
                </div>
                <div className={styles.container15}>
                  <div className={styles.gridcell10}>
                    <div className={styles.dayContent}>10</div>
                  </div>
                </div>
                <div className={styles.container16}>
                  <div className={styles.gridcell11}>
                    <div className={styles.dayContent}>11</div>
                  </div>
                </div>
                <div className={styles.container17}>
                  <div className={styles.gridcell12}>
                    <div className={styles.dayContent}>12</div>
                  </div>
                </div>
                <div className={styles.container17}>
                  <div className={styles.gridcell12}>
                    <div className={styles.dayContent}>13</div>
                  </div>
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.container19}>
                  <div className={styles.gridcell14}>
                    <div className={styles.dayContent}>14</div>
                  </div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.gridcell14}>
                    <div className={styles.dayContent}>15</div>
                  </div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.gridcell14}>
                    <div className={styles.dayContent}>16</div>
                  </div>
                </div>
                <div className={styles.container22}>
                  <div className={styles.gridcell17}>
                    <div className={styles.dayContent}>17</div>
                  </div>
                </div>
                <div className={styles.container23}>
                  <div className={styles.gridcell18}>
                    <div className={styles.dayContent}>18</div>
                  </div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.gridcell14}>
                    <div className={styles.dayContent}>19</div>
                  </div>
                </div>
                <div className={styles.background}>
                  <div className={styles.gridcell20}>
                    <div className={styles.dayContent}>20</div>
                  </div>
                </div>
              </div>
              <div className={styles.container}>
                <div className={styles.container17}>
                  <div className={styles.gridcell12}>
                    <div className={styles.dayContent}>21</div>
                  </div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.gridcell22}>
                    <div className={styles.dayContent}>22</div>
                  </div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.gridcell23}>
                    <div className={styles.dayContent}>23</div>
                  </div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.gridcell24}>
                    <div className={styles.dayContent}>24</div>
                  </div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.gridcell22}>
                    <div className={styles.dayContent}>25</div>
                  </div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.gridcell24}>
                    <div className={styles.dayContent}>26</div>
                  </div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.gridcell27}>
                    <div className={styles.dayContent}>27</div>
                  </div>
                </div>
              </div>
              <div className={styles.container}>
                <div className={styles.container6}>
                  <div className={styles.gridcell24}>
                    <div className={styles.dayContent}>28</div>
                  </div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.gridcell22}>
                    <div className={styles.dayContent}>29</div>
                  </div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.gridcell30}>
                    <div className={styles.dayContent}>30</div>
                  </div>
                </div>
                <div className={styles.container17}>
                  <div className={styles.gridcell12}>
                    <div className={styles.dayContent}>31</div>
                  </div>
                </div>
                <div className={styles.container5}>
                  <div className={styles.gridcell32}>
                    <div className={styles.dayContent}>1</div>
                  </div>
                </div>
                <div className={styles.container5}>
                  <div className={styles.gridcell33}>
                    <div className={styles.dayContent}>2</div>
                  </div>
                </div>
                <div className={styles.container5}>
                  <div className={styles.gridcell33}>
                    <div className={styles.dayContent}>3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar1;
