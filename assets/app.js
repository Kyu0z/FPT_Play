var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

// Header
const header = $('.header')
window.onscroll = function () {
    header.classList.toggle('black', window.scrollY > 0)
    // $('.back-to-top').classList.toggle('show', window.scrollY > screen.availHeight - header.offsetHeight)
}

// // Navbar
// const navBtn = $('.navbar_btn')
// const navOverlay = $('.navbar_overlay')
// const navBlock = $('.navbar_block')
// const navClose = $('.navbar_close')
// const navTitles = $$('.navbar_menu-item-title')

// navBtn.onclick = () => {
//     navOverlay.style.display = 'block'
//     navBlock.classList.add('active')

//     navClose.onclick = () => {
//         navOverlay.style.display = 'none'
//         navBlock.classList.remove('active')
//     }
//     navOverlay.onclick = () => {
//         navOverlay.style.display = 'none'
//         navBlock.classList.remove('active')
//     }
// }

// navTitles.forEach((navTitle) => {
//     navTitle.onclick = function () {
//         this.classList.toggle('active')
//     }
// })

// // Tab
// const tabs = $$('.header_tab-item');
// const panes = $$('.header_tab-pane');
// const tabActive = $('.header_tab-item.active');
// const tabLine  = $('.header_tabs .line');

// tabLine.style.width = tabActive.offsetWidth + 'px'
// tabLine.style.left = tabActive.offsetLeft + 'px'
// tabs.forEach((tab, index) => {
//     const pane = panes[index];
//     tab.onclick = function() {
//         $('.header_tab-item.active').classList.remove('active')
//         $('.header_tab-pane.active').classList.remove('active')
//         tabLine.style.width = this.offsetWidth + 'px'
//         tabLine.style.left = this.offsetLeft + 'px'
//         this.classList.add('active')
//         pane.classList.add('active')
//     }
// })

// // Search
// const search = $('.header_search')

// $('.header_search-input').onclick = () => {
//     search.classList.add('active')
//     $('.header_search-overlay').onclick = function() {
//         search.classList.remove('active')
//     }
// }

// $('.header_icon-search > .header_icon').onclick = () => {
//     search.classList.add('active')
//     $('.header_search-overlay').onclick = function() {
//         search.classList.remove('active')
//     }
// }

// Billboard
const billboardVideoWrap = $('.billboard_backdrop-video')
const billboardVideo = $('.billboard_backdrop-video > video')
const billboardControl = $('.billboard_content-control-btn')

// function billboardVideoPlay() {
//     billboardVideoWrap.style.display = 'block'
//     billboardControl.onclick = function () {
//         if($('.billboard_content-control-btn > i.mute.active')) {
//             billboardVideo.muted = '';
//             $('.billboard_content-control-btn > i.mute.active').classList.remove('active');
//             $('.billboard_content-control-btn > i.unmute').classList.add('active');
//         } else 
//         if($('.billboard_content-control-btn > i.unmute.active')) {
//             billboardVideo.muted = 'muted'
//             $('.billboard_content-control-btn > i.unmute.active').classList.remove('active');
//             $('.billboard_content-control-btn > i.mute').classList.add('active');
//         }
//     }
// }

// billboardVideo.onplay = billboardVideoPlay()


function billboardVideoPlay() {
    billboardVideoWrap.style.display = 'block';
    billboardControl.onclick = function() {
        if ($('.billboard_content-control-btn > i.mute.active')) {
            billboardVideo.muted = '';
            $('.billboard_content-control-btn > i.mute.active').classList.remove('active');
            $('.billboard_content-control-btn > i.unmute').classList.add('active');
        } else
        if ($('.billboard_content-control-btn > i.unmute.active')) {
            billboardVideo.muted = 'muted';
            $('.billboard_content-control-btn > i.unmute.active').classList.remove('active');
            $('.billboard_content-control-btn > i.mute').classList.add('active');
        }
    }
}
billboardVideo.onplay = billboardVideoPlay()

// billboardVideo.onended = function billboardVideoEnded() {
//     billboardVideoWrap.style.display = 'none'
//     if($('.billboard_content-control-btn > i.mute.active')) {
//         $('.billboard_content-control-btn > i.mute.active').classList.remove('active');
//     }
//     if($('.billboard_content-control-btn > i.unmute.active')) {
//         $('.billboard_content-control-btn > i.unmute.active').classList.remove('active');
//     }
//     $('.billboard_content-control-btn > i.reload').classList.add('active')
//     if($('.billboard_content-control-btn > i.reload.active')) {
//         billboardControl.onclick = function() {
//             $('.billboard_content-control-btn > i.reload.active').classList.remove('active')
//             $('.billboard_content-control-btn > i.unmute').classList.add('active');
//             billboardVideo.play()
//             billboardVideo.muted = ''
//             billboardVideoPlay()
//         }
//     }
// }

billboardVideo.onended = function billboardVideoEnded() {
    billboardVideoWrap.style.display = 'none';
    if ($('.billboard_content-control-btn > i.mute.active')) {
        $('.billboard_content-control-btn > i.mute.active').classList.remove('active')
    }
    if ($('.billboard_content-control-btn > i.unmute.active')) {
        $('.billboard_content-control-btn > i.unmute.active').classList.remove('active')
    }
    $('.billboard_content-control-btn > i.reload').classList.add('active')
    if ($('.billboard_content-control-btn > i.reload.active')) {
        billboardControl.onclick = function() {
            $('.billboard_content-control-btn > i.reload.active').classList.remove('active')
            $('.billboard_content-control-btn > i.unmute').classList.add('active')
            billboardVideo.play();
            billboardVideo.muted = '';
            billboardVideoPlay();
        }
    }
}


// Modal
// function joinVipModal() {
//     const registerVip = [$('.header_tagvip-btn'), $('.container_banner')]
//     const modal = $('#modal-join-vip')
//     const modalContainer = $('#modal-join-vip .modal-container')
//     const modalClose = $('#modal-join-vip .modal_close')
//     const modalPackages = $$('.modal_package')

//     function showModal() {
//         modal.classList.add('open')
//     }

//     function hideModal() {
//         modal.classList.remove('open')
//     }

//     for (const item of registerVip) {
//         item.onclick = showModal
//     }

//     modalClose.onclick = hideModal

//     modal.onclick = hideModal

//     modalContainer.onclick = function (event) {
//         event.stopPropagation()
//     }

//     modalPackages.forEach((modalPackage, index) => {
//         modalPackage.onclick = function () {
//             $('.modal_package.active').classList.remove('active')
//             this.classList.add('active')
//         }
//     })
// }
// setTimeout(joinVipModal, 2000)

// function downAppModal() {
//     const downBtn =$('.header_icon-wrap:nth-child(3) .header_icon')
//     const modal = $('#modal-down-app')
//     const modalContainer = $('#modal-down-app .modal-container')
//     const modalClose = $('#modal-down-app .modal_close')

//     function showModal() {
//         modal.classList.add('open')
//     }

//     function hideModal() {
//         modal.classList.remove('open')
//     }

//     downBtn.onclick = showModal

//     modalClose.onclick = hideModal

//     modal.onclick = hideModal

//     modalContainer.onclick = function (event) {
//         event.stopPropagation()
//     }
// }
// downAppModal()

