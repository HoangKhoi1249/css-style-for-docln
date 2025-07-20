// ==UserScript==
// @name         Custom CSS for Docln
// @namespace    http://tampermonkey.net/
// @version      0.9.1
// @description  This is a js file focus on stylize docln with customized blackground and transparent block.
// @author       Khôi Nguyên Nghiêm Đình
// @match        https://docln.net/*
// @match        https://docln.sbs/*
// @match        https://ln.hako.vn/*
// @run-at       document-start
// @grant        none
//
// ==/UserScript==

(function () {
    'use strict';

    const css = `
    :root
    {
        --BackgroundImage: url('https://i.ibb.co/N6sC2WKg/image.png');
        /*You can paste link image here to chang the background*/
        /*
        Some suggest image:
    https://i.ibb.co/PGHnYZnq/image.jpg
    https://i.ibb.co/cXV8vxkx/image.png
    https://i.ibb.co/ycTg6Lf4/image.png
    https://i.ibb.co/qMxtDQT3/image.jpg
    https://i.ibb.co/ZRds63zj/image.png
    https://i.ibb.co/NgkqtYDq/image.png
    https://i.ibb.co/Nn7SJ2NP/image.png  
    https://i.ibb.co/9k3JJVFw/image.png
    https://i.ibb.co/xKZV84Jq/image.jpg
    https://i.ibb.co/wvyjrY0/image.png
    https://i.ibb.co/fd4kmqCJ/image.png
    https://i.ibb.co/VYv8SHJX/image.png
    https://i.ibb.co/ynfwWbPt/image.png
    https://i.ibb.co/svtfRv9W/image.png
    https://i.ibb.co/XfFMVs3Q/image.png
    https://i.ibb.co/d4vvgLFM/image.jpg
    https://i.ibb.co/N6sC2WKg/image.png -- default
        */
        --BO: 0.9;
        --MO: 0.3;
    }
    
    
    
    
    #mainpart,
    #mainpart.at-index
    {
        background: linear-gradient(to bottom, rgba(3, 4, 11, .50), rgba(3, 5, 20, .9)), /* Mờ phủ đen để dễ đọc */
        var(--BackgroundImage) no-repeat center center fixed;
        background-size: cover;
        color: #fff;
    }
    
    main#mainpart.reading-page
    {
        background: linear-gradient(to bottom, rgba(3, 4, 11, .75), rgba(3, 5, 20, .9)), /* Mờ phủ đen để dễ đọc */
        var(--BackgroundImage) no-repeat center center fixed;
        background-size: cover;
    
        color: #fff;
    }
    
    #mainpart.custome-page,
    #mainpart.page-board
    {
        background: linear-gradient(to bottom, rgba(0, 0, 0, .16), rgba(0, 0, 0, .66)),
        var(--BackgroundImage) no-repeat center center fixed !important;
        background-size: cover !important;
        color: #fff !important;
    }
    
    .expand,
    .mobile-more,
    .summary-more.more-state,
    .ln-comment-group:nth-child(odd) .expand
    {
        background: linear-gradient(180deg, rgb(0 0 0 / 0%) 1%, #000 75%, #0000);
    }
    
    .rd_sidebar #chap_list li.current
    {
        background-color: #dddddd40;
    }
    .expand,
    .mobile-more,
    .summary-more.more-state
    {
        background: linear-gradient(180deg, rgb(0 0 0 / 0%) 1%, #000 75%, #000);
    }
    
    .volume-list.at-series.basic-section.volume-mobile.gradual-mobile.disabled
    {
        opacity: var(--MO);
    }
    
    table.listext-table tr:nth-child(odd),
    table.broad-table tr th,
    table.broad-table tr:nth-child(odd),
    ul.bookmarks_list li:nth-of-type(odd),
    ul.list-chapters li:nth-child(2n),
    :is(.dark .dark\:bg-\[\#1f1f1f\]),
    :is(.dark .dark\:\!bg-zinc-800),
    .noti-item:hover,
    #noti-icon.active,
    .filters-wrapper,
    .noti-item.untouch,
    .nav-submenu
    {
        background-color: rgba(0, 0, 0, .25) !important;
        color: white;
    }
    
    #navbar,
    #sidenav-icon.none-xl.active,
    #navbar.headroom.headroom--not-bottom.headroom--pinned.headroom--top,
    #licensed-list header.section-title,
    #tba-list header.section-title,
    .basic-section .sect-header,
    .detail-list header.section-title,
    .modal-header,
    .private-tabs header,
    .bottom-part.at-index,
    .navbar-menu.at-navbar .nav-submenu,
    .basic-section .sect-header,
    .private-tabs header,
    .footer,
    .nav-user_icon.active,
    .noti-sidebar,
    .noti-sidebar .noti-more
    {
    
        background-color: rgba(0, 0, 0, .6);
        color: white;
    }
    
    header.sect-header.tab-list,
    table.listext-table,
    
    #announcements.index-top_notification,
    #series-comments.basic-section,
    #series-reviews.basic-section,
    #fbcmt_root.sect-,
    
    .volume-list.at-series.basic-section.volume-mobile.gradual-mobile,
    .series-note.basic-section.gradual-mobile,
    .feature-section.at-series.clear,
    .licensed-volume-page .info-box,
    .bookmarks_list.unstyled.clear,
    .basic-section.has-pagination,
    .basic-section.gradual-mobile,
    .mail-page .mail-detail-list,
    .flex.min-w-0.flex-col.px-2,
    .page-content.basic-section,
    .index-top_notification,
    .sect-title.tab-title,
    .user-pm .mail-list,
    .board_categ-list,
    .page-breadcrumb,
    .feature-section,
    .basic-section,
    .series-users,
    .board-list,
    .detail-list,
    .user-pm .mail,
    .modal-content,
    .private-tabs,
    .profile-feature,
    .series-users,
    .showcase-item,
    .sub-index-style,
    .search-form.in,
    .sub-index-style .section-title,
    [type=text]:focus,select.form-control:focus,select:focus,
    [type=date], [type=email], [type=number], [type=password], [type=tel], [type=text], select, select.form-control,
    .licensed-list-page #search-by-month
    {
    
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.4);
        color: white;
    }
    
    .navbar-menu.hidden-block.at-mobile.unstyle,
    .account-sidebar.hidden-block.unstyled
    {
        background-color: rgba(0, 0, 0, .5);
    }
    
    
    header.sect-header,
    .set-slide.set-input.justify-center
    {
        color: #555 !important;
    }
    
    .rdtoggle_body.animation.fade-in-left-big,
    header.sect-header
    {
        background-color: rgba(0, 0, 0, .2);
    }
    `;

    function injectStyle() {
        const style = document.createElement('style');
        style.setAttribute("id", "beha-style");
        style.textContent = css;
        document.head.appendChild(style);
    }

    if (document.head) {
        injectStyle();
    } else {
        new MutationObserver((mutations, observer) => {
            if (document.head) {
                injectStyle();
                observer.disconnect();
            }
        }).observe(document.documentElement, { childList: true, subtree: true });
    }
})();
