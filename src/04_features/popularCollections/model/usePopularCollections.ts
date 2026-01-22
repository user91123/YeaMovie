import { useAppDispatch, useAppSelector } from "@/06_shared/libs/storeHooks";
import { activePopularCollectionSelector } from "@/05_entities/movie/model/selectors";
import { changePopularCollection } from "@/05_entities/movie/model/moviesSlice";

export const usePopularCollections = () => {
  const dispatch = useAppDispatch();
  const activeCollection = useAppSelector(activePopularCollectionSelector);

  const setActiveCollection = (index: number) => {
    dispatch(changePopularCollection(index));
  };

  return {
    activeCollection,
    setActiveCollection,
  };
};
