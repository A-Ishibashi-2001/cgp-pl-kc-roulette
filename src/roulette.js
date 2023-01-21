import {  useState, useEffect, useCallback, memo } from "react";

function arrayShuffle(array) {
    for(var i = (array.length - 1); 0 < i; i--){

        // 0〜(i+1)の範囲で値を取得
        var r = Math.floor(Math.random() * (i + 1));

        // 要素の並び替えを実行
        var tmp = array[i];
        array[i] = array[r];
        array[r] = tmp;
    }
    return array;
}

export const OperationRoulette = memo(({operationElements}) => {
    const [start, setStart] = useState(false);
    const [index, setIndex] = useState(0);

    const rouletteContentsOrg = [
        "押す",
        "同時押し",
        "長押し",
        "押し込む",
        "スワイプ",
        "タップ",
        "フリック",
        "ピッチ",
        "スクロール",
        "スライド",
        "引く",
        "引っ張る",
        "放す",
        "連打",
        "握る",
        "こする",
        "ドラッグ",
        "クリック",
        "なぞる",
        "振る",
        "描く",
        "声",
        "手を叩く",
        "叩く",
        "つかむ",
        "つまむ",
        "投げる",
        "ねじる",
        "ひねる",
        "踏む",
        "廻す",
        "首を振る",
        "差し込む",
        "転がす",
        "ゆらす",
        "傾ける",
        "引金を引く",
        "ハンドル",
        "弾く",
        "コマンド入力",
        "レバガチャ"
    ];

    const rouletteContents = arrayShuffle(rouletteContentsOrg)

    //ボタンの文言を変更する処理
    const startRoulette = useCallback(() => {
        setStart(!start);
    }, [start]);

    //ルーレットを回す処理
    useEffect(() => {
        if (start) {
            const interval = setInterval(() => {
                setIndex((oldIndex) => {
                    if (oldIndex < rouletteContents.length - 1) return oldIndex + 1;
                    return 0;
                });
            }, 10);//ルーレットの中身を切り替える速度
            return () => clearInterval(interval);
        } else if (!start) {
            return () => clearInterval();
        }
    }, [start]);

    return (
        <>
            <div>
                <p>操作</p>
                <h2>{rouletteContents[index]}</h2>
            </div>
            <button type="button" onClick={startRoulette}>
                {start ? "ストップ" : "スタート"}
            </button>
        </>
    );
});






