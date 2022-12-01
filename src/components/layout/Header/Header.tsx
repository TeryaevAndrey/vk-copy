import React, { FC } from "react";
import styles from "./Header.module.css";
import { Search } from "@mui/icons-material";

const Header: FC = () => {
  const [isSearchActive, setIsSearchActive] = React.useState<boolean>(false);

  return (
    <header className={styles.header}>
      <div className={styles.imgWrapper}>
        <img
          src="https://banner2.cleanpng.com/20180604/sx/kisspng-internet-service-advertising-information-mostekhek-5b15a2b01eb532.0702564515281445601258.jpg"
          alt="logo"
        />
      </div>
      <div className={styles.wrapper}>
        {!isSearchActive && (
          <Search />
        )}
        <input type="text" placeholder="Поиск" onClick={() => setIsSearchActive(true)} />
      </div>
    </header>
  );
};

export default Header;
