<script setup></script>

<template>
  <!-- Footer -->
  <footer class="footer">
    <div>
      <div class="bg-row-top">
        <div class="row row-top container">
          <!-- Product column -->
          <div class="column">
            <h3 class="heading">Dịch vụ Bảo Lam</h3>
            <ul class="list">
              <li class="item">
                <a href="#!">Ảo thuật</a>
              </li>
              <li class="item">
                <a href="#!">Chú hề</a>
              </li>
              <li class="item">
                <a href="#!">Bong bóng</a>
              </li>
              <li class="item">
                <a href="#!">Dạy ảo thuật</a>
              </li>
            </ul>
          </div>
          <!-- Resources column -->
          <!-- <div class="column">
            <h3 class="heading">Resources</h3>
            <ul class="list">
              <li class="item">
                <a href="#!">Our Homes</a>
              </li>
              <li class="item">
                <a href="#!">Member Stories</a>
              </li>
              <li class="item">
                <a href="#!">Video</a>
              </li>
              <li class="item">
                <a href="#!">Free trial</a>
              </li>
            </ul>
          </div> -->

          <!-- Company column -->
          <!-- <div class="column">
            <h3 class="heading">Company</h3>
            <ul class="list">
              <li class="item">
                <a href="#!">Patnerships</a>
              </li>
              <li class="item">
                <a href="#!">Terms of use</a>
              </li>
              <li class="item">
                <a href="#!">Privacy</a>
              </li>
              <li class="item">
                <a href="#!">Sitemap</a>
              </li>
            </ul>
          </div> -->

          <!-- Get in touch column -->
          <div class="column">
            <h3 class="heading">Liên hệ</h3>
            <p class="desc desc-first">Số điện thoại : 0979 601 292</p>
            <p class="desc">Email : baolam@gmail.com</p>
            <p class="desc">Địa chỉ : Quận liên chiểu , Thành phố đà nẵng</p>
            <div class="social">
              <a href="https://www.facebook.com/lam.bui.1800" class="social-link">
                <img src="@/assets/img/facebook.svg" alt="" />
              </a>
              <a href="https://www.tiktok.com/@chuhemariobaolam" class="social-link">
                <img src="@/assets/img/twitter.svg" alt="" />
              </a>
              <a href="https://youtube.com/@aothuatgiabaolam8171" class="social-link">
                <img src="@/assets/img/linkedin.svg" alt="" />
              </a>
            </div>
          </div>
          <div class="column">
            <div>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Faothuatgiabaolam&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="300"
                height="130"
                style="border: none; overflow: hidden"
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-bottom">
        <img
          src="@/assets/img/logo.svg"
          style="width: 100px"
          alt="Besnik."
          class="logo" />
        <p class="copyright">Copyright 2020.com, All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
  margin-top: 55px;
  color: white;
  .row {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
  }
  .bg-row-top{
    background: linear-gradient(#060606, #444343);
  }
  .row-top {
    padding-bottom: 5rem;
    padding-top: 5rem ;
    column-gap: 85px;
  }
  // .column{
  //   flex:1;
  // }
  .flex-2 {
    flex: 2;
  }
  .heading {
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 2rem;
    color: white;
  }
  .list {
    margin-top: 42px;
  }
  .desc {
    margin-top: 18px;
    font-weight: 400;
    font-size: 1.6rem;
    color: white;
    white-space: nowrap;
    white-space: normal;
    line-height: 1.75;
  }
  .desc-first {
    margin-top: 42px;
  }
  .item {
    margin-top: 18px;
    a {
      font-weight: 400;
      font-size: 1.6rem;
      color: white;
      white-space: nowrap;
    }
  }
  .social {
    display: flex;
    margin-top: 40px;
  }
  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 3px;
    background: #f9f9f9;
    + {
      .social-link {
        margin-left: 16px;
      }
    }
    &:hover {
      background: #ebebeb;
    }
  }
  .row-bottom {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
  }
  .copyright {
    font-weight: 400;
    font-size: 1.4rem;
    color: #c2c2c2;
  }
}

