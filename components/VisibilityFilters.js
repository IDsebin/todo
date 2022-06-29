import React from "react";
import cx from "classnames";
import { useRecoilState } from "recoil";

import { VISIBILITY_FILTERS } from "../constants";
import { todoListFilterState } from "../store/todoStore.js";

function VisibilityFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              "filter",
              currentFilter === filter && "filter--active"
            )}
            onClick={() => setFilter(currentFilter)}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
}

export default VisibilityFilters;