// 定義店家資料的陣列，每個店家包含名稱、網址、評分、價格範圍、距離和照片
const stores = [
{ name: "HUN混", url: "https://maps.app.goo.gl/9TzWFUoW9twxgyhe9", rating: 4.5, price: [200,400], distance: 45, photo: "https://lh5.googleusercontent.com/p/AF1QipNY6s11mygsidwKb1Xv3CkY7qYjDpcc3ZvgZQrd=w426-h240-k-no" },
{ name: "神攻沙威瑪 台中一中店", url: "https://maps.app.goo.gl/zym5fXAwPtKwsT2r9", rating: 4.0, price: [1, 200], distance: 41, photo: "https://lh5.googleusercontent.com/p/AF1QipOZyYhBoCSJiIXLvfv-zXrsXeBcFRvZlmKB4VYa=w408-h544-k-no" },
{ name: "OT蛋餅一中大本營", url: "https://maps.app.goo.gl/p5FUWwgWMzHXTfF27", rating: 4.2, price: [1, 200], distance: 45, photo: "https://lh5.googleusercontent.com/p/AF1QipMBeawQ_vTeTQ1UQ0Sq1WS9i0DQjri9CfUZUuPP=w408-h306-k-no" },
{ name: "九州日式豚骨拉麵(一中店)", url: "https://maps.app.goo.gl/nZMjQiwrRmfksgL97", rating: 4.1, price: [1, 200], distance: 100, photo: "https://lh5.googleusercontent.com/p/AF1QipOFW1ZCIjfV-q1OM-hM6Kz7QLQW1TXmeLJmtOIC=w408-h541-k-no" },
{ name: "宅 一中店", url: "https://maps.app.goo.gl/AQYtBcSvRwEBQ5cD8", rating: 4.5, price: [400, 600], distance: 100, photo: "https://lh5.googleusercontent.com/p/AF1QipNPtXY5n3cgY65_VMviciycFdZQHA-_gKH-Dpg5=w408-h272-k-no" },
{ name: "橙 義大利麵", url: "https://maps.app.goo.gl/KWELTR3LWdrRfLXZ6", rating:4.8, price: [1, 200], distance:130, photo: "https://lh5.googleusercontent.com/p/AF1QipMA4-4-vXo_n-aEieibTKiURdbkinYNvs35_Wtf=w408-h725-k-no" },
{ name: "二口美食", url: "https://maps.app.goo.gl/eWQEV6n2niWhm6Hb7", rating:3.9, price: [1, 200], distance:140, photo: "https://lh5.googleusercontent.com/p/AF1QipNy3iLqXP9fWP8ZOeuHPtdE2c8uYztO4b2ws7zn=w408-h544-k-no" },
{ name: "萊萊飯店", url: "https://maps.app.goo.gl/pWRn5YLBBSTDDPW7A", rating:3.4, price: [1, 200], distance:140, photo: "https://lh5.googleusercontent.com/p/AF1QipN6MRbbYN_JhJmZf4o0wJQ_rdGX_V--EbWu115m=w408-h306-k-no" },
{ name: "丸亀製麵台中一中店", url: "https://maps.app.goo.gl/tLNbrSbiWGjPf4qC8", rating:4.1, price: [1, 200], distance:170, photo: "https://lh5.googleusercontent.com/p/AF1QipO9TW4xTbPk7jbj7lfJ_6En2YW6trK57UboNEa1=w408-h544-k-no" },
{ name: "老爸的牛肉麵", url: "https://maps.app.goo.gl/CMkVSvZZmQf15U1h9", rating:4.7, price: [1, 200], distance:150, photo: "https://lh5.googleusercontent.com/p/AF1QipMgBwCZ9nTjWTpjxNNjq21l4i8YcuwjXR-9fNPZ=w408-h482-k-no" },
{ name: "亞丁尼義式麵館一中店", url: "https://maps.app.goo.gl/NTh9py8FbeKNxHHTA", rating:4.7, price: [200, 400], distance:170, photo: "https://lh5.googleusercontent.com/p/AF1QipPzodid6r8e69N6QI_t8KkHhK7DTpBBHNhq9z9k=w408-h318-k-no" },
{ name: "朴大哥的韓式炸雞-一中直營店", url: "https://maps.app.goo.gl/S8b11S3kbBSemLjNA", rating:4.4, price: [200, 400], distance:190, photo: "https://lh5.googleusercontent.com/p/AF1QipMloKvVJNTmsyxeqiAA-GgDgrYETJnzhDfZYnPU=w408-h270-k-no" },
{ name: "JT燉飯", url: "https://maps.app.goo.gl/2rxKARAUMU3xmhSP7", rating:4.4, price: [200, 400], distance:200, photo: "https://lh5.googleusercontent.com/p/AF1QipNp6jUaSJpfGYliea7seOA7C21jvAz3pwDLSn5A=w408-h408-k-no" },
{ name: "麺屋かとむら-台中一中店", url: "https://maps.app.goo.gl/9N7XVH3nA76TePpp6", rating:4.4, price: [200, 400], distance:210, photo: "https://lh5.googleusercontent.com/p/AF1QipOMZGoLgMMMGXPLs3eiHgT4sT5F7Qd1-joXTI8O=w408-h272-k-no" },
{ name: "京厚屋-一中店", url: "https://maps.app.goo.gl/JQgfnH62jz5JJgM27", rating:4.6, price: [200, 400], distance:230, photo: "https://lh5.googleusercontent.com/p/AF1QipPHfnDyvU0AoIgqzOlU1q5cE45sZ7c8rHvAlzIM=w408-h306-k-no" },
{ name: "Mr.38咖哩美食餐廳(一中店)", url: "https://maps.app.goo.gl/ErWaK1eK9JeDz2i7A", rating:4.6, price: [200, 400], distance:250, photo: "https://lh5.googleusercontent.com/p/AF1QipNDZYA4OkjsJpPXs5NtW13uSRfD_BPLTmWb1RBl=w408-h544-k-no" },
{ name: "聚一波 GEP 義式料理", url: "https://maps.app.goo.gl/2Dx7rPsHSj38ZRbj6", rating:4.6, price: [200, 400], distance:230, photo: "https://lh5.googleusercontent.com/p/AF1QipPscTGF4uBCJzvOsHhLo-EAO-n9IsX1z0g19qA=w408-h271-k-no" },
{ name: "黑GURO屋台食堂", url: "https://maps.app.goo.gl/SrGSsCY9E5PLuuK38", rating:4.8, price: [200, 400], distance:270, photo: "https://lh5.googleusercontent.com/p/AF1QipMq4B8QPgeOgTS8QoNq62mVPvO7ex1Iqu_bKZIb=w408-h544-k-no" },
{ name: "Pizza running 新一中店", url: "https://maps.app.goo.gl/Npbo2sMawViW4dSi9", rating:4.0, price: [1, 200], distance:110, photo: "https://lh5.googleusercontent.com/p/AF1QipNd9xKON5npbV67F1hmJDPP15l7I7TWVk3qCS3L=w408-h544-k-no" },
{ name: "8德司創意餐館(一中店)", url: "https://maps.app.goo.gl/hc7uESNyQYFXzSkj8", rating:4.7, price: [400, 600], distance:170, photo: "https://lh5.googleusercontent.com/p/AF1QipOSBSEPl1QmsV38d9cCqiL1iOUf-_lYqG-K3d4c=w408-h306-k-no" },
{ name: "八色烤肉 台中四號店", url: "https://maps.app.goo.gl/RMvZquwA8PAEkLyS7", rating:4.0, price: [600, 800], distance:220, photo: "https://lh5.googleusercontent.com/p/AF1QipNrEug3h1olxTWOIqrX61JzT-pvnnZanW-BCAQr=w408-h544-k-no" },
{ name: "小象餐廳", url: "https://maps.app.goo.gl/Tv4KzDGUfK1wqdNe8", rating:3.8, price: [1, 200], distance:270, photo: "https://lh5.googleusercontent.com/p/AF1QipP371rPtKMSz4Ln7f9dlY2-A5NrwobQppXbaqCy=w408-h725-k-no" },
{ name: "高牧手作料理餐廳", url: "https://maps.app.goo.gl/dFFRputSHpkegHfq9", rating:4.3, price: [200, 400], distance:290, photo: "https://lh5.googleusercontent.com/p/AF1QipOMugc952l9sNDjRTxb_saVOk6YMB9PYkIQHcQ1=w408-h340-k-no" },
{ name: "焼肉スマイル（燒肉Smile）台中一中店", url: "https://maps.app.goo.gl/iKuagghQNe8wXYNt6", rating:4.8, price: [400, 600], distance:300, photo: "https://lh5.googleusercontent.com/p/AF1QipMoVgoOWOQ1KRUIK0hdExyoexS8ID09_Ye_Ituk=w408-h306-k-no" },
{ name: "川牛木石亭 一中店", url: "https://maps.app.goo.gl/agynzKUqFT1e9i5j8", rating:3.9, price: [200, 400], distance:350, photo: "https://lh5.googleusercontent.com/p/AF1QipPy3-F4XSjmke8Ysf-16xrPydKO8AmmXGBSUIFp=w408-h543-k-no" },
{ name: "Rice now粒客韓式米漢堡", url: "https://maps.app.goo.gl/jn2nwAkkL8sJtXEj6", rating:4.0, price: [1, 200], distance:350, photo: "https://lh5.googleusercontent.com/p/AF1QipOm6NSoQNBtu6QUO2Yt76xQ0Sxu4u8kP5pBl8Zi=w408-h408-k-no" },
{ name: "邦雷士雞排（中友店）", url: "https://maps.app.goo.gl/GhyA9CVmpbxtcCAdA", rating:4.9, price: [1, 200], distance:350, photo: "https://lh5.googleusercontent.com/p/AF1QipNgLZycV6FzlmWxls2XqZhJcMutIIDPioYDbgFc=w408-h407-k-no" },
{ name: "川麵道雙十店", url: "https://maps.app.goo.gl/FrrJfzmNcxYFfQ1A8", rating:4.9, price: [1, 200], distance:350, photo: "https://lh5.googleusercontent.com/p/AF1QipNK6_g2tBB5URWYG-Vs_kRJ-REkGWvTrHPKUVwX=w408-h709-k-no" },
{ name: "花囍家日式料理製研所（一中店）", url: "https://maps.app.goo.gl/5sQxxhbi5sQzzZsz6", rating:4.6, price: [200, 400], distance:350, photo: "https://lh5.googleusercontent.com/p/AF1QipObnkSTMsyhS_wDWxC5-vUtLyTcWc5clLpoJgol=w408-h544-k-no" },
{ name: "不老夢想125號(不老食光餐廳)", url: "https://maps.app.goo.gl/QLRjGVWSHUw54dyL9", rating:4.8, price: [200, 400], distance:350, photo: "https://lh5.googleusercontent.com/p/AF1QipOP1JfiC722Or3O70MmOh0u8CCiGvAZby6YdZ22=w408-h272-k-no" },
{ name: "諾諾索 Non Lo So 義式料理一中店", url: "https://maps.app.goo.gl/bv7QVwEP9zGbRQkF7", rating:4.2, price: [200, 400], distance:400, photo: "https://lh5.googleusercontent.com/p/AF1QipM76VpTeCGHjH87TdayIK9HR4vdSkoQGwFYPRov=w408-h544-k-no" },
{ name: "京悅港式飲茶", url: "https://maps.app.goo.gl/gZZchqEhYs6RaBVb6", rating:4.3, price: [600, 800], distance:400, photo: "https://lh5.googleusercontent.com/p/AF1QipMmqrzj_Y-58OL_Pr55vdyX3KbwXvjmsSfGc4c=w408-h408-k-no" },
{ name: "養機場義大利麵（中友店)全天供餐", url: "https://maps.app.goo.gl/6fDNdvvYDhcBa1Ei6", rating:4.0, price: [200, 400], distance:400, photo: "https://lh5.googleusercontent.com/p/AF1QipMsSuzvgrCsVS9BbJvfeSL27kpcdEv1Ys5LpMxx=w408-h306-k-no" },
{ name: "Gray House Living&Pasta 灰房子 義式料理", url: "https://maps.app.goo.gl/oQ6dSNPdgTstPJfJ8", rating:4.3, price: [200, 400], distance:450, photo: "https://lh5.googleusercontent.com/p/AF1QipNYFmFycDpSp5liIN7D5xXtS3adZEkrr2aAXun9=w408-h621-k-no" },
{ name: "小小麥 一中店｜裝修完成 全新2樓（全日供餐）", url: "https://maps.app.goo.gl/LTB1vu317WAXzc6c8", rating:4.5, price: [1, 200], distance:500, photo: "https://lh5.googleusercontent.com/p/AF1QipMeTwlfKkGSCl3oYGsRdYgcPYxpBvwdP4y-m7-t=w408-h271-k-no" },
{ name: "福氣咖哩｜週末整天營業", url: "https://maps.app.goo.gl/Rm3VsNzq84ucpYFv8", rating:4.9, price: [200, 400], distance:450, photo: "https://lh5.googleusercontent.com/p/AF1QipPlzztcCJ4nxorl1S5u6eQbrvStmi8Nc5EaDoIA=w408-h544-k-no" },
{ name: "微滷", url: "https://maps.app.goo.gl/JXCVpu6xoNnY8hUM9", rating:4.7, price: [1, 200], distance:500, photo: "https://lh5.googleusercontent.com/p/AF1QipOOfGfgxyi26E5o5SdRhJ4RQQyHEr3zGDbFahYO=w426-h240-k-no" },
{ name: "金大發", url: "https://maps.app.goo.gl/yJxrXCxR1SUBjUXEA", rating:406, price: [1, 200], distance:500, photo: "https://lh5.googleusercontent.com/p/AF1QipM-fdXaqjsqE5d50lcqFeOg1ItilyMg-m6c4DPR=w408-h544-k-no" },
{ name: "這一家鹹水雞", url: "https://maps.app.goo.gl/SGHinGj8w4vPc9py7", rating:4.4, price: [1, 200], distance:500, photo: "https://lh5.googleusercontent.com/p/AF1QipNIH6035Y-uvWqzfbThvcfRAthIws8iZ6r_EwVS=w426-h240-k-no" },
{ name: "超堡Super burger漢堡手搖飲專賣店 一中門市", url: "https://maps.app.goo.gl/fw67S9sB7gdXVfvc7", rating:4.9, price: [1, 200], distance:450, photo: "https://lh5.googleusercontent.com/p/AF1QipO7VaaDTpGD197cM3rfjqZwIE5usSrojNMc1bbE=w408-h306-k-no" },
{ name: "燃守串", url: "https://maps.app.goo.gl/qHd1YX3uCBvuHqLL7", rating:4.4, price: [200, 400], distance:450, photo: "https://lh5.googleusercontent.com/p/AF1QipNJMRohqEWocsQjagrUhIC9_esGGRISkI8v7tqv=w408-h306-k-no" },
{ name: "鯛笑堂", url: "https://maps.app.goo.gl/LbWndcFiWnyrv6YFA", rating:4.3, price: [1, 200], distance:500, photo: "https://lh5.googleusercontent.com/p/AF1QipMP2YamnAidYUunEVfaicdzrsIY8X9qPUoZZU58=w408-h306-k-no" },
{ name: "桐生日式可麗餅 台中一中店", url: "https://maps.app.goo.gl/BAWCB8uQV2pdVFTRA", rating:4.0, price: [1, 200], distance:450, photo: "https://lh5.googleusercontent.com/p/AF1QipO-IRUUjAXzBnzxCtDB8DFxKU6QiPy_-4fD900Q=w408-h725-k-no" },
{ name: "すき家台中一中", url: "https://maps.app.goo.gl/YSkkti9SutZ432i5A", rating:3.6, price: [1, 200], distance:500, photo: "https://lh5.googleusercontent.com/p/AF1QipP_BgiPia32axK-fruUOUixV1An0o29GnRIF7C7=w408-h544-k-no" },
{ name: "偈亭-雙十總店", url: "https://maps.app.goo.gl/pL8S63uLWXzryWsu7", rating:4.3, price: [200, 400], distance:450, photo: "https://lh5.googleusercontent.com/p/AF1QipOSBM1uynMJuFITkOIAfWUZR3vwc9rgM1qyLVIo=w408-h306-k-no" },
{ name: "烤狀猿日式燒肉 (一中店)", url: "https://maps.app.goo.gl/9CYn1F6NujcZuvzL6", rating:4.7, price: [600, 800], distance:450, photo: "https://lh5.googleusercontent.com/p/AF1QipMAm-G2rikJDrzbzRQUqZC0QsdI9F4RWzOwSEjw=w408-h306-k-no" },
{ name: "豪紀無骨御鮮雞-一中店", url: "https://maps.app.goo.gl/ayPMx2CY8uuVfxeg8", rating:4.6, price: [1, 200], distance:400, photo: "https://lh5.googleusercontent.com/p/AF1QipNH8AMmLgS6ncbsOhXpE916S9THKjIJYuInSOVg=w408-h544-k-no" },
{ name: "一中街打餅舖烙餅", url: "https://maps.app.goo.gl/Bkfq6jETh8QPuryg6", rating:4.1, price: [1, 200], distance:180, photo: "https://lh5.googleusercontent.com/p/AF1QipMWbQiyq8tIwdCE7ioEd09GHpUf1z6CB3cVFHXa=w408-h305-k-no" },
{ name: "初木山 一中店", url: "https://maps.app.goo.gl/Coit4paYXk5EBz9q8", rating:5.0, price: [1, 200], distance:260, photo: "https://lh5.googleusercontent.com/p/AF1QipNvAqQeRanUg15Xgw7_0OUUQ8e_zluZUO64fjQA=w408-h306-k-no" },
{ name: "酥力蛋餅 五權店SOORI EGGS Taichung", url: "https://maps.app.goo.gl/Cj4gGHn3sL2XtpF98", rating:4.5, price: [1,200], distance:500, photo: "https://lh5.googleusercontent.com/p/AF1QipN0LeYggJ1sRZ-h3G5Dc3is0LWdcQj2KRBzZ4_o=w408-h544-k-no" },
{ name: "一中咕咕園-一中店", url: "https://maps.app.goo.gl/jq9cRm9SGz93FDVBA", rating:3.2, price: [1, 200], distance:140, photo: "https://lh5.googleusercontent.com/p/AF1QipOD0Ycoyhw27Fy2JjqMU9MGxZhS2yEUHRNRZm_s=w408-h306-k-no" },
{ name: "星空Stellato （一中店）", url: "https://maps.app.goo.gl/J23NrF8TZUcT5Fuy6", rating:4.2, price: [200, 400], distance:160, photo: "https://lh5.googleusercontent.com/p/AF1QipMZBdS7ln-6c-eu7K15LqISf0q_mDvDiKni--PM=w408-h306-k-no" },
{ name: "Super麵24H 韓國無人拉麵 一中店", url: "https://maps.app.goo.gl/9bPAy7aLSxKu8nAc7", rating:5.0, price: [1, 200], distance:210, photo: "https://lh5.googleusercontent.com/p/AF1QipN5TOQ0yNGZxbN01fg7zt9Khr1rzNis0Fytmj3K=w408-h306-k-no" },
{ name: "花漾轉轉鍋 | 一中火鍋", url: "https://maps.app.goo.gl/DDDooYjQNdryXzrs9", rating:4.5, price: [200, 400], distance:130, photo: "https://lh5.googleusercontent.com/p/AF1QipNgBpuVopRxb60Pqao86iczgwtlbZz8fCyLZYfM=w408-h272-k-no" },
{ name: "一中8兩碳烤雞排", url: "https://maps.app.goo.gl/cYgE21ZBFPZdxZ4K8", rating:3.1, price: [1, 200], distance:190, photo: "https://lh5.googleusercontent.com/p/AF1QipNUHykmvBBEvmoh1srXVSLlT9F-mqf1s1N2kOhY=w408-h408-k-no" },
{ name: "莊董粉行-冰粉藕粉", url: "https://maps.app.goo.gl/k7zBPy3wPvmVnSgm8", rating:4.6, price: [1, 200], distance:280, photo: "https://lh5.googleusercontent.com/p/AF1QipPKBDqMVixo_s18uRzos35SdWZlO9VEpsCS20yl=w408-h544-k-no" },
{ name: "山西刀削麵食館", url: "https://maps.app.goo.gl/tXohR9G8g64FFZL2A", rating:3.9, price: [1, 200], distance:400, photo: "https://lh5.googleusercontent.com/p/AF1QipOmKuuesWqIjI4IR5MxmDGWmyP5_zv3cTP6NzNe=w408-h306-k-no" },
{ name: "前任咖哩製造所", url: "https://maps.app.goo.gl/SQ5KWUHKwh2wabL2A", rating:4.8, price: [1, 200], distance:350, photo: "https://lh5.googleusercontent.com/p/AF1QipMzOyIJwZtPornZlJiDA_xLNN2x3GpKPtX0qTl9=w408-h305-k-no" },
{ name: "丸勝咖哩洋食", url: "https://maps.app.goo.gl/B5fRja13kPTSomxK6", rating:4.2, price: [200, 400], distance:210, photo: "https://lh5.googleusercontent.com/p/AF1QipOSdLvzNRLpuupxs3CVMr00fIRaSjAAXr5gC70=w408-h306-k-no" },
{ name: "京燉滷味", url: "https://maps.app.goo.gl/bNGkat2Sdexa4V3MA", rating:3.6, price: [1, 200], distance:210, photo: "https://lh5.googleusercontent.com/p/AF1QipPZaUlo64W9n9QtUshJzZm-rm8AtcbibOu1B7Za=w408-h306-k-no" },
{ name: "小紅帽韓式烤肉飯", url: "https://maps.app.goo.gl/m8s6SBL5sMC1oE1d6", rating:4.4, price: [1, 200], distance:350, photo: "https://lh5.googleusercontent.com/p/AF1QipO8aXLyEPcqVcbpA04QZXZ4wE0IyIF7CuWJBDrt=w426-h240-k-no" },
{ name: "FanFans Cafe 動漫主題餐廳 台中一中店", url: "https://maps.app.goo.gl/19RG81my2RHVmoAp6", rating:4.4, price: [400, 600], distance:400, photo: "https://lh5.googleusercontent.com/p/AF1QipO0dBfvrKkCERo3S5KqtCFvIE9Pg3KdsRuxFXnC=w408-h306-k-no" },
{ name: "王印製麵麻辣乾麵", url: "https://maps.app.goo.gl/f1Xk9Hw1RsHuyJCHA", rating:2.9, price: [1, 200], distance:300, photo: "https://lh5.googleusercontent.com/p/AF1QipNnQw5uHh1XM7_SOVsGKUtmFE9XZfotMRrJU6c8=w426-h240-k-no" },
{ name: "明賢行", url: "https://maps.app.goo.gl/AgvJCKN7Ewv5eifSA", rating:4.6, price: [200, 400], distance:450, photo: "https://lh5.googleusercontent.com/p/AF1QipPn_ZQQ5tWdQWBIiWXvl_oDV4idUkadBZXitODE=w408-h306-k-no" },
{ name: "漫漫拾光 英倫茶館 moments in time", url: "https://maps.app.goo.gl/hafXnjX29ZPzPAs6A", rating:4.6, price: [200, 400], distance:500, photo: "https://lh5.googleusercontent.com/p/AF1QipNBN2c6YSkuyaScwp1McFTtXa4wa463dtdwE8eP=w408-h306-k-no" },
{ name: "和記傻瓜麵", url: "https://maps.app.goo.gl/FM4kxG3SnRp21b9x9", rating:4.3, price: [1, 200], distance:240, photo: "https://lh5.googleusercontent.com/p/AF1QipNsGBFTff9orAMtTlo3Vd1px5X7qdi1KSA7Kpii=w408-h306-k-no" },
{ name: "八廚職人弁当 台中一中店", url: "https://maps.app.goo.gl/kBBxLh3DUNeXQwqH6", rating:4.4, price: [1, 200], distance:270, photo: "https://lh5.googleusercontent.com/p/AF1QipPshdccxaV_67uKkOASdlXRX2mbKEDwTMshGtvR=w426-h240-k-no" },
{ name: "小太陽大腸包小腸（炭烤）-一中店", url: "https://maps.app.goo.gl/KnjDosT346VHUS3RA", rating:4.0, price: [1, 200], distance:250, photo: "https://lh5.googleusercontent.com/p/AF1QipPdMVKzzowLF1dgyxsbqIXefltTGDpiYPycDt5j=w408-h723-k-no" },
{ name: "元氣小當家食堂", url: "https://maps.app.goo.gl/6w7C64ff9bfNuHtM6", rating:4.8, price: [1, 200], distance:260, photo: "https://lh5.googleusercontent.com/p/AF1QipOk2frc-BpR50Mz-ME_kxdXN8fHdBNFQDcArdM=w408-h272-k-no" },
{ name: "暹味泰式料理", url: "https://maps.app.goo.gl/RNoRhJ7bp84V5LZs9", rating:4.1, price: [1, 200], distance:350, photo: "https://lh5.googleusercontent.com/p/AF1QipM_HaELtwicgulJGqFYDgpPwfFnv1L1Xd6Gut_w=w426-h240-k-no" },
{ name: "炳修豆漿（一中店）烤鴨蛋餅", url: "https://maps.app.goo.gl/Ah3W6o5boAwiKcCS8", rating:3.1, price: [1, 200], distance:270, photo: "https://lh5.googleusercontent.com/p/AF1QipOrM1f-jFsUVWSwa-9EEVJQ7ClG5snssZK_X2vw=w408-h306-k-no" },
{ name: "VEGESM 饗蔬職人 一中店", url: "https://maps.app.goo.gl/xLUoyUTkzz2eM5gs7", rating:4.6, price: [1, 200], distance:450, photo: "https://lh5.googleusercontent.com/p/AF1QipMP54QI8_7GLN8G3buyslmCBQ4-i79fOWc-P4uK=w408-h544-k-no" },
{ name: "緣井豚骨拉麵", url: "https://maps.app.goo.gl/B2o6KXRqVBZLBRAW9", rating:4.4, price: [1, 200], distance:350, photo: "https://lh5.googleusercontent.com/p/AF1QipPuufkvV52KCZVEdP_6-IXmnhtzWccrgWPNwvGW=w408-h288-k-no" },
{ name: "大阪拓海家拉麵 ", url: "https://maps.app.goo.gl/6wiQigouA6THEAsu9", rating:4.2, price: [1, 200], distance:200, photo: "https://lh5.googleusercontent.com/p/AF1QipO1ioIS0liXsmyeEirXPgCp5yGPi5GBEXuN8Swq=w426-h240-k-no" },
{ name: "阿潘家幸福蔬食-一中店", url: "https://maps.app.goo.gl/5ccuG1FtBxaHYYG68", rating:4.9, price: [1, 200], distance:190, photo: "https://lh5.googleusercontent.com/p/AF1QipNCDFJCXt-hhWAl0UlcuWLWr2osntpavet_Cexy=w408-h543-k-no" },
{ name: "挖咖哩", url: "https://maps.app.goo.gl/x3TSCLhxwHdA2WEr7", rating:4.3, price: [1, 200], distance:500, photo: "https://lh5.googleusercontent.com/p/AF1QipNwXtEQS4ZlD17eW67ajcIGG4TP8oipdm9ou27F=w426-h240-k-no" },
{ name: "親古們！韓食製造所", url: "https://maps.app.goo.gl/RTrMoTR9hVgs3HQD7", rating:3.6, price: [200, 400], distance:300, photo: "https://lh5.googleusercontent.com/p/AF1QipPlpYFa5aTLIcXthVlRutELW-GOzY9SWrzyjdtJ=w408-h544-k-no" },
{ name: "丸亀製麵 中友台中店", url: "https://maps.app.goo.gl/5pmSekEwA4WbtLeYA", rating:4.4, price: [1, 200], distance:280, photo: "https://lh5.googleusercontent.com/p/AF1QipNFo8oqOjOcqn9lkXp91LB3kDiViLu9ys6DcwLA=w408-h306-k-no" },
{ name: "求求辣年糕", url: "https://maps.app.goo.gl/XVaaGkjv7KnMjAez7", rating:4.3, price: [200, 400], distance:140, photo: "https://lh5.googleusercontent.com/p/AF1QipPF8K_TTXpoLZSKlUNHoimxUmrFLTipUHL3hi3x=w426-h240-k-no" },
{ name: "佐野拉麵", url: "https://maps.app.goo.gl/Q4dhcSyQTYav89ob7", rating:4.4, price: [1, 200], distance:140, photo: "https://lh5.googleusercontent.com/p/AF1QipOwNohlUA9Ley5EwiGrZfecPSXb13JhU0bw3Lpa=w408-h306-k-no" },
{ name: "甩鍋雞볶찜韓式炒雞吃到飽-中友店", url: "https://maps.app.goo.gl/2R3NUv8eSaVaXzWu7", rating:4.8, price: [400, 600], distance:450, photo: "https://lh5.googleusercontent.com/p/AF1QipNwgENaOnP0QUBdKdg-oz8UB2C-0WyDHGqSNVsp=w408-h306-k-no" },
{ name: "好好吃肉韓式烤肉吃到飽-台中一中店", url: "https://maps.app.goo.gl/doggYqCfY39tKgP98", rating:4.3, price: [400, 600], distance:350, photo: "https://lh5.googleusercontent.com/p/AF1QipOy_fwVD_9YaF7BS3iOcXffKrntNEc9U3nxCvcO=w408-h306-k-no" },
{ name: "義式屋古拉爵 台中中友店", url: "https://maps.app.goo.gl/oArHBMPieRYAAayN8", rating:4.1, price: [400, 600], distance:250, photo: "https://lh5.googleusercontent.com/p/AF1QipMsG4Eulv_Ed1970gG2EvlfBaIJRK1eOgq0F5RR=w426-h240-k-no" },
{ name: "漢來上海湯包 台中店", url: "https://maps.app.goo.gl/v77PVp6hbojCgQTQ6", rating:4.0, price: [400, 600], distance:290, photo: "https://lh5.googleusercontent.com/p/AF1QipNGRidQnEjiKlteQz_STnoDXZZnZXKg9BExF6Oj=w408-h306-k-no" },
{ name: "瓦城泰國料理 - 台中中友店", url: "https://maps.app.goo.gl/GtKqe7T3dCnUwkwZA", rating:4.5, price: [400, 800], distance:300, photo: "https://lh5.googleusercontent.com/p/AF1QipMkOuEzlMvvfCntXL0F7l4JdQLW5RL4PJG6Ukbt=w408-h306-k-no" },
{ name: "私肉羹小吃店", url: "https://maps.app.goo.gl/LgojXd97NT7tQ7z6A", rating:4.3, price: [200, 400], distance:450, photo: "https://lh5.googleusercontent.com/p/AF1QipMw-qK127StA_vgSvbgNCNFQuL5NFsgRsGY-dC0=w408-h307-k-no" },
{ name: "『 兩餐 』 두끼 韓國年糕火鍋吃到飽-中友店", url: "https://maps.app.goo.gl/BrD9nC2gfX4ESgTJ9", rating:4.2, price: [400, 600], distance:450, photo: "https://lh5.googleusercontent.com/p/AF1QipM2NxsMkKDvLbdn7sAx7fb3qIoqElSTPfT4S7CE=w408-h306-k-no" },
{ name: "一中街蛋包雞", url: "https://maps.app.goo.gl/9pRcjVLB7pwpYn3w9", rating:4.9, price: [1, 200], distance:300, photo: "https://lh5.googleusercontent.com/p/AF1QipMArBc-VxyGB5yNugYO1c2eeZgRHpalf39d_Cix=w408-h306-k-no" },
{ name: "春水堂 育才北店", url: "https://maps.app.goo.gl/PDyhBWGYNoeJ3yzV7", rating:4.0, price: [100, 200], distance:450, photo: "https://lh5.googleusercontent.com/p/AF1QipOo9ncg05IM6cQBgiWdyyx-cBLsb-L7lj3JsnEn=w408-h408-k-no" },
{ name: "日日利海盜飯糰", url: "https://maps.app.goo.gl/SNdm9g8nukBEg9LRA", rating:3.4, price: [1, 200], distance:160, photo: "https://lh5.googleusercontent.com/p/AF1QipOJ1vgspUhwGpYgfcn3J918ZhdarvM2Ij0MB8Dk=w408-h544-k-no" },
{ name: "討海人Andy Fisherman 馬來西亞創意料理", url: "https://maps.app.goo.gl/4Uui3CfXVfRM2z1P7", rating:4.6, price: [1, 200], distance:450, photo: "https://lh5.googleusercontent.com/p/AF1QipNI_lcGhV8jBmy7QxNZRDF7JdZl2jXxdAC1SM_y=w408-h544-k-no" },
{ name: "麥當勞-台中三民餐廳", url: "https://maps.app.goo.gl/6vURT6xHnuYjxAYC6", rating:3.8, price: [1, 200], distance:210, photo: "https://lh5.googleusercontent.com/p/AF1QipP_LIzMMZZLwSeg-z2y5VdlNNbrenFvnVdvUeym=w494-h370-p-k-no" },
{ name: "麥當勞-台中中友餐廳", url: "https://maps.app.goo.gl/b7afes6x4KUThneJ6", rating:3.6, price: [1, 200], distance:290, photo: "https://lh3.ggpht.com/p/AF1QipMi0JPxAg0Q21bay1xToZsWgrI-uDuH3y0h-TA=s1024" },
{ name: "七隻羊燒肉飯（育才派出所後方）", url: "https://maps.app.goo.gl/RDgyUt93jSBBkqR59", rating:4.7, price: [1, 200], distance:210, photo: "https://lh5.googleusercontent.com/p/AF1QipPKm82MiBAeek1vP5LCEpY5vb0qYKR4I90UQgLi=w519-h240-k-no" },
{ name: "大戸屋 台中中友店", url: "https://maps.app.goo.gl/po5V6jKfMhvczQ7LA", rating:4.2, price: [200, 400], distance:290, photo: "https://lh5.googleusercontent.com/p/AF1QipOew6hOo31tuYmRT-GTLbRAbb6eyqyd_H4peps8=w426-h240-k-no" },
{ name: "幸福小丸子", url: "https://maps.app.goo.gl/gaxkkhbnio2JWt3j9", rating:4.8, price: [1, 200], distance:350, photo: "https://lh5.googleusercontent.com/p/AF1QipPhBWkOcEUTlpO7YMHhg50MRPIjFHLF3Z-Pd3in=w408-h306-k-no" },
{ name: "好吃河粉", url: "https://maps.app.goo.gl/JB49NDQp7chMXXx96", rating:4.1, price: [1, 200], distance:260, photo: "https://lh5.googleusercontent.com/p/AF1QipNJVycvjPd2v8TMpWUalvPJRGOpQbxBxYr-XJuv=w408-h544-k-no" },
{ name: "明仁二代目一中旗艦店", url: "https://maps.app.goo.gl/7xuEcEuKSunwQMVo8", rating:4.7, price: [1, 200], distance:68, photo: "https://lh5.googleusercontent.com/p/AF1QipOpTfvI13UXTEC-iSwozaF3cZbJWM-oMIl9G0V1=w408-h306-k-no" },
{ name: "漁藏 台中旗艦店", url: "https://maps.app.goo.gl/b8ThvDBwUgNifonm6", rating:4.6, price: [1, 200], distance:350, photo: "https://lh5.googleusercontent.com/p/AF1QipPfIlDQyJs9Ei3aWwQBhluzZz4E2FA1h5jY6fNJ=w408-h326-k-no" },
];