/* PC */
@media screen and (min-width: 992px) {
  .mobile-header {
    display: none;
  }

  .show-on-mobile {
    display: none;
  }
}

/* Tablet & mobile */
@media screen and (max-width: 991px) {
  .navbar {
    position: relative;
  }

  .navbar .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .navbar ul {
    display: none;
  }

  .toggle-menu svg {
    width: 24px;
    color: #666;
  }

  .menu-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transition: 0.5s ease;
  }

  .menu-drawer {
    position: fixed;
    inset: 0 40% 0 0;
    background: #fff;
    z-index: 2;
    padding: 60px;
    transform: translateX(-100%);
    transition: 0.5s ease;
  }

  .menu-drawer ul {
    margin-top: 32px;
  }

  .menu-drawer ul a {
    display: block;
    padding: 14px 0;
    color: #333;
    font-weight: 500;
  }

  .menu-checkbox:checked ~ .menu-overlay {
    opacity: 1;
    visibility: visible;
  }

  .menu-checkbox:checked ~ .menu-drawer {
    transform: translateX(0);
  }

  .separate {
    border-top: 1.5px solid #ebebeb;
  }
  .hero-wrap .info {
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }

  .hero-wrap .desc {
    width: 80%;
    margin: 30px auto auto;
  }
  .clients {
    padding: 90px 0 43px 10px;
  }
  .clients .images {
    flex-wrap: wrap;
    justify-content: center;
  }

  .guide-item {
    flex: 1;
    margin: 0;
  }

  .featured .list {
    grid-template-columns: 1fr 1fr;
  }

  .stats .row {
    flex-direction: column;
  }

  .stats .img-block,
  .stats .info {
    width: 100%;
  }

  .stats .img-block {
    order: 2;
    margin-top: 80px;
  }

  .stats .info {
    order: 1;
    padding: 0;
  }

  .stats .sub-title {
    width: 70%;
  }

  .stats .info .desc {
    width: 100%;
  }

  .stats .row-qty {
    flex-direction: row;
  }

  .stats .qty {
    font-size: 5rem;
  }

  .stats .qty-desc {
    font-size: 1.5rem;
  }

  .subscription .image {
    display: none;
  }

  .footer .row-top {
    display: grid;
    grid-template-columns: 1fr 2fr;
    row-gap: 80px;
  }
}

/* Tablet */
@media screen and (min-width: 768px) and (max-width: 991px) {
  .show-on-mobile {
    display: none;
  }
}

/* Mobile */
@media screen and (max-width: 767px) {
  .hide-on-mobile {
    display: none;
  }

  .menu-drawer {
    inset: 0 25% 0 0;
    padding: 40px;
  }

  .navbar .actions {
    display: none;
  }

  /* .hero-wrap {
      height: calc(100vh - 80px);
  }

  .hero-wrap .title {
      margin-top: 20px;
      font-size: 5.2rem;
  }

  .hero-wrap .desc {
      width: 100%;
  } */

  .clients .images {
    row-gap: 20px;
  }

  .list-guide {
    flex-direction: column;
    row-gap: 60px;
  }

  .guide-cta {
    margin-top: 60px;
  }

  .featured .link {
    display: none;
  }

  .featured .list {
    grid-template-columns: 1fr;
  }

  .featured .view-all {
    display: flex;
    justify-content: center;
    margin-top: 60px;
  }

  .stats .sub-title {
    width: 100%;
  }

  .stats .img-block .image {
    width: 100%;
  }

  .stats-trend {
    top: -21px;
    width: 133px !important;

    left: -1px;
  }

  .stats .row-qty {
    flex-direction: column;
    align-items: center;
    row-gap: 60px;
  }

  .subscription .info {
    padding: 32px;
  }

  .subscription .body {
    height: auto;
  }

  .footer .row-top {
    grid-template-columns: 1fr;
  }

  .footer .row-bottom {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 24px;
  }
}
</style>
