import styles from "./styles.module.css";
import { FilterButton } from "@/06_shared/ui/FilterButton";
import { usePopularCollections } from "../../model/usePopularCollections";

const COLLECTIONS = [
  { id: 0, label: "Популярные фильмы" },
  { id: 1, label: "Популярные сериалы" },
  { id: 2, label: "Популярные мультфильмы" },
];

export const PopularBtns = () => {
  const { activeCollection, setActiveCollection } = usePopularCollections();

  return (
    <div className={styles.popularBtns}>
      {COLLECTIONS.map((collection) => (
        <FilterButton
          key={collection.id}
          className={styles.button}
          isActive={activeCollection === collection.id}
          onClick={() => {
            setActiveCollection(collection.id);
          }}
        >
          {collection.label}
        </FilterButton>
      ))}
    </div>
  );
};
