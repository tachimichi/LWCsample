import { LightningElement, api } from 'lwc';

export default class Tile extends LightningElement {
    @api product;

    tileClick() {
        // 処理②：カスタムイベントを作成して、情報保持する
        const event = new CustomEvent('tileclick', {
            // detail contains only primitives
            detail: this.product.fields.Id.value
        });
        // 処理②：イベント「ontileclick」を発火させる
        // Fire the event from c-tile
        this.dispatchEvent(event);
    }
}
