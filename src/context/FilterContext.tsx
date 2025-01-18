import React, { createContext, useState, ReactNode } from "react";

interface FilterContextProps {
  filter: number;
  setFilter: (id: number) => void;
}

export const FilterContext = createContext<FilterContextProps>({
  filter: 1,
  setFilter: () => {},
});

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState(1);

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
