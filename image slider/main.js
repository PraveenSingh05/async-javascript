let imgArr = [
    "https://img.freepik.com/premium-photo/super-luxury-car-private-jet-business-class-airport_162386-746.jpg",
    "https://t3.ftcdn.net/jpg/06/02/80/36/360_F_602803624_JdakDe1VRq0QcRQtibIKU5jewlfPDSLA.jpg",
    "https://images.hindustantimes.com/auto/img/2021/06/26/1600x900/gg_1624691088289_1624691099453.jpg",
    "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/05/30/118050.jpg",
    "https://i.ytimg.com/vi/JndZXy9537Y/maxresdefault.jpg",
    "https://static1.topspeedimages.com/wordpress/wp-content/uploads/2022/11/2015-lamborghini-veneno-roadster.jpg",
    "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20140523012258_Untitled-1.jpg&w=700&q=90&c=1",
    "https://www.motortrend.com/uploads/2022/05/2023-Aston-Martin-V12-Vantage-front-three-quarter-3.jpg?fit=around%7C875:492",
    "https://hips.hearstapps.com/hmg-prod/images/2024-lexus-lc-004-6463a5b41d024.jpg?crop=0.691xw:0.919xh;0.153xw,0.0809xh&resize=768:*",
    "https://upload.wikimedia.org/wikipedia/commons/c/cb/Mercedes-Benz_W223_IMG_3970.jpg",
    "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/105969/exterior-left-front-three-quarter-11.jpeg?isig=0&q=80",
    "https://www.watchesandcrystals.com/cdn/shop/articles/why-is-there-an-obsession-with-a-mans-luxury-watch-737372.jpg?v=1663321560",
    "https://image.made-in-china.com/2f0j00QetkbNzFZSqY/Gift-Watches-Luminous-Luxury-Men-s-Fashion-Gold-Strap-Steel-Band-Casual-Quartz-Style-Watches-for-Men-Male-Gentleman.webp",
    "https://www.luxxu.net/blog/wp-content/uploads/2017/04/10-Luxury-Homes-That-Get-Outdoor-Living-Just-Right.jpg",
    "https://www.lux-review.com/wp-content/uploads/2019/04/Front-Cover-4.png",
    "https://www.idesignarch.com/wp-content/uploads/Environmentally-Friendly-Luxury-House_1.jpg",
    "https://w0.peakpx.com/wallpaper/920/123/HD-wallpaper-luxury-house-house-beautiful-sunset-trees-pool-paradise-heaven-nature-luxury-blue.jpg",
    "https://www.luxxu.net/blog/wp-content/uploads/2017/04/10-Luxury-Homes-That-Get-Outdoor-Living-Just-Right-3.jpg"
    ];
    
    let current = 0;
    
    let images = document.getElementById("img");
    
    images.setAttribute("src",imgArr[current]);
    
    let prev = document.getElementById("pre");
    let next = document.getElementById("next");
    
    let end = document.getElementById("end");
    let start = document.getElementById("start");
    
    let id;
    
    next.addEventListener("click",function() {
        current++;
        if (current >= imgArr.length) {
            current = 0;
    
        }
        images.setAttribute("src",imgArr[current]);
    });
    
    prev.addEventListener("click",() =>{
        current--;
        if (current < 0) {
            current = imgArr.length-1;
        }
        images.setAttribute("src",imgArr[current]);
    });
    
    start.addEventListener("click",() => {
      id = setInterval(() => {
        current++;
        if (current >= imgArr.length) {
            current = 0;
        }
        images.setAttribute("src",imgArr[current]);
     },1400)
    });
    
    end.addEventListener("click",() => {
       clearInterval(id);
         images.setAttribute("src",imgArr[current]);
       });
    