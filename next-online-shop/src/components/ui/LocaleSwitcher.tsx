"use client";

import { ChangeEvent, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "../../styles/components/ui/LocaleSwitcher.module.scss";
import { setLanguage } from "../../store/slices/langSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../types/store-types";

const LocaleSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = "ru";
  const pathname = usePathname();
  const dispatch = useDispatch();
  const selectedLocale = useSelector((state: AppState) => state.lang.lang);

  const handleSelectLocale = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    dispatch(setLanguage(nextLocale));

    const newPath = pathname.slice(localeActive.length + 1);

    startTransition(() => {
      router.replace(`/${nextLocale}${newPath}`);
    });
  };
  return (
    <label htmlFor="Locale switcher">
      <select
        name="Locale switcher"
        className={styles.select}
        value={selectedLocale}
        onChange={handleSelectLocale}
        disabled={isPending}
      >
        <option className={styles.option} value="en">
          🇺🇸
        </option>
        <option className={styles.option} value="ru">
          🇷🇺
        </option>
      </select>
    </label>
  );
};

export default LocaleSwitcher;