// Movies List
const movieList = [  
    {
        id: '1',
        name: 'Con tàu Tianic',
        category: 'Lãng mạn',
        update: '195 phút',
        desc: 'Dựa trên vụ đắm tàu Titanic nổi tiếng, phim giành 11 giải oscar và 116 giải thưởng khác, Leonardo DiCaprio và Kate Winslet đã khắc họa thành công chuyện tình bi thương tuyệt đẹp của Rose và Jack.',
        imgMin: './assets/img/tianic.webp',
        imgMax: './assets/videos/1-1.jpg',
        video: './assets/img/1.mp4'
    }, 
    {
        id: '2',
        name: 'Captain America: Chiến Binh Mùa Đông',
        category: 'Hành động',
        update: '131 phút',
        desc: 'Trong phần này, Steve Rogers phải tìm cách hòa nhập vào thế giới hiện đại sau giấc ngủ đông 50 năm và kết hợp với Black Widow để chiến đấu chống lại một kẻ thù nguy hiểm ở Washington.',
        imgMin: './assets/videos/2.jpg',
        imgMax: './assets/videos/2-1.jpg',
        video: './assets/img/2.mp4'
    },
    {
        id: '3',
        name: 'Người Nhện Xa Nhà',
        category: 'Hành động, Giật gân, Viễn tưởng',
        update: '130 phút',
        desc: 'Peter cùng nhóm bạn có chuyến tham quan học tập tại Châu Âu. Thế nhưng, chưa kịp tận hưởng chuỗi ngày tuổi trẻ, định mệnh một lần nữa kêu gọi Peter khoác lên mình bộ giáp Nhện để bảo vệ chính nghĩa.',
        imgMin: './assets/videos/3.jpg',
        imgMax: './assets/videos/3-1.jpg',
        video: './assets/img/3.mp4'
    },
    {
        id: '4',
        name: 'Vùng Trời Tử Thần',
        category: 'Hành động',
        update: '92 phút',
        desc: 'Mắc kẹt trên một chuyến bay khi người phi công đã chết bất đắc kỳ tử do cơn đau tim, và người đồng hành duy nhất là người yêu cũ. Liệu Sara phải làm gì để thoát khỏi tình huống trớ trêu này?',
        imgMin: './assets/videos/4.jpg',
        imgMax: './assets/videos/4-1.jpg',
        video: './assets/img/4.mp4'
    },
    {
        id: '5',
        name: 'Avengers: Đế Chế Ultron',
        category: 'Hành động',
        update: '131 phút',
        desc: 'Ultron được Iron Man tạo ra để thay mình bảo vệ thế giới. Nhưng ý tưởng đó đã thất bại khi Ultron trở nên mất kiểm soát và biến thành một cỗ máy sát nhân máu lạnh.',
        imgMin: './assets/videos/5.jpg',
        imgMax: './assets/videos/5-1.jpg',
        video: './assets/img/5.mp4'
    },
    {
        id: '6',
        name: 'Trò Chơi Kỳ Ảo: Thăng Cấp',
        category: 'Hành động, Phiêu lưu, Phim hài',
        update: '124 phút',
        desc: 'Mang về doanh thu 780,7 triệu đô cùng với dàn sao đình đám: The Rock, Jack Black và Nick Jonas. Nhóm bạn buộc phải xâm nhập thế giới ảo lần nữa để giải cứu đồng đội bị mất tích.',
        imgMin: './assets/videos/6.jpg',
        imgMax: './assets/videos/6-1.jpg',
        video: './assets/img/6.mp4'
    },
    {
        id: '7',
        name: 'Ở Nhà Một Mình',
        category: 'Gia đình',
        update: '103 phút',
        imgMin: './assets/videos/7.jpg',
        imgMax: './assets/videos/7-1.jpg',
        video: './assets/img/Teaser_DanhVong.mp4'
    },
    {
        id: '8',
        name: 'Trốn Chạy',
        category: 'Kinh dị',
        update: '90 phút',
        imgMin: './assets/videos/8.jpg',
        imgMax: './assets/videos/8-1.jpg',
        video: './assets/img/Teaser_SuMenhCuoiCungCuaThienThan_chuanmoi.mp4'
    },
    {
        id: '9',
        name: 'Cruella',
        category: 'Tâm lý',
        update: '130 phút',
        imgMin: './assets/videos/9.jpg',
        imgMax: './assets/videos/9-1.jpg',
        video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
    },
    {
        id: '10',
        name: 'Tiên Hắc Ám 2',
        category: 'Gia đình',
        update: '99 phút',
        imgMin: './assets/videos/10.jpg',
        imgMax: './assets/videos/10-1.jpg',
        video: './assets/img/Teaser_Mouse_chuanmoi.mp4'
    },
    {
        id: '11',
        name: 'Hiểm Họa Rừng Chết',
        category: 'Tâm lý',
        update: '119 phút',
        imgMin: './assets/videos/11.jpg',
        imgMax: './assets/videos/11-1.jpg',
        video: './assets/img/Teaser_KhiEmDepNhat_moi.mp4'
    },
    {
        id: '12',
        name: 'Vệ Binh Dải Ngân Hà',
        category: 'Hành động, Viễn tưởng',
        update: '118 phút',
        imgMin: './assets/videos/12.jpg',
        imgMax: './assets/videos/12-1.jpg',
        video: './assets/img/Teaser_HotelDelLuna_2_moi.mp4'
    },
    {
        id: '13',
        name: 'Malèna',
        category: 'Tâm lý',
        update: '113 phút',
        desc: 'Vào năm 1940 khi Ý tham chiến, hai điều xảy ra với cậu bé 12 tuổi Renato: cậu bé có được chiếc xe đạp đầu tiên và cậu bé có cái nhìn đầu tiên về Malèna. Cô ấy là một người ngoài xinh đẹp, thầm lặng, đã chuyển đến thị trấn Sicilia này để ở với chồng của cô ấy, Nico. Anh ta nhanh chóng ra trận, để lại cô trước ánh mắt thèm muốn của những người đàn ông và những chiếc lưỡi sắc bén của phụ nữ. Trong vài năm tiếp theo, khi Renato dần trưởng thành, anh chứng kiến ​​Malèna đau khổ và chứng tỏ dũng khí của cô. Anh nhìn thấy sự cô đơn của cô, sau đó đau buồn khi Nico được thông báo đã chết, ảnh hưởng của sự vu khống lên mối quan hệ của cô với cha mình, sự nghèo khó và tìm kiếm công việc của cô, và sự sỉ nhục cuối cùng. Liệu Renato có học được lòng dũng cảm từ Malèna và đứng lên vì cô ấy?',
        imgMin: './assets/videos/14.jpg',
        imgMax: './assets/videos/14-1.jpg',
        video: './assets/img/13-2.mp4'
    },
    {
        id: '14',
        name: 'Atonement',
        category: 'Tình cảm',
        update: '122 phút',
        desc: 'Trong vai một nhà văn trẻ 13 tuổi, Briony Tallis đã thay đổi hoàn toàn cuộc đời khi cô buộc tội người yêu của chị gái mình về một tội ác mà anh ta không phạm phải.',
        imgMin: './assets/videos/15.jpg',
        imgMax: './assets/videos/15-1.jpg',
        video: './assets/img/14-1.mp4'
    },
    {
        id: '15',
        name: 'The dreamers',
        category: 'Tình cảm',
        update: '99 phút',
        desc: 'Một thanh niên người Mỹ du học ở Paris năm 1968 có tình bạn với một anh chị người Pháp. Lấy bối cảnh là cuộc bạo loạn của sinh viên Paris năm 1968.',
        imgMin: './assets/videos/16.jpg',
        imgMax: './assets/videos/16-1.jpg',
        video: './assets/img/15-1.mp4'
    },
    {
        id: '16',
        name: 'Great Gatsby',
        category: 'Chính kịch',
        update: '140 phút',
        desc: 'Một bản chuyển thể từ tiểu thuyết lấy bối cảnh Long Island của F. Scott Fitzgerald, nơi người Midwesterner Nick Carraway bị thu hút vào thế giới xa hoa của người hàng xóm Jay Gatsby. Tuy nhiên, chẳng bao lâu nữa, Carraway sẽ nhìn thấu những vết nứt của sự tồn tại theo trường phái tân cổ điển của Gatsby, nơi mà nỗi ám ảnh, sự điên rồ và bi kịch đang chờ đợi.',
        imgMin: './assets/videos/17.jpg',
        imgMax: './assets/videos/17-1.jpg',
        video: './assets/img/16-1.mp4'
    },
    {
        id: '17',
        name: 'The Lover',
        category: 'Tâm lý, Tình cảm',
        update: '115 phút',
        desc: 'Một thiếu nữ nghèo người Pháp tham gia vào một cuộc tình bất chính với một người thừa kế giàu có người Hoa vào những năm 1920 ở Sài Gòn. Lần đầu tiên trong cuộc đời trẻ, cô có quyền kiểm soát, và cô sử dụng nó một cách khéo léo trước người tình bị vây hãm của mình trong suốt một loạt các cuộc gặp gỡ bí mật và những cuộc chạm trán khốc liệt.',
        imgMin: './assets/videos/18.jpg',
        imgMax: './assets/videos/18-1.jpg',
        video: './assets/img/17-1.mp4'
    },
    {
        id: '18',
        name: 'Anna Karenina',
        category: 'Lãng mạn, Tình yêu',
        update: '129 phút',
        desc: 'Bị mắc kẹt trong một cuộc hôn nhân không tình yêu, cô gái quý tộc Anna Karenina bước vào một cuộc tình thay đổi cuộc đời với Bá tước Vronsky giàu có.',
        imgMin: './assets/videos/19-1.jpg',
        imgMax: './assets/img/19.jpg',
        video: './assets/img/18-1.mp4'
    },
    {
        id: '19',
        name: 'Sin city',
        category: 'Hành động',
        update: '141 phút',
        desc: 'Chào mừng đến với Sin City. Thị trấn này vẫy gọi những kẻ cứng rắn, tham nhũng, tan nát. Một số người gọi nó là bóng tối… Cuồng nhiệt. Sau đó, có những người gọi nó là nhà - Cảnh sát uốn éo, những tên khốn gợi cảm, những cảnh giác tuyệt vọng. Một số đang tìm cách trả thù, những người khác ham muốn sự cứu chuộc, và sau đó có những người hy vọng một chút của cả hai. Một vũ trụ gồm những anh hùng bất đắc dĩ và bất đắc dĩ vẫn cố gắng làm điều đúng đắn trong một thành phố từ chối quan tâm.',
        imgMin: './assets/videos/20.jpg',
        imgMax: './assets/videos/20-1.jpg',
        video: './assets/img/19-1.mp4'
    },
    {
        id: '20',
        name: 'Sin City: A Dame to Kill For (2014)',
        category: 'Hành động',
        update: '95 phút',
        imgMin: './assets/videos/21.jpg',
        imgMax: './assets/videos/21-1.jpg',
        video: './assets/img/20-1.mp4'
    },
    {
        id: '21',
        name: 'Cracks',
        category: 'Tình yêu, Viễn tưởng',
        update: '104 phút',
        desc: 'Cơn ghen bùng lên sau khi hiệu trưởng của một trường nội trú dành cho nữ sinh ưu tú bị ám ảnh bởi một học sinh mới.',
        imgMin: './assets/videos/13.jpg',
        imgMax: './assets/videos/13-1.jpg',
        video: './assets/img/21-1.mp4'
    },
    {
        id: '22',
        name: 'La pianiste',
        category: 'Dramma',
        update: '131 phút',
        imgMin: './assets/videos/23.jpg',
        imgMax: './assets/videos/23-1.jpg',
        video: './assets/img/22-1.mp4'
    },
    {
        id: '23',
        name: 'Nàng Lolita',
        category: 'Tình cảm',
        update: '140 phút',
        desc: 'Xuất bản vào năm 1955, Lolita của nhà văn Vladimir Nabokov cho đến nay vẫn là cuốn tiểu thuyết được nhiều độc giả tìm kiếm. Sức hút của tác phẩm này không chỉ ở sự bất thường vĩ đại của mối tình Lolita - Humbert Humbert mà còn vì cách viết phức tạp nhưng hấp dẫn của Nabokov.Chuyện tình trong Lolita đã gây ra bao tranh cãi, làm tổn hao tâm lực bàn luận của tất cả giới phân tâm học, đạo đức hay những kẻ tò mò về những câu chuyện gợi dục thuần túy. Đọc Lolita khiến độc giả luôn phải tập trung cao độ qua từng câu, chữ và đến khi kết thúc, người đọc sẽ cảm thấy như phiêu linh theo trí tưởng tượng phong phú mà tác giả thể hiện trong tác phẩm.Hình ảnh đặc trưng của nàng Lolita.7 năm sau khi xuất bản, ...',
        imgMin: './assets/img/lolita.jpg',
        imgMax: './assets/videos/24-1.jpg',
        video: './assets/img/23.mp4'
    },
    {
        id: '24',
        name: 'Nghịch Thiên Kiếm Thần',
        category: '动态漫画',
        update: '78 tập',
        imgMin: './assets/img/carousel-img24.webp',
        imgMax: './assets/img/carousel-img24-large.webp',
        video: './assets/img/Teaser_Mouse_chuanmoi.mp4'
    },
    {
        id: '25',
        name: 'Hóa Ra Em Rất Yêu Anh',
        category: 'Thanh xuân, Thành thị, Tình yêu',
        update: '24 tập',
        imgMin: './assets/img/carousel-img25.webp',
        imgMax: './assets/img/carousel-img25-large.webp',
        video: './assets/img/Teaser_KhiEmDepNhat_moi.mp4'
    },
    {
        id: '26',
        name: 'JUJUTSU KAISEN',
        category: 'Hoạt hình',
        update: '24 tập',
        imgMin: './assets/img/carousel-img26.webp',
        imgMax: './assets/img/carousel-img26-large.webp',
        video: './assets/img/Teaser_HotelDelLuna_2_moi.mp4'
    },
    {
        id: '27',
        name: 'Như Ý Phương Phi',
        category: 'Thanh xuân, Tình yêu, Cổ trang',
        update: '44 tập',
        imgMin: './assets/img/carousel-img27.webp',
        imgMax: './assets/img/carousel-img27-large.webp',
        video: './assets/img/Teaser_Penthouse3_ep14.mp4'
    },
    {
        id: '28',
        name: 'Chiến Cơ Cảnh Giới',
        category: 'Hoạt hình',
        update: 'Cập nhật 5 tập',
        imgMin: './assets/img/carousel-img28.webp',
        imgMax: './assets/img/carousel-img28-large.webp',
        video: './assets/img/Teaser_DanhVong.mp4'
    },
    {
        id: '29',
        name: 'Thủy Thủ Mặt Trăng Pha Lê',
        category: 'Hoạt hình',
        update: '39 tập',
        imgMin: './assets/img/carousel-img29.webp',
        imgMax: './assets/img/carousel-img29-large.webp',
        video: './assets/img/Teaser_SuMenhCuoiCungCuaThienThan_chuanmoi.mp4'
    },
    {
        id: '30',
        name: 'Vú Em Tiên Tôn Đi Ở Rể',
        category: '动态漫画',
        update: 'Cập nhật 71 tập',
        imgMin: './assets/img/carousel-img30.webp',
        imgMax: './assets/img/carousel-img30-large.webp',
        video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
    },
    {
        id: '31',
        name: 'Thiên Vũ Kỷ',
        category: 'Thần tượng, Thành thị, Tình yêu',
        update: '12 tập',
        imgMin: './assets/img/carousel-img31.webp',
        imgMax: './assets/img/carousel-img31-large.webp',
        video: './assets/img/Teaser_Mouse_chuanmoi.mp4'
    },
    {
        id: '32',
        name: 'Ở Rể',
        category: 'Tình yêu, Cổ trang, Viễn tưởng',
        update: '35 tập',
        imgMin: './assets/img/carousel-img32.webp',
        imgMax: './assets/img/carousel-img32-large.webp',
        video: './assets/img/Teaser_KhiEmDepNhat_moi.mp4'
    },
    {
        id: '33',
        name: 'Bạn Cùng Phòng Của Tôi Là Gumiho',
        category: 'Giật gân, Viễn tưởng',
        update: 'Cập nhật 4 tập',
        imgMin: './assets/img/carousel-img33.webp',
        imgMax: './assets/img/carousel-img33-large.webp',
        video: './assets/img/Teaser_HotelDelLuna_2_moi.mp4'
    },
    {
        id: '34',
        name: 'Cửa Hàng Tiện Lợi Saet Byul',
        category: 'Tình yêu, Chiến tranh',
        update: '20 tập',
        imgMin: './assets/img/carousel-img34.webp',
        imgMax: './assets/img/carousel-img34-large.webp',
        video: './assets/img/Teaser_Penthouse3_ep14.mp4'
    },
    {
        id: '35',
        name: 'Khuynh Thế Cẩm Lân Cốc Vũ Lai',
        category: 'Tình yêu, Cổ trang',
        update: '24 tập',
        imgMin: './assets/img/carousel-img35.webp',
        imgMax: './assets/img/carousel-img35-large.webp',
        video: './assets/img/Teaser_DanhVong.mp4'
    },
    {
        id: '36',
        name: 'Làm Trái Tim Em Mỉm Cười',
        category: 'Tội phạm, Phim hài',
        update: '20 tập',
        imgMin: './assets/img/carousel-img36.webp',
        imgMax: './assets/img/carousel-img36-large.webp',
        video: './assets/img/Teaser_SuMenhCuoiCungCuaThienThan_chuanmoi.mp4'
    },
    {
        id: '37',
        name: 'Chuyến Tàu Sinh Tử',
        category: 'Thanh xuân, Tình yêu, Cổ trang',
        update: '1 tập',
        imgMin: './assets/img/carousel-img37.webp',
        imgMax: './assets/img/carousel-img37-large.webp',
        video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
    },
    {
        id: '38',
        name: 'Truyền Thuyết Về Ác Nhân',
        category: 'Thành thị, Tình yêu',
        update: '30 tập',
        imgMin: './assets/img/carousel-img38.webp',
        imgMax: './assets/img/carousel-img38-large.webp',
        video: './assets/img/Teaser_Mouse_chuanmoi.mp4'
    },
    {
        id: '39',
        name: 'Ác Quỷ Đối Đầu',
        category: 'Thần tượng, Thành thị, Tình yêu',
        update: '16 tập',
        imgMin: './assets/img/carousel-img39.webp',
        imgMax: './assets/img/carousel-img39-large.webp',
        video: './assets/img/Teaser_KhiEmDepNhat_moi.mp4'
    },
    {
        id: '40',
        name: 'Sứ Giả Của Chúa',
        category: 'Thanh xuân, Thành thị, Tình yêu',
        update: '24 tập',
        imgMin: './assets/img/carousel-img40.webp',
        imgMax: './assets/img/carousel-img40-large.webp',
        video: './assets/img/Teaser_HotelDelLuna_2_moi.mp4'
    },
    {
        id: '41',
        name: 'Nhiệm Vụ Khả Thi',
        category: 'Tình yêu, Chiến tranh',
        update: '20 tập',
        imgMin: './assets/img/carousel-img41.webp',
        imgMax: './assets/img/carousel-img41-large.webp',
        video: './assets/img/Teaser_Penthouse3_ep14.mp4'
    },
    {
        id: '42',
        name: 'Nhân Đôi Tình Yêu',
        category: 'Tình yêu, Cổ trang',
        update: '24 tập',
        imgMin: './assets/img/carousel-img42.webp',
        imgMax: './assets/img/carousel-img42-large.webp',
        video: './assets/img/Teaser_DanhVong.mp4'
    },
    {
        id: '43',
        name: 'Đối Tác Đáng Ngờ',
        category: 'Tội phạm, Phim hài',
        update: '20 tập',
        imgMin: './assets/img/carousel-img6.webp',
        imgMax: './assets/img/carousel-img6-large.webp',
        video: './assets/img/Teaser_Penthouse3_ep14.mp4'
    },
    {
        id: '44',
        name: 'Các tế bào của Yumi',
        category: 'Thần tượng, Thành thị, Tình yêu',
        update: '12 tập',
        imgMin: './assets/img/carousel-img1.webp',
        imgMax: './assets/img/carousel-img1-large.webp',
        video: './assets/img/Teaser_SuMenhCuoiCungCuaThienThan_chuanmoi.mp4'
    },
    {
        id: '45',
        name: 'Huynh Đệ Thân Mến Của Ta',
        category: 'Tình yêu, Cổ trang, Viễn tưởng',
        update: '35 tập',
        imgMin: './assets/img/carousel-img2.webp',
        imgMax: './assets/img/carousel-img2-large.webp',
        video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
    },
    {
        id: '46',
        name: 'Bí Ẩn Núi Jiri (Jirisan)',
        category: 'Giật gân, Viễn tưởng',
        update: 'Cập nhật 4 tập',
        imgMin: './assets/img/carousel-img3.webp',
        imgMax: './assets/img/carousel-img3-large.webp',
        video: './assets/img/Teaser_Mouse_chuanmoi.mp4'
    },
    {
        id: '47',
        name: 'Bác Sĩ Xứ Lạ',
        category: 'Tình yêu, Chiến tranh',
        update: '20 tập',
        imgMin: './assets/img/carousel-img4.webp',
        imgMax: './assets/img/carousel-img4-large.webp',
        video: './assets/img/Teaser_KhiEmDepNhat_moi.mp4'
    },
    {
        id: '48',
        name: 'Trường An Như Cố',
        category: 'Tình yêu, Cổ trang',
        update: '24 tập',
        imgMin: './assets/img/carousel-img5.webp',
        imgMax: './assets/img/carousel-img5-large.webp',
        video: './assets/img/Teaser_HotelDelLuna_2_moi.mp4'
    },
    {
        id: '49',
        name: 'SupermodelMe Revolution (Tôi Là Siêu Mẫu Châu Á 2021)',
        category: 'Show',
        update: 'Cập nhật 4 tập',
        imgMin: './assets/img/carousel-img7.webp',
        imgMax: './assets/img/carousel-img7-large.webp',
        video: './assets/img/Teaser_DanhVong.mp4'
    },
    {
        id: '50',
        name: 'Mơ Gặp Sư Tử',
        category: 'Thành thị, Tình yêu',
        update: '30 tập',
        imgMin: './assets/img/carousel-img8.webp',
        imgMax: './assets/img/carousel-img8-large.webp',
        video: './assets/img/Teaser_SuMenhCuoiCungCuaThienThan_chuanmoi.mp4'
    },
    {
        id: '51',
        name: 'Bảng Xếp Hạng Quốc Vương',
        category: 'Hoạt hình',
        update: 'Cập nhật 4 tập',
        imgMin: './assets/img/carousel-img9.webp',
        imgMax: './assets/img/carousel-img9-large.webp',
        video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
    },
    {
        id: '52',
        name: 'Boruto: Naruto hậu sinh khả úy',
        category: 'Thanh xuân, Tình yêu, Cổ trang',
        update: 'Cập nhật 222 tập',
        imgMin: './assets/img/carousel-img10.webp',
        imgMax: './assets/img/carousel-img10-large.webp',
        video: './assets/img/Teaser_Mouse_chuanmoi.mp4'
    },
    {
        id: '53',
        name: 'Xuân Thu Phong Thần',
        category: 'Hoạt hình',
        update: 'Cập nhật 21 tập',
        imgMin: './assets/img/carousel-img11.webp',
        imgMax: './assets/img/carousel-img11-large.webp',
        video: './assets/img/Teaser_KhiEmDepNhat_moi.mp4'
    },
    {
        id: '54',
        name: 'Trường Quân Đội Liệt Hỏa ( Học Viện Quân Sự Liệt Hỏa )',
        category: 'Thanh xuân, Tình yêu',
        update: '48 tập',
        imgMin: './assets/img/carousel-img12.webp',
        imgMax: './assets/img/carousel-img12-large.webp',
        video: './assets/img/Teaser_HotelDelLuna_2_moi.mp4'
    },
    {
        id: '55',
        name: 'Thanh Gươm Diệt Quỷ·Bản điện ảnh',
        category: '',
        update: '1 tập',
        imgMin: './assets/img/carousel-img13.webp',
        imgMax: './assets/img/carousel-img13-large.webp',
        video: './assets/img/Teaser_Penthouse3_ep14.mp4'
    },
    {
        id: '56',
        name: 'Mouse Kẻ Săn Người',
        category: 'Tội phạm, Hành động',
        update: '20 tập',
        imgMin: './assets/img/carousel-img14.webp',
        imgMax: './assets/img/carousel-img14-large.webp',
        video: './assets/img/Teaser_DanhVong.mp4'
    },
    {
        id: '57',
        name: 'One Piece (Đảo Hải Tặc)',
        category: 'Hoạt hình',
        update: '997 tập',
        imgMin: './assets/img/carousel-img15.webp',
        imgMax: './assets/img/carousel-img15-large.webp',
        video: './assets/img/Teaser_SuMenhCuoiCungCuaThienThan_chuanmoi.mp4'
    },
    {
        id: '58',
        name: 'Hắc Quản Gia - Phần 1',
        category: 'Hoạt hình',
        update: '25 tập',
        imgMin: './assets/img/carousel-img16.webp',
        imgMax: './assets/img/carousel-img16-large.webp',
        video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
    },
    {
        id: '59',
        name: 'Bảy Viên Ngọc Rồng Siêu Cấp',
        category: 'Hoạt hình',
        update: '131 tập',
        imgMin: './assets/img/carousel-img17.webp',
        imgMax: './assets/img/carousel-img17-large.webp',
        video: './assets/img/Teaser_Mouse_chuanmoi.mp4'
    },
    {
        id: '60',
        name: 'Thời Gian Lương Thần Mỹ Cảnh',
        category: 'Thần tượng, Thành thị, Tình yêu',
        update: '31 tập',
        imgMin: './assets/img/carousel-img18.webp',
        imgMax: './assets/img/carousel-img18-large.webp',
        video: './assets/img/Teaser_KhiEmDepNhat_moi.mp4'
    },
    {
        id: '61',
        name: 'Thanh Gươm Diệt Quỷ: Chuyến Tàu Vô Tận (Bản TV)',
        category: 'Hoạt hình',
        update: 'Cập nhật 3 tập',
        imgMin: './assets/img/carousel-img19.webp',
        imgMax: './assets/img/carousel-img19-large.webp',
        video: './assets/img/Teaser_HotelDelLuna_2_moi.mp4'
    },
    {
        id: '62',
        name: 'Bạn Trai Tôi Là Hồ Ly ( Cửu Vĩ Hồ Truyện )',
        category: 'Thần tượng, Thành thị, Tình yêu',
        update: '16 tập',
        imgMin: './assets/img/carousel-img20.webp',
        imgMax: './assets/img/carousel-img20-large.webp',
        video: './assets/img/Teaser_Penthouse3_ep14.mp4'
    },
    {
        id: '63',
        name: 'Cẩm Y Chi Hạ',
        category: 'Tình yêu, Viễn tưởng',
        update: '55 tập',
        imgMin: './assets/img/carousel-img21.webp',
        imgMax: './assets/img/carousel-img21-large.webp',
        video: './assets/img/Teaser_DanhVong.mp4'
    },
    {
        id: '64',
        name: 'Cẩm Tâm Tựa Ngọc',
        category: 'Tình yêu, Cổ trang',
        update: '45 tập',
        imgMin: './assets/img/carousel-img22.webp',
        imgMax: './assets/img/carousel-img22-large.webp',
        video: './assets/img/Teaser_SuMenhCuoiCungCuaThienThan_chuanmoi.mp4'
    },
    {
        id: '65',
        name: 'Thanh Xuân Có Bạn Mùa 2',
        category: 'Show',
        update: '24 tập',
        imgMin: './assets/img/carousel-img23.webp',
        imgMax: './assets/img/carousel-img23-large.webp',
        video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
    },
    {
        id: '66',
        name: 'Harry Potter Và Hòn Đá Phù Thủy',
        category: 'Phiêu lưu, gia đình',
        update: '146 phút',
        imgMin: 'https://static.fptplay.net/static/img/share/video/hbo/011051H0-portrait.jpg?w=282&mode=scale&fmt=webp',
        imgMax: 'https://vanphongphamsg.vn/xem-phim-harry-potter-tap-1-vietsub/imager_73775.jpg',
        video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
    },
    {
        id: '67',
        name: 'Harry Potter Và Căn Phòng Bí Mật',
        category: 'Phiêu lưu, gia đình',
        update: '154 phút',
        imgMin: 'https://static.fptplay.net/static/img/share/video/hbo/010798H0-portrait.jpg?w=282&mode=scale&fmt=webp',
        imgMax: 'https://i.pinimg.com/originals/71/12/5b/71125b204fce603b4becd46b4cbeaa54.jpg',
        video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
    },
    {
        id: '68',
        name: 'Harry Potter Và Tù Nhân Azkaban',
        category: 'Phiêu lưu, gia đình',
        update: '141 phút',
        imgMin: 'https://static.fptplay.net/static/img/share/video/hbo/012210H0-portrait.jpg?w=282&mode=scale&fmt=webp',
        imgMax: 'https://anhhungxadieu.vn/harry-potter-3-thuyet-minh/imager_13566.jpg',
        video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
    },
    {
        id: '69',
        name: 'Harry Potter Và Chiếc Cốc Lửa',
        category: 'Phiêu lưu, gia đình',
        update: '150 phút',
        imgMin: 'https://static.fptplay.net/static/img/share/video/hbo/016106H0-portrait-fix.jpg?w=282&mode=scale&fmt=webp',
        imgMax: 'https://i.pinimg.com/originals/38/f6/75/38f6756b7628473546f423dfd85e9694.jpg',
        video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
    },
    {
        id: '70',
        name: 'Harry Potter Và Hội Phượng Hoàng',
        category: 'Phiêu lưu, gia đình',
        update: '132 phút',
        imgMin: 'https://static.fptplay.net/static/img/share/video/hbo/020137H0-portrait.jpg?w=282&mode=scale&fmt=webp',
        imgMax: 'https://fandom.vn/wp-content/uploads/2019/06/harry-potter-and-the-order-of-the-phoenix-1.jpeg',
        video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
    },
    {
        id: '71',
        name: 'Harry Potter Và Hoàng Tử Lai',
        category: 'Phiêu lưu, gia đình',
        update: '147 phút',
        imgMin: 'https://static.fptplay.net/static/img/share/video/hbo/010686H1-portrait.jpg?w=282&mode=scale&fmt=webp',
        imgMax: 'https://mynhanke.mobi/phim-harry-potter-tap-6-thuyet-minh-tieng-viet/imager_9049.jpg',
        video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
    },
    {
        id: '72',
        name: 'Harry Potter Và Bảo Bối Tử Thần - Phần 1',
        category: 'Hành động, Phiêu lưu',
        update: '140 phút',
        imgMin: 'https://static.fptplay.net/static/img/share/video/hbo/012904L0-portrait.jpg?w=282&mode=scale&fmt=webp',
        imgMax: 'https://hdvietsub.net/wp-content/uploads/2016/05/595568-harry.potter_.and_.the_.deathly_.hallows_.part_.1_34021358232588_.jpg',
        video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
    },
    {
        id: '73',
        name: 'Harry Potter Và Bảo Bối Tử Thần - Phần 2',
        category: 'Hành động, Phiêu lưu',
        update: '150 phút',
        imgMin: 'https://static.fptplay.net/static/img/share/video/20_11_2021/023544l1-portrait20-11-2021_18g22-22.jpg?w=282&mode=scale&fmt=webp',
        imgMax: 'https://c4.wallpaperflare.com/wallpaper/242/533/118/harry-potter-in-deathly-hallows-part-2-harry-potter-deathly-hollows-7-part-2-poster-wallpaper-preview.jpg',
        video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
    },
    {
        id: '74',
        name: 'The Conjuring 2',
        category: 'Kinh dị',
        update: '128 phút',
        imgMin: 'https://static.fptplay.net/static/img/share/video/hbo/020534L1-portrait.jpg?w=282&mode=scale&fmt=webp',
        imgMax: 'https://hanoimoi.com.vn/Uploads/dieulinh/2016/6/17/1.jpg',
        video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
    },
    {
        id: '75',
        name: 'Wonder Woman 1984',
        category: 'Hành động, Giả tưởng',
        update: '144 phút',
        imgMin: 'https://static.fptplay.net/static/img/share/video/hbo/030581H0-portrait.jpg?w=282&mode=scale&fmt=webp',
        imgMax: 'https://www.gocdienanh.com/wp-content/uploads/2020/12/Phim-wonder-women-1984-ww84-2.jpg',
        video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
    },
    {
        id: '76',
        name: 'Max Điên: Con Đường Tử Thần',
        category: 'Hành động',
        update: '114 phút',
        imgMin: 'https://static.fptplay.net/static/img/share/video/hbo/019517L1-portrait.jpg?w=282&mode=scale',
        imgMax: 'https://lh3.googleusercontent.com/proxy/mBqYh1WS3mPgDurIjy_S7JSFUDU2-skkJnIgxvYQDhb_Umo8UpH15bPTnU7W6HBiicfgDRGM253hD7DyFZI5gs_V0G5WViP8rwQbhBY21AbMlVWV2YdU7zg8Rwrru929jIY',
        video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
    },
    {
        id: '77',
        name: 'Thảm Họa Thiên Thạch',
        category: 'Hành động, Tâm lý',
        update: '115 phút',
        imgMin: 'https://static.fptplay.net/static/img/share/video/hbo/032237A1-portrait.jpg?w=282&mode=scale',
        imgMax: 'https://thegioidienanh.vn/stores/news_dataimages/thanhtan/092020/10/14/in_article/5139_image009-4.jpg',
        video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
    }
]

