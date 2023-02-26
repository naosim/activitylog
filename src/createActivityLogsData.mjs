import { activityLogs } from "./activityLogs.mjs";

const jsText = `
function getData() {
  return ${JSON.stringify(activityLogs, null, "  ")};
}
`;

console.log(jsText);

/**
 * こんな感じに実行する
 * node src/createActivityLogsData.mjs > activityLogsData.js
 */
