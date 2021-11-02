import { completionSources } from "./source/index.ts";
import { normalizeCommand } from "../command.ts"

export const completion = (
  input: Record<string, string | undefined>,
) => {
  const lbuffer = normalizeCommand(input.lbuffer ?? '',
                                   { keepTrailingSpace: true });
  return completionSources.find((
    source,
  ) => (source.patterns.some((pattern) => pattern.exec(lbuffer) != null)));
};
