import Scrollbar from 'smooth-scrollbar';
import 'select2/dist/js/select2.full';
import 'slick-carousel/slick/slick.min.js';

let app = {
    init() {
        func.jsScrollbar();
        func.jsSelect();
        func.jsInitialSelect();
    }

};

let func = {
  jsInitialSelect() {
      // SUMOSELECT START
      if ($('.js-select').length > 0) {
          $('.js-select').each(function(idx, select){
              let $select = $(select);

              if (!$select.prop('sumo')) {
                  $select.SumoSelect({
                      csvDispCount: 20,
                      floatWidth: 0,
                      captionFormat: '{0} выбрано',
                      captionFormatAllSelected: '{0} выбраны все!',
                      nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'],
                      locale :  ['Ок', 'Отмена', 'Выбрать все']
                  });
              }
          });
      }
      // SUMOSELECT END
  },

    jsScrollbar() {
        let els = document.querySelectorAll('.js-scrollbar');

        for (let el of els) {
            Scrollbar.init(el);
        }
    },
    jsSelect() {
        $('.js-select').select2({
            minimumResultsForSearch: -1,
            containerCssClass: 'raif-select__select',
            dropdownCssClass: 'raif-select__results',
            width: '100%',
            theme: 'raif-select'
        });
    },
};

$(function () {

    app.init();

});
