import { LightningElement } from 'lwc';

export default class Selector extends LightningElement {
    selectedProductId;
    // 処理⑥：引数にあるイベント情報のdetailをもとに、selectedProductIdに反映させる
    handleProductSelected(evt) {
        this.selectedProductId = evt.detail;
    }
}
