import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import Calendar1 from "./Calendar1";
import styles from "./Calendar.module.css";

export type CalendarType = {
  className?: string;
};

const Calendar: FunctionComponent<CalendarType> = ({ className = "" }) => {
  return (
    <div className={[styles.calendar, className].join(" ")}>
      <section className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.calendarParent}>
              <a className={styles.calendar1}>Calendar</a>
              <h3 className={styles.aDateFieldContainer}>
                <p className={styles.aDateField}>
                  A date field component that allows users to enter and edit
                  date.
                </p>
              </h3>
            </div>
            <button className={styles.button}>
              <a className={styles.viewDocs}>View docs</a>
            </button>
          </div>
        </div>
        <div className={styles.separator} />
      </section>
      <section className={styles.instanceWrapper}>
        <Calendar1 />
      </section>
    </div>
  );
};

export default Calendar;