// 定義顯示所有店家的函數
function displayStores(storeList) {
// 獲取店家列表的容器元素
const storeListContainer = document.getElementById("store-list");
storeListContainer.innerHTML = "";

// 將店家添加到列表中
storeList.forEach(store => {
const storeElement = document.createElement("li");
storeElement.classList.add("store-item");
storeElement.innerHTML = `
<div class="store-photo">
<img src="${store.photo}" alt="${store.name}">
</div>
<div>
<h3>${store.name}</h3>
<p>距離: ${store.distance} 公尺</p>
<p>評分: ${store.rating} 顆星</p>
<p>價格: ${Array.isArray(store.price) ? store.price.join('-') : store.price} 元</p>
</div>
<div class="store-link">
<a href="${store.url}" target="_blank">
<button class="map-button">
<img src="https://illustration-free.net/thumb/svg/ifn0949.svg" alt="">
</button>
</a>
</div>
`;
storeListContainer.appendChild(storeElement);
});
}

// 定義搜尋店家的函數
function searchStores() {
// 獲取篩選條件的值
const rating = document.getElementById("rating").value;
const priceRange = document.getElementById("priceRange").value;
const [minPrice, maxPrice] = priceRange.split('-').map(Number);
const distanceRange = document.getElementById("distance").value;
const [minDistance, maxDistance] = distanceRange.split('-').map(Number);

// 根據篩選條件過濾店家
const filteredStores = stores.filter(store => 
(rating == 0 || store.rating >= rating) &&
(Array.isArray(store.price) ?
store.price[0] <= maxPrice && store.price[1] >= minPrice :
store.price >= minPrice && store.price <= maxPrice) &&
(distanceRange == 0 || (store.distance >= minDistance && store.distance <= maxDistance))
);

// 顯示過濾後的店家
displayStores(filteredStores);
}

// 在頁面加載時顯示所有店家
window.onload = function() {
displayStores(stores);
};
