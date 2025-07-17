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
    .expand,.mobile-more,.summary-more.more-state {
        background: linear-gradient(180deg, rgb(0 0 0 / 0%) 1%, #171719 75%, #171719);
    }

    .volume-list.at-series.basic-section.volume-mobile.gradual-mobile.disabled
    {
        opacity: var(--MO);
    }

    table.listext-table tr:nth-child(odd),
    table.broad-table tr th,
    table.broad-table tr:nth-child(odd),
    ul.list-chapters li:nth-child(2n),
    #noti-icon.active,
    .filters-wrapper,
    .noti-item.untouch,
    .nav-submenu
    {
        background-color: rgba(0, 0, 0, .25);
        color: white;
    }

    #navbar,
    #sidenav-icon.none-xl.active,
    #navbar.headroom.headroom--not-bottom.headroom--pinned.headroom--top,
    .bottom-part.at-index,
    .navbar-menu.at-navbar .nav-submenu,
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
    .sub-index-style
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
