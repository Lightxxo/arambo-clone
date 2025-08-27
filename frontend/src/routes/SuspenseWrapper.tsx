import { Suspense } from "react";

function SuspenseWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
      {children}
    </Suspense>
  );
}

export default SuspenseWrapper;
