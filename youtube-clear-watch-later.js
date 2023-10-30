function getContinuationItems(x) {
    if (x.continuationItemRenderer) {
        const token = x.continuationItemRenderer.continuationEndpoint.continuationCommand.token
        fetch("https://www.youtube.com/youtubei/v1/browse?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8&prettyPrint=false", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,zh-CN;q=0.7,zh;q=0.6",
                "authorization": "SAPISIDHASH 1671870560_98a2824e40431b17bff32bd9fe5da96876a2a41a",
                "content-type": "application/json",
                "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\"",
                "sec-ch-ua-arch": "\"x86\"",
                "sec-ch-ua-bitness": "\"64\"",
                "sec-ch-ua-full-version": "\"108.0.5359.125\"",
                "sec-ch-ua-full-version-list": "\"Not?A_Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"108.0.5359.125\", \"Google Chrome\";v=\"108.0.5359.125\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-model": "",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-ch-ua-platform-version": "\"14.0.0\"",
                "sec-ch-ua-wow64": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "same-origin",
                "sec-fetch-site": "same-origin",
                "x-client-data": "CIS2yQEIprbJAQjBtskBCKmdygEI1vDKAQiTocsBCN35zAEIsoLNAQi3gs0BCMyCzQEI8ITNAQ==",
                "x-goog-authuser": "0",
                "x-goog-visitor-id": "CgtXdUFQcTFuTFlDRSjc45qdBg%3D%3D",
                "x-origin": "https://www.youtube.com",
                "x-youtube-bootstrap-logged-in": "true",
                "x-youtube-client-name": "1",
                "x-youtube-client-version": "2.20221220.09.00"
            },
            "referrer": "https://www.youtube.com/playlist?list=WL",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"context\":{\"client\":{\"hl\":\"en\",\"gl\":\"ZA\",\"remoteHost\":\"139.84.226.238\",\"deviceMake\":\"\",\"deviceModel\":\"\",\"visitorData\":\"CgtXdUFQcTFuTFlDRSjc45qdBg%3D%3D\",\"userAgent\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36,gzip(gfe)\",\"clientName\":\"WEB\",\"clientVersion\":\"2.20221220.09.00\",\"osName\":\"Windows\",\"osVersion\":\"10.0\",\"originalUrl\":\"https://www.youtube.com/playlist?list=WL\",\"screenPixelDensity\":2,\"platform\":\"DESKTOP\",\"clientFormFactor\":\"UNKNOWN_FORM_FACTOR\",\"configInfo\":{\"appInstallData\":\"CNzjmp0GEMzfrgUQ4tSuBRCyiP4SELjUrgUQieiuBRC2nP4SEIjhrgUQuIuuBRCi7K4FENfkrgUQuZD-EhDa6a4FEILdrgUQvNquBRCH3a4FEMaa_hIQkfj8EhDYvq0F\"},\"screenDensityFloat\":1.5,\"timeZone\":\"Asia/Shanghai\",\"browserName\":\"Chrome\",\"browserVersion\":\"108.0.0.0\",\"acceptHeader\":\"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9\",\"deviceExperimentId\":\"ChxOekU0TURZeU1qSXhORE0yT1RreU5UWTVNZz09ENzjmp0GGNzjmp0G\",\"screenWidthPoints\":1710,\"screenHeightPoints\":938,\"utcOffsetMinutes\":480,\"userInterfaceTheme\":\"USER_INTERFACE_THEME_LIGHT\",\"connectionType\":\"CONN_CELLULAR_3G\",\"memoryTotalKbytes\":\"8000000\",\"mainAppWebInfo\":{\"graftUrl\":\"https://www.youtube.com/playlist?list=WL\",\"pwaInstallabilityStatus\":\"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED\",\"webDisplayMode\":\"WEB_DISPLAY_MODE_BROWSER\",\"isWebNativeShareAvailable\":true}},\"user\":{\"lockedSafetyMode\":false},\"request\":{\"useSsl\":true,\"internalExperimentFlags\":[],\"consistencyTokenJars\":[]},\"clickTracking\":{\"clickTrackingParams\":\"CCEQ7zsYACITCI7L6sbnkfwCFQ3A1QodUBsEiQ==\"},\"adSignalsInfo\":{\"params\":[{\"key\":\"dt\",\"value\":\"1671868899384\"},{\"key\":\"flash\",\"value\":\"0\"},{\"key\":\"frm\",\"value\":\"0\"},{\"key\":\"u_tz\",\"value\":\"480\"},{\"key\":\"u_his\",\"value\":\"21\"},{\"key\":\"u_h\",\"value\":\"1067\"},{\"key\":\"u_w\",\"value\":\"1707\"},{\"key\":\"u_ah\",\"value\":\"1019\"},{\"key\":\"u_aw\",\"value\":\"1707\"},{\"key\":\"u_cd\",\"value\":\"24\"},{\"key\":\"bc\",\"value\":\"31\"},{\"key\":\"bih\",\"value\":\"938\"},{\"key\":\"biw\",\"value\":\"1693\"},{\"key\":\"brdim\",\"value\":\"-12,0,-12,0,1707,0,1724,1026,1710,938\"},{\"key\":\"vis\",\"value\":\"1\"},{\"key\":\"wgl\",\"value\":\"true\"},{\"key\":\"ca_type\",\"value\":\"image\"}]}},\"continuation\":\"" + token + "\"}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        }).then((response) => response.json()).then((data) => {
            data.onResponseReceivedActions[0].appendContinuationItemsAction.continuationItems.forEach(it => {
                getContinuationItems(it)
            })
        })
    } else {
        const id = x.playlistVideoRenderer.setVideoId
        fetch("https://www.youtube.com/youtubei/v1/browse/edit_playlist?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8&prettyPrint=false", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,zh-CN;q=0.7,zh;q=0.6",
                "authorization": "SAPISIDHASH 1671878484_c91c50d1fd07b17ed0180fe10fdd9b5af308b779",
                "content-type": "application/json",
                "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\"",
                "sec-ch-ua-arch": "\"x86\"",
                "sec-ch-ua-bitness": "\"64\"",
                "sec-ch-ua-full-version": "\"108.0.5359.125\"",
                "sec-ch-ua-full-version-list": "\"Not?A_Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"108.0.5359.125\", \"Google Chrome\";v=\"108.0.5359.125\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-model": "",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-ch-ua-platform-version": "\"14.0.0\"",
                "sec-ch-ua-wow64": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "same-origin",
                "sec-fetch-site": "same-origin",
                "x-client-data": "CIS2yQEIprbJAQjBtskBCKmdygEI1vDKAQiTocsBCN35zAEIsoLNAQi3gs0BCMyCzQEI8ITNAQ==",
                "x-goog-authuser": "0",
                "x-goog-visitor-id": "CgtXdUFQcTFuTFlDRSjc45qdBg%3D%3D",
                "x-origin": "https://www.youtube.com",
                "x-youtube-bootstrap-logged-in": "true",
                "x-youtube-client-name": "1",
                "x-youtube-client-version": "2.20221220.09.00"
            },
            "referrer": "https://www.youtube.com/playlist?list=WL",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"context\":{\"client\":{\"hl\":\"en\",\"gl\":\"ZA\",\"remoteHost\":\"139.84.226.238\",\"deviceMake\":\"\",\"deviceModel\":\"\",\"visitorData\":\"CgtXdUFQcTFuTFlDRSjc45qdBg%3D%3D\",\"userAgent\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36,gzip(gfe)\",\"clientName\":\"WEB\",\"clientVersion\":\"2.20221220.09.00\",\"osName\":\"Windows\",\"osVersion\":\"10.0\",\"originalUrl\":\"https://www.youtube.com/playlist?list=WL\",\"screenPixelDensity\":2,\"platform\":\"DESKTOP\",\"clientFormFactor\":\"UNKNOWN_FORM_FACTOR\",\"configInfo\":{\"appInstallData\":\"CNzjmp0GEMzfrgUQ4tSuBRCyiP4SELjUrgUQieiuBRC2nP4SEIjhrgUQuIuuBRCi7K4FENfkrgUQuZD-EhDa6a4FEILdrgUQvNquBRCH3a4FEMaa_hIQkfj8EhDYvq0F\"},\"screenDensityFloat\":1.5,\"timeZone\":\"Asia/Shanghai\",\"browserName\":\"Chrome\",\"browserVersion\":\"108.0.0.0\",\"acceptHeader\":\"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9\",\"deviceExperimentId\":\"ChxOekU0TURZeU1qSXhORE0yT1RreU5UWTVNZz09ENzjmp0GGNzjmp0G\",\"screenWidthPoints\":1710,\"screenHeightPoints\":938,\"utcOffsetMinutes\":480,\"userInterfaceTheme\":\"USER_INTERFACE_THEME_LIGHT\",\"connectionType\":\"CONN_CELLULAR_3G\",\"memoryTotalKbytes\":\"8000000\",\"mainAppWebInfo\":{\"graftUrl\":\"https://www.youtube.com/playlist?list=WL\",\"pwaInstallabilityStatus\":\"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED\",\"webDisplayMode\":\"WEB_DISPLAY_MODE_BROWSER\",\"isWebNativeShareAvailable\":true}},\"user\":{\"lockedSafetyMode\":false},\"request\":{\"useSsl\":true,\"internalExperimentFlags\":[],\"consistencyTokenJars\":[]},\"clickTracking\":{\"clickTrackingParams\":\"CJcEENOuBBgIIhMIjsvqxueR_AIVDcDVCh1QGwSJ\"},\"adSignalsInfo\":{\"params\":[{\"key\":\"dt\",\"value\":\"1671868899384\"},{\"key\":\"flash\",\"value\":\"0\"},{\"key\":\"frm\",\"value\":\"0\"},{\"key\":\"u_tz\",\"value\":\"480\"},{\"key\":\"u_his\",\"value\":\"21\"},{\"key\":\"u_h\",\"value\":\"1067\"},{\"key\":\"u_w\",\"value\":\"1707\"},{\"key\":\"u_ah\",\"value\":\"1019\"},{\"key\":\"u_aw\",\"value\":\"1707\"},{\"key\":\"u_cd\",\"value\":\"24\"},{\"key\":\"bc\",\"value\":\"31\"},{\"key\":\"bih\",\"value\":\"938\"},{\"key\":\"biw\",\"value\":\"1693\"},{\"key\":\"brdim\",\"value\":\"-12,0,-12,0,1707,0,1724,1026,1710,938\"},{\"key\":\"vis\",\"value\":\"1\"},{\"key\":\"wgl\",\"value\":\"true\"},{\"key\":\"ca_type\",\"value\":\"image\"}]}},\"actions\":[{\"setVideoId\":\"" + id + "\",\"action\":\"ACTION_REMOVE_VIDEO\"}],\"params\":\"CAFAAQ%3D%3D\",\"playlistId\":\"WL\"}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        }).then((response) => response.json()).then((data) => {
            console.log(data, 7);
        })
    }
}

