import { LightningElement } from 'lwc';
import { bikes } from 'c/data';

export default class List extends LightningElement {
    bikes = bikes;
    // 処理④：カスタムイベント「productselected」を作成して、情報を渡す
    handleTileClick(evt) {
        // This component wants to emit a productselected event to its parent
        const event = new CustomEvent('productselected', {
            detail: evt.detail
        });
        // 処理④：カスタムイベントを実行する
        // Fire the event from c-list
        this.dispatchEvent(event);
    }
}
