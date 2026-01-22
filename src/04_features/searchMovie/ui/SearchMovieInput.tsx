import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Input } from "@/06_shared/ui/Input";
import styles from "./styles.module.css";

export const SearchMovieInput = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim().length >= 3) {
      navigate(`/search?q=${encodeURIComponent(search.trim())}`);
      inputRef.current?.blur();
    }
  };

  useEffect(() => {
    if (!location.pathname.startsWith("/search")) {
      setSearch("");
    }
  }, [location.pathname]);

  return (
    <form onSubmit={handleSearch} className={styles.searchForm}>
      <Input
        ref={inputRef}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Поиск фильмов..."
        className={styles.searchInput}
      />
    </form>
  );
};
