/**
 * Define actions to manage tip section
 */
(function () {
  'use strict';

  function tipPanel() {
    const defaultTips = [

	"Dica: utilize as setas para mover um objeto selecionado em 1 pixel!",
	"Dica: Shift + Clique para selecionar e modificar múltiplos objetos!",
	"Dica: segure Shift ao rotacionar um objeto para saltos de ângulo de 15°!",
	"Dica: segure Shift ao desenhar uma linha para saltos de ângulo de 15°!",
	"Dica: Ctrl +/-, Ctrl + roda para dar zoom e sair do zoom!"
    ]
    const _self = this;
    $(`${this.containerSelector} .canvas-holder .content`).append(`
    <div id="tip-container">${defaultTips[parseInt(Math.random() * defaultTips.length)]}</div>`)
    this.hideTip = function () {
      $(`${_self.containerSelector} .canvas-holder .content #tip-container`).hide();
    }

    this.showTip = function () {
      $(`${_self.containerSelector} .canvas-holder .content #tip-container`).show();
    }

    this.updateTip = function (str) {
      typeof str === 'string' && $(`${_self.containerSelector} .canvas-holder .content #tip-container`).html(str);
    }
  }

  window.ImageEditor.prototype.initializeTipSection = tipPanel;
})();