fetch("https://www.youtube.com/youtubei/v1/browse?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8&prettyPrint=false", {
    "headers": {
        "accept": "*/*",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,zh-CN;q=0.7,zh;q=0.6",
        "authorization": "SAPISIDHASH 1671869585_fafb3c45c7ed450e5a2b51ad1508036cfae16435",
        "content-type": "application/json",
        "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\"",
        "sec-ch-ua-arch": "\"x86\"",
        "sec-ch-ua-bitness": "\"64\"",
        "sec-ch-ua-full-version": "\"108.0.5359.125\"",
        "sec-ch-ua-full-version-list": "\"Not?A_Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"108.0.5359.125\", \"Google Chrome\";v=\"108.0.5359.125\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-model": "",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-ch-ua-platform-version": "\"14.0.0\"",
        "sec-ch-ua-wow64": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "same-origin",
        "sec-fetch-site": "same-origin",
        "x-client-data": "CIS2yQEIprbJAQjBtskBCKmdygEI1vDKAQiTocsBCN35zAEIsoLNAQi3gs0BCMyCzQEI8ITNAQ==",
        "x-goog-authuser": "0",
        "x-goog-visitor-id": "CgtXdUFQcTFuTFlDRSjc45qdBg%3D%3D",
        "x-origin": "https://www.youtube.com",
        "x-youtube-bootstrap-logged-in": "true",
        "x-youtube-client-name": "1",
        "x-youtube-client-version": "2.20221220.09.00"
    },
    "referrer": "https://www.youtube.com/playlist?list=WL",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{\"context\":{\"client\":{\"hl\":\"en\",\"gl\":\"ZA\",\"remoteHost\":\"139.84.226.238\",\"deviceMake\":\"\",\"deviceModel\":\"\",\"visitorData\":\"CgtXdUFQcTFuTFlDRSjc45qdBg%3D%3D\",\"userAgent\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36,gzip(gfe)\",\"clientName\":\"WEB\",\"clientVersion\":\"2.20221220.09.00\",\"osName\":\"Windows\",\"osVersion\":\"10.0\",\"originalUrl\":\"https://www.youtube.com/playlist?list=WL\",\"screenPixelDensity\":2,\"platform\":\"DESKTOP\",\"clientFormFactor\":\"UNKNOWN_FORM_FACTOR\",\"configInfo\":{\"appInstallData\":\"CNzjmp0GEMzfrgUQ4tSuBRCyiP4SELjUrgUQieiuBRC2nP4SEIjhrgUQuIuuBRCi7K4FENfkrgUQuZD-EhDa6a4FEILdrgUQvNquBRCH3a4FEMaa_hIQkfj8EhDYvq0F\"},\"screenDensityFloat\":1.5,\"timeZone\":\"Asia/Shanghai\",\"browserName\":\"Chrome\",\"browserVersion\":\"108.0.0.0\",\"acceptHeader\":\"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9\",\"deviceExperimentId\":\"ChxOekU0TURZeU1qSXhORE0yT1RreU5UWTVNZz09ENzjmp0GGNzjmp0G\",\"screenWidthPoints\":1710,\"screenHeightPoints\":938,\"utcOffsetMinutes\":480,\"userInterfaceTheme\":\"USER_INTERFACE_THEME_LIGHT\",\"memoryTotalKbytes\":\"8000000\",\"mainAppWebInfo\":{\"graftUrl\":\"/playlist?list=WL\",\"pwaInstallabilityStatus\":\"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED\",\"webDisplayMode\":\"WEB_DISPLAY_MODE_BROWSER\",\"isWebNativeShareAvailable\":true}},\"user\":{\"lockedSafetyMode\":false},\"request\":{\"useSsl\":true,\"internalExperimentFlags\":[],\"consistencyTokenJars\":[]},\"clickTracking\":{\"clickTrackingParams\":\"CBkQ-KgHGAYiEwjd7vuA5ZH8AhXKi1EKHXthCv4=\"},\"adSignalsInfo\":{\"params\":[{\"key\":\"dt\",\"value\":\"1671868899384\"},{\"key\":\"flash\",\"value\":\"0\"},{\"key\":\"frm\",\"value\":\"0\"},{\"key\":\"u_tz\",\"value\":\"480\"},{\"key\":\"u_his\",\"value\":\"19\"},{\"key\":\"u_h\",\"value\":\"1067\"},{\"key\":\"u_w\",\"value\":\"1707\"},{\"key\":\"u_ah\",\"value\":\"1019\"},{\"key\":\"u_aw\",\"value\":\"1707\"},{\"key\":\"u_cd\",\"value\":\"24\"},{\"key\":\"bc\",\"value\":\"31\"},{\"key\":\"bih\",\"value\":\"938\"},{\"key\":\"biw\",\"value\":\"1693\"},{\"key\":\"brdim\",\"value\":\"-12,0,-12,0,1707,0,1724,1026,1710,938\"},{\"key\":\"vis\",\"value\":\"1\"},{\"key\":\"wgl\",\"value\":\"true\"},{\"key\":\"ca_type\",\"value\":\"image\"}]}},\"browseId\":\"VLWL\"}",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
}).then((response) => response.json()).then((data) => {
    data.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer
        .content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0]
        .playlistVideoListRenderer.contents.forEach((x, idx) => {
            setTimeout(() => {
                getContinuationItems(x)
            }, idx * 1000)
        })
})