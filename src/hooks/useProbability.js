import { useCallback } from "react";
import { useSelector } from "react-redux";
import { selectItems } from "../states/products/productsSlice";
import getPercent from "../services/getPercent";

const useProbability = () => {
  const items = useSelector(selectItems);

  const { maxWeight } = items.reduce((acc, item) => {
    if (item.weight > acc.maxWeight) {
      acc.maxWeight = item.weight;
    }
    if (item.weight < acc.minWeight) {
      acc.minWeight = item.weight;
    }
    
    return acc;
  }, {
    minWeight: Number.MAX_SAFE_INTEGER,
    maxWeight: 0
  });

  return useCallback((itemWeight) => {
    return getPercent( maxWeight, itemWeight);
  }, [maxWeight]);
}

export default useProbability;
