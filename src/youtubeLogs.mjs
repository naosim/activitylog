import { csv2Logs } from "./libs.mjs";

// ブログの更新記録

// TODO: データをサイトからもってくる
// https://note.com/naosim/rss

const text = `
2022/05/15 17:23:22,	Processing入門 最終形
2022/07/20 6:33:09,	Scratchでうごくアバターをつくろう
2022/07/30 22:04:17,	Scratchでネコがあるくプログラムをつくろう
2022/08/11 19:18:25,	Scratchでサイコロをつくろう
2022/08/16 7:33:50,	Scratchでカッコイイ文字はどうやってかくの？
2022/10/04 21:40:17,	パリちゃんのマイクラせいかつ その1
2022/10/04 21:53:51,	なおしむのマイクラサバイバル その1
2022/10/09 0:20:37,	1回死んだら終わり。マイクラサバイバル その2
2022/10/18 20:14:40,	【親子でマイクラ】死なずに敵30匹たおせるか！？
2022/11/04 16:55:20,	【親子でマイクラ】ちびゾンビにやられる。砂漠でサバイバル生活
`;

/** @type { {date: Date, title: string}[] } */
export const youtubeLogs = csv2Logs(text);
