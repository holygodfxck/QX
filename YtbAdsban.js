hostname = *googlevideo.com

#youtube去广告
(^https?:\/\/(?!((r\d-)|manifest))[\w-]+\.googlevideo\.com\/(?!dclk_video_ads).+?)&ctier=L(&.+?),ctier(,.+?)((&probe=1)|$) url 302 $1$4$5
(^https?:\/\/(?!((r\d-)|manifest))[\w-]+\.googlevideo\.com\/(?!dclk_video_ads).+?)\/ctier\/L(\/.+?),ctier(,.+?)((\/probe\/1)|$) url 302 $1$4$5
(^https?:\/\/(?!((r\d-)|manifest))[\w-]+\.googlevideo\.com\/(?!dclk_video_ads).+?)\/ctier\/L(\/.+?)%2Cctier(%2C.+?)((\/probe\/1)|$) url 302 $1$4$5