// Carousel 
function sliderStyle1(options) {
    const carouselMove = $(options.carouselMoveSelector)
    const carouselWidth = $(options.carouselSelector).offsetWidth
    const prevBtn = $(options.prevBtnSelector)
    const nextBtn = $(options.nextBtnSelector)
    prevBtn.style.display = 'none'

    function render() {
        const htmls = options.movies.map((movie, index) => {
            return `
                <div id="${movie.id}" class="carousel_item col l-2 m-3 c-4">
                    <div class="carousel_item-images">
                        <div class="carousel_img-min">
                            <img src="${movie.imgMin}" alt="">
                            <div class="carousel_img-min-overlay carousel_img-overlay">
                                <span>${movie.update}</span>
                            </div>
                        </div>
                        <div class="carousel_img-max">
                            <img src="${movie.imgMax}" alt="">
                            <div class="carousel_img-max-overlay carousel_img-overlay">
                                <span><span>Thể loại:</span> ${movie.category}</span>
                                <div class="btns-play-and-add">
                                    <span class="btn-play">
                                        <i class="fas fa-play"></i>
                                    </span>
                                    <span class="btn-add">
                                        <i class="far fa-bookmark">
                                            <i class="fas fa-plus"></i>
                                        </i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel_item-title">
                        <p>${movie.name}</p>
                    </div>
                </div>
            `
        })
        carouselMove.innerHTML = htmls.join('')
    }
    render()

    const carouselItems = $$(options.carouselItemsSelector)
    const carouselMoveQuantity = Math.round(carouselItems.length/(carouselMove.getBoundingClientRect().width / carouselItems[0].getBoundingClientRect().width))
    var l = 0
    nextBtn.onclick = () => {
        prevBtn.style.display = 'block'
        l++;
        if(l < carouselMoveQuantity) {
            carouselMove.style.transform = `translateX(calc(0px - ${carouselWidth}px * ${l}))`
            if(l == carouselMoveQuantity - 1) {
                nextBtn.style.display = 'none'
            }
        } else {
            l = carouselMoveQuantity - 1
            nextBtn.style.display = 'none'
        }
    }

    prevBtn.onclick = () => {
        nextBtn.style.display = 'block'
        l--;
        if(l>=0) {
            carouselMove.style.transform = `translateX(calc(0px - ${carouselWidth}px * ${l}))`
            if(l==0) {
                prevBtn.style.display = 'none'
            }
        } else {
            l=0
            prevBtn.style.display = 'none'
        }
    }

    

    for (let i = 1; i <= carouselItems.length; i++) {
        if((i + 1) % 6 == 0) {
            carouselItems[i].onmouseover = function () {
                carouselItems[i].style.transform = `translateX(-${carouselItems[i].offsetWidth / 2}px)`
                carouselItems[i-1].style.opacity = '0'
            }
            carouselItems[i].onmouseout = function () {
                carouselItems[i].style.transform = 'translateX(0)'
                carouselItems[i-1].style.opacity = '1'
            }
        }
    }

}

