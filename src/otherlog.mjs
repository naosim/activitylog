import { csv2Logs } from "./libs.mjs";

// その他活動記録
const text = `
2022/4/10, CoderDojo溝口
2022/5/8, CoderDojo溝口
2022/6/12, CoderDojo溝口
2022/7/17, CoderDojo溝口
2022/8/21, CoderDojo溝口
2022/9/25, CoderDojo溝口
2022/10/30, CoderDojo溝口
2022/11/13, CoderDojo溝口
2022/11/27, CoderDojo溝口
2022/12/11, CoderDojo溝口
2023/1/15, CoderDojo溝口
2023/2/5, CoderDojo溝口
2023/2/19, CoderDojo溝口
`.trim();

/** @type { {date: Date, title: string}[] } */
export const otherLogs = csv2Logs(text, 'other');
