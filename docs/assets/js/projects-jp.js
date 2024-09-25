const app = Vue.createApp({
    data() {
        return {
            projects: 
            [
                {
                    "id": 1,
                    "name": "壹然 evernature",
                    "images": [
                        "asset/images/products/2024/evernature02/pc/index.webp",
                        "asset/images/products/2024/evernature02/pc/about.webp",
                        "asset/images/products/2024/evernature02/pc/404.webp",
                        "asset/images/products/2024/evernature02/pc/albums.webp",
                        "asset/images/products/2024/evernature02/pc/albums02.webp",
                        "asset/images/products/2024/evernature02/pc/articles.webp",
                        "asset/images/products/2024/evernature02/pc/articles02.webp",
                        "asset/images/products/2024/evernature02/pc/benefits.webp",
                        "asset/images/products/2024/evernature02/pc/cart01.webp",
                        "asset/images/products/2024/evernature02/pc/cart02.webp",
                        "asset/images/products/2024/evernature02/pc/cart03.webp",
                        "asset/images/products/2024/evernature02/pc/contact.webp",
                        "asset/images/products/2024/evernature02/pc/contact02.webp",
                        "asset/images/products/2024/evernature02/pc/create.webp",
                        "asset/images/products/2024/evernature02/pc/favorite.webp",
                        "asset/images/products/2024/evernature02/pc/favorite02.webp",
                        "asset/images/products/2024/evernature02/pc/fraud.webp",
                        "asset/images/products/2024/evernature02/pc/login.webp",
                        "asset/images/products/2024/evernature02/pc/news.webp",
                        "asset/images/products/2024/evernature02/pc/news02.webp",
                        "asset/images/products/2024/evernature02/pc/orders.webp",
                        "asset/images/products/2024/evernature02/pc/password.webp",
                        "asset/images/products/2024/evernature02/pc/password02.webp",
                        "asset/images/products/2024/evernature02/pc/privacy.webp",
                        "asset/images/products/2024/evernature02/pc/products.webp",
                        "asset/images/products/2024/evernature02/pc/products02.webp",
                        "asset/images/products/2024/evernature02/pc/profile.webp",
                        "asset/images/products/2024/evernature02/pc/shopping.webp",
                        "asset/images/products/2024/evernature02/pc/signup.webp",
            
                        "asset/images/products/2024/evernature02/sp/index.webp",
                        "asset/images/products/2024/evernature02/sp/about.webp",
                        "asset/images/products/2024/evernature02/sp/404.webp",
                        "asset/images/products/2024/evernature02/sp/albums.webp",
                        "asset/images/products/2024/evernature02/sp/albums02.webp",
                        "asset/images/products/2024/evernature02/sp/articles.webp",
                        "asset/images/products/2024/evernature02/sp/articles02.webp",
                        "asset/images/products/2024/evernature02/sp/benefits.webp",
                        "asset/images/products/2024/evernature02/sp/cart01.webp",
                        "asset/images/products/2024/evernature02/sp/cart02.webp",
                        "asset/images/products/2024/evernature02/sp/cart03.webp",
                        "asset/images/products/2024/evernature02/sp/contact.webp",
                        "asset/images/products/2024/evernature02/sp/contact02.webp",
                        "asset/images/products/2024/evernature02/sp/create.webp",
                        "asset/images/products/2024/evernature02/sp/favorite.webp",
                        "asset/images/products/2024/evernature02/sp/favorite02.webp",
                        "asset/images/products/2024/evernature02/sp/fraud.webp",
                        "asset/images/products/2024/evernature02/sp/login.webp",
                        "asset/images/products/2024/evernature02/sp/news.webp",
                        "asset/images/products/2024/evernature02/sp/news02.webp",
                        "asset/images/products/2024/evernature02/sp/orders.webp",
                        "asset/images/products/2024/evernature02/sp/password.webp",
                        "asset/images/products/2024/evernature02/sp/password02.webp",
                        "asset/images/products/2024/evernature02/sp/privacy.webp",
                        "asset/images/products/2024/evernature02/sp/products.webp",
                        "asset/images/products/2024/evernature02/sp/products02.webp",
                        "asset/images/products/2024/evernature02/sp/profile.webp",
                        "asset/images/products/2024/evernature02/sp/shopping.webp",
                        "asset/images/products/2024/evernature02/sp/signup.webp"
                    ],
                    "categories": ["台湾サイト", "ショッピングサイト"],
                    "url": "https://evernature-ys.com.tw/"
                },
                {
                    "id": 31,
                    "name": "つめきゅ～と",
                    "images": [
                        "asset/images/products/2018-2019/tomakecute/pc/index.webp",
                        "asset/images/products/2018-2019/tomakecute/pc/img02.webp",
                        "asset/images/products/2018-2019/tomakecute/pc/img03.webp",
                        "asset/images/products/2018-2019/tomakecute/pc/img04.webp",
                        
                        "asset/images/products/2018-2019/tomakecute/sp/index.webp",
                        "asset/images/products/2018-2019/tomakecute/sp/img02.webp",
                        "asset/images/products/2018-2019/tomakecute/sp/img03.webp",
                        "asset/images/products/2018-2019/tomakecute/sp/img04.webp"
                    ],
                    "categories": ["日本サイト","コーポレートサイト"],
                    "url": "https://www.tomakecute.com/"
                },
                {
                    "id": 2,
                    "name": "福樓 Fu Lou Restaurant",
                    "images": [
                        "asset/images/products/2023/fulou/pc/index.webp",
                        "asset/images/products/2023/fulou/pc/about.webp",
                        "asset/images/products/2023/fulou/pc/albums.webp",
                        "asset/images/products/2023/fulou/pc/albums02.webp",
                        "asset/images/products/2023/fulou/pc/articles.webp",
                        "asset/images/products/2023/fulou/pc/articles02.webp",
                        "asset/images/products/2023/fulou/pc/cart01.webp",
                        "asset/images/products/2023/fulou/pc/cart02.webp",
                        "asset/images/products/2023/fulou/pc/cart03.webp",
                        "asset/images/products/2023/fulou/pc/contact.webp",
                        "asset/images/products/2023/fulou/pc/create.webp",
                        "asset/images/products/2023/fulou/pc/faq.webp",
                        "asset/images/products/2023/fulou/pc/favorite.webp",
                        "asset/images/products/2023/fulou/pc/favorite02.webp",
                        "asset/images/products/2023/fulou/pc/login.webp",
                        "asset/images/products/2023/fulou/pc/menu.webp",
                        "asset/images/products/2023/fulou/pc/news.webp",
                        "asset/images/products/2023/fulou/pc/news02.webp",
                        "asset/images/products/2023/fulou/pc/orders.webp",
                        "asset/images/products/2023/fulou/pc/orders02.webp",
                        "asset/images/products/2023/fulou/pc/password.webp",
                        "asset/images/products/2023/fulou/pc/privacy.webp",
                        "asset/images/products/2023/fulou/pc/products.webp",
                        "asset/images/products/2023/fulou/pc/products02.webp",
                        "asset/images/products/2023/fulou/pc/profile.webp",
                        "asset/images/products/2023/fulou/pc/search.webp",
                        "asset/images/products/2023/fulou/pc/search02.webp",
                        "asset/images/products/2023/fulou/pc/signup.webp",
            
                        "asset/images/products/2023/fulou/sp/index.webp",
                        "asset/images/products/2023/fulou/sp/about.webp",
                        "asset/images/products/2023/fulou/sp/albums.webp",
                        "asset/images/products/2023/fulou/sp/albums02.webp",
                        "asset/images/products/2023/fulou/sp/articles.webp",
                        "asset/images/products/2023/fulou/sp/articles02.webp",
                        "asset/images/products/2023/fulou/sp/cart01.webp",
                        "asset/images/products/2023/fulou/sp/cart02.webp",
                        "asset/images/products/2023/fulou/sp/cart03.webp",
                        "asset/images/products/2023/fulou/sp/contact.webp",
                        "asset/images/products/2023/fulou/sp/create.webp",
                        "asset/images/products/2023/fulou/sp/faq.webp",
                        "asset/images/products/2023/fulou/sp/favorite.webp",
                        "asset/images/products/2023/fulou/sp/favorite02.webp",
                        "asset/images/products/2023/fulou/sp/login.webp",
                        "asset/images/products/2023/fulou/sp/menu.webp",
                        "asset/images/products/2023/fulou/sp/news.webp",
                        "asset/images/products/2023/fulou/sp/news02.webp",
                        "asset/images/products/2023/fulou/sp/orders.webp",
                        "asset/images/products/2023/fulou/sp/orders02.webp",
                        "asset/images/products/2023/fulou/sp/password.webp",
                        "asset/images/products/2023/fulou/sp/privacy.webp",
                        "asset/images/products/2023/fulou/sp/products.webp",
                        "asset/images/products/2023/fulou/sp/products02.webp",
                        "asset/images/products/2023/fulou/sp/profile.webp",
                        "asset/images/products/2023/fulou/sp/search.webp",
                        "asset/images/products/2023/fulou/sp/search02.webp",
                        "asset/images/products/2023/fulou/sp/signup.webp"
                    ],
                    "categories": ["台湾サイト","ショッピングサイト"],
                    "url": "https://fulou.com.tw/"
                },
                {
                    "id": 26,
                    "name": "生命保険　LINEリッチメニュー",
                    "images": [
                        "asset/images/products/2020-2022/znavi/design/line/20210816_data.webp",
                        "asset/images/products/2020-2022/znavi/design/line/20210510_data.webp"
                    ],
                    "categories": ["デザイン"],
                    "url": ""
                },
                {
                    "id": 4,
                    "name": "客製小姐",
                    "images": [
                        "asset/images/products/2024/custom-miss/pc/index.webp",
                        "asset/images/products/2024/custom-miss/pc/about.webp",
                        "asset/images/products/2024/custom-miss/pc/articles.webp",
                        "asset/images/products/2024/custom-miss/pc/articles02.webp",
                        "asset/images/products/2024/custom-miss/pc/contact.webp",
                        "asset/images/products/2024/custom-miss/pc/contact02.webp",
                        "asset/images/products/2024/custom-miss/pc/fraud.webp",
                        "asset/images/products/2024/custom-miss/pc/news.webp",
                        "asset/images/products/2024/custom-miss/pc/news02.webp",
                        "asset/images/products/2024/custom-miss/pc/privacy.webp",
                        "asset/images/products/2024/custom-miss/pc/service.webp",
                        "asset/images/products/2024/custom-miss/pc/service02.webp",
            
                        "asset/images/products/2024/custom-miss/sp/index.webp",
                        "asset/images/products/2024/custom-miss/sp/about.webp",
                        "asset/images/products/2024/custom-miss/sp/articles.webp",
                        "asset/images/products/2024/custom-miss/sp/articles02.webp",
                        "asset/images/products/2024/custom-miss/sp/contact.webp",
                        "asset/images/products/2024/custom-miss/sp/contact02.webp",
                        "asset/images/products/2024/custom-miss/sp/fraud.webp",
                        "asset/images/products/2024/custom-miss/sp/news.webp",
                        "asset/images/products/2024/custom-miss/sp/news02.webp",
                        "asset/images/products/2024/custom-miss/sp/privacy.webp",
                        "asset/images/products/2024/custom-miss/sp/service.webp",
                        "asset/images/products/2024/custom-miss/sp/service02.webp"
                    ],
                    "categories": ["台湾サイト","コーポレートサイト", "ブランディングサイト"],
                    "url": "https://demo-c.wagikgdemo.com.tw/"
                },
                {
                    "id": 27,
                    "name": "生命保険　チラシ広告",
                    "images": [
                        "asset/images/products/2020-2022/znavi/design/flyer01/20221004_data_ol-1.webp",
                        "asset/images/products/2020-2022/znavi/design/flyer01/20221004_data_ol-2.webp",
                        "asset/images/products/2020-2022/znavi/design/flyer02/20220607_data_ol.webp",
                        "asset/images/products/2020-2022/znavi/design/flyer03/20210518_data_ol-1.webp",
                        "asset/images/products/2020-2022/znavi/design/flyer03/20210518_data_ol-2.webp",
                        "asset/images/products/2020-2022/znavi/design/flyer04/20210721_data_ol-1.webp",
                        "asset/images/products/2020-2022/znavi/design/flyer04/20210721_data_ol-2.webp",
                        "asset/images/products/2020-2022/znavi/design/flyer05/20210728_data04_ol.webp",
                        "asset/images/products/2020-2022/znavi/design/flyer06/20210618_data_ol.webp"
                    ],
                    "categories": ["デザイン"],
                    "url": ""
                },
                {
                    "id": 15,
                    "name": "生命保険　商品紹介-03",
                    "images": [
                        "asset/images/products/2020-2022/znavi/product04/pc/img01.webp",
            
                        "asset/images/products/2020-2022/znavi/product04/sp/img01.webp"
                    ],
                    "categories": ["日本サイト","社内向けサイト","ランディングページ"],
                    "url": ""
                },
                {
                    "id": 6,
                    "name": "小河屋",
                    "images": [
                        "asset/images/products/2023/xiaohewu/pc/index.webp",
                        "asset/images/products/2023/xiaohewu/pc/about.webp",
                        "asset/images/products/2023/xiaohewu/pc/articles.webp",
                        "asset/images/products/2023/xiaohewu/pc/articles02.webp",
                        "asset/images/products/2023/xiaohewu/pc/cart01.webp",
                        "asset/images/products/2023/xiaohewu/pc/cart02.webp",
                        "asset/images/products/2023/xiaohewu/pc/cart03.webp",
                        "asset/images/products/2023/xiaohewu/pc/contact.webp",
                        "asset/images/products/2023/xiaohewu/pc/create.webp",
                        "asset/images/products/2023/xiaohewu/pc/faq.webp",
                        "asset/images/products/2023/xiaohewu/pc/favorite.webp",
                        "asset/images/products/2023/xiaohewu/pc/favorite02.webp",
                        "asset/images/products/2023/xiaohewu/pc/login.webp",
                        "asset/images/products/2023/xiaohewu/pc/news.webp",
                        "asset/images/products/2023/xiaohewu/pc/news02.webp",
                        "asset/images/products/2023/xiaohewu/pc/notice.webp",
                        "asset/images/products/2023/xiaohewu/pc/orders.webp",
                        "asset/images/products/2023/xiaohewu/pc/orders02.webp",
                        "asset/images/products/2023/xiaohewu/pc/orders03.webp",
                        "asset/images/products/2023/xiaohewu/pc/password.webp",
                        "asset/images/products/2023/xiaohewu/pc/privacy.webp",
                        "asset/images/products/2023/xiaohewu/pc/products.webp",
                        "asset/images/products/2023/xiaohewu/pc/products02.webp",
                        "asset/images/products/2023/xiaohewu/pc/profile.webp",
                        "asset/images/products/2023/xiaohewu/pc/return.webp",
                        "asset/images/products/2023/xiaohewu/pc/search.webp",
                        "asset/images/products/2023/xiaohewu/pc/search02.webp",
                        "asset/images/products/2023/xiaohewu/pc/search03.webp",
                        "asset/images/products/2023/xiaohewu/pc/service.webp",
                        "asset/images/products/2023/xiaohewu/pc/shipping.webp",
                        "asset/images/products/2023/xiaohewu/pc/signup.webp",
            
                        "asset/images/products/2023/xiaohewu/sp/index.webp",
                        "asset/images/products/2023/xiaohewu/sp/about.webp",
                        "asset/images/products/2023/xiaohewu/sp/articles.webp",
                        "asset/images/products/2023/xiaohewu/sp/articles02.webp",
                        "asset/images/products/2023/xiaohewu/sp/cart01.webp",
                        "asset/images/products/2023/xiaohewu/sp/cart02.webp",
                        "asset/images/products/2023/xiaohewu/sp/cart03.webp",
                        "asset/images/products/2023/xiaohewu/sp/contact.webp",
                        "asset/images/products/2023/xiaohewu/sp/create.webp",
                        "asset/images/products/2023/xiaohewu/sp/faq.webp",
                        "asset/images/products/2023/xiaohewu/sp/favorite.webp",
                        "asset/images/products/2023/xiaohewu/sp/favorite02.webp",
                        "asset/images/products/2023/xiaohewu/sp/login.webp",
                        "asset/images/products/2023/xiaohewu/sp/news.webp",
                        "asset/images/products/2023/xiaohewu/sp/news02.webp",
                        "asset/images/products/2023/xiaohewu/sp/notice.webp",
                        "asset/images/products/2023/xiaohewu/sp/orders.webp",
                        "asset/images/products/2023/xiaohewu/sp/orders02.webp",
                        "asset/images/products/2023/xiaohewu/sp/password.webp",
                        "asset/images/products/2023/xiaohewu/sp/privacy.webp",
                        "asset/images/products/2023/xiaohewu/sp/products.webp",
                        "asset/images/products/2023/xiaohewu/sp/products02.webp",
                        "asset/images/products/2023/xiaohewu/sp/profile.webp",
                        "asset/images/products/2023/xiaohewu/sp/return.webp",
                        "asset/images/products/2023/xiaohewu/sp/search.webp",
                        "asset/images/products/2023/xiaohewu/sp/search02.webp",
                        "asset/images/products/2023/xiaohewu/sp/search03.webp",
                        "asset/images/products/2023/xiaohewu/sp/service.webp",
                        "asset/images/products/2023/xiaohewu/sp/shipping.webp",
                        "asset/images/products/2023/xiaohewu/sp/signup.webp"
                    ],
                    "categories": ["台湾サイト","ショッピングサイト"],
                    "url": ""
                },
                {
                    "id": 32,
                    "name": "フォトハウスリコレ",
                    "images": [
                        "asset/images/products/2018-2019/photohouse-recolle/pc/index.webp",
                        "asset/images/products/2018-2019/photohouse-recolle/pc/img01.webp",
                        "asset/images/products/2018-2019/photohouse-recolle/pc/img02.webp",
                        "asset/images/products/2018-2019/photohouse-recolle/pc/img03.webp",
                        "asset/images/products/2018-2019/photohouse-recolle/pc/img04.webp",
            
                        "asset/images/products/2018-2019/photohouse-recolle/sp/index.webp",
                        "asset/images/products/2018-2019/photohouse-recolle/sp/img01.webp",
                        "asset/images/products/2018-2019/photohouse-recolle/sp/img02.webp",
                        "asset/images/products/2018-2019/photohouse-recolle/sp/img03.webp"
                    ],
                    "categories": ["日本サイト","コーポレートサイト"],
                    "url": ""
                },
                {
                    "id": 7,
                    "name": "晁宇科技",
                    "images": [
                        "asset/images/products/2023/chaoyu/pc/index.webp",
                        "asset/images/products/2023/chaoyu/pc/about.webp",
                        "asset/images/products/2023/chaoyu/pc/articles.webp",
                        "asset/images/products/2023/chaoyu/pc/articles02.webp",
                        "asset/images/products/2023/chaoyu/pc/contact.webp",
                        "asset/images/products/2023/chaoyu/pc/example.webp",
                        "asset/images/products/2023/chaoyu/pc/example02.webp",
                        "asset/images/products/2023/chaoyu/pc/faq.webp",
                        "asset/images/products/2023/chaoyu/pc/news.webp",
                        "asset/images/products/2023/chaoyu/pc/news02.webp",
                        "asset/images/products/2023/chaoyu/pc/rental.webp",
            
                        "asset/images/products/2023/chaoyu/sp/index.webp",
                        "asset/images/products/2023/chaoyu/sp/about.webp",
                        "asset/images/products/2023/chaoyu/sp/articles.webp",
                        "asset/images/products/2023/chaoyu/sp/articles02.webp",
                        "asset/images/products/2023/chaoyu/sp/contact.webp",
                        "asset/images/products/2023/chaoyu/sp/example.webp",
                        "asset/images/products/2023/chaoyu/sp/example02.webp",
                        "asset/images/products/2023/chaoyu/sp/faq.webp",
                        "asset/images/products/2023/chaoyu/sp/news.webp",
                        "asset/images/products/2023/chaoyu/sp/news02.webp",
                        "asset/images/products/2023/chaoyu/sp/rental.webp"
                    ],
                    "categories": ["台湾サイト","コーポレートサイト"],
                    "url": "https://chaoyutech.com.tw/"
                },
                {
                    "id": 33,
                    "name": "Glam Beautique+",
                    "images": [
                        "asset/images/products/2018-2019/glambeautique/pc/index.webp",
                        "asset/images/products/2018-2019/glambeautique/pc/image57.webp",
                        "asset/images/products/2018-2019/glambeautique/pc/image58.webp",
                        "asset/images/products/2018-2019/glambeautique/pc/image59.webp",
                        "asset/images/products/2018-2019/glambeautique/pc/image63.webp",
                        "asset/images/products/2018-2019/glambeautique/pc/image67.webp",
                        "asset/images/products/2018-2019/glambeautique/pc/image69.webp",
                        "asset/images/products/2018-2019/glambeautique/pc/img02.webp",
            
                        "asset/images/products/2018-2019/glambeautique/sp/index.webp",
                        "asset/images/products/2018-2019/glambeautique/sp/image61.webp",
                        "asset/images/products/2018-2019/glambeautique/sp/image62.webp",
                        "asset/images/products/2018-2019/glambeautique/sp/image64.webp",
                        "asset/images/products/2018-2019/glambeautique/sp/image65.webp",
                        "asset/images/products/2018-2019/glambeautique/sp/image66.webp",
                        "asset/images/products/2018-2019/glambeautique/sp/image68.webp",
                        "asset/images/products/2018-2019/glambeautique/sp/image70.webp",
                        "asset/images/products/2018-2019/glambeautique/sp/img02.webp"
                    ],
                    "categories": ["日本サイト","コーポレートサイト"],
                    "url": ""
                },
                {
                    "id": 9,
                    "name": "復興金融",
                    "images": [
                        "asset/images/products/2023/fusinloan/pc/index.webp",
                        "asset/images/products/2023/fusinloan/pc/about.webp",
                        "asset/images/products/2023/fusinloan/pc/article.webp",
                        "asset/images/products/2023/fusinloan/pc/contact.webp",
                        "asset/images/products/2023/fusinloan/pc/privacy.webp",
                        "asset/images/products/2023/fusinloan/pc/service.webp",
            
                        "asset/images/products/2023/fusinloan/sp/index.webp",
                        "asset/images/products/2023/fusinloan/sp/about.webp",
                        "asset/images/products/2023/fusinloan/sp/article.webp",
                        "asset/images/products/2023/fusinloan/sp/contact.webp",
                        "asset/images/products/2023/fusinloan/sp/privacy.webp",
                        "asset/images/products/2023/fusinloan/sp/service.webp"
                    ],
                    "categories": ["台湾サイト","コーポレートサイト"],
                    "url": ""
                },
                {
                    "id": 20,
                    "name": "生命保険　1分動画サイト",
                    "images": [
                        "asset/images/products/2020-2022/znavi/1min/index.webp",
                        "asset/images/products/2020-2022/znavi/1min/img01.webp"
                    ],
                    "categories": ["日本サイト","社内向けサイト"],
                    "url": ""
                },
                {
                    "id": 12,
                    "name": "瓦吉科技WAGI",
                    "images": [
                        "asset/images/products/2024/wagi/pc/index.webp",
                        "asset/images/products/2024/wagi/pc/about.webp",
                        "asset/images/products/2024/wagi/pc/404.webp",
                        "asset/images/products/2024/wagi/pc/articles.webp",
                        "asset/images/products/2024/wagi/pc/articles02.webp",
                        "asset/images/products/2024/wagi/pc/contact.webp",
                        "asset/images/products/2024/wagi/pc/contact02.webp",
                        "asset/images/products/2024/wagi/pc/fraud.webp",
                        "asset/images/products/2024/wagi/pc/marketing.webp",
                        "asset/images/products/2024/wagi/pc/privacy.webp",
                        "asset/images/products/2024/wagi/pc/seo.webp",
                        "asset/images/products/2024/wagi/pc/social.webp",
                        "asset/images/products/2024/wagi/pc/use.webp",
                        "asset/images/products/2024/wagi/pc/website.webp",
            
                        "asset/images/products/2024/wagi/sp/index.webp",
                        "asset/images/products/2024/wagi/sp/about.webp",
                        "asset/images/products/2024/wagi/sp/404.webp",
                        "asset/images/products/2024/wagi/sp/articles.webp",
                        "asset/images/products/2024/wagi/sp/articles02.webp",
                        "asset/images/products/2024/wagi/sp/contact.webp",
                        "asset/images/products/2024/wagi/sp/contact02.webp",
                        "asset/images/products/2024/wagi/sp/fraud.webp",
                        "asset/images/products/2024/wagi/sp/marketing.webp",
                        "asset/images/products/2024/wagi/sp/privacy.webp",
                        "asset/images/products/2024/wagi/sp/seo.webp",
                        "asset/images/products/2024/wagi/sp/social.webp",
                        "asset/images/products/2024/wagi/sp/use.webp",
                        "asset/images/products/2024/wagi/sp/website.webp"
                    ],
                    "categories": ["台湾サイト","コーポレートサイト"],
                    "url": "https://wagikg.com.tw/"
                },
                {
                    "id": 13,
                    "name": "生命保険　商品紹介-01",
                    "images": [
                        "asset/images/products/2020-2022/znavi/product01/pc/img01.webp",
                        "asset/images/products/2020-2022/znavi/product01/pc/img02.webp",
                        "asset/images/products/2020-2022/znavi/product01/pc/img03.webp",
            
                        "asset/images/products/2020-2022/znavi/product01/sp/img01.webp",
                        "asset/images/products/2020-2022/znavi/product01/sp/img02.webp",
                        "asset/images/products/2020-2022/znavi/product01/sp/img03.webp"
                    ],
                    "categories": ["日本サイト","社内向けサイト","ランディングページ"],
                    "url": ""
                },
                {
                    "id": 3,
                    "name": "小貸先生 MR. DAI",
                    "images": [
                        "asset/images/products/2023/mr-dai/pc/index.webp",
                        "asset/images/products/2023/mr-dai/pc/about.webp",
                        "asset/images/products/2023/mr-dai/pc/404.webp",
                        "asset/images/products/2023/mr-dai/pc/articles.webp",
                        "asset/images/products/2023/mr-dai/pc/articles02.webp",
                        "asset/images/products/2023/mr-dai/pc/cases.webp",
                        "asset/images/products/2023/mr-dai/pc/cases02.webp",
                        "asset/images/products/2023/mr-dai/pc/contact.webp",
                        "asset/images/products/2023/mr-dai/pc/contact02.webp",
                        "asset/images/products/2023/mr-dai/pc/fraud.webp",
                        "asset/images/products/2023/mr-dai/pc/privacy.webp",
                        "asset/images/products/2023/mr-dai/pc/services.webp",
            
                        "asset/images/products/2023/mr-dai/sp/index.webp",
                        "asset/images/products/2023/mr-dai/sp/about.webp",
                        "asset/images/products/2023/mr-dai/sp/404.webp",
                        "asset/images/products/2023/mr-dai/sp/articles.webp",
                        "asset/images/products/2023/mr-dai/sp/articles02.webp",
                        "asset/images/products/2023/mr-dai/sp/cases.webp",
                        "asset/images/products/2023/mr-dai/sp/cases02.webp",
                        "asset/images/products/2023/mr-dai/sp/contact.webp",
                        "asset/images/products/2023/mr-dai/sp/contact02.webp",
                        "asset/images/products/2023/mr-dai/sp/fraud.webp",
                        "asset/images/products/2023/mr-dai/sp/privacy.webp",
                        "asset/images/products/2023/mr-dai/sp/services.webp"
                    ],
                    "categories": ["台湾サイト","コーポレートサイト"],
                    "url": "https://mrdailoan.com/"
                },
                {
                    "id": 14,
                    "name": "生命保険　商品紹介-02",
                    "images": [
                        "asset/images/products/2020-2022/znavi/product03/pc/img01.webp",
            
                        "asset/images/products/2020-2022/znavi/product03/sp/img01.webp"
                    ],
                    "categories": ["日本サイト","社内向けサイト","ランディングページ"],
                    "url": ""
                },
                {
                    "id": 8,
                    "name": "撼動健身",
                    "images": [
                        "asset/images/products/2023/shakeup/pc/index.webp",
                        "asset/images/products/2023/shakeup/pc/about.webp",
                        "asset/images/products/2023/shakeup/pc/articles.webp",
                        "asset/images/products/2023/shakeup/pc/articles02..webp",
                        "asset/images/products/2023/shakeup/pc/contact.webp",
                        "asset/images/products/2023/shakeup/pc/join.webp",
                        "asset/images/products/2023/shakeup/pc/news.webp",
                        "asset/images/products/2023/shakeup/pc/news02.webp",
                        "asset/images/products/2023/shakeup/pc/shop.webp",
            
                        "asset/images/products/2023/shakeup/sp/index.webp",
                        "asset/images/products/2023/shakeup/sp/about.webp",
                        "asset/images/products/2023/shakeup/sp/articles.webp",
                        "asset/images/products/2023/shakeup/sp/articles02..webp",
                        "asset/images/products/2023/shakeup/sp/contact.webp",
                        "asset/images/products/2023/shakeup/sp/join.webp",
                        "asset/images/products/2023/shakeup/sp/news.webp",
                        "asset/images/products/2023/shakeup/sp/news02.webp",
                        "asset/images/products/2023/shakeup/sp/shop.webp"
                    ],
                    "categories": ["台湾サイト","コーポレートサイト"],
                    "url": "https://powerstrike.com.tw/"
                },
                {
                    "id": 16,
                    "name": "生命保険　商品紹介-04",
                    "images": [
                        "asset/images/products/2020-2022/znavi/product05/pc/img01.webp",
                        "asset/images/products/2020-2022/znavi/product05/pc/img02.webp",
            
                        "asset/images/products/2020-2022/znavi/product05/sp/img01.webp",
                        "asset/images/products/2020-2022/znavi/product05/sp/img02.webp"
                    ],
                    "categories": ["日本サイト","社内向けサイト","ランディングページ"],
                    "url": ""
                },
                {
                    "id": 25,
                    "name": "生命保険　ディスプレイ広告",
                    "images": [
                        "asset/images/products/2020-2022/znavi/design/displaybanner/定期保険_1920px×1080px.webp",
                        "asset/images/products/2020-2022/znavi/design/displaybanner/定期保険_1080px×1920px.webp",
                        "asset/images/products/2020-2022/znavi/design/displaybanner/320px×100px.webp",
                        "asset/images/products/2020-2022/znavi/design/displaybanner/600×120_iryo.webp",
                        "asset/images/products/2020-2022/znavi/design/displaybanner/640px×100px.webp",
                        "asset/images/products/2020-2022/znavi/design/displaybanner/800×100_gan.webp",
                        "asset/images/products/2020-2022/znavi/design/displaybanner/800×100_iryo.webp",
                        "asset/images/products/2020-2022/znavi/design/displaybanner/800×100_teiki.webp",
                        "asset/images/products/2020-2022/znavi/design/displaybanner/life-bnr-01.webp"
                    ],
                    "categories": ["デザイン"],
                    "url": ""
                },
                {
                    "id": 17,
                    "name": "生命保険　商品紹介-05",
                    "images": [
                        "asset/images/products/2020-2022/znavi/product06/pc/img01.webp",
                        "asset/images/products/2020-2022/znavi/product06/pc/img02.webp",
                        "asset/images/products/2020-2022/znavi/product06/pc/img03.webp",
                        "asset/images/products/2020-2022/znavi/product06/pc/img04.webp",
                        "asset/images/products/2020-2022/znavi/product06/pc/img05.webp",
                        "asset/images/products/2020-2022/znavi/product06/pc/img06.webp",
                        "asset/images/products/2020-2022/znavi/product06/pc/img07.webp",
                        "asset/images/products/2020-2022/znavi/product06/pc/img08.webp",
                        "asset/images/products/2020-2022/znavi/product06/pc/img09.webp",
                        "asset/images/products/2020-2022/znavi/product06/pc/img10.webp",
                        "asset/images/products/2020-2022/znavi/product06/pc/img11.webp",
            
                        "asset/images/products/2020-2022/znavi/product06/sp/img01.webp",
                        "asset/images/products/2020-2022/znavi/product06/sp/img02.webp",
                        "asset/images/products/2020-2022/znavi/product06/sp/img03.webp",
                        "asset/images/products/2020-2022/znavi/product06/sp/img04.webp",
                        "asset/images/products/2020-2022/znavi/product06/sp/img05.webp",
                        "asset/images/products/2020-2022/znavi/product06/sp/img06.webp",
                        "asset/images/products/2020-2022/znavi/product06/sp/img07.webp",
                        "asset/images/products/2020-2022/znavi/product06/sp/img08.webp",
                        "asset/images/products/2020-2022/znavi/product06/sp/img09.webp",
                        "asset/images/products/2020-2022/znavi/product06/sp/img10.webp",
                        "asset/images/products/2020-2022/znavi/product06/sp/img11.webp"
                    ],
                    "categories": ["日本サイト","社内向けサイト","ランディングページ"],
                    "url": ""
                },
                {
                    "id": 11,
                    "name": "墾進合板建材",
                    "images": [
                        "asset/images/products/2024/ken-chin/pc/index.webp",
                        "asset/images/products/2024/ken-chin/pc/about.webp",
                        "asset/images/products/2024/ken-chin/pc/404.webp",
                        "asset/images/products/2024/ken-chin/pc/articles.webp",
                        "asset/images/products/2024/ken-chin/pc/articles02.webp",
                        "asset/images/products/2024/ken-chin/pc/contact.webp",
                        "asset/images/products/2024/ken-chin/pc/contact02.webp",
                        "asset/images/products/2024/ken-chin/pc/fraud.webp",
                        "asset/images/products/2024/ken-chin/pc/news.webp",
                        "asset/images/products/2024/ken-chin/pc/news02.webp",
                        "asset/images/products/2024/ken-chin/pc/privacy.webp",
                        "asset/images/products/2024/ken-chin/pc/services.webp",
                        "asset/images/products/2024/ken-chin/pc/services02.webp",
            
                        "asset/images/products/2024/ken-chin/sp/index.webp",
                        "asset/images/products/2024/ken-chin/sp/about.webp",
                        "asset/images/products/2024/ken-chin/sp/404.webp",
                        "asset/images/products/2024/ken-chin/sp/articles.webp",
                        "asset/images/products/2024/ken-chin/sp/articles02.webp",
                        "asset/images/products/2024/ken-chin/sp/contact.webp",
                        "asset/images/products/2024/ken-chin/sp/contact02.webp",
                        "asset/images/products/2024/ken-chin/sp/fraud.webp",
                        "asset/images/products/2024/ken-chin/sp/news.webp",
                        "asset/images/products/2024/ken-chin/sp/news02.webp",
                        "asset/images/products/2024/ken-chin/sp/privacy.webp",
                        "asset/images/products/2024/ken-chin/sp/services.webp",
                        "asset/images/products/2024/ken-chin/sp/services02.webp"
                    ],
                    "categories": ["台湾サイト","コーポレートサイト"],
                    "url": "https://kenchin.com.tw/"
                },
                {
                    "id": 22,
                    "name": "Webセミナー",
                    "images": [
                        "asset/images/products/2020-2022/znavi/webinar/pc/img01.webp",
                        "asset/images/products/2020-2022/znavi/webinar/pc/img02.webp",
                        "asset/images/products/2020-2022/znavi/webinar/pc/img03.webp",
                        "asset/images/products/2020-2022/znavi/webinar/pc/img04.webp",
                        "asset/images/products/2020-2022/znavi/webinar/pc/img05.webp",
                        "asset/images/products/2020-2022/znavi/webinar/pc/img06.webp",
                        "asset/images/products/2020-2022/znavi/webinar/pc/img07.webp",
                        "asset/images/products/2020-2022/znavi/webinar/pc/img08.webp",
            
                        "asset/images/products/2020-2022/znavi/webinar/sp/img01.webp",
                        "asset/images/products/2020-2022/znavi/webinar/sp/img02.webp",
                        "asset/images/products/2020-2022/znavi/webinar/sp/img03.webp",
                        "asset/images/products/2020-2022/znavi/webinar/sp/img04.webp",
                        "asset/images/products/2020-2022/znavi/webinar/sp/img05.webp",
                        "asset/images/products/2020-2022/znavi/webinar/sp/img08.webp"
                    ],
                    "categories": ["日本サイト","社内向けサイト"],
                    "url": ""
                },
                {
                    "id": 30,
                    "name": "VRCenter デザイン",
                    "images": [
                        "asset/images/products/2018-2019/vrcenter/design/image46.webp",
                        "asset/images/products/2018-2019/vrcenter/design/image47.webp",
                        "asset/images/products/2018-2019/vrcenter/design/image48.webp",
                        "asset/images/products/2018-2019/vrcenter/design/image49.webp",
                        "asset/images/products/2018-2019/vrcenter/design/image50.webp",
                        "asset/images/products/2018-2019/vrcenter/design/image51.webp",
                        "asset/images/products/2018-2019/vrcenter/design/image52.webp",
                        "asset/images/products/2018-2019/vrcenter/design/image53.webp"
                    ],
                    "categories": ["デザイン"],
                    "url": ""
                },
                {
                    "id": 18,
                    "name": "生命保険　商品紹介-06",
                    "images": [
                        "asset/images/products/2020-2022/znavi/product07/pc/img01.webp",
                        "asset/images/products/2020-2022/znavi/product07/pc/img02.webp",
                        "asset/images/products/2020-2022/znavi/product07/pc/img03.webp",
                        "asset/images/products/2020-2022/znavi/product07/pc/img04.webp",
                        "asset/images/products/2020-2022/znavi/product07/pc/img05.webp",
                        "asset/images/products/2020-2022/znavi/product07/pc/img06.webp",
            
                        "asset/images/products/2020-2022/znavi/product07/sp/img01.webp",
                        "asset/images/products/2020-2022/znavi/product07/sp/img02.webp",
                        "asset/images/products/2020-2022/znavi/product07/sp/img03.webp",
                        "asset/images/products/2020-2022/znavi/product07/sp/img04.webp",
                        "asset/images/products/2020-2022/znavi/product07/sp/img05.webp",
                        "asset/images/products/2020-2022/znavi/product07/sp/img06.webp"
                    ],
                    "categories": ["日本サイト","社内向けサイト","ランディングページ"],
                    "url": ""
                },
                {
                    "id": 10,
                    "name": "傑若威爾",
                    "images": [
                        "asset/images/products/2024/gerald-well/pc/inedx.webp",
                        "asset/images/products/2024/gerald-well/pc/about.webp",
                        "asset/images/products/2024/gerald-well/pc/404.webp",
                        "asset/images/products/2024/gerald-well/pc/articles.webp",
                        "asset/images/products/2024/gerald-well/pc/articles02.webp",
                        "asset/images/products/2024/gerald-well/pc/contact.webp",
                        "asset/images/products/2024/gerald-well/pc/contact02.webp",
                        "asset/images/products/2024/gerald-well/pc/fraud.webp",
                        "asset/images/products/2024/gerald-well/pc/news.webp",
                        "asset/images/products/2024/gerald-well/pc/privacy.webp",
                        "asset/images/products/2024/gerald-well/pc/services.webp",
                        "asset/images/products/2024/gerald-well/pc/services02.webp",
                        "asset/images/products/2024/gerald-well/pc/services03.webp",
            
                        "asset/images/products/2024/gerald-well/sp/inedx.webp",
                        "asset/images/products/2024/gerald-well/sp/about.webp",
                        "asset/images/products/2024/gerald-well/sp/404.webp",
                        "asset/images/products/2024/gerald-well/sp/articles.webp",
                        "asset/images/products/2024/gerald-well/sp/articles02.webp",
                        "asset/images/products/2024/gerald-well/sp/contact.webp",
                        "asset/images/products/2024/gerald-well/sp/contact02.webp",
                        "asset/images/products/2024/gerald-well/sp/fraud.webp",
                        "asset/images/products/2024/gerald-well/sp/news.webp",
                        "asset/images/products/2024/gerald-well/sp/privacy.webp",
                        "asset/images/products/2024/gerald-well/sp/services.webp",
                        "asset/images/products/2024/gerald-well/sp/services02.webp",
                        "asset/images/products/2024/gerald-well/sp/services03.webp"
                    ],
                    "categories": ["台湾サイト","コーポレートサイト"],
                    "url": "https://geraldwell.com.tw/"
                },
                {
                    "id": 19,
                    "name": "生命保険　代理店募集サイト",
                    "images": [
                        "asset/images/products/2020-2022/znavi/ia/pc/index.webp",
            
                        "asset/images/products/2020-2022/znavi/ia/sp/index.webp"
                    ],
                    "categories": ["日本サイト","ランディングページ"],
                    "url": ""
                },
                {
                    "id": 21,
                    "name": "生命保険　漫画サイト",
                    "images": [
                        "asset/images/products/2020-2022/znavi/comics/pc/img01.webp",
                        "asset/images/products/2020-2022/znavi/comics/pc/img02.webp",
            
                        "asset/images/products/2020-2022/znavi/comics/sp/img01.webp",
                        "asset/images/products/2020-2022/znavi/comics/sp/img02.webp"
                    ],
                    "categories": ["日本サイト","ランディングページ"],
                    "url": ""
                },
                {
                    "id": 23,
                    "name": "生命保険　バナー",
                    "images": [
                        "asset/images/products/2020-2022/znavi/design/banner01/img19.webp",
                        "asset/images/products/2020-2022/znavi/design/banner01/img01.webp",
                        "asset/images/products/2020-2022/znavi/design/banner01/img02.webp",
                        "asset/images/products/2020-2022/znavi/design/banner01/img03.webp",
                        "asset/images/products/2020-2022/znavi/design/banner01/img04.webp",
                        "asset/images/products/2020-2022/znavi/design/banner01/img05.webp",
                        "asset/images/products/2020-2022/znavi/design/banner01/img06.webp",
                        "asset/images/products/2020-2022/znavi/design/banner01/img07.webp",
                        "asset/images/products/2020-2022/znavi/design/banner01/img08.webp",
                        "asset/images/products/2020-2022/znavi/design/banner01/img09.webp",
                        "asset/images/products/2020-2022/znavi/design/banner01/img10.webp",
                        "asset/images/products/2020-2022/znavi/design/banner01/img11.webp",
                        "asset/images/products/2020-2022/znavi/design/banner01/img12.webp",
                        "asset/images/products/2020-2022/znavi/design/banner01/img13.webp",
                        "asset/images/products/2020-2022/znavi/design/banner01/img14.webp",
                        "asset/images/products/2020-2022/znavi/design/banner01/img15.webp",
                        "asset/images/products/2020-2022/znavi/design/banner01/img16.webp",
                        "asset/images/products/2020-2022/znavi/design/banner01/img17.webp",
                        "asset/images/products/2020-2022/znavi/design/banner01/img18.webp"
                    ],
                    "categories": ["デザイン"],
                    "url": ""
                },
                {
                    "id": 24,
                    "name": "生命保険　Spotify広告",
                    "images": [
                        "asset/images/products/2020-2022/znavi/design/banner02/1080px×1080px_pink01.webp",
                        "asset/images/products/2020-2022/znavi/design/banner02/1080px×1080px_pink02.webp",
                        "asset/images/products/2020-2022/znavi/design/banner02/1080px×1080px_pink03.webp",
                        "asset/images/products/2020-2022/znavi/design/banner02/1080px×1080px_yellow01.webp",
                        "asset/images/products/2020-2022/znavi/design/banner02/1080px×1080px_yellow02.webp",
                        "asset/images/products/2020-2022/znavi/design/banner02/1080px×1080px_yellow03.webp",
                        "asset/images/products/2020-2022/znavi/design/banner02/1080px×1920px_pink03.webp",
                        "asset/images/products/2020-2022/znavi/design/banner02/160px×600px_pink03.webp",
                        "asset/images/products/2020-2022/znavi/design/banner02/1920px×1080px_pink01.webp",
                        "asset/images/products/2020-2022/znavi/design/banner02/1920px×1080px_pink02.webp",
                        "asset/images/products/2020-2022/znavi/design/banner02/1920px×1080px_pink03.webp",
                        "asset/images/products/2020-2022/znavi/design/banner02/1920px×1080px_yellow01.webp",
                        "asset/images/products/2020-2022/znavi/design/banner02/1920px×1080px_yellow02.webp",
                        "asset/images/products/2020-2022/znavi/design/banner02/1920px×1080px_yellow03.webp",
                        "asset/images/products/2020-2022/znavi/design/banner02/300px×600px_pink03.webp",
                        "asset/images/products/2020-2022/znavi/design/banner02/320px×100px_pink03.webp",
                        "asset/images/products/2020-2022/znavi/design/banner02/320px×50px_pink03.webp",
                        "asset/images/products/2020-2022/znavi/design/banner02/600px×500px_pink03.webp"
                    ],
                    "categories": ["デザイン"],
                    "url": ""
                },
                {
                    "id": 28,
                    "name": "生命保険　はがき",
                    "images": [
                        "asset/images/products/2020-2022/znavi/design/flyer07/20220614_data_ol.webp"
                    ],
                    "categories": ["デザイン"],
                    "url": ""
                },
                {
                    "id": 5,
                    "name": "天康淨水品牌館",
                    "images": [
                        "asset/images/products/2023/tc-water/pc/index.webp",
                        "asset/images/products/2023/tc-water/pc/about.webp",
                        "asset/images/products/2023/tc-water/pc/articles.webp",
                        "asset/images/products/2023/tc-water/pc/articles02.webp",
                        "asset/images/products/2023/tc-water/pc/cart01.webp",
                        "asset/images/products/2023/tc-water/pc/cart02.webp",
                        "asset/images/products/2023/tc-water/pc/cart03.webp",
                        "asset/images/products/2023/tc-water/pc/contact.webp",
                        "asset/images/products/2023/tc-water/pc/faq.webp",
                        "asset/images/products/2023/tc-water/pc/favorite.webp",
                        "asset/images/products/2023/tc-water/pc/guid.webp",
                        "asset/images/products/2023/tc-water/pc/login.webp",
                        "asset/images/products/2023/tc-water/pc/news.webp",
                        "asset/images/products/2023/tc-water/pc/news02.webp",
                        "asset/images/products/2023/tc-water/pc/orders.webp",
                        "asset/images/products/2023/tc-water/pc/orders02.webp",
                        "asset/images/products/2023/tc-water/pc/password.webp",
                        "asset/images/products/2023/tc-water/pc/policy.webp",
                        "asset/images/products/2023/tc-water/pc/privacy.webp",
                        "asset/images/products/2023/tc-water/pc/products.webp",
                        "asset/images/products/2023/tc-water/pc/products02.webp",
                        "asset/images/products/2023/tc-water/pc/profile.webp",
                        "asset/images/products/2023/tc-water/pc/reset.webp",
                        "asset/images/products/2023/tc-water/pc/return.webp",
                        "asset/images/products/2023/tc-water/pc/search.webp",
                        "asset/images/products/2023/tc-water/pc/signup.webp",
            
                        "asset/images/products/2023/tc-water/sp/index.webp",
                        "asset/images/products/2023/tc-water/sp/about.webp",
                        "asset/images/products/2023/tc-water/sp/articles.webp",
                        "asset/images/products/2023/tc-water/sp/articles02.webp",
                        "asset/images/products/2023/tc-water/sp/cart01.webp",
                        "asset/images/products/2023/tc-water/sp/cart02.webp",
                        "asset/images/products/2023/tc-water/sp/cart03.webp",
                        "asset/images/products/2023/tc-water/sp/contact.webp",
                        "asset/images/products/2023/tc-water/sp/faq.webp",
                        "asset/images/products/2023/tc-water/sp/favorite.webp",
                        "asset/images/products/2023/tc-water/sp/guid.webp",
                        "asset/images/products/2023/tc-water/sp/login.webp",
                        "asset/images/products/2023/tc-water/sp/news.webp",
                        "asset/images/products/2023/tc-water/sp/news02.webp",
                        "asset/images/products/2023/tc-water/sp/orders.webp",
                        "asset/images/products/2023/tc-water/sp/orders02.webp",
                        "asset/images/products/2023/tc-water/sp/password.webp",
                        "asset/images/products/2023/tc-water/sp/policy.webp",
                        "asset/images/products/2023/tc-water/sp/privacy.webp",
                        "asset/images/products/2023/tc-water/sp/products.webp",
                        "asset/images/products/2023/tc-water/sp/products02.webp",
                        "asset/images/products/2023/tc-water/sp/profile.webp",
                        "asset/images/products/2023/tc-water/sp/reset.webp",
                        "asset/images/products/2023/tc-water/sp/return.webp",
                        "asset/images/products/2023/tc-water/sp/search.webp",
                        "asset/images/products/2023/tc-water/sp/signup.webp"
                    ],
                    "categories": ["台湾サイト","ショッピングサイト"],
                    "url": "https://tc-water.com.tw/"
                },
                {
                    "id": 29,
                    "name": "VRCenter",
                    "images": [
                        "asset/images/products/2018-2019/vrcenter/pc/index.webp",
                        "asset/images/products/2018-2019/vrcenter/pc/img02.webp",
                        "asset/images/products/2018-2019/vrcenter/pc/img03.webp",
                        "asset/images/products/2018-2019/vrcenter/pc/img04.webp",
                        "asset/images/products/2018-2019/vrcenter/pc/img05.webp",
                        "asset/images/products/2018-2019/vrcenter/pc/img06.webp",
                        "asset/images/products/2018-2019/vrcenter/pc/img07.webp",
                        "asset/images/products/2018-2019/vrcenter/pc/img08.webp",
                        "asset/images/products/2018-2019/vrcenter/pc/img09.webp",
            
                        "asset/images/products/2018-2019/vrcenter/sp/index.webp",
                        "asset/images/products/2018-2019/vrcenter/sp/img02-01.webp",
                        "asset/images/products/2018-2019/vrcenter/sp/img02.webp",
                        "asset/images/products/2018-2019/vrcenter/sp/img03.webp",
                        "asset/images/products/2018-2019/vrcenter/sp/img04.webp",
                        "asset/images/products/2018-2019/vrcenter/sp/img05.webp",
                        "asset/images/products/2018-2019/vrcenter/sp/img06.webp",
                        "asset/images/products/2018-2019/vrcenter/sp/img07.webp",
                        "asset/images/products/2018-2019/vrcenter/sp/img08-01.webp",
                        "asset/images/products/2018-2019/vrcenter/sp/img08.webp"
                    ],
                    "categories": ["日本サイト","ブランディングサイト"],
                    "url": ""
                },
                {
                    "id": 34,
                    "name": "おきがるBBQ GARDEN",
                    "images": [
                        "asset/images/products/2018-2019/bbq-garden/pc/index.webp",
                        "asset/images/products/2018-2019/bbq-garden/pc/img02.webp",
                        "asset/images/products/2018-2019/bbq-garden/pc/img03.webp",
                        "asset/images/products/2018-2019/bbq-garden/pc/img04.webp",
                        "asset/images/products/2018-2019/bbq-garden/pc/img05.webp",
            
                        "asset/images/products/2018-2019/bbq-garden/sp/index.webp",
                        "asset/images/products/2018-2019/bbq-garden/sp/img02.webp",
                        "asset/images/products/2018-2019/bbq-garden/sp/img03.webp",
                        "asset/images/products/2018-2019/bbq-garden/sp/img04.webp",
                        "asset/images/products/2018-2019/bbq-garden/sp/img05.webp"
                    ],
                    "categories": ["日本サイト","ブランディングサイト"],
                    "url": ""
                },
                {
                    "id": 35,
                    "name": "おきがるBBQ GARDEN　デザイン",
                    "images": [
                        "asset/images/products/2018-2019/bbq-garden/design/image110.webp",
                        "asset/images/products/2018-2019/bbq-garden/design/image111.webp",
                        "asset/images/products/2018-2019/bbq-garden/design/image112.webp",
                        "asset/images/products/2018-2019/bbq-garden/design/image113.webp",
                        "asset/images/products/2018-2019/bbq-garden/design/image114.webp",
                        "asset/images/products/2018-2019/bbq-garden/design/image115.webp",
                        "asset/images/products/2018-2019/bbq-garden/design/image116.webp",
                        "asset/images/products/2018-2019/bbq-garden/design/image117.webp",
                        "asset/images/products/2018-2019/bbq-garden/design/image118.webp",
                        "asset/images/products/2018-2019/bbq-garden/design/image119.webp",
                        "asset/images/products/2018-2019/bbq-garden/design/image120.webp",
                        "asset/images/products/2018-2019/bbq-garden/design/image121.webp",
                        "asset/images/products/2018-2019/bbq-garden/design/image122.webp",
                        "asset/images/products/2018-2019/bbq-garden/design/image123.webp",
                        "asset/images/products/2018-2019/bbq-garden/design/image124.webp",
                        "asset/images/products/2018-2019/bbq-garden/design/image125.webp",
                        "asset/images/products/2018-2019/bbq-garden/design/image126.webp",
                        "asset/images/products/2018-2019/bbq-garden/design/image127.webp",
                        "asset/images/products/2018-2019/bbq-garden/design/image128.webp",
                        "asset/images/products/2018-2019/bbq-garden/design/image129.webp",
                        "asset/images/products/2018-2019/bbq-garden/design/image130.webp"
                    ],
                    "categories": ["デザイン"],
                    "url": ""
                },
                {
                    "id": 36,
                    "name": "アルバイト・パート求人",
                    "images": [
                        "asset/images/products/2018-2019/job/pc/index.webp",
                        "asset/images/products/2018-2019/job/pc/img02.webp",
                        "asset/images/products/2018-2019/job/pc/img03.webp",
                        "asset/images/products/2018-2019/job/pc/img04.webp",
                        "asset/images/products/2018-2019/job/pc/img05.webp",
                        "asset/images/products/2018-2019/job/pc/img06.webp",
            
                        "asset/images/products/2018-2019/job/sp/index.webp",
                        "asset/images/products/2018-2019/job/sp/img02.webp",
                        "asset/images/products/2018-2019/job/sp/img03.webp",
                        "asset/images/products/2018-2019/job/sp/img04.webp",
                        "asset/images/products/2018-2019/job/sp/img05.webp",
                        "asset/images/products/2018-2019/job/sp/img06.webp"
                    ],
                    "categories": ["日本サイト","求人サイト"],
                    "url": ""
                }
            ]
            ,
            currentPage: 1,
            itemsPerPage: 12,
            currentCategory: 'all'
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.filteredProjects.length / this.itemsPerPage);
        },
        displayedProjects() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            return this.filteredProjects.slice(startIndex, startIndex + this.itemsPerPage);
        },
        uniqueCategories() {
            const categories = this.projects.reduce((acc, project) => {
                return acc.concat(project.categories);
            }, []);
            return [...new Set(categories)];
        },
        filteredProjects() {
            if (this.currentCategory === 'all') {
                return this.projects;
            } else {
                return this.projects.filter(project => project.categories.includes(this.currentCategory));
            }
        }
    },
    methods: {
        initFancybox() {
            this.$nextTick(() => {
                this.projects.forEach((project, index) => {
                    Fancybox.bind(`#gallery${index + 1} [data-fancybox="gallery${index + 1}"]`, {});
                });
            });
        },
        setCurrentPage(page) {
            this.currentPage = page;
        },
        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        filterProjects(category) {
            this.currentCategory = category;
            this.currentPage = 1;
        }
    },
    mounted() {
        this.initFancybox();

        // // Fade in only once
        // $(".inview").on("inview", function () {
        //     $(this).addClass("is-show").css("transition-delay", ($(this).index() * 0.1) + "s");
        // });

        // // Repeatedly fade in
        // $(".inviewRe").on("inview", function (event, isInView) {
        //     if (isInView) {
        //         $(this).stop().addClass("is-show").css("transition-delay", ($(this).index() * 0.1) + "s");
        //     } else {
        //         $(this).stop().removeClass("is-show").css("transition-delay", ($(this).index() * 0.1) + "s");
        //     }
        // });
    }
});

app.mount('#app');