sliderStyle1({
    movies: [
        movieList[0],
        // movieList[101],
        movieList[1],
        movieList[2],
        movieList[3],
        movieList[4],
        movieList[5],
        movieList[6],
        movieList[7],
        movieList[8],
        movieList[9],
        movieList[10],
        movieList[11],
        movieList[12],
        movieList[13],
        movieList[14],
        movieList[15],
        movieList[16],
        movieList[17],
        movieList[18],
        movieList[19],
        movieList[20],
        movieList[21],
        movieList[64],
        movieList[41],
        movieList[42],
        movieList[43],
        movieList[44],
        movieList[45],
        movieList[46],
        movieList[47]
        // movieList[30]
    ],
    carouselSelector : '#carousel-1',
    carouselMoveSelector : '#carousel-1 .carousel-move',
    prevBtnSelector : '#carousel-1 .carousel_btn-prev',
    nextBtnSelector : '#carousel-1 .carousel_btn-next',
    carouselItemsSelector: '#carousel-1 .carousel_item'
})

sliderStyle1({
    movies: [
        movieList[20],
        movieList[12],
        movieList[13],
        movieList[14],
        movieList[15],
        movieList[16],
        movieList[17],
        movieList[18],  
        movieList[19],
        movieList[0],
        movieList[21],
        movieList[22]
        // movieList[22]
        // movieList[4],
        // movieList[5],
        // movieList[6],
        // movieList[8],
        // movieList[9],
        // movieList[10],
        // movieList[12],
        // movieList[14],
        // movieList[15],
        // movieList[16],
        // movieList[18],
        // movieList[19],
        // movieList[22],
        // movieList[23],
        // movieList[24],
        // movieList[25],
        // movieList[26],
        // movieList[27],
        // movieList[28],
        // movieList[29]
    ],
    carouselSelector : '#carousel-2',
    carouselMoveSelector : '#carousel-2 .carousel-move',
    prevBtnSelector : '#carousel-2 .carousel_btn-prev',
    nextBtnSelector : '#carousel-2 .carousel_btn-next',
    carouselItemsSelector: '#carousel-2 .carousel_item'
})

