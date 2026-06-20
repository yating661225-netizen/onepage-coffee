
        // 監聽滾動事件，動態切換 navbar 樣式
        window.addEventListener('scroll', function () {
            const navbar = document.querySelector('.navbar');
            const topBtn = document.getElementById('backToTop');

            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // 當下滑超過 400px 時顯示 TOP 按鈕
            if (window.scrollY > 400) {
                topBtn.classList.add('show');
            } else {
                topBtn.classList.remove('show');
            }
        });

        //客戶好評區

        const testimonials = [

            {
                avatar: "https://randomuser.me/api/portraits/women/44.jpg",
                name: "林小姐 (28歲)",

                text:
                    "這間咖啡廳真的是週末放鬆的秘密基地！店裡的馬卡龍色系裝潢讓人感覺好療癒，而且直接線上訂位超級友善！"
            },

            {
                avatar: "https://randomuser.me/api/portraits/women/32.jpg",
                name: "張太太 (38歲)",

                text:
                    "平常工作壓力大，最喜歡來這裡點一杯手沖。喝得出來老闆在選豆和烘豆上的用心，是一間會想一直回訪的好店。"
            },

            {
                avatar: "https://randomuser.me/api/portraits/men/28.jpg",
                name: "王先生 (31歲)",

                text:
                    "不只是咖啡好喝，整個空間的光線和氛圍都讓人很舒服，每次來都有種慢下來生活的感覺。"
            },

            {
                avatar: "https://randomuser.me/api/portraits/women/68.jpg",
                name: "陳小姐 (26歲)",

                text:
                    "和朋友一起來聊天很舒服，甜點跟咖啡搭配得很剛好。"
            },

            {
                avatar: "https://randomuser.me/api/portraits/men/53.jpg",
                name: "李先生 (34歲)",

                text:
                    "已經回訪很多次，每次都有不同的驚喜。"
            }

        ];
        const container =
            document.getElementById("testimonial-list");
        function createTestimonial(item) {
            return `
                <div class="testimonial-card">
                    <img src="${item.avatar}" class="testimonial-avatar" />
                    <div class="quote-icon">“</div>
                    <p class="testimonial-text">
                        ${item.text}
                    </p>
                    <span class="testimonial-user">
                        — ${item.name}
                    </span>
                </div>
            `;
        }
        function renderTestimonials() {
            container.innerHTML = testimonials.map(createTestimonial).join("");
        }
        renderTestimonials();

        /* 左右滑動 */
        document
            .querySelector(".next")
            .onclick = () => {
                container.scrollBy({
                    left: 420,
                    behavior: "smooth"
                });
            };
        document
            .querySelector(".prev")
            .onclick = () => {
                container.scrollBy({
                    left: -420,
                    behavior: "smooth"
                });
            };


        // 處理電子報訂閱
        const newsletterForm = document.getElementById('newsletterForm');
        const subscribeToast = document.getElementById('subscribeToast');
        if (newsletterForm && subscribeToast) {
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(subscribeToast);
            newsletterForm.addEventListener('submit', function (e) {
                e.preventDefault(); // 防止頁面重新整理
                toastBootstrap.show(); // 顯示成功通知
                newsletterForm.reset(); // 清空輸入框
            });
        }

        // 菜單與輪播圖片聯動邏輯
        const menuGalleryData = {
            'coffee': [
                { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80', title: '精品手沖單品', desc: '品味產地最純粹的風土花果香氣。' },
                { src: 'https://images.unsplash.com/photo-1506372023823-741c83b836fe?auto=format&fit=crop&w=1200&q=80', title: '晨露小農拿鐵', desc: '細緻奶泡與濃縮咖啡的完美交融。' },
                { src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80', title: '低溫萃取冰滴', desc: '歷經 12 小時滴濾，醇厚不酸澀。' }
            ],
            'sparkling': [
                { src: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=80', title: '柚香金萱氣泡', desc: '茶香與果香在氣泡中綻放。' },
                { src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80', title: '野莓玫瑰氣泡', desc: '如寶石般璀璨的酸甜層次。' },
                { src: 'https://images.unsplash.com/photo-1543007630-9710e40813f9?auto=format&fit=crop&w=1200&q=80', title: '沁涼薄荷氣泡', desc: '掃除夏日燥熱的極致清爽。' }
            ],
            'milktea': [
                { src: 'https://images.unsplash.com/photo-1544787210-2211d64b367d?auto=format&fit=crop&w=1200&q=80', title: '皇家鍋煮奶茶', desc: '濃郁茶湯與醇厚鮮乳的經典。' },
                { src: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1200&q=80', title: '焦糖布蕾奶茶', desc: '鹹甜交織的厚實奶泡口感。' },
                { src: 'https://images.unsplash.com/photo-1594631252845-29fc4586c552?auto=format&fit=crop&w=1200&q=80', title: '靜岡抹茶歐蕾', desc: '選用正宗抹茶，回甘悠長。' }
            ],
            'dessert': [
                { src: '/img/Cheesecake500x500.png', title: '海鹽焦糖巴斯克', desc: '半熟滑順口感，手工焦糖餘韻。' },
                { src: 'https://images.unsplash.com/photo-1563729781172-c65116a5a07c?auto=format&fit=crop&w=1200&q=80', title: '經典提拉米蘇', desc: '馬斯卡彭與濃縮咖啡的完美結合。' },
                { src: 'https://images.unsplash.com/photo-1571115160359-541221191f6d?auto=format&fit=crop&w=1200&q=80', title: '季節限定水果塔', desc: '嚴選當季果實，酥脆塔皮口感。' }
            ]
        };

        // 監聽所有導覽頁籤切換
        const tabElements = document.querySelectorAll('.nav-link-custom');
        tabElements.forEach(tab => {
            tab.addEventListener('shown.bs.tab', function (event) {
                const category = event.target.id.replace('-tab', '');
                updateMenuGallery(category);
            });
        });

        function updateMenuGallery(category) {
            const data = menuGalleryData[category];
            const items = document.querySelectorAll('#menuGallery .carousel-item');

            items.forEach((item, index) => {
                const img = item.querySelector('img');
                const h5 = item.querySelector('h5');
                const p = item.querySelector('p');

                // 更新內容
                img.src = data[index].src;
                img.alt = data[index].title;
                h5.textContent = data[index].title;
                p.textContent = data[index].desc;
            });

            // 切換分類後自動跳回第一張圖片
            const carouselEl = document.getElementById('menuGallery');
            const carousel = bootstrap.Carousel.getInstance(carouselEl);
            carousel.to(0);
        }

        function openReserveModal() {
            const modal = new bootstrap.Modal(document.getElementById('reserveModal'));
            modal.show();
        }

        // brand-story 電影進場動畫
        const reveals = document.querySelectorAll(".reveal");
        const brandSection = document.querySelector(".brand-story-section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        reveals.forEach(el => el.classList.add("show"));
                    }
                });
            },
            {
                threshold: 0.35
            }
        );

observer.observe(brandSection);
