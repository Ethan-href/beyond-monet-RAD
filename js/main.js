import Swiper from "swiper/bundle";
import GLightbox from "glightbox";
import * as AOS from "aos/dist/aos.js";
import jQuery from "jquery";

// Make jQuery available globally
window.jQuery = window.$ = jQuery;

/** Include any other scripts here - this will combine them via Webpack for the final output script. */

((window, document, $, undefined) => {
  /*******************************************************************************/
  /* MODULE
  /*******************************************************************************/

  const Base = (() => {
    /**
     * Runs when the document is ready.
     */
    const ready = () => {
      console.log("document ready!");

      AOS.init();

      const swiper = new Swiper(".swiper", {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    };

    /**
     * Runs when the window is loaded.
     */
    const accordionJS = () => {
      const block = $(".accordions-wrapper");
      if (block.length) {
        const headings = block.find(".accordion-heading");
        const contents = block.find(".accordion-content");
        headings.on("click", function () {
          const $parent = $(this).closest(".single-accordion");
          if (!$parent.hasClass("active")) {
            block
              .find(".single-accordion.active")
              .find(".accordion-content")
              .stop()
              .slideUp();
            block
              .find(".single-accordion.active")
              .find(".accordion-heading")
              .attr("aria-expanded", "false");
            block.find(".single-accordion.active").removeClass("active");
          }
          $parent.toggleClass("active");
          $parent.find(".accordion-content").stop().slideToggle();
          if ($(this).attr("aria-expanded") == "true") {
            $(this).attr("aria-expanded", "false");
          } else {
            $(this).attr("aria-expanded", "true");
          }
        });
      }
    };

    const load = () => {
      console.log("document load!");
    };

    /**
     * Return our module's publicly accessible functions.
     */
    return {
      ready: ready,
      accordionJS: accordionJS,
      load: load,
    };
  })();

  /*******************************************************************************/
  /* MODULE INITIALISE
  /*******************************************************************************/

  jQuery(document).ready(function ($) {
    Base.ready();
    Base.accordionJS();
  });

  jQuery(window).on("load", function ($) {
    Base.load();
  });
})(window, document, jQuery);
