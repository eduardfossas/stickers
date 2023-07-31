
'use client'

import { useState, useEffect } from "react";

const useMatchMedia = (mediaQueryString) => {
  const [matches, setMatches] = useState();

  useEffect(() => {
    const mql = window.matchMedia(mediaQueryString);
    setMatches(mql.matches);

    const updateMatches = (e) => {
      setMatches(e.matches);
    };

    mql.addEventListener("change", updateMatches);

    return () => {
      mql.removeEventListener("change", updateMatches);
    };
  }, [mediaQueryString]);

  return matches;
};

export default useMatchMedia;
