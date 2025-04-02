import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

export const appRouter = router({
  hello: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return `Hello, ${input.name}`;
    }),
  logToServer: publicProcedure
    .input(z.object({ message: z.string() }))
    .mutation(({ input }) => {
      console.log(input.message);
      return input.message;
    }),
});

export type AppRouter = typeof appRouter;
