import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { treaty } from '@elysiajs/eden';
import type { App } from "../../backend/src/index";

export function APITester() {
  const [data, setData] = useState("");
  const client = treaty<App>('localhost:3000');

  const testEndpoint = async () => {
    const { data } = await client.index.get();
    setData(data.toString());
  };

  return (
    <div className="mt-8 mx-auto w-full max-w-2xl text-left flex flex-col gap-4">
      <div
        className="flex items-center gap-2 bg-card p-3 rounded-xl font-mono border border-input w-full"
      >
        <Button type="submit" variant="secondary" onClick={testEndpoint}>
          Send
        </Button>
      </div>

      <textarea
        readOnly
        placeholder="Response will appear here..."
        value={data}
        className={cn(
          "w-full min-h-[140px] bg-card",
          "border border-input rounded-xl p-3",
          "font-mono resize-y",
          "placeholder:text-muted-foreground"
        )}
      />
    </div>
  );
}