sliderStyle1({
    movies: [   
        movieList[65],
        movieList[66],
        movieList[67],
        movieList[68],
        movieList[69],
        movieList[70],
        movieList[71],  
        movieList[72],
        movieList[73],
        movieList[74],
        movieList[75],
        movieList[76]
        // movieList[40],
        // movieList[50],
        // movieList[59],
        // movieList[63],
        // movieList[62],
        // movieList[61],
        // movieList[57],
        // movieList[15],
        // movieList[16],
        // movieList[17],
        // movieList[18],
        // movieList[23],
        // movieList[24],
        // movieList[25],
        // movieList[26],
        // movieList[27],
        // movieList[28],
        // movieList[29]
    ],
    carouselSelector : '#carousel-4',
    carouselMoveSelector : '#carousel-4 .carousel-move',
    prevBtnSelector : '#carousel-4 .carousel_btn-prev',
    nextBtnSelector : '#carousel-4 .carousel_btn-next',
    carouselItemsSelector: '#carousel-4 .carousel_item'
})

sliderStyle1({
    movies: [ 
        movieList[25],
        movieList[27],
        movieList[28],
        movieList[50],
        movieList[52],
        movieList[56],
        movieList[57],  
        movieList[58],
        movieList[60],
        movieList[27],
        movieList[28],
        movieList[29]
    ],
    carouselSelector : '#carousel-6',
    carouselMoveSelector : '#carousel-6 .carousel-move',
    prevBtnSelector : '#carousel-6 .carousel_btn-prev',
    nextBtnSelector : '#carousel-6 .carousel_btn-next',
    carouselItemsSelector: '#carousel-6 .carousel_item'
})

