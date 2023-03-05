mkdir xml

curl https://note.com/naosim/rss > ./xml/blog.xml
curl https://www.youtube.com/feeds/videos.xml?channel_id=UCDGQKL08u5p9R8HBIYR9ARw > ./xml/youtube_pari.xml
curl https://www.youtube.com/feeds/videos.xml?channel_id=UCogqz-OIoF3rQ2iFhWbP0FA > ./xml/youtube.xml

node index.mjs

rm -rf ./xml
