jQuery(document).ready(function ($) {
  $('.headroom').headroom({
    tolerance: 20,
    offset: 90,
    classes: {
      initial: 'animated',
      pinned: 'slideDown',
      unpinned: 'slideUp',
    },
  });
});
