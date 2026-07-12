import { useState } from "react";

// Small shared expand/collapse boolean, used by the accordion-style cards
// in Skills, Experience, Projects and Certifications.
export function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  return [value, () => setValue((v) => !v)];
}
