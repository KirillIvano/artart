import 'flexboxgrid2';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel';

import '../../common';
import '../../components/YoutubeVideo';

import './main.scss';

// eslint-disable-next-line no-undef
$('.owl-carousel').owlCarousel({
    margin: 20,
    stagePadding: 20,
    loop: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1,
        },
        800: {
            items: 3,
        },
    },
});