export const ActionsRoulette = memo(() => {
    const [start, setStart] = useState(false);
    const [index, setIndex] = useState(0);

    const rouletteContentsOrg = [
        "あおる",
        "開ける",
        "あげる",
        "集める",
        "あてる",
        "操る",
        "洗う",
        "合わせる",
        "入れ替える",
        "入れる",
        "浮く",
        "撃つ",
        "うつす",
        "奪う",
        "埋める",
        "えぐる",
        "選ぶ",
        "演奏する",
        "追いかける",
        "追い詰める",
        "置く",
        "押付ける",
        "押す",
        "落とす",
        "踊る",
        "覚える",
        "泳ぐ",
        "折る",
        "解体する",
        "描く",
        "隠れる",
        "囲む",
        "重ねる",
        "稼ぐ",
        "片づける",
        "固める",
        "被る",
        "噛みつく",
        "きる",
        "着せる",
        "くくる",
        "くぐる",
        "崩す",
        "砕く",
        "くっつける",
        "組立てる",
        "消す",
        "削る",
        "蹴る",
        "こする",
        "こねる",
        "転がす",
        "こわす",
        "再生する",
        "探す",
        "咲かせる",
        "叫ぶ",
        "さす",
        "さばく",
        "さわる",
        "沈める",
        "絞める",
        "閉める",
        "しゃがむ",
        "ジャンプ",
        "調べる",
        "吸い込む",
        "捨てる",
        "すべらす",
        "すべる",
        "ずらす",
        "座る",
        "背負う",
        "狭める",
        "操縦する",
        "育てる",
        "空を飛ぶ",
        "揃える",
        "出す",
        "叩きつける",
        "たたく",
        "ダッシュ",
        "建てる",
        "食べる",
        "垂らす",
        "散らかす",
        "捕まえる",
        "つかむ",
        "つくる",
        "つける",
        "つつく",
        "続ける",
        "包む",
        "つなぐ",
        "繋げる",
        "つぶす",
        "積上げる",
        "釣る",
        "照らす",
        "溶かす",
        "整える",
        "とぶ",
        "止める",
        "取り出す",
        "撮る",
        "なおす",
        "流す",
        "仲間にする",
        "眺める",
        "殴る",
        "投げる",
        "なでる",
        "なめる",
        "ならす",
        "並び替える",
        "並べる",
        "握る",
        "抜く",
        "脱ぐ",
        "盗む",
        "濡らす",
        "塗る",
        "寝る",
        "のぞく",
        "乗っ取る",
        "のばす",
        "のぼる",
        "飲む",
        "はがす",
        "計る",
        "吐き出す",
        "爆破する",
        "運ぶ",
        "はさむ",
        "弾く",
        "はじける",
        "走る",
        "はずす",
        "はずむ",
        "はなす",
        "放つ",
        "跳ね返す",
        "はねす",
        "はめる",
        "ばらす",
        "バランスを取る",
        "引き抜く",
        "引掛ける",
        "ひっくり返す",
        "引っ張る",
        "広げる",
        "吹き飛ばす",
        "ふく",
        "膨らませる",
        "膨らむ",
        "伏せる",
        "ぶつける",
        "踏む",
        "増やす",
        "振り回す",
        "分解する",
        "分類する",
        "分裂させる",
        "減らす",
        "ほどく",
        "掘る",
        "混ぜる",
        "真似る",
        "守る",
        "丸める",
        "まわす",
        "磨く",
        "見つける",
        "見る",
        "結ぶ",
        "めくる",
        "潜る",
        "戻す",
        "燃やす",
        "破る",
        "弓を射る",
        "揺らす",
        "よける",
        "汚す",
        "リズムを取る",
        "料理する",
        "連鎖させる",
        "ワープ",
        "罠にかける",
        "割る"
    ];

    const rouletteContents = arrayShuffle(rouletteContentsOrg)

    //ボタンの文言を変更する処理
    const startRoulette = useCallback(() => {
        setStart(!start);
    }, [start]);

    //ルーレットを回す処理
    useEffect(() => {
        if (start) {
            const interval = setInterval(() => {
                setIndex((oldIndex) => {
                    if (oldIndex < rouletteContents.length - 1) return oldIndex + 1;
                    return 0;
                });
            }, 10);//ルーレットの中身を切り替える速度
            return () => clearInterval(interval);
        } else if (!start) {
            return () => clearInterval();
        }
    }, [start]);

    return (
        <>
            <div>
                <p>行為</p>
                <h2>{rouletteContents[index]}</h2>
            </div>
            <button type="button" onClick={startRoulette}>
                {start ? "ストップ" : "スタート"}
            </button>
        </>
    );
});






export const EmotionsRoulette = memo(() => {
    const [start, setStart] = useState(false);
    const [index, setIndex] = useState(0);

    const rouletteContentsOrg = [
        "ハラハラ",
        "ドキドキ",
        "ビックリ",
        "怖い",
        "笑える",
        "ほっこり",
        "しんみり",
        "スッキリ",
        "ヒリヒリ",
        "スカッと",
        "ヒヤッと",
        "ワクワク",
        "ウキウキ",
        "イライラ",
        "萌え～",
        "モヤモヤ",
        "ホッとする",
        "カワイイ",
        "キモイ",
        "怒る",
        "ゾクゾク",
        "まったり",
        "あせる",
        "ソワソワ",
        "キュンキュン",
        "キタ～～",
        "ウハウハ",
        "ザワザワ",
        "俺強ぇ～",
        "ムラムラ",
        "気持悪い",
        "ほんわか",
        "切ない",
        "愛しい",
        "哀しい",
        "カッコイイ"
    ];

    const rouletteContents = arrayShuffle(rouletteContentsOrg)

    //ボタンの文言を変更する処理
    const startRoulette = useCallback(() => {
        setStart(!start);
    }, [start]);

    //ルーレットを回す処理
    useEffect(() => {
        if (start) {
            const interval = setInterval(() => {
                setIndex((oldIndex) => {
                    if (oldIndex < rouletteContents.length - 1) return oldIndex + 1;
                    return 0;
                });
            }, 10);//ルーレットの中身を切り替える速度
            return () => clearInterval(interval);
        } else if (!start) {
            return () => clearInterval();
        }
    }, [start]);

    return (
        <>
            <div>
                <p>感情</p>
                <h2>{rouletteContents[index]}</h2>
            </div>
            <button type="button" onClick={startRoulette}>
                {start ? "ストップ" : "スタート"}
            </button>
        </>
    );
});