import React, { Suspense } from "react";
import { CircularProgress } from "@material-ui/core";
export default function lazyLoader(Component) {
  return (
    <div>
      <Suspense
        fallback={
          <div style={{ textAlign: "center" }} size="500">
            <CircularProgress size={100} />
          </div>
        }
      >
        <Component />
      </Suspense>
    </div>
  );
}