sliderStyle1({
    movies: [
        movieList[26],
        movieList[51],
        movieList[41],
        movieList[24],
        movieList[33],
        movieList[38],
        movieList[39],  
        movieList[40],
        movieList[41],
        movieList[42],
        movieList[43],
        movieList[44],
        movieList[45],
        movieList[46],
        movieList[47],
        movieList[48],
        movieList[49],
        movieList[60]
    ],
    carouselSelector : '#carousel-7',
    carouselMoveSelector : '#carousel-7 .carousel-move',
    prevBtnSelector : '#carousel-7 .carousel_btn-prev',
    nextBtnSelector : '#carousel-7 .carousel_btn-next',
    carouselItemsSelector: '#carousel-7 .carousel_item'
})

sliderStyle1({
    movies: [
        movieList[32],
        movieList[31],
        movieList[38],
        movieList[39],
        movieList[40],
        movieList[41],
        movieList[33],  
        movieList[34],
        movieList[48],
        movieList[42],
        movieList[26],
        movieList[63],
        movieList[48],
        movieList[49],
        movieList[26],
        movieList[59]
    ],
    carouselSelector : '#carousel-8',
    carouselMoveSelector : '#carousel-8 .carousel-move',
    prevBtnSelector : '#carousel-8 .carousel_btn-prev',
    nextBtnSelector : '#carousel-8 .carousel_btn-next',
    carouselItemsSelector: '#carousel-8 .carousel_item'
})

sliderStyle1({
    movies: [   
        movieList[61],
        movieList[32],
        movieList[30],
        movieList[35],
        movieList[59],  
        movieList[44],
        movieList[33],
        movieList[47],
        movieList[42],
        movieList[34],
        movieList[44],
        movieList[45],
        movieList[46],
        movieList[41],
        movieList[38],
        movieList[62],
        movieList[31], 
        movieList[49],
        movieList[15],
        movieList[56],
        movieList[38],
        movieList[34],
        movieList[36],
        movieList[29],
        movieList[52],
        movieList[53],
        movieList[26],
        movieList[27],
        movieList[28],
        movieList[29]
    ],
    carouselSelector : '#carousel-9',
    carouselMoveSelector : '#carousel-9 .carousel-move',
    prevBtnSelector : '#carousel-9 .carousel_btn-prev',
    nextBtnSelector : '#carousel-9 .carousel_btn-next',
    carouselItemsSelector: '#carousel-9 .carousel_item'
})

