import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://lh3.googleusercontent.com/ogw/ADGmqu-UDejZpXP1VmWmUnjGDtQavREezPIVFO4c0UeHfA=s83-c-mo"
        alt="Wedley Pereira"
      />
      <div>
        <strong>Wedley Pereira</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}
