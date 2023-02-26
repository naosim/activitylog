import { blogLogs } from "./blogLog.mjs";
import { youtubeLogs } from "./youtubeLogs.mjs";
import { otherLogs } from "./otherlog.mjs";

export const activityLogs = [...blogLogs, ...youtubeLogs, ...otherLogs].sort(
  (a, b) => a.date.getTime() - b.date.getTime()
);

// console.log(activityLogs);