function sliderStyle2(options) {
    const carouselMove = $(options.carouselMoveSelector)
    const carouselWidth = $(options.carouselSelector).offsetWidth
    const prevBtn = $(options.prevBtnSelector)
    const nextBtn = $(options.nextBtnSelector)
    prevBtn.style.display = 'none'

    if($(`${options.carouselSelector}.carousel-rank`)) {
        function render() {
            const htmls = options.movies.map((movie, index) => {
                return `
                    <div class="carousel_item col l-3 m-4 c-6">
                        <div class="carousel_rank-img">
                            <img src="${movie.img}" alt="">
                            <div class="carousel_rank-overlay">
                                <div class="btns-play-and-add">
                                    <span class="btn-play">
                                        <i class="fas fa-play"></i>
                                    </span>
                                    <span class="btn-add">
                                        <i class="far fa-bookmark">
                                            <i class="fas fa-plus"></i>
                                        </i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="carousel_rank-block">
                            <img src="${movie.rank}" alt="" class="carousel_rank-number">
                            <div class="carousel_rank-content">
                                <p class="carousel_rank-title">${movie.name}</p>
                                <p class="carousel_rank-update">${movie.update} tập</p>
                            </div>
                        </div>
                    </div>
                `
            })
            carouselMove.innerHTML = htmls.join('')
        }
        render()
    }

    if($(`${options.carouselSelector}.carousel-comingsoon`)) {
        function render() {
            const htmls = options.movies.map((movie, index) => {
                return `
                    <div class="carousel_item col l-2-4 m-3 c-4">
                        <div class="carousel-comingsoon_timeline">
                            <div class="comingsoon_timeline-line"></div>
                            <div class="comingsoon_timeline-point"></div>
                            <div class="comingsoon_timeline-time">
                                <p class="comingsoon_timeline-date">${movie.date}</p>
                                <p class="comingsoon_timeline-day">${movie.day}</p>
                            </div>
                        </div>
                        <div class="carousel-comingsoon_poster">
                            <div class="comingsoon_poster-img-wrap">
                                <img src="${movie.img}" alt="">
                                <div class="comingsoon_poster-img-overlay">
                                    <div class="btns-play-and-add">
                                        <span class="btn-play">
                                            <i class="fas fa-play"></i>
                                        </span>
                                        <span class="btn-add">
                                            <i class="far fa-bookmark">
                                                <i class="fas fa-plus"></i>
                                            </i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="comingsoon_poster-content">
                                <div class="comingsoon_poster-title">${movie.name}</div>
                                <div class="comingsoon_poster-hagtag">
                                    <span>${movie.hagtag[0]}</span>
                                    <span>${movie.hagtag[1]}</span>
                                </div>
                                <div class="comingsoon_poster-info">
                                    <p>
                                        <span>Đạo diễn: </span>${movie.director}
                                    </p>
                                    <p>
                                        <span>Diễn viên: </span>${movie.actor}
                                    </p>
                                    <p>
                                        <span>Miêu tả: </span>${movie.decs}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-comingsoon_title">
                            <p>${movie.name}</p>
                        </div>
                    </div>
                `
            })
            carouselMove.innerHTML = htmls.join('')
        }
        render()
    }

    const carouselItems = $$(options.carouselItemsSelector)
    const carouselMoveQuantity = Math.round(carouselItems.length/(carouselMove.getBoundingClientRect().width / carouselItems[0].getBoundingClientRect().width))
    var l = 0
    nextBtn.onclick = () => {
        prevBtn.style.display = 'block'
        l++;
        if(l < carouselMoveQuantity) {
            carouselMove.style.transform = `translateX(calc(0px - ${carouselWidth}px * ${l}))`
            if(l == carouselMoveQuantity - 1) {
                nextBtn.style.display = 'none'
            }
        } else {
            l = carouselMoveQuantity - 1
            nextBtn.style.display = 'none'
        }
    }

    prevBtn.onclick = () => {
        nextBtn.style.display = 'block'
        l--;
        if(l>=0) {
            carouselMove.style.transform = `translateX(calc(0px - ${carouselWidth}px * ${l}))`
            if(l==0) {
                prevBtn.style.display = 'none'
            }
        } else {
            l=0
            prevBtn.style.display = 'none'
        }
    }
}

const rankList = [  
    {
        name: 'Đối tác đáng ngờ',
        update: '24',
        img: './assets/img/rank-img9.jpg',
        rank: './assets/img/rank-number1.png'
    },
    {
        name: 'Học viện quân sự Liệt Hỏa',
        update: '52',
        img: './assets/img/rank-img10.jpg',
        rank: './assets/img/rank-number2.png'
    },
    {
        name: 'Huynh Đệ Thân Mến Của Ta',
        update: '44',
        img: './assets/img/rank-img11.jpg',
        rank: './assets/img/rank-number3.png'
    },
    {
        name: 'Kết Hôn Rồi Bắt Đầu Yêu',
        update: '45',
        img: './assets/img/rank-img12.jpg',
        rank: './assets/img/rank-number4.png'
    }, 
    {
        name: 'Bí Mật Nơi Gốc Tối',
        update: '24',
        img: './assets/img/rank-img1.jpg',
        rank: './assets/img/rank-number5.png'
    },
    {
        name: 'One Piece (Đảo Hải Tặc)',
        update: '997',
        img: './assets/img/rank-img2.jpg',
        rank: './assets/img/rank-number6.png'
    },
    {
        name: 'Hạ Tiên Sinh Lưu Luyến Không Quên (Nỗi Vương Vấn Của Hạ Tiên Sinh)',
        update: '28',
        img: './assets/img/rank-img3.jpg',
        rank: './assets/img/rank-number7.png'
    },
    {
        name: 'Bạn Gái Lầu Dưới Xin Hãy Ký Nhận',
        update: '36',
        img: './assets/img/rank-img4.jpg',
        rank: './assets/img/rank-number8.png'
    },
    {
        name: '【Thuyết minh】Một Đời Một Kiếp (Nhất Sinh Nhất Thế)',
        update: '55',
        img: './assets/img/rank-img5.jpg',
        rank: './assets/img/rank-number9.png'
    },
    {
        name: 'Trường An như cố',
        update: '41',
        img: './assets/img/rank-img6.jpg',
        rank: './assets/img/rank-number10.png'
    },
    {
        name: 'Bác sĩ xứ lạ',
        update: '65',
        img: './assets/img/rank-img7.jpg',
        rank: './assets/img/rank-number11.png'
    },
    {
        name: 'Nửa Là Đường Mật Nửa Là Đau Thương',
        update: '58',
        img: './assets/img/rank-img8.jpg',
        rank: './assets/img/rank-number12.png'
    }
]

sliderStyle2({
    movies: rankList,
    carouselSelector : '#carousel-3',
    carouselMoveSelector : '#carousel-3 .carousel-move',
    prevBtnSelector : '#carousel-3 .carousel_btn-prev',
    nextBtnSelector : '#carousel-3 .carousel_btn-next',
    carouselItemsSelector: '#carousel-3 .carousel_item'
})

