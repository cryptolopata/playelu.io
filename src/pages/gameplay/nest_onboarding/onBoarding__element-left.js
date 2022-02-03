import React from 'react';
import OnBoardingTip from '../components/OnBoarding_tip';
import _ from 'lodash';
import UrlRescusive from '../../../components/UrlRecursive';


export default function OnBoardingElementLeft(props) {
  const {urlApi} = props;
  return (
    <UrlRescusive data={props}>
      <div className="onBoarding__element">
        <OnBoardingTip title="battle" tip={1} />
        <div className="onBoarding__element-content">
          <img
            className="onBoarding__element-img onBoarding__element-img e-img-left"
            src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupNest.battle}
            alt=""
          />
        </div>
      </div>
    </UrlRescusive>
  );
}
