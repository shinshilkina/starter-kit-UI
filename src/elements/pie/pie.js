import './pie.scss';

const colors = {
  perfect: '#FFE39C',
  good: '#BC9CFF',
  satisfactorily: '#6FCF97',
  bad: '#919191'
};

function changePieText (pie, element) {
  const count = pie.querySelector('.pie_circle_round_translate_count');
  const voices =  pie.querySelector('.pie_circle_round_translate_text');

  for (let key in colors) {
    if (element.classList.contains(key)) {
        const elementCount = pie.querySelector('.legend-count-'+key).textContent;
        count.textContent = elementCount;
        count.style.color = colors[key];
        voices.style.color = colors[key];
    }
  }
}

const pies = document.querySelectorAll('.pie');
for (let pie of pies) {
    if (pie) {
        const pieces = pie.querySelectorAll('.piece');
        const legends = pie.querySelectorAll('.pie_legend_item');

        for (let legend of legends) {
            legend.addEventListener('click', function () {
                changePieText(pie, legend);
            });
        }
        for (let piece of pieces) {
            piece.addEventListener('click', function () {
                changePieText(pie, piece);
            });
        }
    }
}