const comingsoonList = [   
    {
        date: '12-1',
        day: 'Thứ Tư',
        name: 'Phong Khởi Lạc Dương',
        img: 'https://pic2.iqiyipic.com/image/20211025/65/d1/a_100460072_m_601_vi_260_360.jpg',
        hagtag: ['Bí Ẩn', 'Tình Tiết'],
        director: 'Xie Ze',
        actor: 'Hoàng Hiên, Vương Nhất Bác',
        decs: 'Bộ phim “Phong Khởi Lạc Dương” chuyển thể từ tiểu thuyết “Lạc Dương” của Mã Bá Dung, kể về hàng loạt câu chuyện những người xuất thân từ giai cấp, tầng lớp khác nhau gây ra trong quá trình điều tra một vụ án chưa giải quyết. Cao Bỉnh Chúc(Hoàng Hiên thủ vai), một phó soái bất lương trà trộn trong tầng lớp thấp nhất Lạc Dương, bất ngờ bị cuốn vào vụ án, trở thành người bị tình ngh'
    },
    {
        date: '12-3',
        day: 'Thứ Sáu',
        name: 'Côn Trùng Cát',
        img: 'https://pic5.iqiyipic.com/image/20211127/c1/27/v_164287951_m_601_zh-CN_260_360.jpg',
        hagtag: ['Hành Động', 'Khoa Học Viễn Tưởng'],
        director: 'Xia Ban Chang',
        actor: 'Da Ying, Heidi',
        decs: 'Trong thế giới tương lai, con người gặp phải suy thoái kinh tế, hội nghị môi trường không tổ chức nữa. Các nước không xử lý khí thải mà khiến tầng ô-zôn ở Nam Cực bị thủng, trái đất rơi vào thời kỳ hoang mạc hóa không thể đảo ngược. Động vật và thực vật biến dị thành chủ mới của trái đất, tức là “côn trùng cát”. Chúng không ngừng xâm chiếm không gian sinh tồn, con người lâm nguy tuyệt chủng mà đành phải liều lĩnh đi tìm “ốc đảo” trên sa mạc. Phú thương Tôn Bác Văn, nhà khoa học Lưu Đông, đội trưởng bảo vệ Vương Cường, cả nhà thợ máy Lý Quốc Lương và kẻ lưu manh Mã Ba cùng lên xe bọc thép đặc biệt đi tìm “ốc đảo”. Họ gặp phải nhiều khó khăn trên đường, thậm chí bị ba loài côn trùng cát biến dị truy kích. Nguy cơ phục bốn phía, họ lại bị thương vong nặng, hình như đã không còn hy vọng nữa. Cuối cùng, là người còn lại duy nhất, cô gái Băng Băng đến với bên bờ “ốc đảo”, nhưng mẫu trùng đằng sau gần với cô ấy trong gang tấc.'
    },
    {
        date: '12-4',
        day: 'Thứ Bảy',
        name: 'Em Yêu Anh, Tạm Biệt!',
        img: 'https://pic9.iqiyipic.com/image/20211123/dc/71/a_100484418_m_601_zh-CN_m1_260_360.jpg',
        hagtag: ['Lãng Mạn', 'Tình Tiết'],
        director: 'Dolly Dulu',
        actor: 'Andrea Brillantes, Nio Tria',
        decs: '“Em Yêu Anh, Tạm Biệt!” kể về câu chuyện dù cuộc sống mang lại nhiều thách thức, nhưng chúng ta vẫn cần chào mừng cuộc sống. Mối tình yêu giữa họ có đến trễ không? Sau khi được biết hai người sẽ xa lìa nhau mãi mãi, họ có thể tiếp tục yêu nhau không?.'
    },
    {
        date: '12-15',
        day: 'Thứ Tư',
        name: 'Xin Chào, Người Yêu Của Tôi',
        img: 'https://pic2.iqiyipic.com/image/20211123/27/1c/a_100484405_m_601_en_m1_260_360.jpg',
        hagtag: ['Tình Cảm'],
        director: 'Raz Dela Torre',
        actor: 'Gerald Anderson',
        decs: 'Hart là một người phụ nữ xinh đẹp, nhanh nhẹn, cần cù nhưng hết sức bất hạnh, cuối cùng gặp được Saul, bùa hộ mệnh của mình. Anh ấy là một người không có tình cảm, không chịu thay đổi và mời Hart giả vờ người vợ của mình để lấy lòng bà nội đã mắc bệnh Alzheimer. Mặc dù hai người ghét nhau, nhưng tình yêu sẽ tìm được biện pháp. Tuy nhiên lúc nào mới có thể nói mối tình này đã trở nên chân thực?'
    },
    {
        date: '12-17',
        day: 'Thứ Sáu',
        name: 'Jo Yi Và Ám Hành Ngự Xử',
        img: 'https://pic1.iqiyipic.com/image/20211117/04/c4/a_100484196_m_601_en_260_360.jpg',
        hagtag: ['Tội Phạm', 'Bí Ẩn'],
        director: 'Seon-dong Yoo',
        actor: 'Lee Dong Wook, Wi Ha Jun',
        decs: 'Người Hùng Điên Rồ (Bad and Crazy) xoay quanh câu chuyện kể về một anh chàng đã sống cả đời với tư cách là một thám tử cảnh sát thiên về vật chất. Mặc dù tràn đầy chính nghĩa trong lòng, nhưng bất ngờ một nhân cách khác “K” tỉnh lại trong thân thể của nhân vật chính vốn có cuộc sống cảnh sát hình sự truyền thống. Anh ấy diệt sạch các cảnh sát tham nhũng và thể hiện chính nghĩa xã hội.'
    },
    {
        date: '12-22',
        day: 'Thứ Tư',
        name: 'Tuổi Trẻ Yêu Rối Rắm SS2',
        img: 'https://pic3.iqiyipic.com/image/20211109/80/fb/a_100484392_m_601_en_260_360.jpg',
        hagtag: ['Tiếng Thái', 'LGBT'],
        director: 'Sathanapong Limwongthong',
        actor: 'Bas Suradet Piniwat',
        decs: 'The feeling of disappointment that arose with all characters in Gen Y The Series  SS1 will be solved, especially the suddenly ended of Pha and Wayu. Wayu decided to start to be a couple with Thanu, but it may not be easy because of the unclear relationship between Thanu and Phai. At the same time, Mark and Kij got a problem with distancing and timing. Before they decide to call it off, they focus on temporary separation as an option. that may make them know how the importance of each other. Pok has tried so hard to be better for Tong but He feels like He is just not up to Tongs expectation. Also, Tong has tried to give all the best to Pok but He had misunderstood that Pok never wants it. While Wayu started to open up to a new relationship, a problem of Mark and Kij, a conflict of Pok and Tong. They have to learn how to love in Gen Y The Series Season2. Watch rerun first only on iQiyi'
    },
    {
        date: 'Xin hãy đón đợi!',
        day: '&nbsp',
        name: 'Khanh Khanh Ngã Tâm',
        img: 'https://pic0.iqiyipic.com/image/20210514/b7/b3/a_100436050_m_601_zh-CN_m1_260_360.jpg',
        hagtag: ['iQIYI sản xuất'],
        director: 'Kenne Yam',
        actor: 'Trình Tiêu, Vương Nhất Phi',
        decs: '&nbsp'
    },
    {
        date: 'Xin hãy đón đợi!',
        day: '&nbsp',
        name: "I'm a Super Star",
        img: 'https://pic6.iqiyipic.com/image/20210520/42/fa/a_100459404_m_601_zh-CN_m1_260_360.jpg',
        hagtag: ['Thành Thị'],
        director: 'Yui Mao',
        actor: 'Tân Chỉ Lôi',
        decs: '&nbsp'
    },
    {
        date: 'Xin hãy đón đợi!',
        day: '&nbsp',
        name: 'Nhân Sinh Giống Như Thuở Đầu Gặp Gỡ',
        img: 'https://pic1.iqiyipic.com/image/20210714/dc/aa/a_100467792_m_601_zh-CN_260_360.jpg',
        hagtag: ['Tình Tiết', 'Lịch Sử'],
        director: 'Wang Wei',
        actor: 'Lý Hiện, Xuân Hạ',
        decs: 'Nhân Sinh Giống Như Thuở Đầu Gặp Gỡ-Phim lấy bối cảnh vào thời nhà Thanh, câu chuyện xoay quanh một thanh niên yêu nước tham gia vào Cuộc nổi dậy của Võ sĩ để chiến đấu cho đất nước của mình.Sau sự thay đổi của Vương quốc Gengzi, vùng đất Trung Quốc bị tàn phá, những người trẻ tuổi với khát vọng vươn lên cứu lấy quê hương. Thanh niên quý tộc Liangxiang (do Li Xian đóng), đảng cách mạng Yang Kaizhi (do Wei Daxun đóng), và Beiyang Wuyou Guardian Li Renjun (do Zhou You đóng) đã trở thành lứa thanh niên tiến bộ đầu tiên đến Nhật Bản để học tập tại một trường không -trường sĩ quan. Họ gặp gỡ với nhà cách mạng Yu lưu vong trên du thuyền. Tian Bai (Zhu Yawen) và Qiu Hong (Chun Xia) gặp nhau, và năm người được định mệnh gắn kết.'
    },
    {
        date: 'Xin hãy đón đợi!',
        day: '&nbsp',
        name: 'Ai Là Hung Thủ',
        img: './assets/img/poster10.jpg',
        hagtag: ['Tiếng Hàn', 'Tội Phạm'],
        director: 'Sun Hao',
        actor: 'Triệu Lệ Dĩnh, Yang Xiao',
        decs: 'Bộ phim Hàn Quốc “Em Sẽ Trở Thành Ban Đêm Của Anh” kể về câu chuyện ngọt ngào lại hồi hộp giữa nữ bác sĩ và năm thành viên ban nhạc.'
    }
]

sliderStyle2({
    movies: comingsoonList,
    carouselSelector : '#carousel-5',
    carouselMoveSelector : '#carousel-5 .carousel-move',
    prevBtnSelector : '#carousel-5 .carousel_btn-prev',
    nextBtnSelector : '#carousel-5 .carousel_btn-next',
    carouselItemsSelector: '#carousel-5 .carousel_item'
})

function playModal() {
    const modal = $('#modal-play')
    const modalContainer = $('#modal-play .modal-container')
    const modalClose = $('#modal-play .modal_close')
    const modalVideo = $('#modal-play video')

    function showModal() {
        modal.classList.add('open')
    }

    function hideModal() {
        modal.classList.remove('open')
        modalVideo.pause()
    }

    for (let i = 0; i < $$('.carousel_item').length; i++) {
        const item = $$('.carousel_item')[i]
        item.onclick = () => {
            modalVideo.src = `${movieList[item.id-1].video}`
            $('.play_area-title').innerHTML = `${movieList[item.id-1].name}`
            $('.content-info_title').innerHTML = `${movieList[item.id-1].name}`
            $('.content-info_update').innerHTML = `${movieList[item.id-1].update}`
            $('.content-info_category').innerHTML = `${movieList[item.id-1].category}`
            $('.content-info_decs').innerHTML = `${movieList[item.id-1].desc}`
            showModal()
        }
    }

    modalClose.onclick = hideModal

    modal.onclick = hideModal

    modalContainer.onclick = function (event) {
        event.stopPropagation()
    }
}
setTimeout(playModal, 2000)