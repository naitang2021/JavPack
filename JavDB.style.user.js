// ==UserScript==
// @name            JavDB.style
// @namespace       JavDB.style@blc
// @version         0.0.1
// @author          blc
// @description     样式调整
// @include         /^https:\/\/javdb\d*\.com\/.*$/
// @icon            https://s1.ax1x.com/2022/04/01/q5lzYn.png
// @supportURL      https://t.me/+bAWrOoIqs3xmMjll
// @run-at          document-start
// @grant           GM_addStyle
// @license         GPL-3.0-only
// @compatible      chrome
// @compatible      edge
// ==/UserScript==

(function () {
  const root = `
  :root[data-theme=dark] {
    color-scheme: dark;
  }
  html {
    overflow-y: auto;
  }
  img,
  video {
    filter: brightness(.9) contrast(.9);
  }
  `;
  const hidden = `
  .app-desktop-banner,
  #magnets .top-meta,
  #navbar-menu-hero .navbar-start > a {
    display: none !important;
  }
  `;
  const search = `
  #search-bar-container {
    margin-bottom: .25rem !important;
  }
  #search-type,
  #video-search {
    border: none;
  }
  #video-search:focus {
    box-shadow: none;
    z-index: auto;
  }
  .search-bar-wrap .search-recent-keywords ul {
    margin-inline: -10px;
  }
  `;
  const head = `
  .main-tabs {
    margin-bottom: 1rem !important;
  }
  .main-title {
    padding-top: 0;
  }
  .message-container,
  .tabs:not(:last-child),
  .title:not(:last-child),
  .message:not(:last-child),
  .box:not(:last-child),
  .columns:not(:last-child) {
    margin-bottom: 1rem;
  }
  .section-columns {
    padding-top: 0;
  }
  .section-title,
  .section-addition,
  .actor-avatar {
    padding-bottom: 0;
  }
  `;
  const toolbar = `
  .toolbar {
    font-size: 0;
    padding: 0 0 .5rem;
  }
  .toolbar .button-group {
    margin-bottom: .5rem;
    margin-right: .5rem;
  }
  #tags {
    margin-top: -1rem;
    margin-bottom: 1rem;
  }
  #tags dt,
  #tags dt.collapse {
    display: flex;
  }
  #tags dt {
    padding: .5rem 0 0;
    line-height: normal;
  }
  #tags dt.collapse {
    height: 41px;
  }
  #tags dt a.tag-expand {
    float: none;
    margin-top: 0;
    order: 3;
  }
  #tags dt strong {
    flex-shrink: 0;
  }
  #tags dt > .tag {
    margin-left: .5rem;
  }
  #tags dt .tag {
    margin-right: .5rem;
    margin-bottom: .5rem;
  }
  #tags dt .tag_labels {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
  }
  .actor-filter-toolbar {
    padding-bottom: 1rem;
  }
  .actor-filter hr {
    display: none;
  }
  .actor-tags {
    margin-top: -.5rem;
    padding: .5rem 0 0;
    border: none;
    margin-bottom: .5rem !important;
  }
  .actor-tags .content {
    display: flex;
    flex-wrap: wrap;
    padding-right: 60px;
  }
  .actor-tags .collapse {
    height: 40px;
  }
  .actor-tags .content .tag-expand {
    position: absolute !important;
    right: 0;
  }
  .actor-tags .content .tag {
    margin: 0 .5rem .5rem 0;
  }
  `;
  const main = `
  .movie-list {
    padding-bottom: 0;
  }
  .movie-list,
  .movie-list.v,
  .actors,
  .section-container {
    grid-gap: .5rem;
  }
  :is(.tabs, #select-search-image-modal) + .section {
    padding: 0;
  }
  .divider-title {
    padding-bottom: 1rem;
  }
  :root[data-theme=dark] .divider-title {
    border-color: #4a4a4a;
  }
  .tabs + .section .awards:last-child {
    padding-bottom: 0;
  }
  .tabs + .section #videos {
    margin-top: 1rem !important;
    margin-bottom: 0 !important;
  }
  .actors + br {
    display: none;
  }
  .actors + br + .title {
    margin-top: 1rem;
  }
  #lists.common-list {
    margin-top: -1rem;
  }
  #lists.common-list .list-item.columns {
    margin: 0;
  }
  #lists.common-list .list-item.columns .column {
    padding: 1rem 0;
  }
  #lists.common-list .list-item.columns .column .field.has-addons {
    justify-content: end;
  }
  #lists.common-list > ul > div.list-item {
    padding-top: 1rem;
  }
  `;
  const movie = `
  a.box:focus,
  a.box:hover,
  a.box:active,
  [data-theme=dark] a.box:focus,
  [data-theme=dark] a.box:hover,
  [data-theme=dark] a.box:active {
    box-shadow: none;
  }
  :root[data-theme=dark] .box:hover {
    background: unset;
  }
  .movie-list .box {
    padding: 0 0 .4rem;
  }
  .movie-list .item .cover:hover img {
    transform: none;
  }
  .movie-list .box .video-title {
    padding-right: .4rem;
  }
  .movie-list .item .tags,
  .movie-list .item .tags .tag {
    margin-bottom: 0;
  }
  .movie-list .box .meta-buttons {
    padding: .4rem .4rem 0;
  }
  .movie-list .box .meta-buttons .button {
    margin-top: 0 !important;
  }
  `;
  const actor = `
  .actors .box {
    margin-bottom: 0;
  }
  `;
  const section = `
  .section-container .box {
    margin-bottom: 0;
    padding: 1rem;
  }
  .section-container a.box,
  .section-container div.box > a:first-child {
    display: flex;
    justify-content: space-between;
    gap: .5rem;
  }
  .section-container .box strong {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  `;
  const foot = `
  nav.pagination {
    padding-top: 1rem;
    border-top: none;
    margin: 0 -.25rem !important;
  }
  :root[data-theme=dark] nav.pagination {
    border-top: none !important;
  }
  `;
  const other = `
  .payment-form {
    padding: 1rem;
  }
  .payment-form .payment-total,
  .form-panel .user-profile {
    padding: 0;
  }
  nav.panel .panel-block {
    margin-top: -1rem;
    padding: .5rem;
  }
  `;
  GM_addStyle(
    `${root}${hidden}${search}${head}${toolbar}${main}${movie}${actor}${section}${foot}${other}`
  );
})();
