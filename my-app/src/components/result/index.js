import {React} from "react";

export default function ResultMedia(props){
    return(
        <view>
            <text>{props.messageResultMedia}</text>
            <text>{props.resultMedia}</text>
        </view>
    )
}